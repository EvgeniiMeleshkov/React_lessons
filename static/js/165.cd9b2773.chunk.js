"use strict";(self.webpackChunkreact_lesson1=self.webpackChunkreact_lesson1||[]).push([[165],{2165:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var s=r(5671),t=r(3144),i=r(136),o=r(5716),a=r(2791),u=r(2906),d="Dialogs_dialogs__oe96H",c="Dialogs_dialogsItems__zeEWD",l="Dialogs_messages__Cg2l+",g="Dialogs_button__8Qbmd",m={img:"DialogItem_img__+FCAU",dialog:"DialogItem_dialog__gU34-"},h=r(1523),f=r(184),p=function(e){return(0,f.jsx)("div",{className:m.dialog+" "+m.active,children:(0,f.jsxs)(h.OL,{to:String(e.id),children:[" ",e.name,"  ",(0,f.jsx)("img",{className:m.img,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KGRjFy87J9t4bCpOmz2ukXutLOlTP-5I3A&usqp=CAU",alt:"description"})," "]})})},_="Message_message__rjHQQ",j=function(e){return(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:_,children:e.message})})},x=r(6139),v=r(704),Z=r(9086),C=r(8938),N=(0,C.D)(300),M=(0,v.Z)({form:"dialogAddMessageForm"})((function(e){return(0,f.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)(x.Z,{component:Z.g,name:"newMessageBody",placeholder:"Enter your message here...",validate:[C.C,N]})}),(0,f.jsx)("div",{className:g,children:(0,f.jsx)("button",{children:"Send"})})]})})),b=function(e){return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("div",{className:c,children:e.dialogsPage.dialogs.map((function(e){return(0,f.jsx)(p,{id:e.id,name:e.name},e.id)}))}),(0,f.jsx)("div",{className:l,children:(0,f.jsx)("div",{children:e.dialogsPage.messages.map((function(e){return(0,f.jsx)(j,{message:e.message},e.id)}))})}),(0,f.jsx)(M,{onSubmit:e.addNewMessage})]})},y=r(364),A=r(8931),D=r(1548),S=r(7781),w=function(e){(0,i.Z)(r,e);var n=(0,o.Z)(r);function r(e){var t;return(0,s.Z)(this,r),(t=n.call(this,e)).addNewMessage=function(e){t.props.SendMessage(e.newMessageBody)},t}return(0,t.Z)(r,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(b,{dialogsPage:this.props.dialogsPage,onNewMessageChange:this.onNewMessageChange,onSendMessageClick:this.onSendMessageClick,addNewMessage:this.addNewMessage}):(0,f.jsx)(A.l_,{to:"/login"})}}]),r}(a.Component),k=(0,S.qC)((0,y.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{SendMessage:function(n){e((0,u.X)(n))}}})),D.D)(w)},9086:function(e,n,r){r.d(n,{I:function(){return g},g:function(){return l}});var s=r(1413),t=r(5987),i=(r(2791),r(232)),o=r(184),a=["input","meta","child"],u=["input","meta"],d=["input","meta"],c=function(e){e.input;var n=e.meta,r=(e.child,(0,t.Z)(e,a)),s=n.touched&&n.error;return(0,o.jsxs)("div",{className:i.Z.formControl+" "+(s?i.Z.error:""),children:[(0,o.jsx)("div",{children:r.children}),(0,o.jsx)("div",{children:s&&(0,o.jsx)("span",{children:n.error})})]})},l=function(e){var n=e.input,r=(e.meta,(0,t.Z)(e,u));return(0,o.jsx)(c,(0,s.Z)((0,s.Z)({},e),{},{children:(0,o.jsx)("textarea",(0,s.Z)((0,s.Z)({},n),r))}))},g=function(e){var n=e.input,r=(e.meta,(0,t.Z)(e,d));return(0,o.jsx)(c,(0,s.Z)((0,s.Z)({},e),{},{children:(0,o.jsx)("input",(0,s.Z)((0,s.Z)({},n),r))}))}},1548:function(e,n,r){r.d(n,{D:function(){return m}});var s=r(1413),t=r(5671),i=r(3144),o=r(136),a=r(5716),u=r(2791),d=r(8931),c=r(364),l=r(184),g=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var n=function(n){(0,o.Z)(u,n);var r=(0,a.Z)(u);function u(){return(0,t.Z)(this,u),r.apply(this,arguments)}return(0,i.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,s.Z)({},this.props)):(0,l.jsx)(d.l_,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(g)(n)}},8938:function(e,n,r){r.d(n,{C:function(){return s},D:function(){return t}});var s=function(e){if(!e)return"Field is required"},t=function(e){return function(n){if(n&&n.length>e)return"Max length is ".concat(e," symbols")}}},232:function(e,n){n.Z={formControl:"FormControls_formControl__1L7zq",error:"FormControls_error__aTANB",formSummaryError:"FormControls_formSummaryError__12VA3"}}}]);
//# sourceMappingURL=165.cd9b2773.chunk.js.map