(this["webpackJsonpbot-friends"]=this["webpackJsonpbot-friends"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),a=n.n(r),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),d=(n(13),n(14),n(0)),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(d.jsxs)("div",{className:"tc grow custom-bg br3 pa3 ma2 dib bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(103*t,".svg"),alt:"Bot"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:c})]})]})},j=function(e){var t=e.bots,n=t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(d.jsx)("div",{children:n})},u=function(e){var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"Search Bots"})})},f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"4px solid black",height:"500px",borderRadius:"10px"},children:e.children})},p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onsearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={bots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.store),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({bots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.bots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"Bot Friends"}),Object(d.jsx)(u,{searchChange:this.onsearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(j,{bots:c})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),n}(c.Component),g=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))});a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(p,{})," "]})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.e7bc46b2.chunk.js.map