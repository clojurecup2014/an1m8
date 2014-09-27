// Compiled by ClojureScript 0.0-2342
goog.provide('an1m8.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('reagent.core');
an1m8.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
an1m8.core.set_value_BANG_ = (function set_value_BANG_(id,value){cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
an1m8.core.get_value = (function get_value(id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,an1m8.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
/**
* @param {...*} var_args
*/
an1m8.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6155){
var label = cljs.core.first(arglist__6155);
var body = cljs.core.rest(arglist__6155);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
an1m8.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),an1m8.core.get_value.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6156_SHARP_){return an1m8.core.set_value_BANG_.call(null,id,p1__6156_SHARP_.target.value);
})], null)], null)], null);
});
an1m8.core.list_item = (function list_item(id,k,v,selections){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.not);
return an1m8.core.set_value_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("list-group-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(k.call(null,cljs.core.deref.call(null,selections)))?" active":null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
an1m8.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var selections = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6167){var vec__6168 = p__6167;var k = cljs.core.nth.call(null,vec__6168,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),items)));return ((function (selections){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__4364__auto__ = ((function (selections){
return (function iter__6169(s__6170){return (new cljs.core.LazySeq(null,((function (selections){
return (function (){var s__6170__$1 = s__6170;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6170__$1);if(temp__4126__auto__)
{var s__6170__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6170__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__6170__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__6172 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__6171 = (0);while(true){
if((i__6171 < size__4363__auto__))
{var vec__6175 = cljs.core._nth.call(null,c__4362__auto__,i__6171);var k = cljs.core.nth.call(null,vec__6175,(0),null);var v = cljs.core.nth.call(null,vec__6175,(1),null);cljs.core.chunk_append.call(null,b__6172,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.list_item,id,k,v,selections], null));
{
var G__6177 = (i__6171 + (1));
i__6171 = G__6177;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6172),iter__6169.call(null,cljs.core.chunk_rest.call(null,s__6170__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6172),null);
}
} else
{var vec__6176 = cljs.core.first.call(null,s__6170__$2);var k = cljs.core.nth.call(null,vec__6176,(0),null);var v = cljs.core.nth.call(null,vec__6176,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.list_item,id,k,v,selections], null),iter__6169.call(null,cljs.core.rest.call(null,s__6170__$2)));
}
} else
{return null;
}
break;
}
});})(selections))
,null,null));
});})(selections))
;return iter__4364__auto__.call(null,items);
})()], null)], null)], null);
});
;})(selections))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__6178){
var id = cljs.core.first(arglist__6178);
arglist__6178 = cljs.core.next(arglist__6178);
var label = cljs.core.first(arglist__6178);
var items = cljs.core.rest(arglist__6178);
return selection_list__delegate(id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
an1m8.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,an1m8.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
an1m8.core.about = (function about(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"this is the story of an1m8... work in progress"], null);
});
an1m8.core.home = (function home(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,an1m8.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),an1m8.core.save_doc], null),"Submit"], null))], null);
});
an1m8.core.navbar = (function navbar(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"an1m8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,an1m8.core.home,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,an1m8.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return secretary.core.dispatch_BANG_.call(null,"#/");
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,an1m8.core.about,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,an1m8.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return secretary.core.dispatch_BANG_.call(null,"#/about");
})], null),"About"], null)], null)], null)], null)], null)], null);
});
an1m8.core.page = (function page(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,an1m8.core.state))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__4597__auto___6181 = (function (params__4598__auto__){if(cljs.core.map_QMARK_.call(null,params__4598__auto__))
{var map__6179 = params__4598__auto__;var map__6179__$1 = ((cljs.core.seq_QMARK_.call(null,map__6179))?cljs.core.apply.call(null,cljs.core.hash_map,map__6179):map__6179);console.log("hi!");
return cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),an1m8.core.home);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4598__auto__))
{var vec__6180 = params__4598__auto__;console.log("hi!");
return cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),an1m8.core.home);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4597__auto___6181);
var action__4597__auto___6184 = (function (params__4598__auto__){if(cljs.core.map_QMARK_.call(null,params__4598__auto__))
{var map__6182 = params__4598__auto__;var map__6182__$1 = ((cljs.core.seq_QMARK_.call(null,map__6182))?cljs.core.apply.call(null,cljs.core.hash_map,map__6182):map__6182);return cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),an1m8.core.about);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4598__auto__))
{var vec__6183 = params__4598__auto__;return cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),an1m8.core.about);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/about",action__4597__auto___6184);
an1m8.core.init_BANG_ = (function init_BANG_(){cljs.core.swap_BANG_.call(null,an1m8.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),an1m8.core.home);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.navbar], null),document.getElementById("navbar"));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [an1m8.core.page], null),document.getElementById("app"));
});
an1m8.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map