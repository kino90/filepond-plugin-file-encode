/*
 * FilePondPluginFileEncode 1.0.1
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
const DataURIWorker=function(){self.onmessage=(t=>{e(t.data.message,e=>{self.postMessage({id:t.data.id,message:e})})});const e=(e,t)=>{const{file:a}=e,i=new FileReader;i.onloadend=(()=>{t(i.result.replace("data:","").replace(/^.+,/,""))}),i.readAsDataURL(a)}};var plugin$1=({addFilter:e,utils:t})=>{const{Type:a,createWorker:i,createRoute:n}=t;e("SET_DEFAULT_OPTIONS",e=>Object.assign(e,{allowFileEncode:[!0,a.BOOLEAN]})),e("CREATE_VIEW",e=>{const{is:t,view:a,query:r}=e;if(!t("file")||!r("GET_ALLOW_FILE_ENCODE"))return;a.registerWriter(n({DID_LOAD_ITEM:({root:e,action:t})=>{if(r("IS_ASYNC"))return;const a=r("GET_ITEM",t.id);i(DataURIWorker).post({file:a.file},t=>{e.ref.dataContainer.value=JSON.stringify({id:a.id,name:a.filename,type:a.fileType,size:a.fileSize,data:t})})}}))})};document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:plugin$1}));export default plugin$1;