(this.webpackJsonpfindjob=this.webpackJsonpfindjob||[]).push([[0],{276:function(e,t,n){},383:function(e,t,n){},394:function(e,t,n){},402:function(e,t,n){},420:function(e,t,n){},422:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(0),c=n(18),s=n.n(c),o=n(41),i=n(15),u=(n(109),n(69)),h=n.n(u),j=(n(40),n(19)),d=n.n(j),l=(n(61),n(28)),p=n.n(l),b=(n(79),n(24)),f=n.n(b),O=(n(91),n(23)),m=n.n(O),g=(n(62),n(31)),v=n.n(g),x=n(39),y=n(11),C=n(12),w=n(14),k=n(13),_=n.p+"static/media/logo.12c9441b.jpg",S=(n(276),n(1));function L(){return Object(S.jsx)("div",{className:"logo-container",children:Object(S.jsx)("img",{src:_,alt:"logo",className:"logo-img"})})}var M=n(16),R=n(22),T=n.n(R),H=n(42),N="auth_success",U="error_msg",B="receive_user",E="reset_user",I="receive_user_list",A="receive_msg_list",D="receive_msg",P="msg_read",W=n(145),z=n.n(W);function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";if("GET"===n){var r="";return Object.keys(t).forEach((function(e){r=r+e+"="+t[e]+"&"})),r&&(r="?"+r.substring(0,r.length-1)),z.a.get(e+r)}return z.a.post(e,t)}var J=function(e){return G("/register",e,"POST")},q=function(e){return G("/update",e,"POST")},F=function(e){return G("/userlist",{type:e})},K=function(){return G("/msglist")},Q=function(e){return G("/readmsg",{from:e},"POST")},V=n(75);function X(e,t){V.io.socket||(V.io.socket=Object(V.io)("ws://localhost:3003"),V.io.socket.on("receiveMsg",(function(n){console.log("\u5ba2\u6237\u7aef\u63a5\u6536\u5230\u7684\u6d88\u606f",n),t!==n.from&&t!==n.to||e(ne(n,t))})))}var Y=function(e){return{type:N,data:e}},Z=function(e){return{type:U,data:e}},$=function(e){return{type:B,data:e}},ee=function(e){return{type:E,data:e}},te=function(e){var t=e.users,n=e.chatMsgs,r=e.userid;return{type:A,data:{users:t,chatMsgs:n,userid:r}}},ne=function(e,t){return{type:D,data:{chatMsg:e,userid:t}}},re=function(e){var t=e.count,n=e.from,r=e.to;return{type:P,data:{count:t,from:n,to:r}}};function ae(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(H.a)(T.a.mark((function e(t,n){var r,a,c,s,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(t,n),e.next=3,K();case 3:r=e.sent,0===(a=r.data).code&&(c=a.data,s=c.users,o=c.chatMsgs,t(te({users:s,chatMsgs:o,userid:n})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(e){return function(){var t=Object(H.a)(T.a.mark((function t(n){var r,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:r=t.sent,0===(a=r.data).code?n($(a.data)):n(ee(a.msg));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(H.a)(T.a.mark((function t(n){var r,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:r=t.sent,0===(a=r.data).code&&n((c=a.data,{type:I,data:c}));case 5:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},ie=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.login=function(){e.props.login(e.state)},e.handleChange=function(t,n){e.setState(Object(x.a)({},t,n))},e.toRegister=function(){e.props.history.push("/register")},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props.user,n=t.msg,r=t.redirectTo;return r?Object(S.jsx)(i.a,{to:r}):Object(S.jsxs)("div",{children:[Object(S.jsx)(v.a,{children:"\u5e7f\xa0\u5de5\xa0\u76f4\xa0\u8058"}),Object(S.jsx)(L,{}),Object(S.jsx)(h.a,{children:Object(S.jsxs)(d.a,{children:[n?Object(S.jsx)("div",{className:"error-msg",children:n}):null,Object(S.jsx)(m.a,{}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",onChange:function(t){e.handleChange("username",t)},children:"\u7528\u6237\u540d:"}),Object(S.jsx)(m.a,{}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",onChange:function(t){e.handleChange("password",t)},children:"\u5bc6\xa0\xa0\xa0\u7801:"}),Object(S.jsx)(m.a,{}),Object(S.jsx)(p.a,{type:"primary",onClick:this.login,children:"\u767b\xa0\xa0\xa0\u5f55"}),Object(S.jsx)(m.a,{}),Object(S.jsx)(p.a,{onClick:this.toRegister,children:"\u53bb\u6ce8\u518c"})]})})]})}}]),n}(a.Component),ue=Object(M.b)((function(e){return{user:e.user}}),{login:function(e){console.log(e);var t=e.username,n=e.password;return t?n?function(){var t=Object(H.a)(T.a.mark((function t(n){var r,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G("/login",{username:(c=e).username,password:c.password},"POST");case 2:r=t.sent,console.log(r),0===(a=r.data).code?(ae(n,a.data._id),console.log(a.data),n(Y(a.data))):n(Z(a.msg));case 6:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}():Z("\u5bc6\u7801\u5fc5\u987b\u6307\u5b9a"):Z("\u7528\u6237\u540d\u5fc5\u987b\u6307\u5b9a")}})(ie),he=(n(188),n(102)),je=n.n(he),de=(n(189),n(103)),le=n.n(de),pe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(e){var r;Object(y.a)(this,n),(r=t.call(this,e)).state={icon:null},r.handleClick=function(e){var t=e.text,n=e.icon;r.setState({icon:n}),r.props.setHeader(t)},r.headerList=[];for(var a=0;a<5;a++)r.headerList.push({text:"header"+(a+1),icon:"/images/header".concat(a+1,".jpg")});return r}return Object(C.a)(n,[{key:"render",value:function(){var e=this.state.icon,t=e?Object(S.jsxs)("div",{children:["\u5df2\u9009\u62e9\u5934\u50cf",Object(S.jsx)("img",{src:e})]}):"\u8bf7\u9009\u62e9\u5934\u50cf";return Object(S.jsx)(d.a,{renderHeader:function(){return t},children:Object(S.jsx)(le.a,{data:this.headerList,columnNum:3,onClick:this.handleClick})})}}]),n}(a.Component),be=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={header:"",post:"",info:""},e.save=function(){e.props.updateUser(e.state)},e.setHeader=function(t){e.setState({header:t})},e.handleChange=function(t,n){e.setState(Object(x.a)({},t,n))},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props.user,n=t.header,r=t.type;if(n){var a="dashen"===r?"/dashen":"laoban";return Object(S.jsx)(i.a,{to:a})}return Object(S.jsxs)("div",{children:[Object(S.jsx)(v.a,{children:"\u5927\u795e\u4fe1\u606f\u5b8c\u5584"}),Object(S.jsx)(pe,{setHeader:this.setHeader}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u6c42\u804c\u5c97\u4f4d",onChange:function(t){e.handleChange("post",t)},children:"\u6c42\u804c\u5c97\u4f4d"}),Object(S.jsx)(je.a,{title:"\u4e2a\u4eba\u4ecb\u7ecd:",rows:3,onChange:function(t){e.handleChange("info",t)}}),Object(S.jsx)(p.a,{type:"primary",onClick:this.save,children:"\u4fdd\xa0\xa0\xa0\xa0\u5b58"})]})}}]),n}(a.Component),fe=Object(M.b)((function(e){return{user:e.user}}),{updateUser:se})(be),Oe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={header:"",post:"",info:"",company:"",salary:""},e.save=function(){e.props.updateUser(e.state)},e.setHeader=function(t){e.setState({header:t}),console.log(e.setState)},e.handleChange=function(t,n){e.setState(Object(x.a)({},t,n))},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props.user,n=t.header,r=t.type;if(n){var a="dashen"===r?"/dashen":"laoban";return Object(S.jsx)(i.a,{to:a})}return Object(S.jsxs)("div",{children:[Object(S.jsx)(v.a,{children:"\u8001\u677f\u4fe1\u606f\u5b8c\u5584"}),Object(S.jsx)(pe,{setHeader:this.setHeader}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u62db\u8058\u804c\u4f4d",onChange:function(t){e.handleChange("post",t)},children:"\u62db\u8058\u804c\u4f4d"}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0",onChange:function(t){e.handleChange("company",t)},children:"\u516c\u53f8\u540d\u79f0"}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u804c\u4f4d\u85aa\u8d44",onChange:function(t){e.handleChange("salary",t)},children:"\u804c\u4f4d\u85aa\u8d44"}),Object(S.jsx)(je.a,{title:"\u804c\u4f4d\u8981\u6c42:",rows:3,onChange:function(t){e.handleChange("info",t)}}),Object(S.jsx)(p.a,{type:"primary",onClick:this.save,children:"\u4fdd\xa0\xa0\xa0\xa0\u5b58"})]})}}]),n}(a.Component),me=Object(M.b)((function(e){return{user:e.user}}),{updateUser:se})(Oe),ge=(n(378),n(105)),ve=n.n(ge),xe=(n(383),n(214)),ye=ve.a.Header,Ce=ve.a.Body,we=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props.userList;return console.log(t),Object(S.jsx)(h.a,{style:{marginBottom:50,marginTop:50},children:Object(S.jsx)(xe.a,{type:"scale",children:t.map((function(t){return Object(S.jsxs)("div",{children:[Object(S.jsx)(m.a,{}),Object(S.jsxs)(ve.a,{onClick:function(){e.props.history.push("/chat/".concat(t._id))},children:[Object(S.jsx)(ye,{thumb:Object(S.jsx)("div",{className:"header",children:Object(S.jsx)("img",{src:"/images/".concat(t.header,".jpg")})}),extra:t.username}),Object(S.jsxs)(Ce,{children:[Object(S.jsxs)("div",{children:["\u804c\u4f4d:\xa0\xa0",t.post]}),t.company?Object(S.jsxs)("div",{children:["\u516c\u53f8:\xa0\xa0",t.company]}):null,t.salary?Object(S.jsxs)("div",{children:["\u85aa\u8d44:\xa0\xa0",t.salary]}):null,Object(S.jsxs)("div",{children:["\u63cf\u8ff0:\xa0\xa0",t.info]})]})]})]},t._id)}))})})}}]),n}(a.Component),ke=Object(i.g)(we),_e=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserList("dashen")}},{key:"render",value:function(){var e=this.props.userList;return Object(S.jsx)("div",{children:Object(S.jsx)(ke,{userList:e})})}}]),n}(a.Component),Se=Object(M.b)((function(e){return{userList:e.userList}}),{getUserList:oe})(_e),Le=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserList("laoban")}},{key:"render",value:function(){var e=this.props.userList;return console.log(e),Object(S.jsx)("div",{children:Object(S.jsx)(ke,{userList:e})})}}]),n}(a.Component),Me=Object(M.b)((function(e){return{userList:e.userList}}),{getUserList:oe})(Le),Re=(n(201),n(144)),Te=n.n(Re),He=(n(394),d.a.Item),Ne=d.a.Item.Brief;var Ue=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props.user,n=this.props.chat,r=n.users,a=function(e,t){var n={};e.forEach((function(e){if(e.to!==t||e.read?e.unReadCount=0:e.unReadCount=1,n[e.chat_id]){var r=n[e.chat_id].unReadCount;n[e.chat_id].create_time<e.create_time&&(n[e.chat_id]=e),n[e.chat_id].unReadCount=r+e.unReadCount}else n[e.chat_id]=e}));var r=Object.values(n);return r.sort((function(e,t){return t.create_time-e.create_time})),r}(n.chatMsgs,t._id);return Object(S.jsx)(d.a,{style:{marginTop:50,marginBottom:50},children:a.map((function(n){var a=n.to===t._id?n.from:n.to,c=n.to===t._id?r[n.from]:r[n.to],s=c.header?"/images/".concat(c.header,".jpg"):null;return console.log(c),Object(S.jsxs)(He,{extra:Object(S.jsx)(Te.a,{text:n.unReadCount}),thumb:Object(S.jsx)("div",{className:"messageHeader",children:Object(S.jsx)("img",{src:s})}),arrow:"horizontal",onClick:function(){return e.props.history.push("/chat/".concat(a))},children:[r[n.to===t._id?n.from:n.to].username,Object(S.jsx)(Ne,{children:n.content})]},n._id)}))})}}]),n}(a.Component),Be=Object(M.b)((function(e){return{user:e.user,chat:e.chat}}),{})(Ue),Ee=(n(395),n(205)),Ie=n.n(Ee),Ae=(n(397),n(206)),De=n.n(Ae),Pe=n(86),We=n.n(Pe),ze=(n(402),d.a.Item),Ge=ze.Brief,Je=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleLogout=function(){De.a.alert("\u9000\u51fa","\u786e\u8ba4\u9000\u51fa\u767b\u5f55\u5417",[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){We.a.remove("userid"),e.props.resetUser()}}])},e}return Object(C.a)(n,[{key:"render",value:function(){console.log(this.props.user);var e=this.props.user,t=e.username,n=e.info,r=e.salary,a=e.header,c=e.post,s=e.company;return Object(S.jsxs)("div",{style:{marginBottom:50,marginTop:50},children:[Object(S.jsx)(Ie.a,{img:Object(S.jsx)("div",{className:"personHeader ",children:Object(S.jsx)("img",{src:"/images/".concat(a,".jpg"),alt:"header"})}),title:t,message:s}),Object(S.jsx)(d.a,{renderHeader:function(){return"\u8bf7\u8f93\u5165\u76f8\u5173\u4fe1\u606f"},children:Object(S.jsxs)(ze,{multipleLine:!0,children:[Object(S.jsxs)(Ge,{children:["\u804c\u4f4d:\xa0\xa0",c]}),Object(S.jsxs)(Ge,{children:["\u7b80\u4ecb:\xa0\xa0",n]}),r?Object(S.jsxs)(Ge,{children:["\u85aa\u8d44:\xa0\xa0",r]}):null]})}),Object(S.jsx)(m.a,{}),Object(S.jsx)(d.a,{children:Object(S.jsx)(p.a,{type:"warning",onClick:this.handleLogout,children:"\u9000\u51fa\u767b\u5f55"})})]})}}]),n}(a.Component),qe=Object(M.b)((function(e){return{user:e.user}}),{resetUser:ee})(Je);function Fe(e,t){var n="";return n="laoban"===e?"/laoban":"/dashen",t||(n+="info"),n}n(403);var Ke=n(150),Qe=n.n(Ke),Ve=n(2),Xe=n.n(Ve),Ye=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.navList,r=t.unReadCount;n=n.filter((function(e){return!e.hide}));var a=this.props.location.pathname;return Object(S.jsx)(Qe.a,{children:n.map((function(t){return Object(S.jsx)(Qe.a.Item,{badge:"/message"===t.path?r:0,title:t.text,icon:{uri:"/images/".concat(t.icon,".svg")},selectedIcon:{uri:"/images/".concat(t.icon,"-selected.svg")},selected:t.path===a,onPress:function(){return e.props.history.replace(t.path)}},t.path)}))})}}]),n}(a.Component);Ye.propsType={navList:Xe.a.array.isRequired};var Ze=Object(i.g)(Ye),$e=(n(164),n(143)),et=n.n($e),tt=d.a.Item,nt=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={connect:"",isShow:!1},e.handleSend=function(){var t=e.props.user._id,n=e.props.match.params.userid,r=e.state.content.trim();r&&(console.log(t),console.log(n),console.log(r),e.props.sendMsg({from:t,to:n,content:r}),e.setState({content:"",isShow:!1}))},e.toggleShow=function(){var t=!e.state.isShow;e.setState({isShow:t}),t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),0)},e.chooseEmoji=function(t){e.state.content?e.setState({content:e.state.content+t.text}):e.setState({content:t.text})},e}return Object(C.a)(n,[{key:"componentWillMount",value:function(){this.emojis=["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude06","\ud83e\udd23","\ud83d\ude02","\ud83d\ude42","\ud83d\ude09","\ud83d\ude0a","\ud83d\ude07","\ud83e\udd70","\ud83d\ude0d","\ud83e\udd29","\ud83d\ude18","\ud83d\ude17","\ud83d\ude1a","\ud83d\ude19","\ud83d\ude0b","\ud83d\ude1b","\ud83d\ude1c","\ud83e\udd2a","\ud83d\ude1d","\ud83e\udd11","\ud83e\udd17","\ud83e\udd2d","\ud83e\udd2b","\ud83e\udd14","\ud83e\udd10","\ud83e\udd28","\ud83d\ude10","\ud83d\ude11","\ud83d\ude36","\ud83d\ude36","\ud83d\ude0f","\ud83d\ude12","\ud83d\ude44","\ud83d\ude2c"].map((function(e){return{text:e}}))}},{key:"componentDidMount",value:function(){window.scrollTo(0,document.body.scrollHeight)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,document.body.scrollHeight)}},{key:"componentWillUnmount",value:function(){var e=this.props.match.params.userid,t=this.props.user._id;this.props.readMsg(e,t)}},{key:"render",value:function(){var e=this,t=this.props.user,n=this.props.chat,r=n.users,a=n.chatMsgs,c=t._id,s=this.props.match.params.userid;if(!r[c])return null;var o=[c,s].sort().join("_"),i=a.filter((function(e){return e.chat_id===o})),u=r[s].header?"/images/".concat(r[s].header,".jpg"):null,h=r[s].username;return Object(S.jsxs)("div",{id:"chat-page",children:[Object(S.jsx)(v.a,{icon:Object(S.jsx)(et.a,{type:"left"}),className:"sticky-header",onLeftClick:function(){e.props.history.goBack()},children:h}),Object(S.jsx)(d.a,{style:{marginTop:50,marginBottom:50},children:i.map((function(e){return c===e.to?Object(S.jsx)(tt,{thumb:Object(S.jsx)("div",{className:"header2",children:Object(S.jsx)("img",{src:u})}),children:e.content},e._id):Object(S.jsx)(tt,{className:"chat-me",extra:"\u6211",children:e.content},e._id)}))}),Object(S.jsxs)("div",{className:"am-tab-bar",children:[Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165",onChange:function(t){return e.setState({content:t})},value:this.state.content,onFocus:function(){e.setState({isShow:!1})},extra:Object(S.jsxs)("span",{children:[Object(S.jsx)("span",{onClick:this.toggleShow,style:{marginRight:5},children:"\ud83d\ude42"}),Object(S.jsx)("span",{onClick:this.handleSend,children:"\u53d1\u9001"})]})}),this.state.isShow?Object(S.jsx)(le.a,{data:this.emojis,columnNum:8,carouselMaxRow:4,isCarousel:!0,onClick:function(t){e.chooseEmoji(t)}}):null]})]})}}]),n}(a.Component),rt=Object(M.b)((function(e){return{user:e.user,chat:e.chat}}),{sendMsg:function(e){var t=e.from,n=e.to,r=e.content;return function(){var e=Object(H.a)(T.a.mark((function e(a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V.io.socket.emit("sendMsg",{from:t,to:n,content:r});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},readMsg:function(e,t){return function(){var n=Object(H.a)(T.a.mark((function n(r){var a,c,s;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q(e);case 2:a=n.sent,c=a.data,s=c.data,console.log(s),console.log(e),console.log(t),0===c.code&&r(re({count:s,from:e,to:t}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(nt),at=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).navList=[{path:"/laoban",component:Se,title:"\u5927\u795e\u5217\u8868",icon:"dashen",text:"\u5927\u795e"},{path:"/dashen",component:Me,title:"\u8001\u677f\u5217\u8868",icon:"laoban",text:"\u8001\u677f"},{path:"/message",component:Be,title:"\u6d88\u606f\u5217\u8868",icon:"message",text:"\u6d88\u606f"},{path:"/personal",component:qe,title:"\u7528\u6237\u4e2d\u5fc3",icon:"personal",text:"\u4e2a\u4eba"}],e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=We.a.get("userid"),t=this.props.user.id;e&&!t&&this.props.getUser()}},{key:"render",value:function(){if(!We.a.get("userid"))return Object(S.jsx)(i.a,{to:"/login"});var e=this.props,t=e.user,n=e.unReadCount;if(!t._id)return null;var a=this.props.location.pathname;if("/"===a)return a=Fe(t.type,t.header),Object(S.jsx)(i.a,{to:a});var c=this.navList,s=this.props.location.pathname,o=c.find((function(e){return e.path===s}));return o&&("laoban"===t.type?c[1].hide=!0:c[0].hide=!0),Object(S.jsxs)("div",{children:[o?Object(S.jsx)(v.a,{className:"sticky-header",children:o.title}):null,Object(S.jsxs)(i.d,{children:[Object(S.jsx)(i.b,{path:"/laoban",component:function(e){return Object(S.jsx)(Se,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/dashen",component:function(e){return Object(S.jsx)(Me,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/personal",component:function(e){return Object(S.jsx)(qe,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/message",component:function(e){return Object(S.jsx)(Be,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/laobaninfo",component:function(e){return Object(S.jsx)(me,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/dasheninfo",component:function(e){return Object(S.jsx)(fe,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/chat/:userid",component:function(e){return Object(S.jsx)(rt,Object(r.a)({},e))}})]}),o?Object(S.jsx)(Ze,{navList:c,unReadCount:n}):null]})}}]),n}(a.Component),ct=Object(M.b)((function(e){return{user:e.user,unReadCount:e.chat.unReadCount}}),{getUser:function(){return function(){var e=Object(H.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/user");case 2:n=e.sent,0===(r=n.data).code?(ae(t,r.data._id),t($(r.data))):t(ee(r.msg));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(at),st=(n(416),n(151)),ot=n.n(st),it=d.a.Item,ut=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",password2:"",type:""},e.register=function(){e.props.register(e.state)},e.handleChange=function(t,n){e.setState(Object(x.a)({},t,n))},e.toLogin=function(){e.props.history.push("/login")},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.state.type,n=this.props.user,r=n.msg,a=n.redirectTo;return console.log(a),a?Object(S.jsx)(i.a,{to:a}):Object(S.jsxs)("div",{children:[Object(S.jsx)(v.a,{children:"\u5e7f\xa0\u5de5\xa0\u76f4\xa0\u8058"}),Object(S.jsx)(L,{}),Object(S.jsx)(h.a,{children:Object(S.jsxs)(d.a,{children:[r?Object(S.jsx)("div",{className:"error-msg",children:r}):null,Object(S.jsx)(m.a,{}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",onChange:function(t){e.handleChange("username",t)},children:"\u7528\u6237\u540d:"}),Object(S.jsx)(m.a,{}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",onChange:function(t){e.handleChange("password",t)},children:"\u5bc6\xa0\xa0\xa0\u7801:"}),Object(S.jsx)(m.a,{}),Object(S.jsx)(f.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",onChange:function(t){e.handleChange("password2",t)},children:"\u786e\u8ba4\u5bc6\u7801:"}),Object(S.jsx)(m.a,{}),Object(S.jsxs)(it,{children:[Object(S.jsx)("span",{children:"\u7528\u6237\u7c7b\u578b:"}),"\xa0\xa0\xa0",Object(S.jsx)(ot.a,{checked:"dashen"===t,onChange:function(){return e.handleChange("type","dashen")},children:"\u5927\u795e"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(S.jsx)(ot.a,{checked:"laoban"===t,onChange:function(){return e.handleChange("type","laoban")},children:"\u8001\u677f"})]}),Object(S.jsx)(m.a,{}),Object(S.jsx)(p.a,{type:"primary",onClick:this.register,children:"\u6ce8\xa0\xa0\xa0\u518c"}),Object(S.jsx)(m.a,{}),Object(S.jsx)(p.a,{onClick:this.toLogin,children:"\u5df2\u6709\u8d26\u6237"})]})})]})}}]),n}(a.Component),ht=Object(M.b)((function(e){return{user:e.user}}),{register:function(e){var t=e.username,n=e.password,r=e.password2,a=e.type;return t?n!==r?Z("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):function(){var e=Object(H.a)(T.a.mark((function e(r){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J({username:t,password:n,type:a});case 2:c=(c=e.sent).data,console.log(c),0===c.code?(ae(r,c.data._id),r(Y(c.data))):r(Z(c.msg));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():Z("\u7528\u6237\u540d\u5fc5\u987b\u6307\u5b9a")}})(ut),jt=(n(420),n(70)),dt=n(215),lt={username:"",type:"",msg:"",redirectTo:""},pt=[],bt={users:{},chatMsgs:[],unReadCount:0};var ft=Object(jt.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var n=t.data,a=n.type,c=n.header;return Object(r.a)(Object(r.a)({},t.data),{},{redirectTo:Fe(a,c)});case U:return Object(r.a)(Object(r.a)({},e),{},{msg:t.data});case B:return t.data;case E:return Object(r.a)(Object(r.a)({},lt),{},{msg:t.data});default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.data;default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=t.data,a=n.users,c=n.chatMsgs,s=n.userid;return{users:a,chatMsgs:c,unReadCount:c.reduce((function(e,t){return e+(t.read||t.to!==s?0:1)}),0)};case D:var o=t.data.chatMsg;return{users:e.users,chatMsgs:[].concat(Object(dt.a)(e.chatMsgs),[o]),unReadCount:e.unReadCount+(o.read||o.to!==t.data.userid?0:1)};case P:var i=t.data,u=i.count,h=i.from,j=i.to;return{users:e.users,chatMsgs:e.chatMsgs.map((function(e){return e.from===h&&e.to===j?Object(r.a)(Object(r.a)({},e),{},{read:!0}):e})),unReadCount:e.unReadCount-u};default:return e}}}),Ot=n(212),mt=n(213),gt=Object(jt.createStore)(ft,Object(mt.composeWithDevTools)(Object(jt.applyMiddleware)(Ot.a)));s.a.render(Object(S.jsx)(M.a,{store:gt,children:Object(S.jsx)(o.a,{children:Object(S.jsxs)(i.d,{children:[Object(S.jsx)(i.b,{path:"/login",component:function(e){return Object(S.jsx)(ue,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/register",component:function(e){return Object(S.jsx)(ht,Object(r.a)({},e))}}),Object(S.jsx)(i.b,{path:"/",component:function(e){return Object(S.jsx)(ct,Object(r.a)({},e))}}),"  "]})})}),document.getElementById("root"))}},[[422,1,2]]]);
//# sourceMappingURL=main.d612a293.chunk.js.map