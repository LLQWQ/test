import{R as c,o as C,c as i,a as l,b as _,w as r,d}from"./index.35e1b9dc.js";import{B as u}from"./index.33951877.js";const T=l("video",{id:"video",controls:"",autoplay:"",style:{"text-align":"left"}}," Your browser is too old which doesn't support HTML5 video. ",-1),R=l("video",{id:"selfVideo",controls:"",autoplay:"",style:{"text-align":"right"}}," Your browser is too old which doesn't support HTML5 video. ",-1),L={__name:"VideoCall",setup(A){c({});const s=()=>{a(),E()},a=()=>{let n=720,o=1280;var t=new ZLMRTCClient.Endpoint({element:document.getElementById("video"),debug:!0,zlmsdpUrl:"http://192.168.1.180/index/api/webrtc?app=live&stream=test2&type=play",simulcast:!1,useCamera:!0,audioEnable:!0,videoEnable:!0,recvOnly:!0,resolution:{w:o,h:n},usedatachannel:!1});t.on(ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,function(e){console.log("ICE \u534F\u5546\u51FA\u9519")}),t.on(ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,function(e){console.log("\u64AD\u653E\u6210\u529F",e.streams)}),t.on(ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,function(e){console.log("offer anwser \u4EA4\u6362\u5931\u8D25",e),stop()}),t.on(ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM,function(e){document.getElementById("video").srcObject=e,document.getElementById("video").muted=!0}),t.on(ZLMRTCClient.Events.CAPTURE_STREAM_FAILED,function(e){console.log("\u83B7\u53D6\u672C\u5730\u6D41\u5931\u8D25")}),t.on(ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,function(e){console.log("\u5F53\u524D\u72B6\u6001==>",e)}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,function(e){console.log("rtc datachannel \u6253\u5F00 :",e)}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,function(e){console.log("rtc datachannel \u6D88\u606F :",e.data),document.getElementById("msgrecv").value=e.data}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,function(e){console.log("rtc datachannel \u9519\u8BEF :",e)}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,function(e){console.log("rtc datachannel \u5173\u95ED :",e)})},E=()=>{let n=720,o=1280;var t=new ZLMRTCClient.Endpoint({element:document.getElementById("video"),debug:!0,zlmsdpUrl:"http://192.168.1.180/index/api/webrtc?app=live&stream=test1&type=push",simulcast:!1,useCamera:!0,audioEnable:!0,videoEnable:!0,recvOnly:!1,resolution:{w:o,h:n},usedatachannel:!1});t.on(ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,function(e){console.log("ICE \u534F\u5546\u51FA\u9519")}),t.on(ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,function(e){console.log("\u64AD\u653E\u6210\u529F",e.streams)}),t.on(ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,function(e){console.log("offer anwser \u4EA4\u6362\u5931\u8D25",e),stop()}),t.on(ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM,function(e){document.getElementById("selfVideo").srcObject=e,document.getElementById("selfVideo").muted=!0}),t.on(ZLMRTCClient.Events.CAPTURE_STREAM_FAILED,function(e){console.log("\u83B7\u53D6\u672C\u5730\u6D41\u5931\u8D25")}),t.on(ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,function(e){console.log("\u5F53\u524D\u72B6\u6001==>",e)}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,function(e){console.log("rtc datachannel \u6253\u5F00 :",e)}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,function(e){console.log("rtc datachannel \u6D88\u606F :",e.data),document.getElementById("msgrecv").value=e.data}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,function(e){console.log("rtc datachannel \u9519\u8BEF :",e)}),t.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,function(e){console.log("rtc datachannel \u5173\u95ED :",e)})};return(n,o)=>{const t=u;return C(),i("div",null,[T,R,l("div",null,[_(t,{onClick:s},{default:r(()=>[d("\u901A\u8BDD")]),_:1})])])}}};export{L as default};
