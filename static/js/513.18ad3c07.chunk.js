"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[513],{221:function(n,t,e){e.d(t,{r:function(){return g}});var i,r,o,c,a,u=e(168),p=e(731),s=e(934),d=s.Z.div(i||(i=(0,u.Z)(["\n    min-height: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    margin-bottom: 10px;\n\n    &:hover {\n        scale: 1.1;\n    }\n"]))),f=s.Z.p(r||(r=(0,u.Z)(["\n    font-size: 40px;\n    margin-top: 0;\n    margin-bottom: 20px;\n    color: darkblue;\n"]))),h=(0,s.Z)(p.OL)(o||(o=(0,u.Z)(["\n    text-decoration: none;\n"]))),l=s.Z.img(c||(c=(0,u.Z)(["\n    margin-bottom: 20px;\n"]))),m=s.Z.p(a||(a=(0,u.Z)(["\n    font-size: 30px;\n    margin-top: 0;\n    margin-bottom: 20px;\n    color: darkblue;\n"]))),x=e(184),g=function(n){var t=n.film,e=n.state;return(0,x.jsx)(d,{children:(0,x.jsxs)(h,{to:"/movies/".concat(t.id),state:e,children:[(0,x.jsx)(l,{src:"https://image.tmdb.org/t/p/w780".concat(t.poster_path),alt:t.title,height:"300px"}),(0,x.jsx)(f,{children:t.title}),(0,x.jsx)(m,{children:t.release_date})]})})}},513:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var i,r,o,c,a,u,p=e(885),s=e(791),d=e(689),f=e(390),h=e(168),l=e(934),m=l.Z.div(i||(i=(0,h.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    text-align: center;\n    margin-left: -330px;\n    margin-top: 80px;\n"]))),x=l.Z.div(r||(r=(0,h.Z)(["\n    list-style: none;\n    width: 250px;\n    text-align: center;\n"]))),g=e(221),b=e(184),v=function(n){var t=n.query,e=(0,s.useState)([]),i=(0,p.Z)(e,2),r=i[0],o=i[1],c=(0,d.TH)();return(0,s.useEffect)((function(){t&&(0,f.bI)(t).then((function(n){o(n.results)}))}),[t]),(0,b.jsx)(m,{children:null===r||void 0===r?void 0:r.map((function(n){return(0,b.jsx)(x,{children:(0,b.jsx)(g.r,{film:n,state:{from:c}})},n.id)}))})},y=e(731),Z=e(719),j=l.Z.form(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-left: 340px;\n"]))),k=l.Z.button(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=l.Z.input(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;  \n  }\n"]))),_=(0,l.Z)(Z.wnI)(u||(u=(0,h.Z)(["\n  width: 3em;\n  height: 3em;\n  padding: 4px;\n"]))),z=function(){var n,t=(0,y.lr)(),e=(0,p.Z)(t,2),i=e[0],r=e[1],o=null!==(n=i.get("query"))&&void 0!==n?n:"";return(0,b.jsxs)("div",{children:[(0,b.jsxs)(j,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.searchQuery.value;""!==t&&(r({query:t}),n.currentTarget.reset())},children:[(0,b.jsx)(w,{type:"text",name:"searchQuery"}),(0,b.jsx)(k,{type:"submit",children:(0,b.jsx)(_,{})})]}),o&&(0,b.jsx)(v,{query:o}),(0,b.jsx)(d.j3,{})]})}},390:function(n,t,e){e.d(t,{Bt:function(){return u},KS:function(){return r},MX:function(){return o},bI:function(){return c},y:function(){return a}});var i="54cbc8dcef3d5a725aabc637b24978ab",r=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(n){return n.json()}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i)).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat(i)).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i)).then((function(n){return n.json()}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=513.18ad3c07.chunk.js.map