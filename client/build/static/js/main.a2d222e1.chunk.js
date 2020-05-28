(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),s=a.n(l),i=(a(83),a(84),a(17)),c=a(6),o=a(13),u=a(14),m=a(16),h=a(15),d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Exercise Tracker"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(i.b,{to:"/",className:"nav-link"},"Exercise")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/create",className:"nav-link"},"Create Exercise Logo")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/player",className:"nav-link"},"Create Player")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/showplayers",className:"nav-link"},"Show Players")))))}}]),a}(n.Component),p=a(7),E=a(9),b=a.n(E),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(i.b,{to:"/edit/"+e.exercise._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)}},"delete")))},f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteExercise=n.deleteExercise.bind(Object(p.a)(n)),n.state={exercises:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){return console.log(e)}))}},{key:"deleteExercise",value:function(e){b.a.delete("http://localhost:5000/exercises/"+e).then((function(e){return console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!=e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return r.a.createElement(v,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercise"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),a}(n.Component),g=a(36),y=a.n(g),C=(a(67),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",description:"",duration:"",date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){return console.log("Error:"+e)})),b.a.get("http://localhost:5000/players/").then((function(t){e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),b.a.post("http://localhost:5000/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Edit New Exercise Log "),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",value:this.state.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration(in minutes): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(y.a,{selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),a}(n.Component)),D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/players").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),b.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Create New Exercise Log "),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration(in minutes): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(y.a,{selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"}))))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:""},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),b.a.post("http://localhost:5000/players/add/",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Create new Player"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Player",className:"btn btn-primary"}))))}}]),a}(n.Component),k=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.player.username),r.a.createElement("td",null,e.player.createdAt.substring(0,10)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.deletePlayer(e.player._id)}},"Delete")))},O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deletePlayer=n.deletePlayer.bind(Object(p.a)(n)),n.state={players:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/players/").then((function(t){e.setState({players:t.data})}))}},{key:"playersList",value:function(){var e=this;return this.state.players.map((function(t){return r.a.createElement(k,{player:t,key:t._id,deletePlayer:e.deletePlayer})}))}},{key:"deletePlayer",value:function(e){b.a.delete("http://localhost:5000/players/"+e).then((function(e){console.log(e)})).catch((function(e){return console.log("Error :"+e)})),this.setState({players:this.state.players.filter((function(t){return t._id!=e}))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Players List"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Joined On"))),r.a.createElement("tbody",null,this.playersList())))}}]),a}(n.Component);var j=function(){return r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(c.a,{path:"/",exact:!0,component:f}),r.a.createElement(c.a,{path:"/edit/:id",exact:!0,component:C}),r.a.createElement(c.a,{path:"/create",component:D}),r.a.createElement(c.a,{path:"/player",component:x}),r.a.createElement(c.a,{path:"/showplayers",component:O}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a(164)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.a2d222e1.chunk.js.map