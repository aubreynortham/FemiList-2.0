(this["webpackJsonpfemilist-2.0"]=this["webpackJsonpfemilist-2.0"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(14),i=s.n(r),l=s.p+"static/media/blob-2.9265f747.svg",n=s.p+"static/media/characters.89b18cab.gif",o=s.p+"static/media/friends.e23795a6.gif",d=s.p+"static/media/convos.419434ef.gif",h=s(0);function m(){return Object(h.jsxs)("section",{className:"bechdel",children:[Object(h.jsxs)("div",{className:"bechdel__header",children:[Object(h.jsx)("img",{className:"bechdel__header-blob",src:l,alt:""}),Object(h.jsxs)("h2",{className:"bechdel__header-title",id:"bechdel-test",children:["What is the ",Object(h.jsx)("br",{}),"Bechdel Test?"]})]}),Object(h.jsxs)("ul",{className:"bechdel__list",children:[Object(h.jsxs)("li",{className:"bechdel__list-item",children:[Object(h.jsx)("img",{className:"bechdel__gif",src:n,alt:"illustrated network of female characters"}),Object(h.jsxs)("div",{className:"bechdel__list-item-content",children:[Object(h.jsx)("div",{className:"bechdel__list-counter",children:"1"}),Object(h.jsx)("p",{children:"There must be at least two named female characters in the film"})]})]}),Object(h.jsxs)("li",{className:"bechdel__list-item reverse",children:[Object(h.jsx)("img",{className:"bechdel__gif",src:o,alt:"illustrated conversation between two women"}),Object(h.jsxs)("div",{className:"bechdel__list-item-content",children:[Object(h.jsx)("div",{className:"bechdel__list-counter",children:"2"}),Object(h.jsx)("p",{children:"The two(+) female characters have dialog with each other"})]})]}),Object(h.jsxs)("li",{className:"bechdel__list-item",children:[Object(h.jsx)("img",{className:"bechdel__gif",src:d,alt:"illustrated character conversations"}),Object(h.jsxs)("div",{className:"bechdel__list-item-content",children:[Object(h.jsx)("div",{className:"bechdel__list-counter",children:"3"}),Object(h.jsx)("p",{children:"Their conversation is about something other than a man"})]})]}),Object(h.jsx)("li",{className:"bechdel__recap",children:"Seems like a low bar, but according to the Bechdel Test API's results, nearly half of all movies could not pass the test."}),Object(h.jsxs)("li",{className:"bechdel__recap",children:["It's a simple checklist developed by cartoonist ",Object(h.jsx)("span",{className:"highlight",children:"\xa0Alison Bechdel\xa0"})," used to highlight gender disparity in film and other media. The test is a great tool to measure not just the number of female characters on the screen, but to illustrate how often popular media fail to include any female character development or female-driven narratives. The practice points to a problematic gender norm that women are only defined by their relationship to men, and inherently lack their own value."]}),Object(h.jsxs)("li",{className:"bechdel__recap",children:["To echo a commonly quoted sentiment ... ",Object(h.jsx)("br",{}),"Here's to strong multidimensional women \u2014 may we know them, may we be them, may we amplify them with consumer dollars and viewership power.*",Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"bechdel__disclaimer",children:"*creative liberties were taken"})]})]}),Object(h.jsx)("div",{className:"bechdel__button-wrapper",children:Object(h.jsx)("a",{className:"button",href:"#search-films",children:"Back to Search"})})]})}function j(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("p",{className:"footer__attributions",children:["Website by ",Object(h.jsx)("a",{href:"https://github.com/aubreynortham/FemiList-2.0",children:"Aubrey"}),Object(h.jsx)("span",{className:"footer__separator",children:"\u2022"}),"Animated illustrations by ",Object(h.jsx)("a",{href:"https://storyset.com",children:"Storyset"})," ","& ",Object(h.jsx)("a",{href:"https://lordicon.com",children:"Lordicon"})]})})}var b=s(3),u=s(5),_=s.n(u),p=s.p+"static/media/blob-1.66f443ea.svg",f=s.p+"static/media/film.8804ae64.gif",O=s.p+"static/media/arrow-down.6159ca94.svg",g=s.p+"static/media/star.3ef8d13d.svg",x=s.p+"static/media/star-filled.582cf9c3.svg";function v(e){var t=e.movie,s=Object(a.useState)(!1),c=Object(b.a)(s,2),r=c[0],i=c[1];return Object(h.jsxs)("article",{className:"result",children:[Object(h.jsxs)("div",{className:"result__header",children:[Object(h.jsx)("img",{src:t.poster,alt:"".concat(t.title," poster"),className:"result__image ".concat(r?" expanded":"")}),Object(h.jsx)("div",{className:"result__header-bg".concat(r?" expanded":"")}),Object(h.jsx)("h3",{className:"result__title",children:function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value.endsWith(", The")&&(t.value="The ".concat(t.value.substring(0,t.value.length-5))),t.value}(t.title)}),Object(h.jsxs)("p",{className:"result__rating",children:["Bechdel Rating",Object(h.jsxs)("span",{className:"srOnly",children:[" ",t.rating," out of 3"]})]}),Object(h.jsxs)("div",{className:"result__stars",children:[Object(h.jsx)("img",{src:t.rating>0?x:g,alt:t.rating>0?"filled star":"unfilled star",className:"result__star".concat(t.rating>0?"":" empty")}),Object(h.jsx)("img",{src:t.rating>1?x:g,alt:t.rating>1?"filled star":"unfilled star",className:"result__star".concat(t.rating>1?"":" empty")}),Object(h.jsx)("img",{src:t.rating>2?x:g,alt:t.rating>2?"filled star":"unfilled star",className:"result__star".concat(t.rating>2?"":" empty")})]}),Object(h.jsx)("button",{type:"button","aria-expanded":r,"aria-controls":r?t.id:null,onClick:function(){return i(!r)},className:"result__button".concat(r?" expanded":""),children:Object(h.jsx)("img",{src:O,alt:"expand movie content"})})]}),r&&Object(h.jsxs)("div",{className:"result__expanded",id:t.id,children:[Object(h.jsxs)("p",{className:"result__total-overview",children:[0===t.rating&&"This movie does not even have two named female characters.",1===t.rating&&"There are at least two named female characters but they do not share any dialogue with each other.",2===t.rating&&"There are at least two female characters who share dialogue with each other, but their only dialogue is about a man.",3===t.rating&&"This movie passes full Bechdel test criteria."]}),Object(h.jsxs)("p",{className:"result__stats",children:[t.year,"\xa0\xa0|\xa0\xa0","Not Rated"!==t.rated?"Rated ".concat(t.rated):t.rated,"\xa0\xa0|\xa0\xa0 IMDb ",t.imdbRating,"/10"]}),Object(h.jsx)("p",{className:"result__plot",children:t.plot}),t.genre.split(", ").length>0&&Object(h.jsx)("ul",{className:"result__genre-tags",children:t.genre.split(", ").map((function(e,t){return Object(h.jsx)("li",{className:"result__genre-tag",children:e},t)}))})]})]})}function N(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),i=Object(b.a)(r,2),l=i[0],n=i[1],o=Object(a.useState)(!1),d=Object(b.a)(o,2),m=d[0],j=d[1],u=Object(a.useState)(""),O=Object(b.a)(u,2),g=O[0],x=O[1],N=Object(a.useState)(!1),y=Object(b.a)(N,2),w=y[0],T=y[1],S=Object(a.useState)([]),k=Object(b.a)(S,2),B=k[0],R=k[1],A=[],I="".concat("https://serene-gorge-48466.herokuapp.com/","http://bechdeltest.com/api/v1/getMoviesByTitle?title=").concat(s.replace(/\s/,"+")),P=function(e,t){_.a.get("".concat("https://omdbapi.com?i=","tt").concat(t.imdbid).concat("&apikey=567ccae1")).then((function(a){return 200===a.status&&a.data.Poster&&(t.poster=a.data.Poster,t.genre=a.data.Genre,t.imdbRating=a.data.imdbRating,t.rated=a.data.Rated,t.plot=a.data.Plot,t.imdbVotes=a.data.imdbVotes,A.push(t),A.length===e.length&&(R(A.sort((function(e,t){return parseFloat(e.imdbVotes.replace(/,/g,""))>parseFloat(t.imdbVotes.replace(/,/g,""))?-1:1})).slice(0,10)),n(s),j(!1))),a.data}))};return Object(h.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),x(""),T(!1),R([]),n(""),j(!0),_.a.get(I).then((function(e){return 200!==e.status&&T(!0),e.data})).then((function(e){e.length>0?e.map((function(t){return P(e,t)})):(x("No movie found by that title."),j(!1))}))},id:"search-films",children:[Object(h.jsxs)("div",{className:"form__header",children:[Object(h.jsx)("img",{className:"form__header-blob",src:p,alt:""}),Object(h.jsxs)("h2",{className:"form__header-title",children:["Does your movie pass the ",Object(h.jsx)("a",{href:"#bechdel-test",children:"Bechdel Test"}),"?"]})]}),Object(h.jsxs)("div",{className:"form__controls",children:[Object(h.jsx)("input",{type:"text","aria-label":"Search for a movie",placeholder:"Search for a movie",className:"form__input",onChange:function(e){return c(e.target.value)},value:s}),Object(h.jsx)("button",{type:"submit",className:"button",disabled:!s||m,children:"Search"})]}),g&&Object(h.jsx)("div",{className:"form__results",children:Object(h.jsx)("h2",{className:"form__results-header",children:g})}),w&&Object(h.jsxs)("div",{className:"form__results",children:[Object(h.jsx)("h2",{className:"form__results-header",children:"No results:"}),Object(h.jsxs)("p",{className:"form__results-error",children:["This site pulls in movie data from the Bechdel Test API. If you think a movie should be rated that is not yet in the database, ",Object(h.jsx)("a",{href:"http://bechdeltest.com/add/",children:"contribute to the API"}),"."]})]}),m&&Object(h.jsxs)("div",{className:"form__loader",children:[Object(h.jsx)("img",{className:"form__loader-icon",src:f,alt:"film clipboard"}),Object(h.jsx)("p",{children:"Loading ..."})]}),B&&B.length>0&&Object(h.jsxs)("div",{className:"form__results",children:[Object(h.jsxs)("h2",{className:"form__results-header",children:["Showing",B.length>9&&" top"," ",B.length," result",B.length>1&&"s",' for "',l,'"']}),B.map((function(e,t){return Object(h.jsx)(v,{movie:e},t)}))]})]})}var y=s.p+"static/media/logo-mauve.f3dc8988.png",w=s.p+"static/media/rosie.7ec51dd0.jpg";function T(){return Object(h.jsxs)("section",{className:"header",children:[Object(h.jsx)("img",{className:"header__image",src:w,alt:"Rosie the Riveter clutches a pair of movie tickets"}),Object(h.jsxs)("div",{className:"header__content",children:[Object(h.jsx)("img",{className:"header__logo",src:y,alt:"The FemiList"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"header__title",children:"Movie ratings for feminists.*"}),Object(h.jsx)("p",{className:"header__disclaimer",children:Object(h.jsx)("span",{className:"highlight",children:"*And for the rest of the population, because the media's representation of women matters."})})]})]})]})}s(38);function S(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[Object(h.jsx)(T,{}),Object(h.jsx)(N,{}),Object(h.jsx)(m,{})]}),Object(h.jsx)(j,{})]})}i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b9633936.chunk.js.map