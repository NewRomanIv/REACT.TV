(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(27),c=a.n(i),o=a(7),s=a(8),l=a(10),d=a(9),u=a(5),h={trending:"/REACT.TV",pageString:"/REACT.TV/page",page:"/page/:page",movieString:"/REACT.TV/movie",movie:"/REACT.TV/movie/:id",queue:"/queue",watched:"/watched"},j=a(11),p=a(28),g=a.n(p),v=a(0),m=function(){return Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)(j.c,{className:g.a.logoIMG,to:{pathname:"".concat(h.pageString,"/",1)},children:["React ",Object(v.jsx)("span",{className:g.a.TV,children:" .TV"})]})})},b=a(15),O=a(20),f=a.n(O),x=function(e){return b.trendingURL+b.API_KEY+"&page="+e},_=function(e,t){return b.searchRequestURL+b.API_KEY+"&query=".concat(t,"&page=").concat(e)},S={axiosSearchRequest:function(e,t){var a=_(t,e);return console.log(a),f.a.get(a)},axiosGetConfiguration:function(){return f.a.get(b.configurationURL+b.API_KEY)},axiosLoadTrend:function(e){var t=x(e);return console.log(t),f.a.get(t,{})},axiosMovieDetails:function(e){var t=b.movieURL+e+b.API_KEY;return f.a.get(t,{})},axiosGenreRequest:function(e){var t=b.genre+b.API_KEY;return f.a.get(t)}},M=a(45),w=a(3),y=a.n(w),N=(a(99),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={configuration:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.axiosGetConfiguration().then((function(t){return e.setState({configuration:t.data.images})})),S.axiosGenreRequest().then((function(e){}))}},{key:"render",value:function(){var e=h.trending,t=h.queue,a=h.watched,r=this.state.configuration;return this.props.onWidth<768?Object(v.jsx)(M.elastic,{right:!0,children:Object(v.jsxs)("ul",{className:y.a.wrapNav,children:[Object(v.jsx)("li",{className:y.a.HeaderMenuHome,children:Object(v.jsx)(j.c,{activeClassName:y.a.menuIsActiv,to:{pathname:"".concat(h.pageString,"/",1)},children:"HOME"})}),Object(v.jsx)("li",{className:y.a.HeaderMenu,children:Object(v.jsx)(j.c,{to:e,children:"My Libbary"})}),Object(v.jsxs)("div",{className:y.a.hiddenHeaderMenu,children:[Object(v.jsx)(j.c,{activeClassName:y.a.menuIsActiv,to:{pathname:a,state:{configuration:r}},children:"Watched"}),Object(v.jsx)(j.c,{activeClassName:y.a.menuIsActiv,to:{pathname:t,state:{configuration:r}},children:"Queue"})]})]})}):Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)("ul",{className:y.a.wrapNav,children:[Object(v.jsx)("li",{className:y.a.HeaderMenuHome,children:Object(v.jsx)(j.c,{exact:!0,activeClassName:y.a.menuIsActiv,to:{pathname:"".concat(h.pageString,"/",1)},children:"HOME"})}),Object(v.jsx)("li",{className:y.a.HeaderMenu,children:Object(v.jsx)("a",{href:"./",children:"My Libbary"})}),Object(v.jsxs)("div",{className:y.a.hiddenHeaderMenu,children:[Object(v.jsx)(j.c,{activeClassName:y.a.menuIsActiv,to:{pathname:a,state:{configuration:r}},children:"Watched"}),Object(v.jsx)(j.c,{activeClassName:y.a.menuIsActiv,to:{pathname:t,state:{configuration:r}},children:"Queue"})]})]})})}}]),a}(r.a.Component)),C=a(31),A=a(46),L=a.n(A);a(115),a(116);function I(e){var t=e.backdrop_path;return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:t,alt:""})})}var T=a(4),G=a.n(T),k=function(e){var t=e.location,a=e.id,n=e.poster_path,r=e.title,i=e.vote_average,c=e.release_date,o=e.configuration;e.search;n=n?o.secure_base_url+"w500"+n:b.noImage;return Object(v.jsx)("li",{className:G.a.container,children:Object(v.jsxs)("div",{className:G.a.containerSVG,children:[Object(v.jsx)("div",{className:G.a.title,children:Object(v.jsx)(j.c,{className:G.a.imgSVGPlayBtn,onClick:function(){var e=JSON.parse(localStorage.getItem("watched"))||[];e.map((function(e){return e.id})).includes(a)||e.push({id:a,poster_path:n,title:r,vote_average:i,release_date:c}),localStorage.setItem("watched",JSON.stringify(e))},to:{pathname:"".concat(h.movieString,"/").concat(a),search:""},children:Object(v.jsx)("svg",{width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",children:Object(v.jsxs)("g",{id:"surface1",children:[Object(v.jsx)("path",{d:"M 34.589844 24.160156 L 21.398438 15.136719 C 20.984375 14.835938 19.890625 14.835938 19.804688 15.976562 L 19.804688 34.023438 C 19.902344 35.164062 21.015625 35.183594 21.398438 34.863281 L 34.589844 25.839844 C 34.929688 25.632812 35.398438 24.796875 34.589844 24.160156 Z M 21.84375 32.101562 L 21.84375 17.898438 L 32.207031 25 Z M 21.84375 32.101562 "}),Object(v.jsx)("path",{d:"M 25 1.074219 C 11.804688 1.074219 1.074219 11.804688 1.074219 25 C 1.074219 38.195312 11.804688 48.925781 25 48.925781 C 38.195312 48.925781 48.925781 38.195312 48.925781 25 C 48.925781 11.804688 38.195312 1.074219 25 1.074219 Z M 25 46.882812 C 12.929688 46.882812 3.117188 37.070312 3.117188 25 C 3.117188 12.929688 12.929688 3.117188 25 3.117188 C 37.070312 3.117188 46.882812 12.929688 46.882812 25 C 46.882812 37.070312 37.070312 46.882812 25 46.882812 Z M 25 46.882812 "})]})})})}),Object(v.jsx)("button",{className:t!==h.watched?G.a.btnForSvg:G.a.dNone,onClick:function(){if(t!==h.queue){var e=JSON.parse(localStorage.getItem("queue"))||[];e.map((function(e){return e.id})).includes(a)||e.push({id:a,poster_path:n,title:r,vote_average:i,release_date:c}),localStorage.setItem("queue",JSON.stringify(e))}else if(a){var o=JSON.parse(localStorage.getItem("queue"))||[];o.push({id:a,poster_path:n,title:r,vote_average:i,release_date:c}),localStorage.setItem("queue",JSON.stringify(o.filter((function(e){return e.id!==a})))),window.location.reload()}},children:Object(v.jsx)("svg",{className:G.a.imgSVG,children:Object(v.jsx)("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"})})}),Object(v.jsxs)("div",{className:G.a.contForSvgStar,children:[Object(v.jsx)("svg",{className:G.a.imgSVGStar,id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(v.jsx)("path",{d:"M405.33,512a21.32,21.32,0,0,1-12.4-4L256,410.21,119.07,508A21.34,21.34,0,0,1,86,485.48l39.74-158.95L6.25,207.08a21.33,21.33,0,0,1,15.08-36.42H177.21L236,13.84a21.33,21.33,0,0,1,39.95,0l58.81,156.82H490.67a21.33,21.33,0,0,1,15.08,36.42L386.29,326.54,426,485.48A21.33,21.33,0,0,1,405.33,512ZM256,362.66a21.33,21.33,0,0,1,12.4,4l102.18,73L342,325.17a21.33,21.33,0,0,1,5.61-20.26l91.58-91.58H320a21.34,21.34,0,0,1-20-13.84L256,82.09,212,199.49a21.34,21.34,0,0,1-20,13.84H72.84l91.58,91.58A21.33,21.33,0,0,1,170,325.17L141.42,439.62l102.18-73A21.33,21.33,0,0,1,256,362.66Z"})}),Object(v.jsx)("div",{className:G.a.voteAverage,children:i})]}),Object(v.jsx)("img",{className:G.a.mainIMG,src:n,alt:r})]})})},H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).settings={dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:1,focusOnSelect:!0,pauseOnHover:!0,accessibility:!0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arrMovies,a=e.configuration,n=e.location,r=e.search;return Object(v.jsxs)("div",{children:[this.props.onWidth>1200&&Object(v.jsx)("div",{className:G.a.containerSlider,children:Object(v.jsx)(L.a,Object(C.a)(Object(C.a)({className:G.a.sliderBody},this.settings),{},{children:t.length>0&&t.map((function(e){var t=e.id,n=e.backdrop_path;return n&&Object(v.jsx)(I,{backdrop_path:a.secure_base_url+"/w500/"+n},t)}))}))}),Object(v.jsx)("div",{className:G.a.mainTrending,children:Object(v.jsx)("div",{className:G.a.items,children:Object(v.jsx)("ul",{className:G.a.itemsWrap,children:t.length>0&&t.map((function(e){var t=e.id,i=e.poster_path,c=e.title,o=e.vote_average,s=e.release_date;return Object(v.jsx)(k,{id:t,poster_path:i,title:c,vote_average:o,release_date:s,configuration:a,search:r,location:n},t)}))})})})]})}}]),a}(n.Component);k.defaultProps={title:"???",vote_average:"???",release_date:"???"};var R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={width:window.innerWidth,localStorageQueueArr:[],arrMov:[],configuration:{}},e.updSize=function(){e.setState({width:window.innerWidth})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updSize);var e=localStorage.getItem("queue");e&&this.setState({arrMov:JSON.parse(e)});var t=this.props.location.state.configuration;this.setState({configuration:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.arrMov,r=e.configuration;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:y.a.wrapHeader,children:[Object(v.jsx)(m,{}),Object(v.jsx)(N,{onWidth:t})]})}),Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:G.a.wrapQueueWathcedMain,children:0!==a.length&&Object(v.jsx)(H,{location:this.props.location.pathname,arrMovies:a,configuration:r})})})]})}}]),a}(n.Component),V=a.p+"static/media/pusheen.6ea98444.jpg",q={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},status:{fontSize:46}};function F(){return Object(v.jsxs)("div",{style:q.container,children:[Object(v.jsx)("h1",{style:q.status,children:"404"}),Object(v.jsx)("img",{src:V,alt:"404 page",width:"400"}),Object(v.jsx)("p",{children:Object(v.jsx)(j.b,{to:{pathname:"".concat(h.pageString,"/",1)},children:"HOME"})})]})}var W=a(47),D=a.n(W),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onRenderSearchRequest(e.state.inputValue),e.setState({inputValue:""})},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(v.jsx)(n.Fragment,{children:Object(v.jsx)("form",{className:D.a.searchForm,onSubmit:this.handleSubmit,children:Object(v.jsx)("input",{type:"text",name:"query",value:e,onChange:this.handleChange,placeholder:"Quick search..."})})})}}]),a}(n.Component),P=a(48),z=a.n(P),U=(a(135),a(49)),B=a.n(U);function Q(){return Object(v.jsx)("div",{className:B.a.spinner,children:Object(v.jsx)(z.a,{type:"ThreeDots",color:"#FFD700",height:180,width:180,timeout:3e3})})}var J=a(50),Z=a.n(J),K=(a(43),a(51)),Y=a.n(K);function X(e){return Y.a.parse(e)}var $=a(52),ee=a.n($),te=a(24),ae=a.n(te),ne=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={galleryMovies:[],configuration:{},loading:!1,error:!1,width:window.innerWidth,page:1},e.pagesData={total_pages:0},e.updSize=function(){e.setState({width:window.innerWidth})},e.scroll=function(){window.scrollTo({top:0,behavior:"smooth"})},e.handleChangeQuery=function(t){e.props.history.push({pathname:h.pageString+"/1",search:"&query=".concat(t)})},e.loadSearchMovies=function(t){e.setState({loading:!0,error:!1,page:e.props.match.params.page});var a=e.props.match.params.page;a=a||e.state.page,S.axiosSearchRequest(t,a).then((function(t){e.pagesData.total_pages=t.data.total_pages,e.setState((function(){return{galleryMovies:t.data.results}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})})),e.scroll()},e.changeCurrentPage=function(t){var a=e.props.location.search;e.props.history.push({pathname:h.pageString+"/"+t,search:a})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount_1"),this.getConfiguration(),console.log("componentDidMount_2");var e=X(this.props.location.search).query;e?this.loadSearchMovies(e):this.loadGalleryMovies(),console.log("componentDidMount_3"),window.addEventListener("resize",this.updSize)}},{key:"componentDidUpdate",value:function(e,t){if(!this.state.loading){var a=X(e.location.search).query,n=X(this.props.location.search).query,r=e.match.params.page,i=this.props.match.params.page;n||r===i?a===n&&r===i||(n?this.loadSearchMovies(n):this.loadGalleryMovies()):this.loadGalleryMovies()}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"getConfiguration",value:function(){var e=this;return S.axiosGetConfiguration().then((function(t){return e.setState({configuration:t.data.images})}))}},{key:"loadGalleryMovies",value:function(){var e=this;this.setState({loading:!0,error:!1,page:this.props.match.params.page});var t=this.props.match.params.page;t=t||this.state.page,S.axiosLoadTrend(t).then((function(t){e.pagesData.total_pages=t.data.total_pages,e.setState({galleryMovies:t.data.results})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})})),this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.galleryMovies,a=e.width,r=e.loading,i=e.error,c=e.page,o=e.configuration,s=this.props.location.search;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:y.a.wrapHeader,children:[Object(v.jsx)(m,{}),Object(v.jsx)(N,{onWidth:a}),Object(v.jsx)(E,{onRenderSearchRequest:this.handleChangeQuery})]})}),Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:ae.a.wrapMain,children:[i&&Object(v.jsx)(F,{}),r&&Object(v.jsx)(Q,{}),!r&&0===t.length&&Object(v.jsx)(F,{}),!r&&t.length>0&&Object(v.jsx)(H,{location:this.props.location.pathname,arrMovies:t,configuration:o,onWidth:a,search:s}),!i&&t.length>0&&Object(v.jsx)("div",{className:ee.a.pagination_box,children:Object(v.jsx)(Z.a,{currentPage:Number(c),totalSize:10*this.pagesData.total_pages,sizePerPage:10,changeCurrentPage:this.changeCurrentPage,theme:"border-bottom"})})]})}),Object(v.jsx)("footer",{})]})}}]),a}(n.Component),re=a(18),ie=a.n(re),ce=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).posterPathURL=function(t){var a=e.props.configuration.secure_base_url;return t?a+"w500"+t:h.noImage},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.poster_path,n=e.popularity,r=e.release_date,i=e.runtime,c=e.production_countries,o=e.genres,s=e.budget,l=e.revenue,d=e.overview,u=e.homepage;return Object(v.jsxs)("div",{className:ie.a.mainMovie,children:[Object(v.jsxs)("div",{className:ie.a.wrapSection,children:[Object(v.jsxs)("section",{className:ie.a.leftBar,children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("img",{className:ie.a.poster,src:this.posterPathURL(a),alt:t})]}),Object(v.jsxs)("aside",{className:ie.a.righteBar,children:[Object(v.jsx)("h2",{children:"Overview:"}),Object(v.jsx)("p",{children:d}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{className:ie.a.homepageBtn,href:u,target:"_blank",rel:"noreferrer",children:"to watch go to the homepage of the movie"})})]})]}),Object(v.jsx)("table",{className:ie.a.table,children:Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Popularity:"}),Object(v.jsx)("td",{children:n})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Release:"}),Object(v.jsx)("td",{children:r})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Runtime:"}),Object(v.jsx)("td",{children:i})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Countries:"}),Object(v.jsx)("td",{children:c.map((function(e){return e.name})).join(", ")})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Genres:"}),Object(v.jsx)("td",{children:o.map((function(e){return e.name})).join(", ")})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Budget:"}),Object(v.jsx)("td",{children:Intl.NumberFormat("ru-RU").format(s)})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Revenue:"}),Object(v.jsx)("td",{children:Intl.NumberFormat("ru-RU").format(l)})]})]})})]})}}]),a}(n.Component);ce.defaultProps={title:"???",popularity:"???",release_date:"???",runtime:"???",production_countries:[{name:"???"}],genres:[{name:"???"}],budget:"???",revenue:"???",overview:"???"};var oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={film:"",error:!1,loading:!0,configuration:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),S.axiosMovieDetails(this.props.match.params.id).then((function(t){e.setState({film:t.data})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})})),S.axiosGetConfiguration().then((function(t){return e.setState({configuration:t.data.images})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.film,a=e.error,r=e.loading,i=e.configuration;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)("div",{className:y.a.wrapHeader,children:Object(v.jsx)(m,{})})}),Object(v.jsxs)("main",{children:[a&&Object(v.jsx)(F,{}),!r&&Object(v.jsx)("div",{className:ae.a.wrapMain,children:t&&Object(v.jsx)(ce,{data:t,configuration:i})}),r&&Object(v.jsx)(Q,{})]}),Object(v.jsx)("footer",{})]})}}]),a}(n.Component),se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={width:window.innerWidth,localStorageQueueArr:[],arrMov:[],configuration:{}},e.updSize=function(){e.setState({width:window.innerWidth})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updSize);var e=localStorage.getItem("watched");e&&this.setState({arrMov:JSON.parse(e)});var t=this.props.location.state.configuration;this.setState({configuration:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.arrMov,r=e.configuration;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:y.a.wrapHeader,children:[Object(v.jsx)(m,{}),Object(v.jsx)(N,{onWidth:t})]})}),Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:G.a.wrapQueueWathcedMain,children:0!==a.length&&Object(v.jsx)(H,{location:this.props.location.pathname,arrMovies:a,configuration:r})})})]})}}]),a}(n.Component),le=(a(137),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:h.trending+h.page,component:ne}),Object(v.jsx)(u.a,{path:h.movie,component:oe}),Object(v.jsx)(u.a,{path:h.queue,component:R}),Object(v.jsx)(u.a,{path:h.watched,component:se}),Object(v.jsx)(u.a,{component:F})]})})}}]),a}(n.Component));c.a.render(Object(v.jsx)(j.a,{children:Object(v.jsx)(le,{})}),document.querySelector("#root"))},15:function(e){e.exports=JSON.parse('{"API_KEY":"?api_key=1cd465b7a64b6b5614a6c0670e5663f3","trendingURL":"https://api.themoviedb.org/3/trending/all/week","configurationURL":"https://api.themoviedb.org/3/configuration","searchRequestURL":"https://api.themoviedb.org/3/search/movie","movieURL":"https://api.themoviedb.org/3/movie/","noImage":"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg","genre":"https://api.themoviedb.org/3/genre/movie/list"}')},18:function(e,t,a){e.exports={mainMovie:"Movie_mainMovie__14flJ",poster:"Movie_poster__1cW13",table:"Movie_table__Ofxo5",wrapSection:"Movie_wrapSection__2uWYB",righteBar:"Movie_righteBar__3AMDH",homepageBtn:"Movie_homepageBtn__2EoVZ"}},24:function(e,t,a){e.exports={wrapMain:"Main_wrapMain__1xGOK"}},28:function(e,t,a){e.exports={logoIMG:"Logo_logoIMG__2FGEp",TV:"Logo_TV__2_ORI"}},3:function(e,t,a){e.exports={wrapHeader:"Navigation_wrapHeader__1sQ97",wrapNav:"Navigation_wrapNav__2Im0C",HeaderMenu:"Navigation_HeaderMenu__2Pqmu",HeaderMenuHome:"Navigation_HeaderMenuHome__3NTGF",hiddenHeaderMenu:"Navigation_hiddenHeaderMenu__1jNMV",menuIsActiv:"Navigation_menuIsActiv__1H8Du"}},4:function(e,t,a){e.exports={containerSlider:"TrendingMovies_containerSlider__xGEhf",mainTrending:"TrendingMovies_mainTrending__3psS2",itemsWrap:"TrendingMovies_itemsWrap__1iYF2",container:"TrendingMovies_container__1jpxZ",containerSVG:"TrendingMovies_containerSVG__1Ga5Q",mainIMG:"TrendingMovies_mainIMG__1GiVe",title:"TrendingMovies_title__2CV03",imgSVGPlayBtn:"TrendingMovies_imgSVGPlayBtn__1-qae",btnForSvg:"TrendingMovies_btnForSvg__27R98",contForSvgStar:"TrendingMovies_contForSvgStar__g19M2",imgSVG:"TrendingMovies_imgSVG__2rKAc",imgSVGStar:"TrendingMovies_imgSVGStar__nDRBl",voteAverage:"TrendingMovies_voteAverage__C3pL9",dNone:"TrendingMovies_dNone__2FnGj",wrapQueueWathcedMain:"TrendingMovies_wrapQueueWathcedMain__3UFys"}},47:function(e,t,a){e.exports={searchForm:"Search_searchForm__2Xsph"}},49:function(e,t,a){e.exports={spinner:"Spinner_spinner__3wde3"}},52:function(e,t,a){e.exports={pagination_box:"Pagination_pagination_box__1ZIqV"}},99:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.9f47ce81.chunk.js.map