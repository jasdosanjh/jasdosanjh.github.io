import{o as r,c,a as f,b as s,F as m,r as _,t as u,d as g,e as b,l as v,_ as S,f as y,g as k,h as B}from"./vendor.892bfbd8.js";const T=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}};T();var l=(o,i)=>{for(const[d,n]of i)o[d]=n;return o};const L={setup(){return{title:"Header 123"}}},x={id:"home",class:"header"},I=f('<nav id="navigation" class="header__navbar"><ul><li><a href="#home">Home</a></li><li><a href="#projects">Projects</a></li></ul></nav><div class="header__content"><div class="header__content-bg"><h1>Hi! I&#39;m Jas Dosanjh</h1><p> I&#39;m a Frontend developer that loves learning new aspects of web development, particularly around JavaScript (ES2021). </p></div><a href="#projects" class="button header__content-button">View my work</a></div>',2),w=[I];function $(o,i,d,n,t,e){return r(),c("div",x,w)}var C=l(L,[["render",$]]),D="/assets/rmdb.275c3c09.jpg",P="/assets/fracta.a6c05288.jpg",G="/assets/flavours.2b5b0bac.jpg",V="/assets/tasklist.18c274e0.jpg",J="/assets/piggame.ec2a8fc3.jpg",M="/assets/natours.bcf87632.jpg",F="/assets/nexter.e58c53a0.jpg",E="/assets/ezaris.858ad619.jpg",R="/assets/vue3-iptracker.23a7df1c.jpg",A="/assets/workouts.c931dcca.jpg";const H=[{image:A,title:"Vue 3 Workout Tracker",description:"This is a fitness tracking application made using Vue 3. This was a great project to learn more about using the composition API in Vue 3. I used Tailwind for faster CSS styling, and supabase which is a PostgreSQL database.",skills:["Vue.js","Tailwind","Supabase","PostgreSQL"],primaryButtonLink:"https://jasdosanjh.github.io/vue3-workouts/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/vue3-workouts/",secondaryButtonText:"Github"},{image:D,title:"React Movie Database",description:"RMDB is a modern movie database using the TMDB API. The project was inspired by IMDB, and it was another great project to learn more about React. I also learned about React router, local storage, state management, and CSS Grid.",skills:["React.js","TMDB API (REST)","JavaScript","CSS Grid"],primaryButtonLink:"https://jasdosanjh.github.io/rmdb/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/rmdb/",secondaryButtonText:"Github"},{image:R,title:"Vue 3 IP Tracker",description:"This is a IP tracking application made using Vue 3, and Tailwind. This was a fun project to learn more about the compopsition API. I also used leaflet.js for the map, and a REST geolocation api alongside axios to fetch different locations.",skills:["Vue.js","Composition API","Tailwind","Axios"],primaryButtonLink:"https://jasdosanjh.github.io/vue3-ip-tracker/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/vue3-ip-tracker/",secondaryButtonText:"Github"},{image:P,title:"Vue Landing Page",description:"This is a modern mobile first landing page for a fictional app called Fracta. I used Vue.js, CSS, and JavaScript to build this. This was a great project to learn more about CSS animations, and Vue.js which I really enjoy using.",skills:["Vue.js","CSS","JavaScript","Sass","Responsive"],primaryButtonLink:"https://jasdosanjh.github.io/fracta/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/fracta/",secondaryButtonText:"Github"},{image:G,title:"Responsive Landing Page",description:"This is a modern mobile first landing page for a fictional restaurant called Flavours. I used HTML5, CSS3, Sass, and JavaScript to build this. I also introduced ITCSS to help improve the CSS architecture for this project.",skills:["HTML","CSS","JavaScript","Sass","ITCSS"],primaryButtonLink:"https://jasdosanjh.github.io/flavours/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/flavours/",secondaryButtonText:"Github"},{image:V,title:"Vanilla JavaScript To Do List",description:"I made this simple to do list application using JavaScript (ES6). In this project, I learned about manipulating the DOM using vanilla JavaScript (ES6), and how to store, filter, and remove data from the local storage.",skills:["JavaScript (ES6)","CSS"],primaryButtonLink:"https://jasdosanjh.github.io/tasklist/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/tasklist/",secondaryButtonText:"Github"},{image:J,title:"Classic Pig Game",description:"Pig is a fun first to 100 game based on the original game created by John Scarne in 1945. This project involved manipulating the DOM using vanilla JavaScript (ES5) and updating the UI at the same time.",skills:["JavaScript (ES5)","CSS"],primaryButtonLink:"https://jasdosanjh.github.io/pig-game/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/piggame/",secondaryButtonText:"Github"},{image:M,title:"Responsive Landing Page",description:"I enjoyed building this modern responsive landing page. I learned about the CSS naming convention BEM. I also used the Sass 7-1 pattern to ensure I had a manageable project architecture for each component of the page.",skills:["HTML","CSS","BEM","Sass"],primaryButtonLink:"https://jasdosanjh.github.io/natours/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/natours/",secondaryButtonText:"Github"},{image:F,title:"Responsive CSS Grid Layout",description:"I was really keen on learning CSS Grid. Therefore, for this project, I decided to make as many different sized grids as possible to see what kind of a responsive layout I could make using CSS Grid.",skills:["HTML","CSS","CSS Grid","Sass"],primaryButtonLink:"https://jasdosanjh.github.io/nexter/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/nexter/",secondaryButtonText:"Github"},{image:E,title:"Responsive UI Layout",description:"This was an exciting project to learn about the fundamentals of UI, and UX. This was also my first web based project using Flexbox, and I can now see the importance of using both Flexbox, and CSS Grid.",skills:["HTML","CSS","Flexbox","Sass"],primaryButtonLink:"https://jasdosanjh.github.io/ezaris/",primaryButtonText:"Live Demo",secondaryButtonLink:"https://github.com/jasdosanjh/ezaris/",secondaryButtonText:"Github"}],z={setup(){return{projects:H}}},N={id:"projects",class:"projects"},O={class:"projects-grid"},U=["src"],Q={class:"projects-grid__card-content"},q={class:"projects-grid__card-content-title"},K={class:"projects-grid__card-content-buttons"},W=["href"],X={class:"projects-grid__card-content-buttons-text"},Y=["href"],Z={class:"projects-grid__card-content-buttons-text"};function tt(o,i,d,n,t,e){return r(),c("div",N,[s("div",O,[(r(!0),c(m,null,_(n.projects,(a,p)=>(r(),c("div",{key:p,class:"projects-grid__card"},[s("img",{src:a.image,alt:""},null,8,U),s("div",Q,[s("h3",q,u(a.title),1),s("p",null,u(a.description),1),(r(!0),c(m,null,_(a.skills,(h,j)=>(r(),c("span",{key:j},u(h),1))),128))]),s("div",K,[s("a",{href:a.primaryButtonLink,target:"_blank",class:"button projects-grid__card-content-buttons-btn"},[s("div",X,u(a.primaryButtonText),1)],8,W),s("a",{href:a.secondaryButtonLink,target:"_blank",class:"button projects-grid__card-content-buttons-btn"},[s("div",Z,u(a.secondaryButtonText),1)],8,Y)])]))),128))])])}var et=l(z,[["render",tt]]);const at={setup(){return{title:"Footer"}}},st={class:"footer"},ot=f('<div class="footer-icons"><ul><li class="github"><a href="https://github.com/jasdosanjh/" target="_blank"><button class="border"><i class="fab fa-github"></i></button></a></li><li class="twitter"><a href="https://twitter.com/justjasdosanjh/" target="_blank"><button class="border"><i class="fab fa-twitter"></i></button></a></li><li class="instagram"><a href="https://instagram.com/jazdosanjh/" target="_blank"><button class="border"><i class="fab fa-instagram"></i></button></a></li></ul></div><ul class="copyright"><li>\xA9 Jas Singh Dosanjh</li></ul>',2),it=[ot];function nt(o,i,d,n,t,e){return r(),c("footer",st,it)}var rt=l(at,[["render",nt]]);const ct={components:{Header:C,Projects:et,Footer:rt},setup(){return{}}};function dt(o,i,d,n,t,e){const a=g("Header"),p=g("Projects"),h=g("Footer");return r(),c(m,null,[b(a),b(p),b(h)],64)}var ut=l(ct,[["render",dt]]);v.add(S);y.watch();k(ut).component("font-awesome-icon",B).mount("#app");
