(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{30:function(e,c,s){},36:function(e,c,s){},38:function(e,c,s){},39:function(e,c,s){},40:function(e,c,s){},41:function(e,c,s){},46:function(e,c,s){},47:function(e,c,s){},48:function(e,c,s){},49:function(e,c,s){},50:function(e,c,s){},51:function(e,c,s){},52:function(e,c,s){},54:function(e,c,s){"use strict";s.r(c);var t=s(2),n=s.n(t),i=s(14),j=s.n(i),r=(s(30),s(8)),a=s(5),l=s(10),o=s(3),b=s(9),d="SEARCH",h="ADDPOST",O=(s(36),s(1)),u=function(e){var c=Object(b.b)(),s=Object(t.useRef)();Object(t.useEffect)((function(){e.postopen&&s.current.focus()}));return Object(O.jsx)("div",{className:"addpost-container",children:Object(O.jsxs)("div",{className:"addpost-div",children:[Object(O.jsxs)("div",{className:"title-btn",children:[Object(O.jsx)("p",{children:"Create a Post"}),Object(O.jsx)("button",{onClick:e.closetxtarea,className:"close-btn",children:"X"})]}),Object(O.jsxs)("div",{className:"author",children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU",alt:""}),Object(O.jsx)("p",{className:"name",children:"Youssef Mahmoud"})]}),Object(O.jsx)("div",{className:"post-text",children:Object(O.jsx)("textarea",{ref:s,name:"",id:"",cols:"30",rows:"10"})}),Object(O.jsx)("button",{onClick:function(){c({type:h,post:s.current.value})},className:"post-btn",children:"Post"})]})})},x=(s(38),function(e){var c=Object(b.c)((function(e){return e.posts}));return console.log(c),Object(O.jsx)("div",{className:"posts-container",children:c&&c.map((function(e){return Object(O.jsxs)("div",{className:"single-post",children:[Object(O.jsxs)("div",{className:"img-name",children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU",alt:""}),Object(O.jsx)("p",{className:"name",children:" Youssef Mahmoud"})]}),Object(O.jsxs)("p",{children:[e," "]}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsxs)("button",{children:[Object(O.jsx)(o.h,{})," Like"]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(o.a,{})," comment"]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(o.j,{})," share"]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(o.k,{})," send"]})]})]},e)}))})}),m=(s(39),function(e){var c=Object(t.useRef)(null),s=Object(t.useState)([]),n=Object(l.a)(s,2),i=n[0],j=(n[1],Object(t.useState)(!1)),r=Object(l.a)(j,2),a=r[0],b=r[1];return Object(O.jsxs)("div",{className:"center-content",children:[Object(O.jsxs)("div",{className:"make-post",children:[Object(O.jsxs)("div",{className:"avatar-input",children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU",alt:""}),Object(O.jsx)("input",{placeholder:"click to post",onClick:function(){b(!0)},ref:c,type:"text"})]}),Object(O.jsxs)("div",{className:"media-adding",children:[Object(O.jsxs)("button",{children:[Object(O.jsx)(o.g,{})," photo"]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(o.f,{})," video"]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(o.m,{})," Events"]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(o.r,{})," Write Article"]})]})]}),Object(O.jsx)(x,{allposts:i}),a&&Object(O.jsx)(u,{closetxtarea:function(){b(!1)},postopen:a})]})}),p=s(4),f=(s(40),s(24)),v=(s(41),function(e){var c=Object(b.c)((function(e){return e.search}));return Object(O.jsxs)("div",{className:"search-history-container ".concat(e.searchdrop&&"history-anime"),children:[Object(O.jsx)("p",{children:"search history "}),Object(O.jsx)("div",{className:"search-result",children:c&&c.map((function(e){return Object(O.jsx)(p.b,{to:"/dachboard",children:e},e)}))})]})}),N=function(){var e=Object(t.useRef)(null),c=Object(t.useRef)(null),s=(Object(t.useRef)(null),Object(t.useRef)(null)),n=Object(t.useRef)(null),i=Object(t.useState)(!1),j=Object(l.a)(i,2),r=j[0],a=j[1],h=Object(t.useState)(!1),u=Object(l.a)(h,2),x=u[0],m=u[1];window.onresize=function(){window.innerWidth<880?(e.current.style.display="none",c.current.style.display="flex"):(e.current.style.display="block",c.current.style.display="flex")};var N=Object(b.b)();return Object(O.jsxs)("header",{className:"dach-header container-fluid",children:[r&&Object(O.jsx)("div",{onClick:function(){a(!r),e.current.classList.remove("full-width-search"),c.current.style.display="flex",window.innerWidth,n.current.classList.remove("show-search-only"),window.innerWidth<360&&(e.current.style.display="none")},className:"cover-page"}),Object(O.jsxs)("nav",{className:"dach-navbar",children:[Object(O.jsxs)("div",{ref:n,className:"leftside-nav",children:[Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("img",{src:"https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg",alt:""})}),Object(O.jsx)("button",{ref:s,className:"search-btn",onClick:function(){c.current.style.display="none",a(!0),e.current.classList.add("show-search"),e.current.classList.add("full-width-search"),e.current.style.display="block",window.innerWidth<519&&n.current.classList.add("show-search-only"),e.current.focus()},children:Object(O.jsx)(f.a,{})}),Object(O.jsx)("input",{className:"hide-input",onClick:function(){a(!0),c.current.style.display="none",e.current.classList.add("full-width-search"),n.current.classList.add("search-div-full"),r&&n.current.classList.remove("show-search-only")},onKeyDown:function(c){return function(c){"Enter"===c.key&&(N({type:d,searchtext:e.current.value}),e.current.value="")}(c)},ref:e,type:"search",placeholder:"search for jab,skills,companies..."}),r&&Object(O.jsx)(v,{searchdrop:r})]}),Object(O.jsx)("button",{onClick:function(){x?(c.current.classList.remove("menu-active"),m(!1)):(c.current.classList.add("menu-active"),m(!0))},className:"show-menu",children:Object(O.jsx)(o.n,{})}),Object(O.jsxs)("ul",{ref:c,className:"rightside-nav",children:[Object(O.jsx)("li",{className:"text-center",children:Object(O.jsxs)(p.b,{to:"/",children:[Object(O.jsx)(o.l,{className:"icons "}),"Home"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(p.b,{to:"/",children:[Object(O.jsx)(o.i,{className:"icons "}),"MyNetWork"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(p.b,{to:"/",children:[Object(O.jsx)(o.c,{className:"icons  "}),"Jobs"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(p.b,{to:"/",children:[Object(O.jsx)(o.p,{className:" icons  "}),"Messaging"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(p.b,{to:"/",children:[Object(O.jsx)(o.q,{className:" icons  "}),"Notifications"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(p.b,{to:"/",children:[Object(O.jsx)(o.e,{className:"icons"}),"Me"]})}),Object(O.jsxs)("div",{className:"work-job-div",children:[Object(O.jsxs)("button",{children:[Object(O.jsx)(o.d,{className:"icons"})," ",Object(O.jsx)("span",{children:"work"})]}),Object(O.jsxs)(p.b,{to:"/sign",children:[Object(O.jsx)("span",{children:Object(O.jsx)(o.b,{className:"icons"})}),"post a Job"]})]})]})]})]})},g=(s(46),function(){return Object(O.jsx)("div",{className:"left-content-container",children:Object(O.jsxs)("div",{className:"small-info",children:[Object(O.jsx)("img",{src:"https://www.mrdesigner.pt/stuleeng/2018/08/o-que-e-o-front-end-e-qual-a-sua-funcao.jpg",alt:""}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU",alt:""}),Object(O.jsx)("h5",{children:"Youssef Mahmoud"}),Object(O.jsx)("p",{children:"MyEamil@gamil.com"})]}),Object(O.jsxs)("p",{children:["Who viewed your account ",Object(O.jsx)("span",{children:"33"})]}),Object(O.jsxs)("p",{children:["Views of your post ",Object(O.jsx)("span",{children:"43"})]})]})})}),y=(s(47),s(48),function(){return Object(O.jsx)("div",{className:"right-content-container",children:Object(O.jsxs)("div",{className:"right-div",children:[Object(O.jsxs)("div",{className:"link",children:[Object(O.jsx)("img",{src:"https://i0.wp.com/opportunitycell.com/wp-content/uploads/2020/11/2020.132_BAM_CA_10-free-short-courses-to-upskill_940x485.jpg?fit=940%2C485&ssl=1",alt:""}),Object(O.jsxs)("div",{className:"comp-info",children:[Object(O.jsx)("p",{className:"comp-name",children:"Free Courses Online"}),Object(O.jsx)("p",{className:"comp-type",children:"Company \u2022 E-Learning"}),Object(O.jsx)("button",{className:"follow-btn",children:"+ Follow"})]})]}),Object(O.jsxs)("div",{className:"link",children:[Object(O.jsx)("img",{src:"https://www.oberlo.com/media/1603897950-job.jpg",alt:""}),Object(O.jsxs)("div",{className:"comp-info",children:[Object(O.jsx)("p",{className:"comp-name",children:"Learn to Work"}),Object(O.jsx)("p",{className:"comp-type",children:"Company \u2022 E-Learning"}),Object(O.jsx)("button",{className:"follow-btn",children:"+ Follow"})]})]}),Object(O.jsxs)("div",{className:"link",children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR3lXnanlfJ00EaqqoFxEpS6xP_y-Vy4yiNwQ0QMK2X9V-hISj7VeTANJqMUoIXII3m4&usqp=CAU",alt:""}),Object(O.jsxs)("div",{className:"comp-info",children:[Object(O.jsx)("p",{className:"comp-name",children:"Hiring co"}),Object(O.jsx)("p",{className:"comp-type",children:"Company \u2022 Work"}),Object(O.jsx)("button",{className:"follow-btn",children:"+ Follow"})]})]})]})})}),w=function(){return Object(O.jsxs)("div",{className:"dach container-fluid",children:[Object(O.jsx)(N,{}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-2 col-md-4 col-sm-12",children:Object(O.jsx)(g,{})}),Object(O.jsx)("div",{className:"col-lg-7 col-md-4 col-sm-12",children:Object(O.jsx)(m,{})}),Object(O.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-12",children:Object(O.jsx)(y,{})})]})]})},k=(s(49),s(50),function(){return Object(O.jsxs)("nav",{className:"container global-nav",children:[Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("img",{src:"https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png",alt:""})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(p.b,{to:"/join",children:"Join Now"}),Object(O.jsx)(p.b,{to:"/signin",children:"Sign In"})]})]})}),L=function(){return Object(O.jsxs)("div",{className:"home-container container",children:[Object(O.jsx)(k,{}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-lg-6 welcome-col col-md-6 col-sm-12",children:[Object(O.jsx)("h2",{children:"Welcome to your"}),Object(O.jsx)("h2",{children:"professional community"}),Object(O.jsxs)("div",{className:"links",children:[Object(O.jsxs)(p.b,{to:"/",children:["Search for a job ",Object(O.jsx)(o.o,{})]}),Object(O.jsxs)(p.b,{to:"/",children:["Find a person you know ",Object(O.jsx)(o.o,{})]}),Object(O.jsxs)(p.b,{to:"/",children:["Learn a new skill ",Object(O.jsx)(o.o,{})]})]})]}),Object(O.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 cover-img"})]})]})},C=s(16),M=(s(51),function(e){return Object(O.jsxs)("div",{className:"join-container container-fluid",children:[Object(O.jsx)("header",{className:"join-header",children:Object(O.jsx)("img",{src:"https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png",alt:""})}),Object(O.jsxs)("div",{className:"form",children:[Object(O.jsxs)("form",{onSubmit:function(c){return function(c){c.preventDefault(),console.log("sub"),e.history.replace("/dachboard")}(c)},children:[Object(O.jsx)("label",{htmlFor:"useremail",children:"Email:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"just click continue",type:"email",id:"useremail"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"pass",children:"Password (6 or more characters):"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",id:"pass"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"submit",children:"Continue"}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"text-center",children:"or"}),Object(O.jsxs)("div",{className:"regis-links",children:[Object(O.jsxs)(p.b,{to:"/withgoogle",children:[Object(O.jsx)(C.b,{className:"m-2 fs-2"})," Join with Google"]}),Object(O.jsxs)(p.b,{to:"/withapple",children:[Object(O.jsx)(C.a,{className:"m-2 fs-2"})," Join with Apple"]})]}),Object(O.jsxs)("div",{className:"sign text-center",children:["Aready have an account?",Object(O.jsx)(p.b,{to:"/signin",children:"Sign in"})]})]}),Object(O.jsxs)("h5",{className:"text-center",children:["Looking to create a page for a business?",Object(O.jsx)(p.b,{to:"/help",children:"Get help"})]})]})]})}),F=(s(52),function(e){var c=Object(t.useState)({useremail:"",password:""}),s=Object(l.a)(c,2),n=s[0],i=s[1],j=function(e){var c=n;c[e.target.id]=e.target.value,i(c)};return Object(O.jsxs)("div",{className:"signin-container container-fluid",children:[Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("img",{src:"https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png",alt:""})}),Object(O.jsxs)("div",{className:"form",children:[Object(O.jsxs)("form",{onSubmit:function(c){return function(c){c.preventDefault(),e.history.replace("dachboard")}(c)},children:[Object(O.jsx)("h2",{children:"Sign in"}),Object(O.jsx)("h5",{children:"Stay updated"}),Object(O.jsx)("label",{htmlFor:"useremail",children:"Eamil:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"just click sign in button",id:"useremail",onChange:function(e){return j(e)},type:"email"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"pass",children:"Password:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{id:"password",onChange:function(e){return j(e)},type:"password"}),Object(O.jsx)("br",{}),Object(O.jsx)(p.b,{to:"/forgetpass",children:"forget password?"}),Object(O.jsx)("button",{children:"Sign in"})]}),Object(O.jsxs)("div",{className:"new-to-linked text-center",children:["New to LinkedIn ? ",Object(O.jsx)(p.b,{to:"/join",children:"Join now"})]})]})]})}),S=function(e){return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsxs)(a.c,{children:[Object(O.jsx)(a.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(L,{})}}),Object(O.jsx)(a.a,{path:"/join",render:function(e){return Object(O.jsx)(M,Object(r.a)({},e))}}),Object(O.jsx)(a.a,{path:"/signin",render:function(e){return Object(O.jsx)(F,Object(r.a)({},e))}}),Object(O.jsx)(a.a,{path:"/dachboard",render:function(){return Object(O.jsx)(w,{})}})]})})},A=(s(53),s(25)),J=s(21),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{search:[],posts:[]},c=arguments.length>1?arguments[1]:void 0;return c.type===d?Object(r.a)(Object(r.a)({},e),{},{search:[].concat(Object(J.a)(e.search),[c.searchtext])}):c.type===h?Object(r.a)(Object(r.a)({},e),{},{posts:[].concat(Object(J.a)(e.posts),[c.post])}):e},W=Object(A.a)(q);j.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(p.a,{children:Object(O.jsx)(b.a,{store:W,children:Object(O.jsx)(S,{})})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.0f4a5e5d.chunk.js.map