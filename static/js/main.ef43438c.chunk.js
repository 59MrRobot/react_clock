(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),b=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(){console.log(this.state.time)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:this.state.time})}}]),n}(u.a.Component),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:1},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t.setRandomName=function(){var e=Math.round(1e3*Math.random());t.setState({clockName:e})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),Object(h.jsx)("p",{children:"Clock Name: ".concat(this.state.clockName)}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Current time:"})," ",this.state.isClockVisible&&Object(h.jsx)(b,{"data-cy":"time"})]}),Object(h.jsxs)("div",{className:"App__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.showClock,className:"App__button App__button--first",children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,className:"App__button",children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.setRandomName,className:"App__button",children:"Set Random Name"})]})]})}}]),n}(u.a.Component);o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ef43438c.chunk.js.map