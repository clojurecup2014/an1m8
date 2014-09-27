// Compiled by ClojureScript 0.0-2342
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__6401_6405 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__6402_6406 = null;var count__6403_6407 = (0);var i__6404_6408 = (0);while(true){
if((i__6404_6408 < count__6403_6407))
{var k_6409 = cljs.core._nth.call(null,chunk__6402_6406,i__6404_6408);var v_6410 = (b[k_6409]);(a[k_6409] = v_6410);
{
var G__6411 = seq__6401_6405;
var G__6412 = chunk__6402_6406;
var G__6413 = count__6403_6407;
var G__6414 = (i__6404_6408 + (1));
seq__6401_6405 = G__6411;
chunk__6402_6406 = G__6412;
count__6403_6407 = G__6413;
i__6404_6408 = G__6414;
continue;
}
} else
{var temp__4126__auto___6415 = cljs.core.seq.call(null,seq__6401_6405);if(temp__4126__auto___6415)
{var seq__6401_6416__$1 = temp__4126__auto___6415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6401_6416__$1))
{var c__4395__auto___6417 = cljs.core.chunk_first.call(null,seq__6401_6416__$1);{
var G__6418 = cljs.core.chunk_rest.call(null,seq__6401_6416__$1);
var G__6419 = c__4395__auto___6417;
var G__6420 = cljs.core.count.call(null,c__4395__auto___6417);
var G__6421 = (0);
seq__6401_6405 = G__6418;
chunk__6402_6406 = G__6419;
count__6403_6407 = G__6420;
i__6404_6408 = G__6421;
continue;
}
} else
{var k_6422 = cljs.core.first.call(null,seq__6401_6416__$1);var v_6423 = (b[k_6422]);(a[k_6422] = v_6423);
{
var G__6424 = cljs.core.next.call(null,seq__6401_6416__$1);
var G__6425 = null;
var G__6426 = (0);
var G__6427 = (0);
seq__6401_6405 = G__6424;
chunk__6402_6406 = G__6425;
count__6403_6407 = G__6426;
i__6404_6408 = G__6427;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__6428 = (i + (2));
var G__6429 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6428;
ret = G__6429;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6430_6434 = cljs.core.seq.call(null,v);var chunk__6431_6435 = null;var count__6432_6436 = (0);var i__6433_6437 = (0);while(true){
if((i__6433_6437 < count__6432_6436))
{var x_6438 = cljs.core._nth.call(null,chunk__6431_6435,i__6433_6437);ret.push(x_6438);
{
var G__6439 = seq__6430_6434;
var G__6440 = chunk__6431_6435;
var G__6441 = count__6432_6436;
var G__6442 = (i__6433_6437 + (1));
seq__6430_6434 = G__6439;
chunk__6431_6435 = G__6440;
count__6432_6436 = G__6441;
i__6433_6437 = G__6442;
continue;
}
} else
{var temp__4126__auto___6443 = cljs.core.seq.call(null,seq__6430_6434);if(temp__4126__auto___6443)
{var seq__6430_6444__$1 = temp__4126__auto___6443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6430_6444__$1))
{var c__4395__auto___6445 = cljs.core.chunk_first.call(null,seq__6430_6444__$1);{
var G__6446 = cljs.core.chunk_rest.call(null,seq__6430_6444__$1);
var G__6447 = c__4395__auto___6445;
var G__6448 = cljs.core.count.call(null,c__4395__auto___6445);
var G__6449 = (0);
seq__6430_6434 = G__6446;
chunk__6431_6435 = G__6447;
count__6432_6436 = G__6448;
i__6433_6437 = G__6449;
continue;
}
} else
{var x_6450 = cljs.core.first.call(null,seq__6430_6444__$1);ret.push(x_6450);
{
var G__6451 = cljs.core.next.call(null,seq__6430_6444__$1);
var G__6452 = null;
var G__6453 = (0);
var G__6454 = (0);
seq__6430_6434 = G__6451;
chunk__6431_6435 = G__6452;
count__6432_6436 = G__6453;
i__6433_6437 = G__6454;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6455_6459 = cljs.core.seq.call(null,v);var chunk__6456_6460 = null;var count__6457_6461 = (0);var i__6458_6462 = (0);while(true){
if((i__6458_6462 < count__6457_6461))
{var x_6463 = cljs.core._nth.call(null,chunk__6456_6460,i__6458_6462);ret.push(x_6463);
{
var G__6464 = seq__6455_6459;
var G__6465 = chunk__6456_6460;
var G__6466 = count__6457_6461;
var G__6467 = (i__6458_6462 + (1));
seq__6455_6459 = G__6464;
chunk__6456_6460 = G__6465;
count__6457_6461 = G__6466;
i__6458_6462 = G__6467;
continue;
}
} else
{var temp__4126__auto___6468 = cljs.core.seq.call(null,seq__6455_6459);if(temp__4126__auto___6468)
{var seq__6455_6469__$1 = temp__4126__auto___6468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6455_6469__$1))
{var c__4395__auto___6470 = cljs.core.chunk_first.call(null,seq__6455_6469__$1);{
var G__6471 = cljs.core.chunk_rest.call(null,seq__6455_6469__$1);
var G__6472 = c__4395__auto___6470;
var G__6473 = cljs.core.count.call(null,c__4395__auto___6470);
var G__6474 = (0);
seq__6455_6459 = G__6471;
chunk__6456_6460 = G__6472;
count__6457_6461 = G__6473;
i__6458_6462 = G__6474;
continue;
}
} else
{var x_6475 = cljs.core.first.call(null,seq__6455_6469__$1);ret.push(x_6475);
{
var G__6476 = cljs.core.next.call(null,seq__6455_6469__$1);
var G__6477 = null;
var G__6478 = (0);
var G__6479 = (0);
seq__6455_6459 = G__6476;
chunk__6456_6460 = G__6477;
count__6457_6461 = G__6478;
i__6458_6462 = G__6479;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6480_6484 = cljs.core.seq.call(null,v);var chunk__6481_6485 = null;var count__6482_6486 = (0);var i__6483_6487 = (0);while(true){
if((i__6483_6487 < count__6482_6486))
{var x_6488 = cljs.core._nth.call(null,chunk__6481_6485,i__6483_6487);ret.push(x_6488);
{
var G__6489 = seq__6480_6484;
var G__6490 = chunk__6481_6485;
var G__6491 = count__6482_6486;
var G__6492 = (i__6483_6487 + (1));
seq__6480_6484 = G__6489;
chunk__6481_6485 = G__6490;
count__6482_6486 = G__6491;
i__6483_6487 = G__6492;
continue;
}
} else
{var temp__4126__auto___6493 = cljs.core.seq.call(null,seq__6480_6484);if(temp__4126__auto___6493)
{var seq__6480_6494__$1 = temp__4126__auto___6493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6480_6494__$1))
{var c__4395__auto___6495 = cljs.core.chunk_first.call(null,seq__6480_6494__$1);{
var G__6496 = cljs.core.chunk_rest.call(null,seq__6480_6494__$1);
var G__6497 = c__4395__auto___6495;
var G__6498 = cljs.core.count.call(null,c__4395__auto___6495);
var G__6499 = (0);
seq__6480_6484 = G__6496;
chunk__6481_6485 = G__6497;
count__6482_6486 = G__6498;
i__6483_6487 = G__6499;
continue;
}
} else
{var x_6500 = cljs.core.first.call(null,seq__6480_6494__$1);ret.push(x_6500);
{
var G__6501 = cljs.core.next.call(null,seq__6480_6494__$1);
var G__6502 = null;
var G__6503 = (0);
var G__6504 = (0);
seq__6480_6484 = G__6501;
chunk__6481_6485 = G__6502;
count__6482_6486 = G__6503;
i__6483_6487 = G__6504;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x6514 = cljs.core.clone.call(null,handlers);x6514.forEach = ((function (x6514,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__6515 = cljs.core.seq.call(null,coll);var chunk__6516 = null;var count__6517 = (0);var i__6518 = (0);while(true){
if((i__6518 < count__6517))
{var vec__6519 = cljs.core._nth.call(null,chunk__6516,i__6518);var k = cljs.core.nth.call(null,vec__6519,(0),null);var v = cljs.core.nth.call(null,vec__6519,(1),null);f.call(null,v,k);
{
var G__6521 = seq__6515;
var G__6522 = chunk__6516;
var G__6523 = count__6517;
var G__6524 = (i__6518 + (1));
seq__6515 = G__6521;
chunk__6516 = G__6522;
count__6517 = G__6523;
i__6518 = G__6524;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6515);if(temp__4126__auto__)
{var seq__6515__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6515__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__6515__$1);{
var G__6525 = cljs.core.chunk_rest.call(null,seq__6515__$1);
var G__6526 = c__4395__auto__;
var G__6527 = cljs.core.count.call(null,c__4395__auto__);
var G__6528 = (0);
seq__6515 = G__6525;
chunk__6516 = G__6526;
count__6517 = G__6527;
i__6518 = G__6528;
continue;
}
} else
{var vec__6520 = cljs.core.first.call(null,seq__6515__$1);var k = cljs.core.nth.call(null,vec__6520,(0),null);var v = cljs.core.nth.call(null,vec__6520,(1),null);f.call(null,v,k);
{
var G__6529 = cljs.core.next.call(null,seq__6515__$1);
var G__6530 = null;
var G__6531 = (0);
var G__6532 = (0);
seq__6515 = G__6529;
chunk__6516 = G__6530;
count__6517 = G__6531;
i__6518 = G__6532;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x6514,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x6514;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__6513 = obj;G__6513.push(kfn.call(null,k),vfn.call(null,v));
return G__6513;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t6536 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t6536 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6537){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6537 = meta6537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6536.cljs$lang$type = true;
cognitect.transit.t6536.cljs$lang$ctorStr = "cognitect.transit/t6536";
cognitect.transit.t6536.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cognitect.transit/t6536");
});
cognitect.transit.t6536.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t6536.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t6536.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t6536.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t6536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6538){var self__ = this;
var _6538__$1 = this;return self__.meta6537;
});
cognitect.transit.t6536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6538,meta6537__$1){var self__ = this;
var _6538__$1 = this;return (new cognitect.transit.t6536(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6537__$1));
});
cognitect.transit.__GT_t6536 = (function __GT_t6536(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6537){return (new cognitect.transit.t6536(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6537));
});
}
return (new cognitect.transit.t6536(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map