import{L as W,M as q,t as C,v as U,N,O as se,x as d,y as F,P as Q,Q as c,R as I,S as ae,T as D,r as v,U as ee,V as oe,W as re,X as ie,Y as le,Z as ue,G as ce,$ as J,m as de,a0 as fe,K as pe,a1 as he,c as me,a2 as ye,a3 as ge,a4 as O,a5 as j,a6 as H,z as x,a7 as T,a8 as ve}from"./DrqtNuZ1.js";const X=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function _e(n,s){s?s={...X,...s}:s=X;const a=te(s);return a.dispatch(n),a.toString()}const be=Object.freeze(["prototype","__proto__","constructor"]);function te(n){let s="",a=new Map;const t=e=>{s+=e};return{toString(){return s},getContext(){return a},dispatch(e){return n.replacer&&(e=n.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const o=Object.prototype.toString.call(e);let r="";const g=o.length;g<10?r="unknown:["+o+"]":r=o.slice(8,g-1),r=r.toLowerCase();let f=null;if((f=a.get(e))===void 0)a.set(e,a.size);else return this.dispatch("[CIRCULAR:"+f+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(r!=="object"&&r!=="function"&&r!=="asyncfunction")this[r]?this[r](e):n.ignoreUnknown||this.unkown(e,r);else{let m=Object.keys(e);n.unorderedObjects&&(m=m.sort());let i=[];n.respectType!==!1&&!Y(e)&&(i=be),n.excludeKeys&&(m=m.filter(l=>!n.excludeKeys(l)),i=i.filter(l=>!n.excludeKeys(l))),t("object:"+(m.length+i.length)+":");const w=l=>{this.dispatch(l),t(":"),n.excludeValues||this.dispatch(e[l]),t(",")};for(const l of m)w(l);for(const l of i)w(l)}},array(e,o){if(o=o===void 0?n.unorderedArrays!==!1:o,t("array:"+e.length+":"),!o||e.length<=1){for(const f of e)this.dispatch(f);return}const r=new Map,g=e.map(f=>{const m=te(n);m.dispatch(f);for(const[i,w]of m.getContext())r.set(i,w);return m.toString()});return a=r,g.sort(),this.array(g,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,o){if(t(o),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),Y(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const o=[...e];return this.array(o,n.unorderedSets!==!1)},set(e){t("set:");const o=[...e];return this.array(o,n.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const ne="[native code] }",we=ne.length;function Y(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-we)===ne}class z{constructor(s,a){s=this.words=s||[],this.sigBytes=a===void 0?s.length*4:a}toString(s){return(s||Ve).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let a=0;a<s.sigBytes;a++){const t=s.words[a>>>2]>>>24-a%4*8&255;this.words[this.sigBytes+a>>>2]|=t<<24-(this.sigBytes+a)%4*8}else for(let a=0;a<s.sigBytes;a+=4)this.words[this.sigBytes+a>>>2]=s.words[a>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new z([...this.words])}}const Ve={stringify(n){const s=[];for(let a=0;a<n.sigBytes;a++){const t=n.words[a>>>2]>>>24-a%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},Be={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,o=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,r=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,g=e<<16|o<<8|r;for(let f=0;f<4&&t*8+f*6<n.sigBytes*8;f++)a.push(s.charAt(g>>>6*(3-f)&63))}return a.join("")}},De={parse(n){const s=n.length,a=[];for(let t=0;t<s;t++)a[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new z(a,s)}},Se={parse(n){return De.parse(unescape(encodeURIComponent(n)))}};class ke{constructor(){this._data=new z,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new z,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=Se.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,a){}_process(s){let a,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,o=Math.min(e*4,this._data.sigBytes);if(e){for(let r=0;r<e;r+=this.blockSize)this._doProcessBlock(this._data.words,r);a=this._data.words.splice(0,e),this._data.sigBytes-=o}return new z(a,o)}}class xe extends ke{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const Z=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ce=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],M=[];class Ue extends xe{constructor(){super(...arguments),this._hash=new z([...Z])}reset(){super.reset(),this._hash=new z([...Z])}_doProcessBlock(s,a){const t=this._hash.words;let e=t[0],o=t[1],r=t[2],g=t[3],f=t[4],m=t[5],i=t[6],w=t[7];for(let l=0;l<64;l++){if(l<16)M[l]=s[a+l]|0;else{const V=M[l-15],P=(V<<25|V>>>7)^(V<<14|V>>>18)^V>>>3,b=M[l-2],R=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;M[l]=P+M[l-7]+R+M[l-16]}const S=f&m^~f&i,k=e&o^e&r^o&r,y=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),B=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),_=w+B+S+Ce[l]+M[l],p=y+k;w=i,i=m,m=f,f=g+_|0,g=r,r=o,o=e,e=_+p|0}t[0]=t[0]+e|0,t[1]=t[1]+o|0,t[2]=t[2]+r|0,t[3]=t[3]+g|0,t[4]=t[4]+f|0,t[5]=t[5]+m|0,t[6]=t[6]+i|0,t[7]=t[7]+w|0}finalize(s){super.finalize(s);const a=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(a/4294967296),this._data.words[(t+64>>>9<<4)+15]=a,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ze(n){return new Ue().finalize(n).toString(Be)}function Pe(n,s={}){const a=typeof n=="string"?n:_e(n,s);return ze(a).slice(0,10)}const Me={class:"radio-item"},Oe=["id","name","value"],Re=["for"],$e={__name:"Radio",props:W(["name","option"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const s=q(n,"modelValue");return(a,t)=>(C(),U("div",Me,[N(d("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),id:n.option,name:n.name,value:n.option},null,8,Oe),[[se,s.value]]),d("label",{for:n.option},F(n.option),9,Re)]))}},Fe=["for"],Te=["name","id"],Ne={value:"",hidden:""},Le=["value"],je={__name:"VSelect",props:W(["name","options"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){let s=q(n,"modelValue");return(a,t)=>(C(),U(I,null,[d("label",{for:n.name},"Choose a "+F(n.name)+":",9,Fe),N(d("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>D(s)?s.value=e:s=e),name:n.name,id:n.name},[d("option",Ne,"Select a "+F(n.name)+"...",1),(C(!0),U(I,null,ae(n.options,e=>(C(),U("option",{value:e.tag},F(e.Name),9,Le))),256))],8,Te),[[Q,c(s)]])],64))}},He={class:"range-input"},Ae=["for"],Ke=["id","name"],Ee={__name:"Range",props:W(["name"],{modelValue:{default:4},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const s=v(["None","Min","Half","Less","Full","More"]);let a=q(n,"modelValue");return(t,e)=>(C(),U("div",He,[d("label",{for:n.name},"Choose your "+F(n.name)+" level:",9,Ae),d("div",null,[N(d("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=o=>D(a)?a.value=o:a=o),id:n.name,name:n.name,min:"0",max:"5",step:"1"},null,8,Ke),[[ee,c(a)]]),d("p",null,F(c(s)[c(a)]),1)])]))}},We=n=>n==="defer"||n===!1;function qe(...n){var k;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[a,t,e={}]=n;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const o=de(),r=t,g=()=>null,f=()=>o.isHydrating?o.payload.data[a]:o.static.data[a];e.server=e.server??!0,e.default=e.default??g,e.getCachedData=e.getCachedData??f,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??oe.deep,e.dedupe=e.dedupe??"cancel";const m=()=>e.getCachedData(a,o)!=null;if(!o._asyncData[a]||!e.immediate){(k=o.payload._errors)[a]??(k[a]=null);const y=e.deep?v:re;o._asyncData[a]={data:y(e.getCachedData(a,o)??e.default()),pending:v(!m()),error:ie(o.payload._errors,a),status:v("idle")}}const i={...o._asyncData[a]};i.refresh=i.execute=(y={})=>{if(o._asyncDataPromises[a]){if(We(y.dedupe??e.dedupe))return o._asyncDataPromises[a];o._asyncDataPromises[a].cancelled=!0}if((y._initial||o.isHydrating&&y._initial!==!1)&&m())return Promise.resolve(e.getCachedData(a,o));i.pending.value=!0,i.status.value="pending";const B=new Promise((_,p)=>{try{_(r(o))}catch(V){p(V)}}).then(async _=>{if(B.cancelled)return o._asyncDataPromises[a];let p=_;e.transform&&(p=await e.transform(_)),e.pick&&(p=Ie(p,e.pick)),o.payload.data[a]=p,i.data.value=p,i.error.value=null,i.status.value="success"}).catch(_=>{if(B.cancelled)return o._asyncDataPromises[a];i.error.value=fe(_),i.data.value=c(e.default()),i.status.value="error"}).finally(()=>{B.cancelled||(i.pending.value=!1,delete o._asyncDataPromises[a])});return o._asyncDataPromises[a]=B,o._asyncDataPromises[a]},i.clear=()=>Ge(o,a);const w=()=>i.refresh({_initial:!0}),l=e.server!==!1&&o.payload.serverRendered;{const y=pe();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const p=y._nuxtOnBeforeMountCbs;le(()=>{p.forEach(V=>{V()}),p.splice(0,p.length)}),ue(()=>p.splice(0,p.length))}l&&o.isHydrating&&(i.error.value||m())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):y&&(o.payload.serverRendered&&o.isHydrating||e.lazy)&&e.immediate?y._nuxtOnBeforeMountCbs.push(w):e.immediate&&w();const B=he();if(e.watch){const p=ce(e.watch,()=>i.refresh());B&&J(p)}const _=o.hook("app:data:refresh",async p=>{(!p||p.includes(a))&&await i.refresh()});B&&J(_)}const S=Promise.resolve(o._asyncDataPromises[a]).then(()=>i);return Object.assign(S,i),S}function Ge(n,s){s in n.payload.data&&(n.payload.data[s]=void 0),s in n.payload._errors&&(n.payload._errors[s]=null),n._asyncData[s]&&(n._asyncData[s].data.value=void 0,n._asyncData[s].error.value=null,n._asyncData[s].pending.value=!1,n._asyncData[s].status.value="idle"),s in n._asyncDataPromises&&(n._asyncDataPromises[s].cancelled=!0,n._asyncDataPromises[s]=void 0)}function Ie(n,s){const a={};for(const t of s)a[t]=n[t];return a}function A(n,s,a){const[t={},e]=typeof s=="string"?[{},s]:[s,a],o=me(()=>O(n)),r=t.key||Pe([e,typeof o.value=="string"?o.value:"",...Je(t)]);if(!r||typeof r!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+r);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const g=r===e?"$f"+r:r;if(!t.baseURL&&typeof o.value=="string"&&o.value[0]==="/"&&o.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:f,lazy:m,default:i,transform:w,pick:l,watch:S,immediate:k,getCachedData:y,deep:B,dedupe:_,...p}=t,V=ye({...ge,...p,cache:typeof t.cache=="boolean"?void 0:t.cache}),P={server:f,lazy:m,default:i,transform:w,pick:l,immediate:k,getCachedData:y,deep:B,dedupe:_,watch:S===!1?[]:[V,o,...S||[]]};let b;return qe(g,()=>{var u;(u=b==null?void 0:b.abort)==null||u.call(b),b=typeof AbortController<"u"?new AbortController:{};const L=O(t.timeout);return L&&setTimeout(()=>b.abort(),L),(t.$fetch||globalThis.$fetch)(o.value,{signal:b.signal,...V})},P)}function Je(n){var a;const s=[((a=O(n.method))==null?void 0:a.toUpperCase())||"GET",O(n.baseURL)];for(const t of[n.params||n.query]){const e=O(t);if(!e)continue;const o={};for(const[r,g]of Object.entries(e))o[O(r)]=O(g);s.push(o)}return s}const Xe={class:"content"},Ye=d("div",{class:"bobaPreview"},null,-1),Ze={class:"bobaCustomiser"},Qe=d("h2",null,"Customise your drink",-1),et={class:"radio-input"},tt=d("p",null,"Choose a size:",-1),nt={class:"select-input"},st=d("label",{for:"variety"},"Choose a variety of drink:",-1),at=ve('<option value="" hidden>Select a variety...</option><option value="black">Black Tea</option><option value="green">Green Tea</option><option value="oolong">Oolong Tea</option><option value="fruit">Fruit</option><option value="shake">Shake</option>',6),ot=[at],rt={key:0,class:"select-input"},it={key:1,class:"select-input"},lt={key:2,class:"select-input"},ut=d("p",null,"Want toppings?",-1),ct={class:"select-input"},dt={key:0,class:"select-input"},ft={key:1,class:"select-input"},pt=d("p",null,"Give it a name!",-1),ht=d("div",{class:"form-result"},[d("button",{type:"submit"},"Make Tea"),d("p",null,"$00.00")],-1),yt={__name:"index",async setup(n){let s,a;const{data:t}=([s,a]=j(()=>A("/api/base","$PslAyef5YX")),s=await s,a(),s),{data:e}=([s,a]=j(()=>A("/api/milk","$6PO73qLRkI")),s=await s,a(),s),{data:o}=([s,a]=j(()=>A("/api/flavour","$nn2AXZkwPl")),s=await s,a(),s),{data:r}=([s,a]=j(()=>A("/api/topping","$tWBWWSl2bW")),s=await s,a(),s);let g=v(null),f=H(t.value),m=v(H(e.value)),i=v(H(o.value)),w=v(H(r.value));const l=v(null),S=v(null),k=v(null),y=v(null),B=v(null),_=v(null),p=v(null),V=v(null),P=v(4),b=v(4),R=v(null);v(null);function L(K){g.value=f.filter(u=>u.variety==K)}return(K,u)=>{const E=$e,$=je,G=Ee;return C(),U("div",Xe,[Ye,d("div",Ze,[Qe,d("form",null,[d("div",et,[tt,d("div",null,[x(E,{modelValue:c(l),"onUpdate:modelValue":u[0]||(u[0]=h=>D(l)?l.value=h:null),name:"size",option:"small"},null,8,["modelValue"]),x(E,{modelValue:c(l),"onUpdate:modelValue":u[1]||(u[1]=h=>D(l)?l.value=h:null),name:"size",option:"medium"},null,8,["modelValue"]),x(E,{modelValue:c(l),"onUpdate:modelValue":u[2]||(u[2]=h=>D(l)?l.value=h:null),name:"size",option:"large"},null,8,["modelValue"])])]),d("div",null,[d("div",nt,[st,N(d("select",{"onUpdate:modelValue":u[3]||(u[3]=h=>D(S)?S.value=h:null),name:"variety",id:"variety",onChange:u[4]||(u[4]=h=>L(c(S)))},ot,544),[[Q,c(S)]])]),c(S)?(C(),U("div",rt,[x($,{modelValue:c(k),"onUpdate:modelValue":u[5]||(u[5]=h=>D(k)?k.value=h:null),name:"base",options:c(g)},null,8,["modelValue","options"])])):T("",!0),c(k)?(C(),U("div",it,[x($,{modelValue:c(y),"onUpdate:modelValue":u[6]||(u[6]=h=>D(y)?y.value=h:null),name:"milk",options:c(m)},null,8,["modelValue","options"])])):T("",!0),c(y)?(C(),U("div",lt,[x($,{modelValue:c(B),"onUpdate:modelValue":u[7]||(u[7]=h=>D(B)?B.value=h:null),name:"flavour",options:c(i)},null,8,["modelValue","options"])])):T("",!0)]),d("div",null,[ut,d("div",ct,[x($,{modelValue:c(_),"onUpdate:modelValue":u[8]||(u[8]=h=>D(_)?_.value=h:null),name:"topping",options:c(w)},null,8,["modelValue","options"])]),c(_)?(C(),U("div",dt,[x($,{modelValue:c(p),"onUpdate:modelValue":u[9]||(u[9]=h=>D(p)?p.value=h:null),name:"topping",options:c(w)},null,8,["modelValue","options"])])):T("",!0),c(p)?(C(),U("div",ft,[x($,{modelValue:c(V),"onUpdate:modelValue":u[10]||(u[10]=h=>D(V)?V.value=h:null),name:"topping",options:c(w)},null,8,["modelValue","options"])])):T("",!0)]),d("div",null,[x(G,{modelValue:c(P),"onUpdate:modelValue":u[11]||(u[11]=h=>D(P)?P.value=h:null),name:"ice"},null,8,["modelValue"]),x(G,{modelValue:c(b),"onUpdate:modelValue":u[12]||(u[12]=h=>D(b)?b.value=h:null),name:"sugar"},null,8,["modelValue"])]),d("div",null,[pt,N(d("input",{type:"text","onUpdate:modelValue":u[13]||(u[13]=h=>D(R)?R.value=h:null),name:"name",id:"name"},null,512),[[ee,c(R)]])]),ht])])])}}};export{yt as default};