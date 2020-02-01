(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{665:function(e,t,a){"use strict";a.d(t,"a",function(){return loadHome});var r=a(2);function loadHome(){return{type:Object(r.f)(r.c.LOAD)}}},666:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),i=a.n(o),c=a(5),l={container:{flexDirection:"column"},playerCardContainer:{position:"relative",cursor:"pointer",width:318,height:68,backgroundColor:Object(c.a)("ebonyclay"),border:"1px solid ".concat(Object(c.a)("dimgrey")),borderTop:"none",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",padding:15},firstPlayerCard:{borderTop:"1px solid ".concat(Object(c.a)("dimgrey"))},gamertag:{fontWeight:600,color:Object(c.a)("white"),fontSize:14},region:{fontSize:12,color:Object(c.b)("white",.5)},profileImg:{borderRadius:"50%",marginRight:12},likesContainer:{position:"absolute",right:15},rep:{flexDirection:"row",justifyContent:"center",alignItems:"center"},repNum:{fontSize:12,fontWeight:600,color:Object(c.a)("white"),marginRight:5},flame:{flexDirection:"row",justifyContent:"center",alignItems:"center"},flameNum:{fontSize:12,fontWeight:600,color:Object(c.a)("white"),marginRight:5}},s=a(33);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(a,!0).forEach(function(t){_defineProperty(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=function Playerlist(e){var t=e.staticDataPath,a=e.players,r=e.goToPlayer;return n.a.createElement("div",{style:l.container},a.map(function(e,a){var o=0===a?l.firstPlayerCard:{};return n.a.createElement("div",{onClick:function onClick(){return r(e)},style:_objectSpread({},l.playerCardContainer,{},o),key:"".concat(e.gamertag,"-").concat(e.region).concat(a)},n.a.createElement("img",{style:l.profileImg,src:"".concat(t).concat(e.profile_picture),alt:"profilePicture",height:"38",width:"38"}),n.a.createElement("div",{style:l.gamerContainer},n.a.createElement("div",{style:l.gamertag},e.gamertag),n.a.createElement("div",{style:l.region},e.game,"(",e.region.toUpperCase(),")")),n.a.createElement("div",{style:l.likesContainer},n.a.createElement("div",{style:l.rep},n.a.createElement("span",{style:l.repNum},e.rep_review_count),n.a.createElement(s.b,{width:12,height:12,name:"thumb-up"})),n.a.createElement("div",{style:l.flame},n.a.createElement("span",{style:l.flameNum},e.flame_review_count),n.a.createElement(s.b,{width:12,height:12,name:"thumb-down"}))))}))};d.propTypes={players:i.a.object,goToPlayer:i.a.func,staticDataPath:i.a.string},d.defaultProps={players:function players(){},goToPlayer:null,staticDataPath:null};t.a=d},679:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(17),i=a(65),c=a(1),l=a.n(c),s=a(7),d=a(33),m=a(5),h={container:{flexDirection:"column"},headerContainer:{width:"100%",minHeight:500,justifyContent:"center",alignItems:"center",position:"relative"},title:{fontWeight:600,fontSize:40,margin:10},homeBg:{width:1440,position:"absolute",top:0,left:"50%",transform:"translate(-50%, 0)",zIndex:-1},desc:{fontSize:12,marginTop:30},statsBandeau:{position:"relative",width:"100%",height:200,backgroundColor:Object(m.a)("mirage"),flexDirection:"row",justifyContent:"center",alignItems:"center"},createAccountContainer:{backgroundColor:Object(m.a)("mirage2"),width:"100%",height:298,alignItems:"center",justifyContent:"center"},createAccountLabel:{marginBottom:50,fontSize:30,fontWeight:600,width:379,textAlign:"center",lineHeight:1.2},createAccountBtn:{width:200},statTitle:{fontSize:24,fontWeight:600,marginTop:46},approvalsContainer:{flexDirection:"column",width:350,justifyContent:"center",alignItems:"center",marginRight:"5%",marginTop:-140},approvalsPictContainer:{flexDirection:"row"},separator:{width:10},featuredGamersContainers:{width:"100%",height:500,backgroundColor:Object(m.a)("mirage"),justifyContent:"flex-start",alignItems:"center"},playersListContainer:{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"},ftTitle:{fontWeight:600,fontSize:24,marginTop:50},playerList:{marginRight:"3%",marginLeft:"3%",justifyContent:"center",alignItems:"center"},playerListTitle:{fontSize:12,color:Object(m.a)("regentgray"),fontWeight:600,marginBottom:20}},u={container:{minWidth:353,height:50,borderStyle:"solid",borderWidth:1,borderColor:Object(m.a)("dimgrey"),backgroundColor:Object(m.b)("black",0),flexDirection:"row",marginTop:59},searchContainer:{flexDirection:"row"},platformDropdown:{width:54,padding:8,paddingLeft:9,height:"100%",borderRightStyle:"solid",borderRightWidth:1,borderRightColor:Object(m.a)("dimgrey"),justifyContent:"center",alignItems:"center"},inputStyle:{width:200,height:50,border:"none",backgroundColor:Object(m.b)("black",0)},dropdownContainer:{width:61,height:"100%",alignItems:"center",justifyContent:"center"},searchButtonContainer:{width:50,height:48,justifyContent:"center",alignItems:"center"},searchButton:{width:"100%",height:"100%",borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"none",backgroundColor:Object(m.a)("dodgerblue"),borderRadius:0,padding:0}},g=a(28),p=a(70),y=a(10),f=function HomeSearchBar(e){var t=e.regionsList,a=e.onSearchClick,r=e.onRegionChange,o=e.onInputChange,i=s.a.Labels.navBar;return n.a.createElement("div",{style:u.container},n.a.createElement("div",{style:u.platformDropdown},n.a.createElement(d.b,{width:20,height:20,name:"platforms/lol"})),n.a.createElement("div",{style:u.searchContainer},n.a.createElement("form",{onKeyDown:function disableEnter(e){return 13===e.which?e.preventDefault():null},autoComplete:"false"},n.a.createElement(g.b,{length:"50",focus:!0,placeholder:i.placeholder,inputStyle:u.inputStyle,onChange:o})),n.a.createElement("div",{style:u.dropdownContainer},n.a.createElement(p.c,{height:50,options:t.toArray(),selectType:p.b.SIMPLE,dropDown:p.a.DEFAULT,onChange:r})),n.a.createElement("div",{style:u.searchButtonContainer},n.a.createElement(y.b,{width:25,height:25,icon:"search",buttonStyle:u.searchButton,theme:y.a.SIMPLE,onClick:a}))))};f.propTypes={regionsList:l.a.object.isRequired,onInputChange:l.a.func.isRequired,onSearchClick:l.a.func.isRequired,onRegionChange:l.a.func.isRequired},f.defaultProps={};var b=f,C=a(41),E=a(25),w=a(179),v=a(47),j=a(19),O=a(31),P=a(127),T=a(665),S=a(666);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function Home(e){var t=e.config,a=e.homeRecord,i=e.history;if(!t)return null;var c=s.a.Labels.home,l=Object(o.c)(),m=_slicedToArray(Object(r.useState)(C.b.RIOT),1)[0],u=_slicedToArray(Object(r.useState)(C.a.LEAGUE_OF_LEGENDS),1)[0],g=_slicedToArray(Object(r.useState)(null),2),p=g[0],f=g[1],R=_slicedToArray(Object(r.useState)(C.c.NA),2),D=R[0],I=R[1],L=Object(v.a)("Enter"),k=function getStaticDataUrlForPlatform(){return t?t.getStaticDataUrlForPlatform(C.b.RIOT):null},A=function onSearchClick(){p&&(i.push(Object(E.a)(m,D,u,p)),l(Object(w.c)(m,D,u,p)))},_=function setAndGoToPlayer(e){var t=e.gamertag,a=e.region;f(t),I(a),i.push(Object(E.a)(m,a,u,t)),l(Object(w.c)(m,a,u,t))};Object(r.useEffect)(function(){l(Object(T.a)())},[]),Object(r.useEffect)(function(){L&&A()},[L]);return n.a.createElement("div",{style:h.container},n.a.createElement("div",{style:h.headerContainer},n.a.createElement("h1",{style:h.title},c.title),n.a.createElement("h1",{style:h.title},c.title2),n.a.createElement(b,{onInputChange:function onInputChange(e){return f(e.target.value)},regionsList:t.regions.riot.regionsCode,onRegionChange:function onRegionChanged(e){I(e.name)},onSearchClick:A}),n.a.createElement("p",{style:h.desc},c.desc),n.a.createElement("div",{style:h.homeBg},n.a.createElement(d.b,{type:d.a.PNG,width:"100%",height:"100%",name:"home/background"}))),n.a.createElement("div",{style:h.statsBandeau},n.a.createElement("div",{style:h.approvalsContainer},n.a.createElement("div",{style:h.approvalsPictContainer},n.a.createElement(d.b,{type:d.a.PNG,name:"home/approvals",width:170,height:115}),n.a.createElement("div",{style:h.separator}),n.a.createElement(d.b,{type:d.a.PNG,name:"home/disapprovals",width:170,height:115})),n.a.createElement("span",{style:h.statTitle},c.ratings)),n.a.createElement("div",{style:h.approvalsContainer},n.a.createElement(d.b,{type:d.a.PNG,name:"home/review",width:350,height:148}),n.a.createElement("span",{style:h.statTitle},c.reviews)),n.a.createElement("div",{style:h.approvalsContainer},n.a.createElement(d.b,{type:d.a.PNG,name:"home/trends",width:350,height:119}),n.a.createElement("span",{style:h.statTitle},c.stats))),n.a.createElement("div",{style:h.createAccountContainer},n.a.createElement("h2",{style:h.createAccountLabel},c.createAccountDesc),n.a.createElement(y.b,{label:c.createAccount,buttonStyle:h.createAccountBtn,theme:y.a.BLUE,onClick:function onCreateAccountClick(){l(Object(j.n)(O.a.SIGNUP))}})),n.a.createElement("div",{style:h.featuredGamersContainers},n.a.createElement("h2",{style:h.ftTitle},c.featuredGamers),a&&n.a.createElement("div",{style:h.playersListContainer},n.a.createElement("div",{style:h.playerList},n.a.createElement("span",{style:h.playerListTitle},c.recent.toUpperCase()),n.a.createElement(S.a,{goToPlayer:_,players:a.recentReviewedPlayers,staticDataPath:k()})),n.a.createElement("div",{style:h.playerList},n.a.createElement("span",{style:h.playerListTitle},c.highestRated.toUpperCase()),n.a.createElement(S.a,{goToPlayer:_,players:a.highestRatedPlayers,staticDataPath:k()})),n.a.createElement("div",{style:h.playerList},n.a.createElement("span",{style:h.playerListTitle},c.mostReviewed.toUpperCase()),n.a.createElement(S.a,{goToPlayer:_,players:a.mostReviewedPlayers,staticDataPath:k()})))),n.a.createElement(P.a,null))};R.propTypes={config:l.a.object,homeRecord:l.a.object,loading:l.a.bool.isRequired,history:l.a.object.isRequired},R.defaultProps={config:null,homeRecord:null};t.default=Object(i.withRouter)(Object(o.b)(function mapStateToProps(e){return{config:e.app.get("data"),homeRecord:e.home.getIn(["data","homeRecord"]),loading:e.app.get("loading"),error:e.app.get("error")}})(R))}}]);