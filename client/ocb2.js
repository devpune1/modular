  1 /** @fileOverview OCB 2.0 implementation
  2  *
  3  * @author Emily Stark
  4  * @author Mike Hamburg
  5  * @author Dan Boneh
  6  */
  7 
  8 /** @namespace
  9  * Phil Rogaway's Offset CodeBook mode, version 2.0.
 10  * May be covered by US and international patents.
 11  *
 12  * @author Emily Stark
 13  * @author Mike Hamburg
 14  * @author Dan Boneh
 15  */
 16 sjcl.mode.ocb2 = {
 17   /** The name of the mode.
 18    * @constant
 19    */
 20   name: "ocb2",
 21   
 22   /** Encrypt in OCB mode, version 2.0.
 23    * @param {Object} prp The block cipher.  It must have a block size of 16 bytes.
 24    * @param {bitArray} plaintext The plaintext data.
 25    * @param {bitArray} iv The initialization value.
 26    * @param {bitArray} [adata=[]] The authenticated data.
 27    * @param {Number} [tlen=64] the desired tag length, in bits.
 28    * @param [false] premac 1 if the authentication data is pre-macced with PMAC.
 29    * @return The encrypted data, an array of bytes.
 30    * @throws {sjcl.exception.invalid} if the IV isn't exactly 128 bits.
 31    */
 32   encrypt: function(prp, plaintext, iv, adata, tlen, premac) {
 33     if (sjcl.bitArray.bitLength(iv) !== 128) {
 34       throw new sjcl.exception.invalid("ocb iv must be 128 bits");
 35     }
 36     var i,
 37         times2 = sjcl.mode.ocb2._times2,
 38         w = sjcl.bitArray,
 39         xor = w._xor4,
 40         checksum = [0,0,0,0],
 41         delta = times2(prp.encrypt(iv)),
 42         bi, bl,
 43         output = [],
 44         pad;
 45         
 46     adata = adata || [];
 47     tlen  = tlen || 64;
 48   
 49     for (i=0; i+4 < plaintext.length; i+=4) {
 50       /* Encrypt a non-final block */
 51       bi = plaintext.slice(i,i+4);
 52       checksum = xor(checksum, bi);
 53       output = output.concat(xor(delta,prp.encrypt(xor(delta, bi))));
 54       delta = times2(delta);
 55     }
 56     
 57     /* Chop out the final block */
 58     bi = plaintext.slice(i);
 59     bl = w.bitLength(bi);
 60     pad = prp.encrypt(xor(delta,[0,0,0,bl]));
 61     bi = w.clamp(xor(bi.concat([0,0,0]),pad), bl);
 62     
 63     /* Checksum the final block, and finalize the checksum */
 64     checksum = xor(checksum,xor(bi.concat([0,0,0]),pad));
 65     checksum = prp.encrypt(xor(checksum,xor(delta,times2(delta))));
 66     
 67     /* MAC the header */
 68     if (adata.length) {
 69       checksum = xor(checksum, premac ? adata : sjcl.mode.ocb2.pmac(prp, adata));
 70     }
 71     
 72     return output.concat(w.concat(bi, w.clamp(checksum, tlen)));
 73   },
 74   
 75   /** Decrypt in OCB mode.
 76    * @param {Object} prp The block cipher.  It must have a block size of 16 bytes.
 77    * @param {bitArray} ciphertext The ciphertext data.
 78    * @param {bitArray} iv The initialization value.
 79    * @param {bitArray} [adata=[]] The authenticated data.
 80    * @param {Number} [tlen=64] the desired tag length, in bits.
 81    * @param {boolean} [premac=false] true if the authentication data is pre-macced with PMAC.
 82    * @return The decrypted data, an array of bytes.
 83    * @throws {sjcl.exception.invalid} if the IV isn't exactly 128 bits.
 84    * @throws {sjcl.exception.corrupt} if if the message is corrupt.
 85    */
 86   decrypt: function(prp, ciphertext, iv, adata, tlen, premac) {
 87     if (sjcl.bitArray.bitLength(iv) !== 128) {
 88       throw new sjcl.exception.invalid("ocb iv must be 128 bits");
 89     }
 90     tlen  = tlen || 64;
 91     var i,
 92         times2 = sjcl.mode.ocb2._times2,
 93         w = sjcl.bitArray,
 94         xor = w._xor4,
 95         checksum = [0,0,0,0],
 96         delta = times2(prp.encrypt(iv)),
 97         bi, bl,
 98         len = sjcl.bitArray.bitLength(ciphertext) - tlen,
 99         output = [],
100         pad;
101         
102     adata = adata || [];
103   
104     for (i=0; i+4 < len/32; i+=4) {
105       /* Decrypt a non-final block */
106       bi = xor(delta, prp.decrypt(xor(delta, ciphertext.slice(i,i+4))));
107       checksum = xor(checksum, bi);
108       output = output.concat(bi);
109       delta = times2(delta);
110     }
111     
112     /* Chop out and decrypt the final block */
113     bl = len-i*32;
114     pad = prp.encrypt(xor(delta,[0,0,0,bl]));
115     bi = xor(pad, w.clamp(ciphertext.slice(i),bl).concat([0,0,0]));
116     
117     /* Checksum the final block, and finalize the checksum */
118     checksum = xor(checksum, bi);
119     checksum = prp.encrypt(xor(checksum, xor(delta, times2(delta))));
120     
121     /* MAC the header */
122     if (adata.length) {
123       checksum = xor(checksum, premac ? adata : sjcl.mode.ocb2.pmac(prp, adata));
124     }
125     
126     if (!w.equal(w.clamp(checksum, tlen), w.bitSlice(ciphertext, len))) {
127       throw new sjcl.exception.corrupt("ocb: tag doesn't match");
128     }
129     
130     return output.concat(w.clamp(bi,bl));
131   },
132   
133   /** PMAC authentication for OCB associated data.
134    * @param {Object} prp The block cipher.  It must have a block size of 16 bytes.
135    * @param {bitArray} adata The authenticated data.
136    */
137   pmac: function(prp, adata) {
138     var i,
139         times2 = sjcl.mode.ocb2._times2,
140         w = sjcl.bitArray,
141         xor = w._xor4,
142         checksum = [0,0,0,0],
143         delta = prp.encrypt([0,0,0,0]),
144         bi;
145         
146     delta = xor(delta,times2(times2(delta)));
147  
148     for (i=0; i+4<adata.length; i+=4) {
149       delta = times2(delta);
150       checksum = xor(checksum, prp.encrypt(xor(delta, adata.slice(i,i+4))));
151     }
152     
153     bi = adata.slice(i);
154     if (w.bitLength(bi) < 128) {
155       delta = xor(delta,times2(delta));
156       bi = w.concat(bi,[0x80000000|0,0,0,0]);
157     }
158     checksum = xor(checksum, bi);
159     return prp.encrypt(xor(times2(xor(delta,times2(delta))), checksum));
160   },
161   
162   /** Double a block of words, OCB style.
163    * @private
164    */
165   _times2: function(x) {
166     return [x[0]<<1 ^ x[1]>>>31,
167             x[1]<<1 ^ x[2]>>>31,
168             x[2]<<1 ^ x[3]>>>31,
169             x[3]<<1 ^ (x[0]>>>31)*0x87];
170   }
171 };
172 