(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{38:function(e,a,n){e.exports=n.p+"static/media/logo-small.2f3615cd.png"},44:function(e,a,n){e.exports=n(59)},51:function(e,a,n){},59:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(32),r=n.n(l),s=n(15),m=n(13),o=n(7),i=n(14),u=n(42),h=n(43),g=n(37),E=n(8),d=new i.a({link:E.a.from([Object(g.a)(function(e){var a=e.graphQLErrors,n=e.networkError;a&&a.forEach(function(e){var a=e.message,n=e.locations,t=e.path;return console.log("[GraphQL error]: Message: ".concat(a,", Location: ").concat(n,", Path: ").concat(t))}),n&&console.log("[Network error]: ".concat(n))}),new h.a({uri:"/graphql",credentials:"same-origin"})]),cache:new u.a}),p=(n(51),n(38)),f=n.n(p),b=n(18),_=n(24),N=n(25),v=n.n(N);function y(){var e=Object(_.a)(["\n  query LaunchQuery($flight_number: String!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(_.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_year\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return k=function(){return e},e}var w=v()(k()),x=v()(y()),L=n(22),D=n.n(L),Y=n(39),j=n.n(Y);var F=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:D()({"text-success":r,"text-danger":!r})}," ",t)),c.a.createElement("p",null,"Date:"," ",c.a.createElement(j.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(s.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details")))))};var M=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))};var O=function(){var e=Object(b.a)(w),a=e.loading,n=e.error,t=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(M,null),c.a.createElement("div",null,t.launches.map(function(e){return c.a.createElement(F,{key:e.flight_number,launch:e})}))))};var Q=function(e){var a=e.match,n=Object(b.a)(x,{variables:{flight_number:a.params.flight_number}}),t=n.loading,l=n.error,r=n.data;if(t)return c.a.createElement("h4",null,"loading...");l&&console.log(l);var m=r.launch,o=m.flight_number,i=m.mission_name,u=m.launch_year,h=m.launch_success,g=m.rocket,E=g.rocket_id,d=g.rocket_name,p=g.rocket_type;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",i),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",o),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",u),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:D()({"text-success":h,"text-danger":!h})},h?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",E),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",d),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(s.b,{to:"/",className:"btn btn-secondary"},"Back")))};var R=function(){return c.a.createElement(o.a,{client:d},c.a.createElement(s.a,null,c.a.createElement("div",{className:"conntainer"},c.a.createElement("img",{src:f.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(m.a,{exact:!0,path:"/",component:O}),c.a.createElement(m.a,{exact:!0,path:"/launch/:flight_number",component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.6f497cce.chunk.js.map