(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,a){},148:function(t,e,a){},16:function(t,e,a){},412:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(62),s=a.n(r),o=(a(80),a(2)),i=a(3),l=a(6),u=a(4),A=a(5),p=(a(82),a(415)),m=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"nav-container"},c.a.createElement(p.a,{to:"/"},c.a.createElement("img",{alt:"LOGO",src:a(86),className:"logo"}))))}}]),e}(c.a.Component),g=a(27),d=a(14),h=(a(16),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("button",{value:this.props.value,onClick:this.props.updateTag,className:"tag-button"},"#",this.props.name)}}]),e}(c.a.Component)),O=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"formatDate",value:function(t){var e=new Date(t),a=e.getMonth()+1,n=e.getDate(),c=e.getFullYear();return"".concat(c,"/").concat(a,"/").concat(n)}},{key:"render",value:function(){var t=this,e=this.props.tags.map(function(e,a){return c.a.createElement(h,{key:a,value:e.id,updateTag:t.props.updateTag,name:e.name})});return c.a.createElement("div",{className:"post-box"},c.a.createElement("h3",null,c.a.createElement(p.a,{to:"/Post/".concat(this.props.id),className:"post-title"},this.props.title)),c.a.createElement("span",null,this.formatDate(this.props.created_at)),e)}}]),e}(c.a.Component),C=a(7),b=a(28),v=a(416),f=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-box"},c.a.createElement("h3",{className:"search-box-title"},"Search Posts"),c.a.createElement("input",{type:"text",onChange:this.props.updateSearch,className:"search-bar",placeholder:"Search"}))}}]),e}(c.a.Component),j=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("button",{value:this.props.value,onClick:this.props.updateCategory,className:"category-button"},this.props.name)}}]),e}(c.a.Component),E=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.content.length<7e3?"3min read":"5min read";return c.a.createElement("div",{className:"featured-post-box"},c.a.createElement("h4",null,c.a.createElement(p.a,{to:"/Post/".concat(this.props.id),className:"post-title"},this.props.title)),c.a.createElement("p",null,"K-Sato / ",t))}}]),e}(c.a.Component),y=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("button",{className:"tag",value:this.props.value,onClick:this.props.updateTag},"#",this.props.name)}}]),e}(c.a.Component);function I(){var t=Object(g.a)(["\n        margin: 0 auto;\n        display: block;\n    "]);return I=function(){return t},t}var k=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).getPosts=function(){fetch("https://k-blog0130.herokuapp.com/en/api/v1/posts").then(function(t){return t.json()}).then(function(e){e.data.posts.map(function(t,a){return t.tags=e.data.post_tags[a]}),t.setState({posts:e.data.posts,categories:e.data.categories,tags:e.data.tags,post_tags:e.data.post_tags,loading:!1})})},t.state={posts:[],categories:[],post_tags:[],tags:[],search:"",category:0,tag:0,loading:!0},t.updateSearch=t.updateSearch.bind(Object(d.a)(Object(d.a)(t))),t.updateCategory=t.updateCategory.bind(Object(d.a)(Object(d.a)(t))),t.updateTag=t.updateTag.bind(Object(d.a)(Object(d.a)(t))),t}return Object(A.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"updateSearch",value:function(t){this.setState({search:t.target.value})}},{key:"updateCategory",value:function(t){this.setState({tag:0,category:parseInt(t.target.value)})}},{key:"updateTag",value:function(t){this.setState({tag:parseInt(t.target.value)})}},{key:"render",value:function(){var t=this,e=Object(C.css)(I()),a=this.state.posts.filter(function(e){var a=[];return e.tags.map(function(t){return a.push(t.id)}),0===t.state.category&&0===t.state.tag?e.title.toLowerCase().includes(t.state.search.toLowerCase()):0!==t.state.tag?a.includes(t.state.tag)&&e.title.toLowerCase().includes(t.state.search.toLowerCase()):e.category_id===t.state.category&&e.title.toLowerCase().includes(t.state.search.toLowerCase())}).map(function(e,a){return c.a.createElement(O,{key:a,id:e.id,title:e.title,content:e.context,image:e.image,category:e.category_id,tags:e.tags,updateTag:t.updateTag,updateCategory:t.updateCategory,created_at:e.created_at})}),n=this.state.categories.map(function(e,a){return c.a.createElement(j,{value:e.id,name:e.name,updateCategory:t.updateCategory,key:a})}),r=this.state.posts.slice(0,4).map(function(t,e){return c.a.createElement(E,{key:e,title:t.title,id:t.id,content:t.context})}),s=this.state.tags.map(function(e,a){return c.a.createElement(y,{key:a,value:e.id,name:e.name,updateTag:t.updateTag})}),o=!1===this.state.loading?c.a.createElement(j,{value:0,name:"All",updateCategory:this.updateCategory}):"",i=!1===this.state.loading?c.a.createElement("div",{className:"right-container"},c.a.createElement(f,{updateSearch:this.updateSearch}),c.a.createElement("h3",{className:"tag-list-title"},"Tag List"),s,c.a.createElement("h3",{className:"featured-posts-title"},"Featured Posts"),r):"";return c.a.createElement(v.a,{className:"container"},o,n,c.a.createElement(b.RingLoader,{css:e,sizeUnit:"px",size:80,color:"#E0E0E0",loading:this.state.loading}),c.a.createElement("div",{className:"post-list-container"},a),i)}}]),e}(c.a.Component),M=(a(146),a(148),a(68)),F=a.n(M),w=a(417),S=a(72),J=a.n(S),Z=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props,e=t.language,a=t.value;return c.a.createElement(w.a,{language:e,style:J.a,showLineNumbers:!0,ineNumberContainerStyle:!0},a)}}]),e}(c.a.PureComponent);function U(){var t=Object(g.a)(["\n        display: block;\n        margin: 0 auto;\n    "]);return U=function(){return t},t}Z.defaultProps={language:null};var x=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).getPosts=function(){var e=t.props.match.params.id;fetch("https://k-blog0130.herokuapp.com/en/api/v1/posts/".concat(e)).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data,loading:!1})})},t.state={data:{},loading:!0},t}return Object(A.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){this.getPosts()}},{key:"render",value:function(){var t=Object(C.css)(U());return c.a.createElement("div",{className:"post-container"},c.a.createElement(b.RingLoader,{css:t,sizeUnit:"px",size:80,color:"#F0F0F0",loading:this.state.loading}),c.a.createElement("h1",{className:"post-detail-title"},this.state.data.title),c.a.createElement(F.a,{source:this.state.data.context,renderers:{code:Z},className:"post-content"}))}}]),e}(c.a.Component),N=a(419),V=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N.a,{exact:!0,path:"/",component:k}),c.a.createElement(N.a,{path:"/Post/:id",component:x}))}}]),e}(c.a.Component),z=a(418),Q=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(A.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(z.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(V,null))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},74:function(t,e,a){t.exports=a(412)},80:function(t,e,a){},82:function(t,e,a){},86:function(t,e){t.exports="data:image/png;base64,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"}},[[74,2,1]]]);
//# sourceMappingURL=main.808dd9cb.chunk.js.map