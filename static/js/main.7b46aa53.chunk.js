(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(18),i=a.n(o),s=a(9),l=a(4),u=a(5),m=a(7),g=a(6),h=a(19),d=a(68),j=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.onInputValue=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.onSubmitSearchForm=function(t){t.preventDefault();var a=e.state.inputValue;e.props.onSubmitForm(a),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{id:Object(d.a)(),onSubmit:this.onSubmitSearchForm,className:"SearchForm",children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"inputValue",value:e,id:Object(d.a)(),onChange:this.onInputValue})]})})})}}]),a}(r.Component);var b=function(e){var t=e.webformatURL,a=e.alt,r=e.largeImageURL,c=e.id,o=e.onImageClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image","data-largeimageurl":r,"data-id":c,onClick:function(e){o({url:e.target.dataset.largeimageurl,alt:e.target.alt})}})})};var p=function(e){var t=e.images,a=e.onImageClick,r=e.showModalOnClick;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)("li",{className:"ImageGalleryItem",onClick:r,children:Object(n.jsx)(b,{webformatURL:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL,id:e.id,onImageClick:a})},e.id)}))})};var f=function(e){var t=e.text,a=e.buttonAction;return Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)("button",{type:"button",onClick:a,className:"Button",children:t})})},O=a(20),v=a.n(O),y=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"loaderContainer",children:Object(n.jsx)(v.a,{type:"Puff",color:"#0F7A8F",height:50,width:50,timeout:3e3})})}}]),a}(r.Component),x=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pressEscBtn=function(t){console.log(t),"Escape"===t.code&&e.props.onCloseModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.pressEscBtn)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.pressEscBtn),this.props.onCloseModal()}},{key:"render",value:function(){var e=this.props,t=e.onCloseModal,a=e.children;return Object(n.jsx)("div",{className:"Overlay",onClick:t,children:Object(n.jsx)("div",{className:"Modal",children:a})})}}]),a}(r.Component),I=a(2),w=a.n(I);function k(e){var t=e.largeImage,a=t.alt,r=t.url;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("img",{src:r,alt:a})})}k.protoType={largeImage:w.a.exact({alt:w.a.string.isRequired,url:w.a.string.isRequired}).isRequired};var S=k,C=a(21),L=a.n(C),F=function(e,t){return L.a.get("https://pixabay.com/api/?key=".concat("17822127-e9a9a0a140ac0dca1ff979a25","&q=").concat(e,"&image_type=photo&page=").concat(t,"&per_page=12")).then((function(e){return e.data}))},R=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],largeImageURL:null,loading:!1,error:null,keyword:"",page:1},e.onSubmitForm=function(t){e.setState({keyword:t,page:1,images:[]})},e.saveLargeImage=function(t){e.setState({largeImageURL:t})},e.hideLargeImage=function(){e.setState({largeImageURL:null})},e.showLargeImg=function(){return e.state.largeImageURL},e.fetchImage=function(){var t=e.state,a=t.keyword,n=t.page;e.setState({loading:!0}),F.fetchImageWithKeyword(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.keyword!==this.state.keyword&&this.fetchImage(),this.state.page>2&&t.page!==this.state.page&&this.scrollDown()}},{key:"scrollDown",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,r=e.error,c=e.largeImageURL;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{onSubmitForm:this.onSubmitForm}),t.length>0&&Object(n.jsx)(p,{images:t,onImageClick:this.saveLargeImage}),c&&Object(n.jsx)(x,{onCloseModal:this.hideLargeImage,children:Object(n.jsx)(S,{largeImage:this.showLargeImg()})}),t.length>0&&Object(n.jsx)(f,{text:"Load more",buttonAction:this.fetchImage}),a&&Object(n.jsx)(y,{}),r&&Object(n.jsx)("p",{children:"ERROR"})]})}}]),a}(r.Component);a(65);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7b46aa53.chunk.js.map