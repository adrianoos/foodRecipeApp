(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,c,t){},14:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var r=t(1),n=t.n(r),i=t(6),s=t.n(i),a=(t(12),t(5)),j=t.n(a),l=t(7),p=t(3),o=(t(14),t(2)),u=t.n(o),h=t(0),b=function(e){var c=e.title,t=e.calories,r=e.image,n=e.ingredients,i=e.type,s=e.time,a=e.link,j=e.country,l="unknown";return Object(h.jsxs)("div",{className:u.a.recipe,children:[Object(h.jsx)("img",{className:u.a.image,src:r,alt:""}),Object(h.jsx)("h1",{children:c}),Object(h.jsxs)("h2",{children:["Origin: ",j||l]}),Object(h.jsx)("h3",{children:i}),Object(h.jsxs)("p",{children:["Calories: ",t]}),Object(h.jsxs)("p",{children:["Preparation Time: ",s||l," mins"]}),Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Ingredients:"})}),Object(h.jsx)("ol",{children:n.map((function(e){return Object(h.jsx)("li",{children:e.text})}))}),Object(h.jsx)("a",{id:"link",href:a,children:"- Full Recipe web source -"})]})},d=function(){return Object(h.jsx)("div",{className:"emptyAnswerWrapper",children:Object(h.jsx)("div",{className:"emptyAnswer",children:Object(h.jsx)("h1",{children:"No recipes for your search"})})})},m=function(){var e=Object(r.useState)([]),c=Object(p.a)(e,2),t=c[0],n=c[1],i=Object(r.useState)(""),s=Object(p.a)(i,2),a=s[0],o=s[1],u=Object(r.useState)("chicken"),m=Object(p.a)(u,2),O=m[0],f=m[1];Object(r.useEffect)((function(){x()}),[O]);var x=function(){var e=Object(l.a)(j.a.mark((function e(){var c,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(O,"&app_id=").concat("e451a818","&app_key=").concat("8ce698c0d34fad3edc134c896ef01f29"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,n(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=t.map((function(e){return Object(h.jsx)(b,{title:e.recipe.label,country:e.recipe.cuisineType,type:e.recipe.mealType,time:e.recipe.totalTime,calories:Math.floor(e.recipe.calories),image:e.recipe.image,ingredients:e.recipe.ingredients,link:e.recipe.url},e.recipe.label)}));return Object(h.jsxs)("div",{classsName:"App",children:[Object(h.jsx)("div",{className:"label1",children:Object(h.jsx)("h1",{id:"text1",children:"Search for food recipes:"})}),Object(h.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),""!==a&&(f(a),o(""))},children:[Object(h.jsx)("input",{className:"search-bar",id:"searchBar",type:"text",value:a,onChange:function(e){o(e.target.value)}}),Object(h.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(h.jsx)("div",{className:"recipes",children:g.length?g:Object(h.jsx)(d,{})})]})};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},2:function(e,c,t){e.exports={recipe:"recipe_recipe__1DvQP",image:"recipe_image__3Ausm",infoLack:"recipe_infoLack__3rAHX"}}},[[16,1,2]]]);
//# sourceMappingURL=main.3ec80093.chunk.js.map