(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),a=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(){console.log(this.state.time)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.time})}}]),n}(u.a.Component),j=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Current time:"})," ",this.state.isClockVisible&&Object(b.jsx)(h,{"data-cy":"time"})]}),Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.showClock,className:"App__button App__button--first",children:"Show clock"}),Object(b.jsx)("button",{type:"button",onClick:this.hideClock,className:"App__button",children:"Hide clock"})]})]})}}]),n}(u.a.Component);i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2501b515.chunk.js.map