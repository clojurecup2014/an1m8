// Compiled by ClojureScript 0.0-2342
goog.provide('frontend.dom');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
frontend.dom.nodelist__GT_coll = (function nodelist__GT_coll(nl){var iter__4364__auto__ = (function iter__9992(s__9993){return (new cljs.core.LazySeq(null,(function (){var s__9993__$1 = s__9993;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9993__$1);if(temp__4126__auto__)
{var s__9993__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9993__$2))
{var c__4362__auto__ = cljs.core.chunk_first.call(null,s__9993__$2);var size__4363__auto__ = cljs.core.count.call(null,c__4362__auto__);var b__9995 = cljs.core.chunk_buffer.call(null,size__4363__auto__);if((function (){var i__9994 = (0);while(true){
if((i__9994 < size__4363__auto__))
{var x = cljs.core._nth.call(null,c__4362__auto__,i__9994);cljs.core.chunk_append.call(null,b__9995,(nl[x]));
{
var G__9996 = (i__9994 + (1));
i__9994 = G__9996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9995),iter__9992.call(null,cljs.core.chunk_rest.call(null,s__9993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9995),null);
}
} else
{var x = cljs.core.first.call(null,s__9993__$2);return cljs.core.cons.call(null,(nl[x]),iter__9992.call(null,cljs.core.rest.call(null,s__9993__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4364__auto__.call(null,cljs.core.range.call(null,(0),nl.length));
});
frontend.dom.by_id = (function by_id(id){return document.getElementById(id);
});
frontend.dom.set_html_BANG_ = (function set_html_BANG_(el,s){return el.innerHTML = s;
});
frontend.dom.set_style_BANG_ = (function set_style_BANG_(el,st,value){return goog.style.setStyle(el,st,value);
});
frontend.dom.set_text_BANG_ = (function set_text_BANG_(el,s){return goog.dom.setTextContent(el,s);
});
frontend.dom.set_class_BANG_ = (function set_class_BANG_(el,name){return goog.dom.classes.set(el,name);
});
frontend.dom.add_class_BANG_ = (function add_class_BANG_(el,name){return goog.dom.classes.add(el,name);
});
frontend.dom.remove_class_BANG_ = (function remove_class_BANG_(el,name){return goog.dom.classes.remove(el,name);
});
frontend.dom.tag_match = (function tag_match(tag){return (function (el){var temp__4126__auto__ = el.tagName;if(cljs.core.truth_(temp__4126__auto__))
{var tag_name = temp__4126__auto__;return cljs.core._EQ_.call(null,tag,tag_name.toLowerCase());
} else
{return null;
}
});
});
frontend.dom.parent = (function parent(el,tag){var matcher = frontend.dom.tag_match.call(null,tag);if(cljs.core.truth_(matcher.call(null,el)))
{return el;
} else
{return goog.dom.getAncestor(el,frontend.dom.tag_match.call(null,tag));
}
});
frontend.dom.el_matcher = (function el_matcher(el){return (function (other){return (other === el);
});
});
frontend.dom.by_tag_name = (function by_tag_name(el,tag){return cljs.core.prim_seq.call(null,goog.dom.getElementsByTagNameAndClass(tag,null,el));
});
frontend.dom.offset = (function offset(el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.style.getPageOffsetLeft(el),goog.style.getPageOffsetTop(el)], null);
});
frontend.dom.in_QMARK_ = (function in_QMARK_(e,el){var target = e.target;return ((target === el)) || (!((goog.dom.getAncestor(target,frontend.dom.el_matcher.call(null,el)) == null)));
});
frontend.dom.doc_ready_handler = (function doc_ready_handler(handler){return (function (){var ready_state = document.readyState;if(cljs.core._EQ_.call(null,"complete",ready_state))
{return handler.call(null);
} else
{return null;
}
});
});
frontend.dom.on_load = (function on_load(handler){return (document["onreadystatechange"] = frontend.dom.doc_ready_handler.call(null,handler));
});

//# sourceMappingURL=dom.js.map