var e=require("fs"),t=require("path"),r=require("zokrates-js"),n=require("keccak256"),i=require("ethers"),o=require("seedrandom"),s=require("isomorphic-unfetch"),a=require("web3.storage"),u=require("@ipld/car/reader"),c=require("readable-stream"),l=require("multiformats/block"),p=require("multiformats/hashes/sha2"),y=require("multiformats/codecs/raw"),d=require("@ipld/dag-json"),m=require("@ipld/dag-cbor"),f=require("@ipld/car/writer"),h=require("merkletreejs"),v=require("crypto-js"),g=require("axios"),b=require("nanoid");function P(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function T(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,t}var w=/*#__PURE__*/T(e),A=/*#__PURE__*/P(n),k=/*#__PURE__*/P(o),M=/*#__PURE__*/P(s),S=/*#__PURE__*/T(l),x=/*#__PURE__*/T(y),E=/*#__PURE__*/T(d),j=/*#__PURE__*/T(m),D=/*#__PURE__*/P(v),C=/*#__PURE__*/P(g);class I{constructor(e){const t=this;this.nodeEndpoint=void 0,this.web3storageApiKey=void 0,this.factoryAddress=void 0,this.apikey=void 0,this.baseUrl=void 0,this.traceHubAddress=void 0,this.getFeeData=function(){try{return Promise.resolve(function(e,r){try{var n=Promise.resolve(t.getProvider()).then(function(e){return Promise.resolve(e.getFeeData()).then(function(e){return{maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,gasLimit:5e6}})})}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}(0,function(e){throw console.log(e.message),new Error("Error Getting Fee Data")}))}catch(e){return Promise.reject(e)}},this.nodeEndpoint=e.nodeEndpoint,this.baseUrl=e.baseUri,this.apikey=e.apikey,this.web3storageApiKey=e.web3storageApiKey,this.factoryAddress=e.factoryAddress,this.traceHubAddress=e.traceHubAddress}invoke(e,t){try{const r=`${this.baseUrl}${e}`,n={...t,headers:{"content-type":"application/json",apiKey:this.apikey}};return M.default(r,n).then(e=>{if(200===e.status)return e.json();throw new Error("call failed")})}catch(e){console.log(e.message)}}getWeb3StorageKey(){return this.web3storageApiKey}getProvider(){try{return Promise.resolve(new i.ethers.providers.JsonRpcProvider(this.nodeEndpoint))}catch(e){return Promise.reject(e)}}getFactoryAddress(){return this.factoryAddress}getTraceHubAddress(){return this.traceHubAddress}}function F(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}const O="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function _(e,t,r){if(!e.s){if(r instanceof R){if(!r.s)return void(r.o=_.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(_.bind(null,e,t),_.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}const R=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){const n=new e,i=this.s;if(i){const e=1&i?t:r;if(e){try{_(n,1,e(this.v))}catch(e){_(n,2,e)}return n}return this}return this.o=function(e){try{const i=e.v;1&e.s?_(n,1,t?t(i):i):r?_(n,1,r(i)):_(n,2,i)}catch(e){_(n,2,e)}},n},e}();function H(e){return e instanceof R&&1&e.s}function N(e,t,r){if("function"==typeof e[O]){var n,i,o,s=e[O]();if(function e(a){try{for(;!((n=s.next()).done||r&&r());)if((a=t(n.value))&&a.then){if(!H(a))return void a.then(e,o||(o=_.bind(null,i=new R,2)));a=a.v}i?_(i,1,a):i=a}catch(e){_(i||(i=new R),2,e)}}(),s.return){var a=function(e){try{n.done||s.return()}catch(e){}return e};if(i&&i.then)return i.then(a,function(e){throw a(e)});a()}return i}if(!("length"in e))throw new TypeError("Object is not iterable");for(var u=[],c=0;c<e.length;c++)u.push(e[c]);return function(e,t,r){var n,i,o=-1;return function s(a){try{for(;++o<e.length&&(!r||!r());)if((a=t(o))&&a.then){if(!H(a))return void a.then(s,i||(i=_.bind(null,n=new R,2)));a=a.v}n?_(n,1,a):n=a}catch(e){_(n||(n=new R),2,e)}}(),n}(u,function(e){return t(u[e])},r)}const B="undefined"!=typeof Symbol?Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")):"@@asyncIterator";class K extends I{constructor(){super(...arguments);const e=this,t=this,r=this,n=this,i=this,o=this,s=this,l=this;this.initilizeWeb3Storage=function(){try{try{const e=new a.Web3Storage({token:l.getWeb3StorageKey()});return Promise.resolve(e)}catch(e){throw console.error(e),new Error("Failed to initilize web3Storage")}}catch(e){return Promise.reject(e)}},this.uploadCarToIPFS=function(e){try{return Promise.resolve(F(function(){return Promise.resolve(s.initilizeWeb3Storage()).then(function(t){const r=w.createReadStream(`./cars/${e}.car`);return Promise.resolve(u.CarReader.fromIterable(r)).then(function(r){return Promise.resolve(t.putCar(r,{name:`${e}.car`,decoders:[j]})).then(function(t){return w.unlinkSync(`./cars/${e}.car`),t})})})},function(e){throw console.error(e.message),new Error("Upload trace details failed")}))}catch(e){return Promise.reject(e)}},this.readData=function(e){try{let t;return Promise.resolve(F(function(){return Promise.resolve(C.default.get(`https://ipfs.io/api/v0/dag/get/${e}`).then(e=>{t=e.data.data}).catch(e=>{throw new Error(e.message)})).then(function(){return t})},function(e){throw console.error(e.message),new Error("read trace data failed")}))}catch(e){return Promise.reject(e)}},this.utf8Encoder=new TextEncoder,this.utf8Decoder=new TextDecoder,this.createBlock=function(e){try{const t=[];return Promise.resolve(F(function(){return Promise.resolve(S.encode({value:{data:e},hasher:p.sha256,codec:j})).then(function(e){return t.push(e),{blocks:t,roots:[e.cid]}})},function(e){throw console.error(e),new Error("IPLD block creation failed")}))}catch(e){return Promise.reject(e)}},this.write=function(e,t,r){try{return Promise.resolve(F(function(){w.existsSync("./cars")||w.mkdirSync("./cars");const{writer:n,out:i}=f.CarWriter.create(e);c.Readable.from(i).pipe(w.createWriteStream(`cars/${r}.car`));const o=N(t,function(e){return Promise.resolve(n.put(e)).then(function(){return Promise.resolve(n.close()).then(function(){})})});return o&&o.then?o.then(function(){return i}):i},function(e){throw console.error(e.message),new Error("Writing IPLD block failed")}))}catch(e){return Promise.reject(e)}},this.readCar=function(e){try{const t={[x.code]:x,[E.code]:E,[j.code]:j},r={[p.sha256.code]:p.sha256};return Promise.resolve(F(function(){const n=w.createReadStream(e);return Promise.resolve(u.CarReader.fromIterable(n)).then(function(e){function n(){return{blockCid:a,data:s}}const i=[];let s,a;const u=function(e,t,r){if("function"==typeof e[B]){var n=new R,i=e[B]();return i.next().then(s).then(void 0,a),n;function o(e){if(r&&r())return _(n,1,i.return?i.return().then(function(){return e}):e);i.next().then(s).then(void 0,a)}function s(e){e.done?_(n,1):Promise.resolve(t(e.value)).then(o).then(void 0,a)}function a(e){_(n,2,i.return?i.return().then(function(){return e}):e)}}return Promise.resolve(N(e,function(e){return Promise.resolve(e).then(t)},r))}(e.blocks(),function(e){let{cid:n,bytes:u}=e;return Promise.resolve(S.create({cid:n,bytes:u,codec:t[n.code],hasher:r[n.multihash.code]})).then(function(e){i.push(e);const t=e.value instanceof Uint8Array?o.utf8Decoder.decode(e.value):e.value,r=JSON.parse(JSON.stringify(t.data));s=r,a=n.toString()})});return u&&u.then?u.then(n):n()})},function(e){throw console.error(e.message),new Error("Read Car File Failed")}))}catch(e){return Promise.reject(e)}},this.updatPreviousBlockCid=(e,t)=>{try{let r=e;return r.previousBlockCid=t,r}catch(e){throw console.error(e.message),new Error("Failed to update previous block ID")}},this.updateCar1=function(e,t,r){try{let n;return Promise.resolve(F(function(){const o=i.updatPreviousBlockCid(e,r);return Promise.resolve(i.createBlock(o)).then(function(e){let{blocks:r,roots:o}=e;return Promise.resolve(i.write(o,r,t)).then(function(){return Promise.resolve(i.uploadCarToIPFS(t)).then(function(e){return n=e,n})})})},function(e){throw console.error(e.message),new Error("Car File Update Failed")}))}catch(e){return Promise.reject(e)}},this.writeCar=function(e,t){try{let r;return Promise.resolve(F(function(){return Promise.resolve(n.createBlock(e)).then(function(e){let{blocks:i,roots:o}=e;return Promise.resolve(n.write(o,i,t)).then(function(){return Promise.resolve(n.uploadCarToIPFS(t)).then(function(e){return r=e,{message:"ok",cid:r}})})})},function(e){throw console.error(e.message),new Error("Error Creating Car File")}))}catch(e){return Promise.reject(e)}},this.buff2Hex=e=>"0x"+e.toString("hex"),this.getMerkelTree=function(e){try{try{const t=e.map(e=>r.buff2Hex(A.default(e))),n=new h.MerkleTree(t,A.default,{sortPairs:!0}),i=r.buff2Hex(n.getRoot());return Promise.resolve({tree:n,root:i})}catch(e){throw console.error(e.message),new Error("getMerkelTree Failed")}}catch(e){return Promise.reject(e)}},this.getleave=e=>this.buff2Hex(A.default(e)),this.verifyMerkelProof=function(e,r,n){try{return Promise.resolve(F(function(){return Promise.resolve(t.getMerkelTree(n)).then(function(n){let{tree:i,root:o}=n;const s=t.getleave(r);return i.verify(e,s,o)})},function(e){throw console.error(e.message),new Error("merkel Proof Verification failed")}))}catch(e){return Promise.reject(e)}},this.createProof=function(t,r){try{return Promise.resolve(F(function(){const n=e.getleave(t);return Promise.resolve(e.getMerkelProof1(n,r))},function(e){throw console.error(e.message),new Error("Error Creating Proof")}))}catch(e){return Promise.reject(e)}}}readCid(e){try{return Promise.resolve(this.invoke(`storage/readData/${e}`))}catch(e){return Promise.reject(e)}}readCarData(e){try{return Promise.resolve(this.invoke(`storage/createCar/${e}`))}catch(e){return Promise.reject(e)}}createCar(e,t){try{return Promise.resolve(this.invoke(`storage/createCar/${t}`,{method:"POST",body:JSON.stringify(e)}))}catch(e){return Promise.reject(e)}}uploadCar(e){try{return Promise.resolve(this.invoke(`storage/uploadCar/${e}`,{method:"POST"}))}catch(e){return Promise.reject(e)}}updateCar(e,t){try{return Promise.resolve(this.invoke(`storage/createCar/${t}`,{method:"PUT",body:JSON.stringify(e)}))}catch(e){return Promise.reject(e)}}getMerkelProof(e,t){try{return Promise.resolve(this.invoke(`storage/getMerkelProof/${e}/${t}`,{method:"GET"}))}catch(e){return Promise.reject(e)}}getMerkelProof1(e,t){try{const r=this;return Promise.resolve(F(function(){return Promise.resolve(r.getMerkelTree(t)).then(function(t){let{tree:r}=t;return r.getHexProof(e)})},function(e){throw console.error(e.message),new Error("Failed to get merkel proof")}))}catch(e){return Promise.reject(e)}}encryptData(e,t){try{const r=D.default.AES.encrypt(JSON.stringify(e),t).toString();return Promise.resolve(r)}catch(e){return Promise.reject(e)}}decryptData(e,t){try{const r=this;return Promise.resolve(F(function(){return Promise.resolve(r.readData(e)).then(function(e){const r=D.default.AES.decrypt(e.encryptedData,t);return JSON.parse(r.toString(D.default.enc.Utf8))})},function(e){throw console.log(e.message),new Error("Error Decrypting Data")}))}catch(e){return Promise.reject(e)}}}function U(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}class q extends K{constructor(){super(...arguments),this.rootFromPath="../circuit",this.rootToPath="sdk/circuit/root.zok"}randomNumber(e){try{try{let t=[];for(let r=0;r<4;r++){const r=k.default(e,{entropy:!0});t.push(Math.abs(r.int32()).toString())}return Promise.resolve(t)}catch(e){console.error(e)}return Promise.resolve()}catch(e){return Promise.reject(e)}}getNullifier(e){try{try{const t=k.default(e,{entropy:!1});return Promise.resolve(Math.abs(t.int32()))}catch(e){console.error(e)}return Promise.resolve()}catch(e){return Promise.reject(e)}}fileSystemResolver(r,n){try{try{const i=t.resolve(t.dirname(t.resolve(r)),n),o=e.readFileSync(i).toString();return Promise.resolve(o)}catch(e){console.error(e)}return Promise.resolve()}catch(e){return Promise.reject(e)}}getSource(e,t){try{const r=this;return Promise.resolve(U(function(){return Promise.resolve(r.fileSystemResolver(e,t))},function(e){console.error(e)}))}catch(e){return Promise.reject(e)}}getZokrateProvider(){try{return Promise.resolve(U(r.initialize,function(e){console.error(e)}))}catch(e){return Promise.reject(e)}}getArtifacts(e){try{const t=this;return Promise.resolve(U(function(){return Promise.resolve(t.getZokrateProvider()).then(function(t){return t.compile(e)})},function(e){throw console.error(e.message),new Error("Error Getting Artifacts")}))}catch(e){return Promise.reject(e)}}getPreImage(e){try{const t=this;return Promise.resolve(U(function(){return Promise.resolve(t.randomNumber(e)).then(function(e){return Promise.resolve(t.getZokrateProvider()).then(function(r){return Promise.resolve(t.getSource("../circuit","sdk/circuit/preImage.zok")).then(function(n){return Promise.resolve(t.getArtifacts(n)).then(function(t){const{output:n}=r.computeWitness(t,e);return{params:e,preImage:JSON.parse(n)}})})})})},function(e){throw console.error(e.message),new Error("ZK preImage Error")}))}catch(e){return Promise.reject(e)}}generateZkProof(e,t){try{const r=this;return Promise.resolve(U(function(){const n=i.ethers.utils.defaultAbiCoder;return Promise.resolve(r.getProvider()).then(function(i){const o=t.params,s=t.preImage,a=parseInt(Math.round((new Date).getTime()/1e3).toString());return Promise.resolve(r.getNullifier(e)).then(function(t){return Promise.resolve(r.getZokrateProvider()).then(function(u){return Promise.resolve(r.getSource(r.rootFromPath,r.rootToPath)).then(function(c){return Promise.resolve(r.getArtifacts(c)).then(function(c){return Promise.resolve(i.getBlockNumber()).then(function(i){const l=r.buff2Hex(A.default(n.encode(["uint","uint","uint","string"],[t,a,i,e]))),p=[...o,...s],{witness:y}=u.computeWitness(c,p),d=u.setup(c.program),m=u.generateProof(c.program,y,d.pk),f=d.vk;return{message:"ok",details:{proofBuffer:JSON.stringify(m),verifierKeyBuffer:JSON.stringify(f),nullifier:l}}})})})})})})},function(e){throw console.error(e.message),new Error("Generate zk proof error")}))}catch(e){return Promise.reject(e)}}verifyZkProof(e){try{const t=this;return Promise.resolve(U(function(){const r=e.verifierKeyBuffer,n=JSON.parse(e.proofBuffer),i=JSON.parse(r);return Promise.resolve(t.getZokrateProvider()).then(function(e){const t=e.verify(i,n);return t?{message:"Ok",isVerified:t}:{message:"invalid Proof Provided",isVerified:t}})},function(e){throw console.error(e.message),new Error("Verify Zk Proof error")}))}catch(e){return Promise.reject(e)}}}const z=[{inputs:[{internalType:"address",name:"_traceHub",type:"address"},{internalType:"address",name:"_traceAgreementImplementation",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"time",type:"uint256"},{indexed:!0,internalType:"address",name:"agreementAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"AgreementCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"createInvoice",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"agreementAddress",type:"address"}],name:"getAgreementDetais",outputs:[{components:[{internalType:"bytes32",name:"verifierRoot",type:"bytes32"},{internalType:"bytes32[]",name:"nullifiers",type:"bytes32[]"},{internalType:"string",name:"agreementUri",type:"string"},{internalType:"uint256",name:"agreementId",type:"uint256"}],internalType:"struct TraceAgreementFactory.TraceAgreementDetails",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getFactoryAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"agreementAddress",type:"address"}],name:"getId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getTraceAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_verifierRoot",type:"bytes32"},{internalType:"bytes32[]",name:"_nullifiers",type:"bytes32[]"},{internalType:"string",name:"agreementUri",type:"string"},{internalType:"address",name:"_traceAgreement",type:"address"},{internalType:"string",name:"enKey",type:"string"}],name:"initilizeAgreement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"traceAdmin",type:"address"},{internalType:"address",name:"_supplier",type:"address"},{internalType:"uint256",name:"dataAvailiblity",type:"uint256"}],name:"newTraceAgreement",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"traceHub",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],Z=[{inputs:[{internalType:"address",name:"hubAdmin",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newDefaultAdmin",type:"address"}],name:"DeafultAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bool",name:"accepted",type:"bool"}],name:"ProposalAccepted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"HUB_ADMIN",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"traceAddress",type:"address"}],name:"acceptProposal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_traceFactory",type:"address"}],name:"addFactory",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newDeafultAdmin",type:"address"}],name:"changeDeafultAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"checkDeafultAdmin",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"hubAdmin",type:"address"}],name:"checkHubAdmin",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"traceAddress",type:"address"},{internalType:"bytes32",name:"nullifier",type:"bytes32"}],name:"checkNullExist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"}],name:"checkNullLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"},{internalType:"bytes32",name:"_nullifier",type:"bytes32"}],name:"checkNullifier",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"traceAddress",type:"address"}],name:"checkSupplierApproved",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"}],name:"getAgreementDetails",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"}],name:"getAgreementId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAgreementLog",outputs:[{components:[{internalType:"address",name:"traceAgreementContract",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"createdAt",type:"uint256"},{internalType:"string",name:"uri",type:"string"},{internalType:"bytes32[]",name:"nullifiers",type:"bytes32[]"},{internalType:"string",name:"encryptionKey",type:"string"}],internalType:"struct TraceHub.Agreement[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"}],name:"getAgreementUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"}],name:"getEncryptionKey",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getTraceAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"hubAdmin",type:"address"}],name:"grantAdminRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"traceAddress",type:"address"},{internalType:"bytes32",name:"nullifier",type:"bytes32"}],name:"initiateAgreement",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"removeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"},{internalType:"string",name:"agreementUri",type:"string"},{internalType:"bytes32[]",name:"_nullifiers",type:"bytes32[]"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"enKey",type:"string"}],name:"updatAgreementLog",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"},{internalType:"string",name:"agreementUri",type:"string"}],name:"updatAgreementUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_traceAgreement",type:"address"},{internalType:"bytes32",name:"_nullifier",type:"bytes32"}],name:"updateNullifier",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"traceAddress",type:"address"},{internalType:"bytes32",name:"nullifier",type:"bytes32"}],name:"zkProof",outputs:[],stateMutability:"nonpayable",type:"function"}],J=[{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"signCount",type:"uint256"},{indexed:!0,internalType:"bool",name:"verified",type:"bool"}],name:"Verified",type:"event"},{inputs:[],name:"activate",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_traceAdmin",type:"address"},{internalType:"address",name:"_supplier",type:"address"},{internalType:"address",name:"_factoryAddress",type:"address"},{internalType:"address",name:"_traceHub",type:"address"},{internalType:"uint256",name:"_dataAvailibality",type:"uint256"}],name:"addTraceAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"checkIsInitilized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkState",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAgreementId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAgreementUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDataAvailibality",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEncryptionKey",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"getSupplier",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTraceAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_verifierRoot",type:"bytes32"},{internalType:"bytes32[]",name:"_nullifiers",type:"bytes32[]"},{internalType:"string",name:"_agreementUri",type:"string"},{internalType:"string",name:"enKey",type:"string"}],name:"initilize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"status",outputs:[{internalType:"enum TraceAgreement.AgreementStatus",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"traceHub",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_agreementUri",type:"string"}],name:"updateAgreementUri",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32[]",name:"_proof",type:"bytes32[]"},{internalType:"bytes32",name:"nullifier",type:"bytes32"},{internalType:"bytes32",name:"leaf",type:"bytes32"}],name:"verifyByOrder",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}];function $(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}function W(e,t,r){if(!e.s){if(r instanceof G){if(!r.s)return void(r.o=W.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(W.bind(null,e,t),W.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}const G=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){const n=new e,i=this.s;if(i){const e=1&i?t:r;if(e){try{W(n,1,e(this.v))}catch(e){W(n,2,e)}return n}return this}return this.o=function(e){try{const i=e.v;1&e.s?W(n,1,t?t(i):i):r?W(n,1,r(i)):W(n,2,i)}catch(e){W(n,2,e)}},n},e}();class V extends q{createTraceAgreement(e,t,r,n){try{const o=this;return Promise.resolve($(function(){return Promise.resolve(o.getFeeData()).then(function(s){const a=new i.ethers.Contract(o.getFactoryAddress(),z,n);let u=[];return Promise.resolve(a.newTraceAgreement(e,t,r,s)).then(function(e){return Promise.resolve(e.wait()).then(function(e){if(1==e.status){for(let t of e.events)u.push(t.event);return Promise.resolve(e.events[0].args.agreementAddress).then(function(t){return Promise.resolve(e.events[0].args.id).then(function(r){return{message:"ok",transactionHash:e.transactionHash,details:{agreementAddress:t,agreementId:r.toString()}}})})}console.log("Creation Failed")})})})},function(e){throw console.error(e.message),new Error("Create Trace Agreement failed")}))}catch(e){return Promise.reject(e)}}acceptProposal(e,t){try{const r=this;return Promise.resolve($(function(){return Promise.resolve(r.getFeeData()).then(function(n){let o=[];const s=new i.ethers.Contract(r.getTraceHubAddress(),Z,t);return Promise.resolve(s.acceptProposal(e,n)).then(function(e){return Promise.resolve(e.wait()).then(function(e){if(1==e.status){for(let t of e.events)o.push(t.event);return Promise.resolve(e.events[0].args.accepted)}console.log("verification failed")})})})},function(e){throw console.error(e.message),new Error("Accept proposal error")}))}catch(e){return Promise.reject(e)}}initilizeAgreement(e,t,r,n){try{const o=this;return Promise.resolve($(function(){return Promise.resolve(o.getFeeData()).then(function(s){const a=[],u=i.ethers.utils.defaultAbiCoder;return Promise.resolve(o.getProvider()).then(function(c){const l=parseInt(Math.round((new Date).getTime()/1e3).toString());return Promise.resolve(c.getBlockNumber()).then(function(c){let p;const y=new i.ethers.Contract(t,J,n);return Promise.resolve(y.checkIsInitilized()).then(function(n){return 1==n?(console.log("Trace Agreement already initilized"),void(p=1)):Promise.resolve(y.getDataAvailibality()).then(function(n){return Promise.resolve(o.getVerifiersDetails(e)).then(function(i){const p=i.details,d=o.buff2Hex(A.default(u.encode(["uint","uint"],[l,c]))),m=b.customAlphabet(d,32)();let f;return"1"===n.toString()?f=m:"2"===n.toString()&&(f=""),f=m,Promise.resolve(o.getPreImage(t)).then(function(n){const i=u.encode(["string"],[JSON.stringify(n)]);return Promise.resolve(o.encryptData({traceAddress:t,verifiersRoot:p.verifiersRoot,verifiers:e,txDetails:r,previousBlockCid:""},m)).then(function(r){return Promise.resolve(o.writeCar({encryptedData:r},t)).then(function(t){return Promise.resolve(y.initilize(p.verifiersRoot,p.nullifiers,t.cid,f,s)).then(function(r){return Promise.resolve(r.wait()).then(function(r){if(1==r.status){for(let t=0;t<e.length;t++)a.push({verifier:e[t],nullifier:p.nullifiers[t]});return{message:"ok",transactionHash:r.transactionHash,verificationDetails:a,packedProofDetails:i,encryptionKey:m,cid:t.cid}}console.log("initilization failed")})})})})})})})})})})})},function(e){throw console.error(e.message),new Error("Error Initilizing Agreement")}))}catch(e){return Promise.reject(e)}}createZkProof(e,t,r){try{const n=this;return Promise.resolve($(function(){return Promise.resolve(n.getFeeData()).then(function(o){const s=i.ethers.utils.defaultAbiCoder.decode(["string"],t),a=JSON.parse(s[0]);return Promise.resolve(n.generateZkProof(e,a)).then(function(t){const s=new i.ethers.Contract(n.getTraceHubAddress(),Z,r);return Promise.resolve(s.checkSupplierApproved(e)).then(function(r){if(r)return Promise.resolve(s.zkProof(e,t.details.nullifier,o)).then(function(e){return Promise.resolve(e.wait()).then(function(e){if(1==e.status)return t.details;console.log("verification failed")})});console.log("Supplier has not approved")})})})},function(e){throw console.error(e.message),new Error("create ZK proof error")}))}catch(e){return Promise.reject(e)}}activateTraceAgreement(e,t,r){try{const n=this;return Promise.resolve($(function(){return Promise.resolve(n.getFeeData()).then(function(o){const s=new i.ethers.Contract(n.getTraceHubAddress(),Z,r);return Promise.resolve(s.checkNullExist(e,t.nullifier)).then(function(r){if(r)return Promise.resolve(n.verifyZkProof({proofBuffer:t.proofBuffer,verifierKeyBuffer:t.verifierKeyBuffer})).then(function(r){if("Ok"==r.message)return Promise.resolve(s.initiateAgreement(e,t.nullifier,o)).then(function(e){return Promise.resolve(e.wait()).then(function(e){if(1==e.status)return{message:"ok",transactionHash:e.transactionHash};console.log("failed to initiate")})});console.log("Invalid ZK Proof Provided")});console.log("Invalid Nullifier")})})},function(e){throw console.error(e.message),new Error("Trace agreement activation error")}))}catch(e){return Promise.reject(e)}}verifyByOrder(e,t,r,n){try{const o=this;return Promise.resolve($(function(){return Promise.resolve(o.getFeeData()).then(function(s){const a=new i.ethers.Contract(e,J,n);return Promise.resolve(a.getAgreementUri()).then(function(e){return Promise.resolve(o.decryptData(e,r)).then(function(e){return Promise.resolve(o.createProof(n.address,e.verifiers)).then(function(e){const r=o.getleave(n.address);let i=[];return Promise.resolve(a.verifyByOrder(e,t,r,s)).then(function(e){return Promise.resolve(e.wait()).then(function(e){if(1==e.status){for(let t of e.events)i.push(t.event);return Promise.resolve(e.events[0].args.signCount).then(function(t){return Promise.resolve(e.events[0].args.verified).then(function(e){return{message:"ok",details:{verifiedCount:t,verified:e}}})})}console.log("verification failed")})})})})})})},function(e){throw console.error(e.message),new Error("ZKTrace Verification Error")}))}catch(e){return Promise.reject(e)}}getVerifiersDetails(e){try{const t=this;return Promise.resolve($(function(){let r=[];const n=i.ethers.utils.defaultAbiCoder;return Promise.resolve(t.getMerkelTree(e)).then(function(i){let{root:o}=i;const s=parseInt(Math.round((new Date).getTime()/1e3).toString());return e.forEach(function(e){try{return Promise.resolve(t.getNullifier(e)).then(function(e){r.push(t.buff2Hex(A.default(n.encode(["uint","uint"],[e,s]))))})}catch(e){return Promise.reject(e)}}),{message:"ok",details:{verifiersRoot:o,nullifiers:r}}})},function(e){throw console.error(e.message),new Error("get verifier details error")}))}catch(e){return Promise.reject(e)}}encryptionDetails(e){try{const t=this;return Promise.resolve($(function(){return Promise.resolve(t.getProvider()).then(function(t){const r=new i.ethers.Contract(e,J,t);return Promise.resolve(r.getEncryptionKey()).then(function(e){return Promise.resolve(r.getAgreementUri()).then(function(t){return{encryptionKey:e,cid:t}})})})},function(e){console.error(e.message)}))}catch(e){return Promise.reject(e)}}getVerifiersProof(e){try{const t=this;return Promise.resolve($(function(){const r=[],n=(i=e,o=function(n){return Promise.resolve(t.createProof(e[n],e)).then(function(t){const i=e[n];return Promise.resolve(t).then(function(e){r.push({verifier:i,merkelProof:e})})})},u=-1,function e(t){try{for(;++u<i.length;)if((t=o(u))&&t.then){if(!((r=t)instanceof G&&1&r.s))return void t.then(e,a||(a=W.bind(null,s=new G,2)));t=t.v}s?W(s,1,t):s=t}catch(e){W(s||(s=new G),2,e)}var r}(),s);var i,o,s,a,u;return n&&n.then?n.then(function(){return r}):r},function(e){throw console.error(e.message),new Error("get verifier proof error")}))}catch(e){return Promise.reject(e)}}}class L extends V{}var Q;Q=L,[V].forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(t=>{Object.defineProperty(Q.prototype,t,Object.getOwnPropertyDescriptor(e.prototype,t)||Object.create(null))})}),module.exports=L;