"use strict";(self.webpackChunkwebsite5=self.webpackChunkwebsite5||[]).push([[312],{3312:function(t,n,e){e.r(n),e.d(n,{default:function(){return L}});var r,o,a=e(168),i=e(9439),l=e(2791),d=e(6031),s=e(184);var c,m,p,x,u,f,h,b,g,w,y,k,v,Z,j,P,z=function(t){var n=t.url,r=t.icon,o=t.title,a=t.details;return(0,s.jsx)(C,{children:(0,s.jsx)("a",{href:n,target:"_blank ",children:(0,s.jsxs)(F,{children:[(0,s.jsx)("img",{src:e(1564)("./".concat(r,".webp")),alt:"my location"}),(0,s.jsx)("h5",{children:o}),(0,s.jsx)("p",{children:a})]})})})},C=d.ZP.div(r||(r=(0,a.Z)(["\n\ta {\n\t\ttext-decoration: none;\n\t}\n"]))),F=d.ZP.div(o||(o=(0,a.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: ",";\n\tpadding: 15px 0;\n\tborder-radius: 20px;\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\n\t-moz-box-shadow: 0 10px 6px -6px #777;\n\tbox-shadow: 0 10px 6px -6px #777;\n\t&:hover {\n\t\t-webkit-box-shadow: 0 15px 10px #777;\n\t\t-moz-box-shadow: 0 15px 10px #777;\n\t\tbox-shadow: 0 15px 10px #777;\n\t\t-webkit-transform: translateY(-5px);\n\t\t-moz-transform: translateY(-5px);\n\t\t-o-transform: translateY(-5px);\n\t\t-ms-transform: translateY(-5px);\n\t\ttransform: translateY(-5px);\n\t\topacity: 1;\n\t\tanimation: shake 300ms ease forwards;\n\t\t@keyframes shake {\n\t\t\t0% {\n\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t-moz-transform: rotate(0deg);\n\t\t\t\t-o-transform: rotate(0deg);\n\t\t\t\t-ms-transform: rotate(0deg);\n\t\t\t\ttransform: rotate(0deg);\n\t\t\t}\n\t\t\t33% {\n\t\t\t\t-webkit-transform: rotate(2deg);\n\t\t\t\t-moz-transform: rotate(2deg);\n\t\t\t\t-o-transform: rotate(2deg);\n\t\t\t\t-ms-transform: rotate(2deg);\n\t\t\t\ttransform: rotate(2deg);\n\t\t\t}\n\t\t\t66% {\n\t\t\t\t-webkit-transform: rotate(-2deg);\n\t\t\t\t-moz-transform: rotate(-2deg);\n\t\t\t\t-o-transform: rotate(-2deg);\n\t\t\t\t-ms-transform: rotate(-2deg);\n\t\t\t\ttransform: rotate(-2deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t-moz-transform: rotate(0deg);\n\t\t\t\t-o-transform: rotate(0deg);\n\t\t\t\t-ms-transform: rotate(0deg);\n\t\t\t\ttransform: rotate(0deg);\n\t\t\t\tanimation-play-state: paused;\n\t\t\t}\n\t\t}\n\t}\n\th5 {\n\t\tfont-size: clamp(15px, 7vw, 24px);\n\n\t\tcolor: ",";\n\t\tpadding-top: 30px;\n\t}\n\timg {\n\t\twidth: clamp(10px, 9.5vw, 45px);\n\t\theight: clamp(10px, 9.5vw, 45px);\n\t\topacity: 0.5;\n\t\t// object-position: 50% 50%;\n\t}\n\tp {\n\t\tfont-size: clamp(10px, 7vw, 20px);\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.body.container}),(function(t){return t.theme.text.color}),(function(t){return t.theme.text.p})),Y=[{icon:"location",title:"i live in",details:"austria, wien",url:"https://goo.gl/maps/DMgoFtsmsQTZFsHL6"},{icon:"tel",title:"call",details:"+43 67762733583",url:"tel:067762733583"},{icon:"whatsapp",title:"whatsapp",details:"send massage",url:"https://wa.me/4367762733583?text=Hello"},{icon:"email",title:"email",details:"Fbakhsheshi@ymail.com",url:"mailto:fbakhsheshi@ymail.com"}],L=function(t){var n=t.translate,r=(0,l.useState)(""),o=(0,i.Z)(r,2),a=o[0],d=o[1];return(0,s.jsx)(T,{children:(0,s.jsxs)(H,{children:[(0,s.jsx)(N,{}),(0,s.jsx)(S,{src:e(2709),alt:"contact symbol"}),(0,s.jsx)(_,{children:n("contact")}),(0,s.jsx)(q,{children:Y.map((function(t,e){return(0,s.jsx)(A,{style:{"--count":e},children:(0,s.jsx)(z,{url:t.url,icon:t.icon,title:n(t.title),details:n(t.details)})},e)}))}),(0,s.jsxs)(M,{style:{"--delay":"".concat(Y.length+1)},children:[(0,s.jsxs)(E,{children:[(0,s.jsxs)(B,{action:"https://formsubmit.co/fbakhsheshi@ymail.com",method:"POST",children:[(0,s.jsx)("h2",{children:n("contact info")}),(0,s.jsxs)(D,{children:[(0,s.jsx)(I,{name:"fName",type:"text",placeholder:n("first name"),required:!0}),(0,s.jsx)(I,{name:"lName",type:"text",placeholder:n("last name"),required:!0})]}),(0,s.jsx)(I,{name:"email",type:"email",id:"Email",placeholder:n("email"),onChange:function(t){d(t.target.value.trim())},required:!0}),(0,s.jsx)(O,{name:"massage",id:"exampleFormControlTextarea1",placeholder:n("massage"),required:!0,rows:5}),(0,s.jsx)(V,{value:"Validate",type:"submit",onClick:function(){var t=document.getElementById("Email");if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(String(t.innerHTML)))return alert("Please provide a valid email address"),!1;d(t.innerHTML),t.innerHTML=a},children:n("send")})]}),(0,s.jsxs)(W,{children:[(0,s.jsx)("a",{href:"https://www.linkedin.com/in/faramarz-b-82108a85",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("i",{className:"bi bi-linkedin"})}),(0,s.jsx)("a",{href:"https://github.com/Fary-dev",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("i",{className:"bi bi-github"})}),(0,s.jsx)("a",{about:"Facebook",href:"https://www.facebook.com/faramarz.bakhsheshi",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("i",{className:"bi bi-facebook"})})]})]}),(0,s.jsx)(Q,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42482.524724816816!2d16.38235912385544!3d48.280580053497275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d062cc1efac73%3A0x90e47d0364caad4c!2sFloridsdorf%2C%201210%20Wien!5e0!3m2!1sde!2sat!4v1656256904247!5m2!1sde!2sat",style:{border:"0"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"my location"})]})]})})},T=d.ZP.div(c||(c=(0,a.Z)(["\n\tbackground-color: ",";\n\toverflow: hidden;\n\tpadding: 0 10px;\n\tbox-sizing: border-box;\n\t@-webkit-keyframes autofill {\n\t\t0%,\n\t\t100% {\n\t\t\tcolor: #666;\n\t\t\tbackground: transparent;\n\t\t}\n\t}\n\n\tinput:-webkit-autofill {\n\t\t-webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */\n\t\t-webkit-animation-name: autofill;\n\t\t-webkit-animation-fill-mode: both;\n\t}\n"])),(function(t){return t.theme.body.background})),H=d.ZP.div(m||(m=(0,a.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: ",";\n\tmin-height: 100vh;\n\twidth: 100%;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n"])),(function(t){return t.theme.body.containerLight})),N=d.ZP.div(p||(p=(0,a.Z)(["\n\ttop: 0;\n\tdisplay: block;\n\theight: 185px;\n\twidth: 100%;\n"]))),S=d.ZP.img(x||(x=(0,a.Z)(["\n\tposition: absolute;\n\ttop: 95px;\n\twidth: clamp(43px, 4.2vw, 45px);\n\tfilter: invert(",");\n\topacity: ",";\n"])),(function(t){return t.theme.invert}),(function(t){return t.theme.opacity})),_=d.ZP.h5(u||(u=(0,a.Z)(["\n\tcolor: ",";\n\tposition: absolute;\n\ttop: clamp(145px, 7vw, 170px);\n\topacity: ",";\n"])),(function(t){return t.theme.text.color}),(function(t){return t.theme.opacity})),q=d.ZP.div(f||(f=(0,a.Z)(["\n\tposition: relative;\n\tdisplay: grid;\n\twidth: 100%;\n\tpadding: 0 25px;\n\tmax-width: 1400px;\n\tgap: 20px;\n\tgrid-template-rows: repeat(auto-fill, 1fr);\n\tgrid-template-columns: repeat(auto-fill, 1fr);\n\t@media (min-width: 750px) {\n\t\tgrid-template-rows: repeat(2, 1fr);\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\t@media (min-width: 1170px) {\n\t\tgrid-template-rows: repeat(1, 1fr);\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n\t@media (min-width: 1455px) {\n\t\tpadding: 0;\n\t}\n"]))),A=d.ZP.div(h||(h=(0,a.Z)(["\n\twidth: 100%;\n\topacity: 0;\n\tanimation: animated-contact-item 1s ease forwards;\n\tanimation-delay: calc(var(--count) * 200ms + 400ms);\n\t@keyframes animated-contact-item {\n\t\tfrom {\n\t\t\ttransform: translateY(200px);\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\ttransform: translateY(0px);\n\t\t\topacity: 1;\n\t\t}\n\t}\n"]))),M=d.ZP.div(b||(b=(0,a.Z)(["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: calc(100% - 53px);\n\t// justify-content: center;\n\t// align-items: center;\n\tmax-width: 1400px;\n\tmargin: 30px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: 20px;\n\theight: 1000px;\n\topacity: 0;\n\tanimation: animated-contact-container 1s ease forwards;\n\tanimation-delay: calc(var(--delay) * 200ms + 400ms);\n\n\t@keyframes animated-contact-container {\n\t\tfrom {\n\t\t\ttransform: translateY(200px);\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\ttransform: translateY(0px);\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t@media (min-width: 750px) {\n\t\tflex-direction: row;\n\t\theight: 100%;\n\t}\n"]))),E=d.ZP.div(g||(g=(0,a.Z)(["\n\tflex: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: ",";\n\tpadding: 20px;\n"])),(function(t){return t.theme.body.container})),B=d.ZP.form(w||(w=(0,a.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\th2 {\n\t\ttext-align: center;\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.text.color})),D=d.ZP.div(y||(y=(0,a.Z)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 20px;\n"]))),I=d.ZP.input(k||(k=(0,a.Z)(["\n\twidth: 100%;\n\tpadding: 8px;\n\tmargin: 10px 0;\n\tborder-radius: 10px;\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tcolor: ",";\n\t&:focus {\n\t\toutline: none;\n\t\tbackground-color: ",";\n\t\tborder-color: rgb(199, 172, 51);\n\t\tbox-shadow: 0 1 10px ",";\n\t\tcolor: ",";\n\t}\n\t&::placeholder {\n\t\tcolor: rgba(105, 105, 105, 0.5);\n\t\tfont-size: 0.8rem;\n\t\tpadding-left: 10px;\n\t}\n"])),(function(t){return t.theme.textField.background}),(function(t){return t.theme.textField.borderColor}),(function(t){return t.theme.text.color}),(function(t){return t.theme.textField.background}),(function(t){return t.theme.primaryColor}),(function(t){return t.theme.text.color})),O=d.ZP.textarea(v||(v=(0,a.Z)(["\n\tpadding: 8px;\n\tmargin: 10px 0;\n\tborder-radius: 10px;\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tcolor: ",";\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground-color: ",";\n\t\tborder-color: rgb(255, 209, 4);\n\t\tbox-shadow: 0 1 10px ",";\n\t\tcolor: ",";\n\t}\n\t&::placeholder {\n\t\tcolor: rgba(105, 105, 105, 0.5);\n\t\tfont-size: 0.8rem;\n\t\tpadding-left: 10px;\n\t}\n"])),(function(t){return t.theme.textField.background}),(function(t){return t.theme.textField.borderColor}),(function(t){return t.theme.text.color}),(function(t){return t.theme.body.containerLight}),(function(t){return t.theme.primaryColor}),(function(t){return t.theme.text.color})),Q=d.ZP.iframe(Z||(Z=(0,a.Z)(["\n\tflex: 50%;\n\tdisplay: block;\n\twidth: 100%;\n"]))),V=d.ZP.button(j||(j=(0,a.Z)(["\n\twidth: 40%;\n\tmargin: 20px 0;\n\tpadding: 5px 0;\n\tcolor: ",";\n\tbackground-color: ",";\n\tborder: 2px solid ",";\n\topacity: 1;\n\tborder-radius: 5px;\n\ttransition: 0.3s;\n\n\t&:hover {\n\t\tcolor: #000;\n\t\tbackground-color: ",";\n\t\tborder: 2px solid ",";\n\t}\n"])),(function(t){return t.theme.button.color}),(function(t){return t.theme.body.container}),(function(t){return t.theme.button.borderColor}),(function(t){return t.theme.primaryColor}),(function(t){return t.theme.primaryColor})),W=d.ZP.div(P||(P=(0,a.Z)(["\n\tdisplay: flex;\n\tjustify-content: end;\n\talign-items: center;\n\tgap: 20px;\n\n\ti {\n\t\tcolor: ",";\n\t\tfont-size: 25px;\n\t\ttransition: color 300ms;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"])),(function(t){return t.theme.text.color}),(function(t){return t.theme.primaryColor}))}}]);
//# sourceMappingURL=312.1b2f74b0.chunk.js.map