(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/snake.497f772d.svg"},20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),i=a.n(o),s=a(17),c=(a(25),a(1)),l=a(11),d=a(12),u=a(18),h=a(13),m=a(3),f=a(19),v=(a(26),a(14)),w=a.n(v),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={tickTime:200,rows:25,cols:25,grid:[],food:{},snake:{head:{},tail:[]},currentDirection:"right",die:!1,score:0,scoreFactor:10},a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getRandomGrid",value:function(){return{row:Math.floor(Math.random()*this.state.rows),col:Math.floor(Math.random()*this.state.cols)}}},{key:"getCenterOfGrid",value:function(){return{row:Math.floor((this.state.rows-1)/2),col:Math.floor((this.state.cols-1)/2)}}},{key:"resetGrid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(e).length||(e=this.state);for(var a=[],r=e,n=r.rows,o=r.cols,i=r.food,s=r.snake,c=function(e){for(var t=function(t){var r=i.row===e&&i.col===t,n=s.head.row===e&&s.head.col===t,o=!1;s.tail.forEach(function(a){a.row===e&&a.col===t&&(o=!0)}),a.push({row:e,col:t,isFood:r,isHead:n,isTail:o})},r=0;r<o;r++)t(r)},l=0;l<n;l++)c(l);if(t)return a;this.setState({grid:a})}},{key:"gameTick",value:function(){var e=this;this.setState(function(t){var a=t.currentDirection,r=t.snake,n=t.food,o=r.tail,i=t.snake.head,s={row:i.row,col:i.col};switch(t.die&&clearInterval(window.fnInterval),o.unshift({row:s.row,col:s.col}),s.row===t.food.row&&s.col===t.food.col?n=e.getRandomGrid():o.pop(),a){case"left":s.col--;break;case"up":s.row--;break;case"down":s.row++;break;case"right":default:s.col++}var l=Object(c.a)({},t,{food:n,snake:{head:s,tail:o}}),d=!1;(l.snake.head.row<0||l.snake.head.row>=e.state.rows||l.snake.head.col<0||l.snake.head.col>=e.state.rows)&&(d=!0);var u=e.resetGrid(l,!0),h=l.snake.tail.length*l.scoreFactor;return Object(c.a)({},l,{die:d,grid:u,score:h})})}},{key:"handleKeyPress",value:function(e){var t=this.state.currentDirection;switch(e.keyCode){case 37:t="left";break;case 38:t="up";break;case 39:default:t="right";break;case 40:t="down"}var a=Object(c.a)({},this.state,{currentDirection:t}),r=this.resetGrid(a,!0);this.setState(function(e){return Object(c.a)({},a,{grid:r})})}},{key:"componentDidMount",value:function(){var e=this;document.body.addEventListener("keydown",this.handleKeyPress),this.setState(function(t){var a=Object(c.a)({},t,{food:e.getRandomGrid(),snake:{head:e.getCenterOfGrid(),tail:t.snake.tail}}),r=e.resetGrid(a,!0);return Object(c.a)({},a,{grid:r})}),this.resetGrid(),window.fnInterval=setInterval(function(){e.gameTick()},this.state.tickTime)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeyPress),clearInterval(window.fnInterval)}},{key:"render",value:function(){var e=this.state.grid.map(function(e){return n.a.createElement("div",{key:e.row.toString()+"-"+e.col.toString(),className:e.isHead?"gridItem is-head":e.isTail?"gridItem is-tail":e.isFood?"gridItem is-food":"gridItem"})});return this.state.die&&(e=n.a.createElement("div",{className:"grid-message"},n.a.createElement("h1",null,"Game Over"))),n.a.createElement("div",null,n.a.createElement("nav",{className:"navBar"},n.a.createElement("nav",{className:"wrapper"},n.a.createElement("div",{className:"logo"},n.a.createElement("img",{src:w.a,alt:"Snake"})),n.a.createElement("input",{type:"checkbox",id:"menu-toggle"}),n.a.createElement("label",{htmlFor:"menu-toggle",className:"label-toggle"}),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/register"},"Register")),n.a.createElement("li",null,n.a.createElement("a",{href:"/login"},"Login"))))),n.a.createElement("div",{className:"snake-container wrapper"},n.a.createElement("div",{className:"grid-header"},n.a.createElement("h1",null,"Your score: ",this.state.score)),n.a.createElement("div",{className:"grid"},e)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(s.a,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.2b1e6ec5.chunk.js.map