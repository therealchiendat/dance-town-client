(this["webpackJsonpdancetown-client"]=this["webpackJsonpdancetown-client"]||[]).push([[0],{201:function(e,t,n){e.exports=n(361)},206:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(72),s=n.n(c),o=n(22),i=n(190),l=n.n(i),u=(n(206),n(11)),m=n.n(u),h=n(18),d=n(34),p=n(35),f=n(38),g=n(37),b=n(84),v=n(47),E=n(379),k=n(375),w=n(376),y=n(107);n(213);function O(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))}var x=n(377),S=n(111),L=n(369),j=n(370),C=(n(214),function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleNoteClick=function(e){e.preventDefault(),a.props.history.push(e.currentTarget.getAttribute("href"))},a.state={isLoading:!0,notes:[]},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.isAuthenticated){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.notes();case 5:t=e.sent,this.setState({notes:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:this.setState({isLoading:!1});case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"notes",value:function(){return x.a.get("notes","/notes")}},{key:"renderNotesList",value:function(e){var t=this;return[{}].concat(e).map((function(e,n){return 0!==n?r.a.createElement(S.a,{key:e.noteId,href:"/challenges/".concat(e.noteId),onClick:t.handleNoteClick,header:e.content.trim().split("\n")[0]},"Created: "+new Date(e.createdAt).toLocaleString()):r.a.createElement(S.a,{key:"new",href:"/challenges/new",onClick:t.handleNoteClick},r.a.createElement("h4",null,r.a.createElement("b",null,"\uff0b")," Create a new challenge"))}))}},{key:"renderLander",value:function(){return r.a.createElement("div",{className:"lander"},r.a.createElement("h1",null,"Home Town"),r.a.createElement("p",null,"This is the Home page for all your dance need"),r.a.createElement("div",null,r.a.createElement(o.Link,{to:"/login",className:"btn btn-info btn-lg"},"Login"),r.a.createElement(o.Link,{to:"/signup",className:"btn btn-success btn-lg"},"Signup")))}},{key:"renderNotes",value:function(){return r.a.createElement("div",{className:"notes"},r.a.createElement(L.a,null,"Your Challenges"),r.a.createElement(j.a,null,!this.state.isLoading&&this.renderNotesList(this.state.notes)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},this.props.isAuthenticated?this.renderNotes():this.renderLander())}}]),n}(a.Component)),I=n(93),N=n(372),A=n(373),F=n(380),D=n(45),P=n(371),T=n(177),R=(n(313),function(e){var t=e.isLoading,n=e.text,a=e.loadingText,c=e.className,s=void 0===c?"":c,o=e.disabled,i=void 0!==o&&o,l=Object(D.a)(e,["isLoading","text","loadingText","className","disabled"]);return r.a.createElement(P.a,Object.assign({className:"LoaderButton ".concat(s),disabled:i||t},l),t&&r.a.createElement(T.a,{glyph:"refresh",className:"spinning"}),t?a:n)});var B=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).statusChangeCallback=function(e){"connected"===e.status?a.handleResponse(e.authResponse):a.handleError(e)},a.checkLoginState=function(){window.FB.getLoginStatus(a.statusChangeCallback)},a.handleClick=function(){window.FB.login(a.checkLoginState,{scope:"public_profile,email"})},a.state={isLoading:!0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){!function t(){window.FB?e():setTimeout(t,300)}()}));case 2:this.setState({isLoading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){alert(e)}},{key:"handleResponse",value:function(){var e=Object(h.a)(m.a.mark((function e(t){var n,a,r,c,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.accessToken,r=t.expiresIn,c=1e3*r+(new Date).getTime(),s={email:n},this.setState({isLoading:!0}),e.prev=4,e.next=7,b.a.federatedSignIn("facebook",{token:a,expires_at:c},s);case 7:o=e.sent,this.setState({isLoading:!1}),this.props.onLogin(o),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),this.setState({isLoading:!1}),this.handleError(e.t0);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(R,{block:!0,bsSize:"large",bsStyle:"primary",className:"FacebookButton",text:"Login with Facebook",onClick:this.handleClick,disabled:this.state.isLoading})}}]),n}(a.Component),_=(n(314),function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleFbLogin=function(){a.props.userHasAuthenticated(!0)},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,b.a.signIn(a.state.email,a.state.password);case 5:a.props.userHasAuthenticated(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:""},a}return Object(p.a)(n,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B,{onLogin:this.handleFbLogin}),r.a.createElement("hr",null),r.a.createElement(N.a,{controlId:"email",bsSize:"large"},r.a.createElement(A.a,null,"Email"),r.a.createElement(F.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(N.a,{controlId:"password",bsSize:"large"},r.a.createElement(A.a,null,"Password"),r.a.createElement(F.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(R,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in\u2026"})))}}]),n}(a.Component)),z=n(374),U=(n(315),function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleFbLogin=function(){a.props.userHasAuthenticated(!0)},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,b.a.signUp({username:a.state.email,password:a.state.password});case 5:n=e.sent,a.setState({newUser:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0.message);case 12:a.setState({isLoading:!1});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),a.handleConfirmationSubmit=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,b.a.confirmSignUp(a.state.email,a.state.confirmationCode);case 5:return e.next=7,b.a.signIn(a.state.email,a.state.password);case 7:a.props.userHasAuthenticated(!0),a.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:"",confirmPassword:"",confirmationCode:"",newUser:null},a}return Object(p.a)(n,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"validateConfirmationForm",value:function(){return this.state.confirmationCode.length>0}},{key:"renderConfirmationForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},r.a.createElement(N.a,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(A.a,null,"Confirmation Code"),r.a.createElement(F.a,{autoFocus:!0,type:"tel",value:this.state.confirmationCode,onChange:this.handleChange}),r.a.createElement(z.a,null,"Please check your email for the code.")),r.a.createElement(R,{block:!0,bsSize:"large",disabled:!this.validateConfirmationForm(),type:"submit",isLoading:this.state.isLoading,text:"Verify",loadingText:"Verifying\u2026"}))}},{key:"renderForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B,{onLogin:this.handleFbLogin}),r.a.createElement("hr",null),r.a.createElement(N.a,{controlId:"email",bsSize:"large"},r.a.createElement(A.a,null,"Email"),r.a.createElement(F.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(N.a,{controlId:"password",bsSize:"large"},r.a.createElement(A.a,null,"Password"),r.a.createElement(F.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(N.a,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(A.a,null,"Confirm Password"),r.a.createElement(F.a,{value:this.state.confirmPassword,onChange:this.handleChange,type:"password"})),r.a.createElement(R,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Signup",loadingText:"Signing up\u2026"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},null===this.state.newUser?this.renderForm():this.renderConfirmationForm())}}]),n}(a.Component)),H=n(48),G=n(378);function M(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(h.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(Date.now(),"-").concat(t.name),e.next=3,G.a.vault.put(n,t,{contentType:t.type});case 3:return a=e.sent,e.abrupt("return",a.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}var K=5e7,W={REGION:"us-east-1",BUCKET:"dance-town-app-api-dev-0-attachmentsbucket-1m6dsoqfa81qq"},$={REGION:"us-east-1",URL:"https://1z9h7oowzl.execute-api.us-east-1.amazonaws.com/dev-0"},J={REGION:"us-east-1",USER_POOL_ID:"us-east-1_FmaY7lyDe",APP_CLIENT_ID:"l21rmjvnvl6ov8l9b23f7q7if",IDENTITY_POOL_ID:"us-east-1:23fdb785-602c-4591-97b6-f687b3be51fe"},V={FB:"192446828747386"};n(342);function Q(){var e=Object(a.useRef)(null),t=Object(v.k)(),n=Object(a.useState)(""),c=Object(H.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(!1),l=Object(H.a)(i,2),u=l[0],d=l[1];function p(){return(p=Object(h.a)(m.a.mark((function n(a){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!(e.current&&e.current.size>K)){n.next=4;break}return alert("Please pick a file smaller than ".concat(K/1e6," MB.")),n.abrupt("return");case 4:if(d(!0),n.prev=5,!e.current){n.next=12;break}return n.next=9,M(e.current);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:return r=n.t0,n.next=16,f({content:s,attachment:r});case 16:t.push("/"),n.next=23;break;case 19:n.prev=19,n.t1=n.catch(5),q(n.t1),d(!1);case 23:case"end":return n.stop()}}),n,null,[[5,19]])})))).apply(this,arguments)}function f(e){return x.a.post("notes","/notes",{body:e})}return r.a.createElement("div",{className:"NewNote"},r.a.createElement("form",{onSubmit:function(e){return p.apply(this,arguments)}},r.a.createElement(N.a,{controlId:"content"},r.a.createElement(F.a,{value:s,componentClass:"textarea",onChange:function(e){return o(e.target.value)}})),r.a.createElement(N.a,{controlId:"file"},r.a.createElement(A.a,null,"Attachment"),r.a.createElement(F.a,{onChange:function(t){e.current=t.target.files[0]},type:"file"})),r.a.createElement(R,{block:!0,bsStyle:"primary",bsSize:"large",disabled:!(s.length>0),type:"submit",isLoading:u,text:"Create",loadingText:"Creating\u2026"})))}n(343);function X(){var e=Object(a.useRef)(null),t=Object(v.m)().id,n=Object(v.k)(),c=Object(a.useState)(null),s=Object(H.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(""),u=Object(H.a)(l,2),d=u[0],p=u[1],f=Object(a.useState)(!1),g=Object(H.a)(f,2),b=g[0],E=g[1],k=Object(a.useState)(!1),w=Object(H.a)(k,2),y=w[0],O=w[1];function S(e){return x.a.put("notes","/notes/".concat(t),{body:e})}function L(){return(L=Object(h.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(e.current&&e.current.size>K)){t.next=4;break}return alert("Please pick a file smaller than ".concat(K/1e6," MB.")),t.abrupt("return");case 4:if(E(!0),t.prev=5,!e.current){t.next=10;break}return t.next=9,M(e.current);case 9:r=t.sent;case 10:return t.next=12,S({content:d,attachment:r||o.attachment});case 12:n.push("/"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),q(t.t0),E(!1);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})))).apply(this,arguments)}function j(){return x.a.del("notes","/notes/".concat(t))}function C(){return(C=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),window.confirm("Are you sure you want to delete this challenge?")){e.next=4;break}return e.abrupt("return");case 4:return O(!0),e.prev=5,e.next=8,j();case 8:n.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),q(e.t0),O(!1);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return x.a.get("notes","/notes/".concat(t))}function n(){return(n=Object(h.a)(m.a.mark((function t(){var n,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:if(n=t.sent,a=n.content,!(r=n.attachment)){t.next=9;break}return t.next=8,G.a.vault.get(r);case 8:n.attachmentURL=t.sent;case 9:p(a),i(n),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),q(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),r.a.createElement("div",{className:"Challenges"},o&&r.a.createElement("form",{onSubmit:function(e){return L.apply(this,arguments)}},r.a.createElement(N.a,{controlId:"content"},r.a.createElement(F.a,{value:d,componentClass:"textarea",onChange:function(e){return p(e.target.value)}})),o.attachment&&r.a.createElement(N.a,null,r.a.createElement(A.a,null,"Attachment"),r.a.createElement(F.a.Static,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o.attachmentURL},o.attachment.replace(/^\w+-/,"")))),o.attachment&&r.a.createElement("video",{width:"320",height:"240",controls:!0},r.a.createElement("source",{src:o.attachmentURL,type:"video/mp4"})),r.a.createElement(N.a,{controlId:"file"},!o.attachment&&r.a.createElement(A.a,null,"Attachment"),r.a.createElement(F.a,{onChange:function(t){e.current=t.target.files[0]},type:"file"})),r.a.createElement(R,{block:!0,type:"submit",bsSize:"large",bsStyle:"primary",isLoading:b,disabled:!(d.length>0)},"Save"),r.a.createElement(R,{block:!0,bsSize:"large",bsStyle:"danger",onClick:function(e){return C.apply(this,arguments)},isLoading:y},"Delete")))}var Z=function(e){var t=e.component,n=e.props,a=Object(D.a)(e,["component","props"]);return r.a.createElement(v.d,Object.assign({},a,{render:function(e){return r.a.createElement(t,Object.assign({},e,n))}}))},ee=function(e){var t=e.component,n=e.props,a=Object(D.a)(e,["component","props"]);return r.a.createElement(v.d,Object.assign({},a,{render:function(e){return n.isAuthenticated?r.a.createElement(t,Object.assign({},e,n)):r.a.createElement(v.c,{to:"/login?redirect=".concat(e.location.pathname).concat(e.location.search)})}}))};var te=function(e){var t=e.component,n=e.props,a=Object(D.a)(e,["component","props"]),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i"),a=n.exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}("redirect");return r.a.createElement(v.d,Object.assign({},a,{render:function(e){return n.isAuthenticated?r.a.createElement(v.c,{to:""===c||null===c?"/":c}):r.a.createElement(t,Object.assign({},e,n))}}))},ne=function(e){var t=e.childProps;return r.a.createElement(v.g,null,r.a.createElement(Z,{path:"/",exact:!0,component:C,props:t}),r.a.createElement(te,{path:"/login",exact:!0,component:_,props:t}),r.a.createElement(te,{path:"/signup",exact:!0,component:U,props:t}),r.a.createElement(ee,{exact:!0,path:"/challenges/new"},r.a.createElement(Q,null)),r.a.createElement(ee,{exact:!0,path:"/challenges/:id"},r.a.createElement(X,null)),r.a.createElement(v.d,{component:O}))},ae=(n(344),function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.signOut();case 2:a.userHasAuthenticated(!1),a.props.history.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={isAuthenticated:!1,isAuthenticating:!0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadFacebookSDK(),e.prev=1,e.next=4,b.a.currentAuthenticatedUser();case 4:this.userHasAuthenticated(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),"not authenticated"!==e.t0&&alert(e.t0);case 10:this.setState({isAuthenticating:!1});case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadFacebookSDK",value:function(){window.fbAsyncInit=function(){window.FB.init({appId:V.FB,autoLogAppEvents:!0,xfbml:!0,version:"v3.1"})},function(e,t,n){var a,r=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(a,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App container"},r.a.createElement(E.a,{fluid:!0,collapseOnSelect:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Brand,null,r.a.createElement(o.Link,{to:"/"},"DanceTown")),r.a.createElement(E.a.Toggle,null)),r.a.createElement(E.a.Collapse,null,r.a.createElement(k.a,{pullRight:!0},this.state.isAuthenticated?r.a.createElement(w.a,{onClick:this.handleLogout},"Logout"):r.a.createElement(a.Fragment,null,r.a.createElement(y.LinkContainer,{to:"/signup"},r.a.createElement(w.a,null,"Signup")),r.a.createElement(y.LinkContainer,{to:"/login"},r.a.createElement(w.a,null,"Login")))))),r.a.createElement(ne,{childProps:e}))}}]),n}(a.Component)),re=Object(v.o)(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(51).a.configure({Auth:{mandatorySignIn:!0,region:J.REGION,userPoolId:J.USER_POOL_ID,identityPoolId:J.IDENTITY_POOL_ID,userPoolWebClientId:J.APP_CLIENT_ID},Storage:{region:W.REGION,bucket:W.BUCKET,identityPoolId:J.IDENTITY_POOL_ID},API:{endpoints:[{name:"notes",endpoint:$.URL,region:$.REGION}]}}),s.a.render(r.a.createElement(o.BrowserRouter,{history:l()({basename:"/dance-town-client"})},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[201,1,2]]]);
//# sourceMappingURL=main.26b0519a.chunk.js.map