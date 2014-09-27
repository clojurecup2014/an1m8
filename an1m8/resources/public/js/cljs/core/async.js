// Compiled by ClojureScript 0.0-2342
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10000 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10000 = (function (f,fn_handler,meta10001){
this.f = f;
this.fn_handler = fn_handler;
this.meta10001 = meta10001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10000.cljs$lang$type = true;
cljs.core.async.t10000.cljs$lang$ctorStr = "cljs.core.async/t10000";
cljs.core.async.t10000.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10000");
});
cljs.core.async.t10000.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10002){var self__ = this;
var _10002__$1 = this;return self__.meta10001;
});
cljs.core.async.t10000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10002,meta10001__$1){var self__ = this;
var _10002__$1 = this;return (new cljs.core.async.t10000(self__.f,self__.fn_handler,meta10001__$1));
});
cljs.core.async.__GT_t10000 = (function __GT_t10000(f__$1,fn_handler__$1,meta10001){return (new cljs.core.async.t10000(f__$1,fn_handler__$1,meta10001));
});
}
return (new cljs.core.async.t10000(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10004 = buff;if(G__10004)
{var bit__4289__auto__ = null;if(cljs.core.truth_((function (){var or__3626__auto__ = bit__4289__auto__;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return G__10004.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10004.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10004);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10004);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10005 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10005);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10005,ret){
return (function (){return fn1.call(null,val_10005);
});})(val_10005,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4495__auto___10006 = n;var x_10007 = (0);while(true){
if((x_10007 < n__4495__auto___10006))
{(a[x_10007] = (0));
{
var G__10008 = (x_10007 + (1));
x_10007 = G__10008;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10009 = (i + (1));
i = G__10009;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10013 = (function (flag,alt_flag,meta10014){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10014 = meta10014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10013.cljs$lang$type = true;
cljs.core.async.t10013.cljs$lang$ctorStr = "cljs.core.async/t10013";
cljs.core.async.t10013.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10013");
});})(flag))
;
cljs.core.async.t10013.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10015){var self__ = this;
var _10015__$1 = this;return self__.meta10014;
});})(flag))
;
cljs.core.async.t10013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10015,meta10014__$1){var self__ = this;
var _10015__$1 = this;return (new cljs.core.async.t10013(self__.flag,self__.alt_flag,meta10014__$1));
});})(flag))
;
cljs.core.async.__GT_t10013 = ((function (flag){
return (function __GT_t10013(flag__$1,alt_flag__$1,meta10014){return (new cljs.core.async.t10013(flag__$1,alt_flag__$1,meta10014));
});})(flag))
;
}
return (new cljs.core.async.t10013(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10019 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10019 = (function (cb,flag,alt_handler,meta10020){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10020 = meta10020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10019.cljs$lang$type = true;
cljs.core.async.t10019.cljs$lang$ctorStr = "cljs.core.async/t10019";
cljs.core.async.t10019.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10019");
});
cljs.core.async.t10019.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10021){var self__ = this;
var _10021__$1 = this;return self__.meta10020;
});
cljs.core.async.t10019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10021,meta10020__$1){var self__ = this;
var _10021__$1 = this;return (new cljs.core.async.t10019(self__.cb,self__.flag,self__.alt_handler,meta10020__$1));
});
cljs.core.async.__GT_t10019 = (function __GT_t10019(cb__$1,flag__$1,alt_handler__$1,meta10020){return (new cljs.core.async.t10019(cb__$1,flag__$1,alt_handler__$1,meta10020));
});
}
return (new cljs.core.async.t10019(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10022_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10022_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10023_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10023_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3626__auto__ = wport;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10024 = (i + (1));
i = G__10024;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3626__auto__ = ret;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3614__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3614__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3614__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10025){var map__10027 = p__10025;var map__10027__$1 = ((cljs.core.seq_QMARK_.call(null,map__10027))?cljs.core.apply.call(null,cljs.core.hash_map,map__10027):map__10027);var opts = map__10027__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__10025 = null;if (arguments.length > 1) {
  p__10025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10025);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10028){
var ports = cljs.core.first(arglist__10028);
var p__10025 = cljs.core.rest(arglist__10028);
return alts_BANG___delegate(ports,p__10025);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10036 = (function (ch,f,map_LT_,meta10037){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10037 = meta10037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10036.cljs$lang$type = true;
cljs.core.async.t10036.cljs$lang$ctorStr = "cljs.core.async/t10036";
cljs.core.async.t10036.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10036");
});
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10039 = (function (fn1,_,meta10037,ch,f,map_LT_,meta10040){
this.fn1 = fn1;
this._ = _;
this.meta10037 = meta10037;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10040 = meta10040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10039.cljs$lang$type = true;
cljs.core.async.t10039.cljs$lang$ctorStr = "cljs.core.async/t10039";
cljs.core.async.t10039.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10039");
});})(___$1))
;
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10029_SHARP_){return f1.call(null,(((p1__10029_SHARP_ == null))?null:self__.f.call(null,p1__10029_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10041){var self__ = this;
var _10041__$1 = this;return self__.meta10040;
});})(___$1))
;
cljs.core.async.t10039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10041,meta10040__$1){var self__ = this;
var _10041__$1 = this;return (new cljs.core.async.t10039(self__.fn1,self__._,self__.meta10037,self__.ch,self__.f,self__.map_LT_,meta10040__$1));
});})(___$1))
;
cljs.core.async.__GT_t10039 = ((function (___$1){
return (function __GT_t10039(fn1__$1,___$2,meta10037__$1,ch__$2,f__$2,map_LT___$2,meta10040){return (new cljs.core.async.t10039(fn1__$1,___$2,meta10037__$1,ch__$2,f__$2,map_LT___$2,meta10040));
});})(___$1))
;
}
return (new cljs.core.async.t10039(fn1,___$1,self__.meta10037,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3614__auto__ = ret;if(cljs.core.truth_(and__3614__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3614__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10036.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10038){var self__ = this;
var _10038__$1 = this;return self__.meta10037;
});
cljs.core.async.t10036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10038,meta10037__$1){var self__ = this;
var _10038__$1 = this;return (new cljs.core.async.t10036(self__.ch,self__.f,self__.map_LT_,meta10037__$1));
});
cljs.core.async.__GT_t10036 = (function __GT_t10036(ch__$1,f__$1,map_LT___$1,meta10037){return (new cljs.core.async.t10036(ch__$1,f__$1,map_LT___$1,meta10037));
});
}
return (new cljs.core.async.t10036(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10045 = (function (ch,f,map_GT_,meta10046){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10046 = meta10046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10045.cljs$lang$type = true;
cljs.core.async.t10045.cljs$lang$ctorStr = "cljs.core.async/t10045";
cljs.core.async.t10045.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10045");
});
cljs.core.async.t10045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10045.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10047){var self__ = this;
var _10047__$1 = this;return self__.meta10046;
});
cljs.core.async.t10045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10047,meta10046__$1){var self__ = this;
var _10047__$1 = this;return (new cljs.core.async.t10045(self__.ch,self__.f,self__.map_GT_,meta10046__$1));
});
cljs.core.async.__GT_t10045 = (function __GT_t10045(ch__$1,f__$1,map_GT___$1,meta10046){return (new cljs.core.async.t10045(ch__$1,f__$1,map_GT___$1,meta10046));
});
}
return (new cljs.core.async.t10045(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10051 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10051 = (function (ch,p,filter_GT_,meta10052){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10052 = meta10052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10051.cljs$lang$type = true;
cljs.core.async.t10051.cljs$lang$ctorStr = "cljs.core.async/t10051";
cljs.core.async.t10051.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t10051");
});
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10053){var self__ = this;
var _10053__$1 = this;return self__.meta10052;
});
cljs.core.async.t10051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10053,meta10052__$1){var self__ = this;
var _10053__$1 = this;return (new cljs.core.async.t10051(self__.ch,self__.p,self__.filter_GT_,meta10052__$1));
});
cljs.core.async.__GT_t10051 = (function __GT_t10051(ch__$1,p__$1,filter_GT___$1,meta10052){return (new cljs.core.async.t10051(ch__$1,p__$1,filter_GT___$1,meta10052));
});
}
return (new cljs.core.async.t10051(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5809__auto___10136 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10136,out){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10136,out){
return (function (state_10115){var state_val_10116 = (state_10115[(1)]);if((state_val_10116 === (7)))
{var inst_10111 = (state_10115[(2)]);var state_10115__$1 = state_10115;var statearr_10117_10137 = state_10115__$1;(statearr_10117_10137[(2)] = inst_10111);
(statearr_10117_10137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (1)))
{var state_10115__$1 = state_10115;var statearr_10118_10138 = state_10115__$1;(statearr_10118_10138[(2)] = null);
(statearr_10118_10138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (4)))
{var inst_10097 = (state_10115[(7)]);var inst_10097__$1 = (state_10115[(2)]);var inst_10098 = (inst_10097__$1 == null);var state_10115__$1 = (function (){var statearr_10119 = state_10115;(statearr_10119[(7)] = inst_10097__$1);
return statearr_10119;
})();if(cljs.core.truth_(inst_10098))
{var statearr_10120_10139 = state_10115__$1;(statearr_10120_10139[(1)] = (5));
} else
{var statearr_10121_10140 = state_10115__$1;(statearr_10121_10140[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (6)))
{var inst_10097 = (state_10115[(7)]);var inst_10102 = p.call(null,inst_10097);var state_10115__$1 = state_10115;if(cljs.core.truth_(inst_10102))
{var statearr_10122_10141 = state_10115__$1;(statearr_10122_10141[(1)] = (8));
} else
{var statearr_10123_10142 = state_10115__$1;(statearr_10123_10142[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (3)))
{var inst_10113 = (state_10115[(2)]);var state_10115__$1 = state_10115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10115__$1,inst_10113);
} else
{if((state_val_10116 === (2)))
{var state_10115__$1 = state_10115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10115__$1,(4),ch);
} else
{if((state_val_10116 === (11)))
{var inst_10105 = (state_10115[(2)]);var state_10115__$1 = state_10115;var statearr_10124_10143 = state_10115__$1;(statearr_10124_10143[(2)] = inst_10105);
(statearr_10124_10143[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (9)))
{var state_10115__$1 = state_10115;var statearr_10125_10144 = state_10115__$1;(statearr_10125_10144[(2)] = null);
(statearr_10125_10144[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (5)))
{var inst_10100 = cljs.core.async.close_BANG_.call(null,out);var state_10115__$1 = state_10115;var statearr_10126_10145 = state_10115__$1;(statearr_10126_10145[(2)] = inst_10100);
(statearr_10126_10145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (10)))
{var inst_10108 = (state_10115[(2)]);var state_10115__$1 = (function (){var statearr_10127 = state_10115;(statearr_10127[(8)] = inst_10108);
return statearr_10127;
})();var statearr_10128_10146 = state_10115__$1;(statearr_10128_10146[(2)] = null);
(statearr_10128_10146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10116 === (8)))
{var inst_10097 = (state_10115[(7)]);var state_10115__$1 = state_10115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10115__$1,(11),out,inst_10097);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___10136,out))
;return ((function (switch__5794__auto__,c__5809__auto___10136,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_10132 = [null,null,null,null,null,null,null,null,null];(statearr_10132[(0)] = state_machine__5795__auto__);
(statearr_10132[(1)] = (1));
return statearr_10132;
});
var state_machine__5795__auto____1 = (function (state_10115){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10115);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e10133){if((e10133 instanceof Object))
{var ex__5798__auto__ = e10133;var statearr_10134_10147 = state_10115;(statearr_10134_10147[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10148 = state_10115;
state_10115 = G__10148;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10115){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10136,out))
})();var state__5811__auto__ = (function (){var statearr_10135 = f__5810__auto__.call(null);(statearr_10135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10136);
return statearr_10135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10136,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5809__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_10314){var state_val_10315 = (state_10314[(1)]);if((state_val_10315 === (7)))
{var inst_10310 = (state_10314[(2)]);var state_10314__$1 = state_10314;var statearr_10316_10357 = state_10314__$1;(statearr_10316_10357[(2)] = inst_10310);
(statearr_10316_10357[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (20)))
{var inst_10280 = (state_10314[(7)]);var inst_10291 = (state_10314[(2)]);var inst_10292 = cljs.core.next.call(null,inst_10280);var inst_10266 = inst_10292;var inst_10267 = null;var inst_10268 = (0);var inst_10269 = (0);var state_10314__$1 = (function (){var statearr_10317 = state_10314;(statearr_10317[(8)] = inst_10269);
(statearr_10317[(9)] = inst_10266);
(statearr_10317[(10)] = inst_10291);
(statearr_10317[(11)] = inst_10268);
(statearr_10317[(12)] = inst_10267);
return statearr_10317;
})();var statearr_10318_10358 = state_10314__$1;(statearr_10318_10358[(2)] = null);
(statearr_10318_10358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (1)))
{var state_10314__$1 = state_10314;var statearr_10319_10359 = state_10314__$1;(statearr_10319_10359[(2)] = null);
(statearr_10319_10359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (4)))
{var inst_10255 = (state_10314[(13)]);var inst_10255__$1 = (state_10314[(2)]);var inst_10256 = (inst_10255__$1 == null);var state_10314__$1 = (function (){var statearr_10320 = state_10314;(statearr_10320[(13)] = inst_10255__$1);
return statearr_10320;
})();if(cljs.core.truth_(inst_10256))
{var statearr_10321_10360 = state_10314__$1;(statearr_10321_10360[(1)] = (5));
} else
{var statearr_10322_10361 = state_10314__$1;(statearr_10322_10361[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (15)))
{var state_10314__$1 = state_10314;var statearr_10326_10362 = state_10314__$1;(statearr_10326_10362[(2)] = null);
(statearr_10326_10362[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (21)))
{var state_10314__$1 = state_10314;var statearr_10327_10363 = state_10314__$1;(statearr_10327_10363[(2)] = null);
(statearr_10327_10363[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (13)))
{var inst_10269 = (state_10314[(8)]);var inst_10266 = (state_10314[(9)]);var inst_10268 = (state_10314[(11)]);var inst_10267 = (state_10314[(12)]);var inst_10276 = (state_10314[(2)]);var inst_10277 = (inst_10269 + (1));var tmp10323 = inst_10266;var tmp10324 = inst_10268;var tmp10325 = inst_10267;var inst_10266__$1 = tmp10323;var inst_10267__$1 = tmp10325;var inst_10268__$1 = tmp10324;var inst_10269__$1 = inst_10277;var state_10314__$1 = (function (){var statearr_10328 = state_10314;(statearr_10328[(14)] = inst_10276);
(statearr_10328[(8)] = inst_10269__$1);
(statearr_10328[(9)] = inst_10266__$1);
(statearr_10328[(11)] = inst_10268__$1);
(statearr_10328[(12)] = inst_10267__$1);
return statearr_10328;
})();var statearr_10329_10364 = state_10314__$1;(statearr_10329_10364[(2)] = null);
(statearr_10329_10364[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (22)))
{var state_10314__$1 = state_10314;var statearr_10330_10365 = state_10314__$1;(statearr_10330_10365[(2)] = null);
(statearr_10330_10365[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (6)))
{var inst_10255 = (state_10314[(13)]);var inst_10264 = f.call(null,inst_10255);var inst_10265 = cljs.core.seq.call(null,inst_10264);var inst_10266 = inst_10265;var inst_10267 = null;var inst_10268 = (0);var inst_10269 = (0);var state_10314__$1 = (function (){var statearr_10331 = state_10314;(statearr_10331[(8)] = inst_10269);
(statearr_10331[(9)] = inst_10266);
(statearr_10331[(11)] = inst_10268);
(statearr_10331[(12)] = inst_10267);
return statearr_10331;
})();var statearr_10332_10366 = state_10314__$1;(statearr_10332_10366[(2)] = null);
(statearr_10332_10366[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (17)))
{var inst_10280 = (state_10314[(7)]);var inst_10284 = cljs.core.chunk_first.call(null,inst_10280);var inst_10285 = cljs.core.chunk_rest.call(null,inst_10280);var inst_10286 = cljs.core.count.call(null,inst_10284);var inst_10266 = inst_10285;var inst_10267 = inst_10284;var inst_10268 = inst_10286;var inst_10269 = (0);var state_10314__$1 = (function (){var statearr_10333 = state_10314;(statearr_10333[(8)] = inst_10269);
(statearr_10333[(9)] = inst_10266);
(statearr_10333[(11)] = inst_10268);
(statearr_10333[(12)] = inst_10267);
return statearr_10333;
})();var statearr_10334_10367 = state_10314__$1;(statearr_10334_10367[(2)] = null);
(statearr_10334_10367[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (3)))
{var inst_10312 = (state_10314[(2)]);var state_10314__$1 = state_10314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10314__$1,inst_10312);
} else
{if((state_val_10315 === (12)))
{var inst_10300 = (state_10314[(2)]);var state_10314__$1 = state_10314;var statearr_10335_10368 = state_10314__$1;(statearr_10335_10368[(2)] = inst_10300);
(statearr_10335_10368[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (2)))
{var state_10314__$1 = state_10314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10314__$1,(4),in$);
} else
{if((state_val_10315 === (23)))
{var inst_10308 = (state_10314[(2)]);var state_10314__$1 = state_10314;var statearr_10336_10369 = state_10314__$1;(statearr_10336_10369[(2)] = inst_10308);
(statearr_10336_10369[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (19)))
{var inst_10295 = (state_10314[(2)]);var state_10314__$1 = state_10314;var statearr_10337_10370 = state_10314__$1;(statearr_10337_10370[(2)] = inst_10295);
(statearr_10337_10370[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (11)))
{var inst_10266 = (state_10314[(9)]);var inst_10280 = (state_10314[(7)]);var inst_10280__$1 = cljs.core.seq.call(null,inst_10266);var state_10314__$1 = (function (){var statearr_10338 = state_10314;(statearr_10338[(7)] = inst_10280__$1);
return statearr_10338;
})();if(inst_10280__$1)
{var statearr_10339_10371 = state_10314__$1;(statearr_10339_10371[(1)] = (14));
} else
{var statearr_10340_10372 = state_10314__$1;(statearr_10340_10372[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (9)))
{var inst_10302 = (state_10314[(2)]);var inst_10303 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10314__$1 = (function (){var statearr_10341 = state_10314;(statearr_10341[(15)] = inst_10302);
return statearr_10341;
})();if(cljs.core.truth_(inst_10303))
{var statearr_10342_10373 = state_10314__$1;(statearr_10342_10373[(1)] = (21));
} else
{var statearr_10343_10374 = state_10314__$1;(statearr_10343_10374[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (5)))
{var inst_10258 = cljs.core.async.close_BANG_.call(null,out);var state_10314__$1 = state_10314;var statearr_10344_10375 = state_10314__$1;(statearr_10344_10375[(2)] = inst_10258);
(statearr_10344_10375[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (14)))
{var inst_10280 = (state_10314[(7)]);var inst_10282 = cljs.core.chunked_seq_QMARK_.call(null,inst_10280);var state_10314__$1 = state_10314;if(inst_10282)
{var statearr_10345_10376 = state_10314__$1;(statearr_10345_10376[(1)] = (17));
} else
{var statearr_10346_10377 = state_10314__$1;(statearr_10346_10377[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (16)))
{var inst_10298 = (state_10314[(2)]);var state_10314__$1 = state_10314;var statearr_10347_10378 = state_10314__$1;(statearr_10347_10378[(2)] = inst_10298);
(statearr_10347_10378[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10315 === (10)))
{var inst_10269 = (state_10314[(8)]);var inst_10267 = (state_10314[(12)]);var inst_10274 = cljs.core._nth.call(null,inst_10267,inst_10269);var state_10314__$1 = state_10314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10314__$1,(13),out,inst_10274);
} else
{if((state_val_10315 === (18)))
{var inst_10280 = (state_10314[(7)]);var inst_10289 = cljs.core.first.call(null,inst_10280);var state_10314__$1 = state_10314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10314__$1,(20),out,inst_10289);
} else
{if((state_val_10315 === (8)))
{var inst_10269 = (state_10314[(8)]);var inst_10268 = (state_10314[(11)]);var inst_10271 = (inst_10269 < inst_10268);var inst_10272 = inst_10271;var state_10314__$1 = state_10314;if(cljs.core.truth_(inst_10272))
{var statearr_10348_10379 = state_10314__$1;(statearr_10348_10379[(1)] = (10));
} else
{var statearr_10349_10380 = state_10314__$1;(statearr_10349_10380[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto__))
;return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_10353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10353[(0)] = state_machine__5795__auto__);
(statearr_10353[(1)] = (1));
return statearr_10353;
});
var state_machine__5795__auto____1 = (function (state_10314){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10314);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e10354){if((e10354 instanceof Object))
{var ex__5798__auto__ = e10354;var statearr_10355_10381 = state_10314;(statearr_10355_10381[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10382 = state_10314;
state_10314 = G__10382;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10314){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();var state__5811__auto__ = (function (){var statearr_10356 = f__5810__auto__.call(null);(statearr_10356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);
return statearr_10356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);
return c__5809__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5809__auto___10477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10477){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10477){
return (function (state_10453){var state_val_10454 = (state_10453[(1)]);if((state_val_10454 === (7)))
{var inst_10449 = (state_10453[(2)]);var state_10453__$1 = state_10453;var statearr_10455_10478 = state_10453__$1;(statearr_10455_10478[(2)] = inst_10449);
(statearr_10455_10478[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (1)))
{var state_10453__$1 = state_10453;var statearr_10456_10479 = state_10453__$1;(statearr_10456_10479[(2)] = null);
(statearr_10456_10479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (4)))
{var inst_10432 = (state_10453[(7)]);var inst_10432__$1 = (state_10453[(2)]);var inst_10433 = (inst_10432__$1 == null);var state_10453__$1 = (function (){var statearr_10457 = state_10453;(statearr_10457[(7)] = inst_10432__$1);
return statearr_10457;
})();if(cljs.core.truth_(inst_10433))
{var statearr_10458_10480 = state_10453__$1;(statearr_10458_10480[(1)] = (5));
} else
{var statearr_10459_10481 = state_10453__$1;(statearr_10459_10481[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (13)))
{var state_10453__$1 = state_10453;var statearr_10460_10482 = state_10453__$1;(statearr_10460_10482[(2)] = null);
(statearr_10460_10482[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (6)))
{var inst_10432 = (state_10453[(7)]);var state_10453__$1 = state_10453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10453__$1,(11),to,inst_10432);
} else
{if((state_val_10454 === (3)))
{var inst_10451 = (state_10453[(2)]);var state_10453__$1 = state_10453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10453__$1,inst_10451);
} else
{if((state_val_10454 === (12)))
{var state_10453__$1 = state_10453;var statearr_10461_10483 = state_10453__$1;(statearr_10461_10483[(2)] = null);
(statearr_10461_10483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (2)))
{var state_10453__$1 = state_10453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10453__$1,(4),from);
} else
{if((state_val_10454 === (11)))
{var inst_10442 = (state_10453[(2)]);var state_10453__$1 = state_10453;if(cljs.core.truth_(inst_10442))
{var statearr_10462_10484 = state_10453__$1;(statearr_10462_10484[(1)] = (12));
} else
{var statearr_10463_10485 = state_10453__$1;(statearr_10463_10485[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (9)))
{var state_10453__$1 = state_10453;var statearr_10464_10486 = state_10453__$1;(statearr_10464_10486[(2)] = null);
(statearr_10464_10486[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (5)))
{var state_10453__$1 = state_10453;if(cljs.core.truth_(close_QMARK_))
{var statearr_10465_10487 = state_10453__$1;(statearr_10465_10487[(1)] = (8));
} else
{var statearr_10466_10488 = state_10453__$1;(statearr_10466_10488[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (14)))
{var inst_10447 = (state_10453[(2)]);var state_10453__$1 = state_10453;var statearr_10467_10489 = state_10453__$1;(statearr_10467_10489[(2)] = inst_10447);
(statearr_10467_10489[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (10)))
{var inst_10439 = (state_10453[(2)]);var state_10453__$1 = state_10453;var statearr_10468_10490 = state_10453__$1;(statearr_10468_10490[(2)] = inst_10439);
(statearr_10468_10490[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10454 === (8)))
{var inst_10436 = cljs.core.async.close_BANG_.call(null,to);var state_10453__$1 = state_10453;var statearr_10469_10491 = state_10453__$1;(statearr_10469_10491[(2)] = inst_10436);
(statearr_10469_10491[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___10477))
;return ((function (switch__5794__auto__,c__5809__auto___10477){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_10473 = [null,null,null,null,null,null,null,null];(statearr_10473[(0)] = state_machine__5795__auto__);
(statearr_10473[(1)] = (1));
return statearr_10473;
});
var state_machine__5795__auto____1 = (function (state_10453){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e10474){if((e10474 instanceof Object))
{var ex__5798__auto__ = e10474;var statearr_10475_10492 = state_10453;(statearr_10475_10492[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10474;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10493 = state_10453;
state_10453 = G__10493;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10453){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10477))
})();var state__5811__auto__ = (function (){var statearr_10476 = f__5810__auto__.call(null);(statearr_10476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10477);
return statearr_10476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10477))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5809__auto___10594 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10594,tc,fc){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10594,tc,fc){
return (function (state_10569){var state_val_10570 = (state_10569[(1)]);if((state_val_10570 === (7)))
{var inst_10565 = (state_10569[(2)]);var state_10569__$1 = state_10569;var statearr_10571_10595 = state_10569__$1;(statearr_10571_10595[(2)] = inst_10565);
(statearr_10571_10595[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (1)))
{var state_10569__$1 = state_10569;var statearr_10572_10596 = state_10569__$1;(statearr_10572_10596[(2)] = null);
(statearr_10572_10596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (4)))
{var inst_10546 = (state_10569[(7)]);var inst_10546__$1 = (state_10569[(2)]);var inst_10547 = (inst_10546__$1 == null);var state_10569__$1 = (function (){var statearr_10573 = state_10569;(statearr_10573[(7)] = inst_10546__$1);
return statearr_10573;
})();if(cljs.core.truth_(inst_10547))
{var statearr_10574_10597 = state_10569__$1;(statearr_10574_10597[(1)] = (5));
} else
{var statearr_10575_10598 = state_10569__$1;(statearr_10575_10598[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (13)))
{var state_10569__$1 = state_10569;var statearr_10576_10599 = state_10569__$1;(statearr_10576_10599[(2)] = null);
(statearr_10576_10599[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (6)))
{var inst_10546 = (state_10569[(7)]);var inst_10552 = p.call(null,inst_10546);var state_10569__$1 = state_10569;if(cljs.core.truth_(inst_10552))
{var statearr_10577_10600 = state_10569__$1;(statearr_10577_10600[(1)] = (9));
} else
{var statearr_10578_10601 = state_10569__$1;(statearr_10578_10601[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (3)))
{var inst_10567 = (state_10569[(2)]);var state_10569__$1 = state_10569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10569__$1,inst_10567);
} else
{if((state_val_10570 === (12)))
{var state_10569__$1 = state_10569;var statearr_10579_10602 = state_10569__$1;(statearr_10579_10602[(2)] = null);
(statearr_10579_10602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (2)))
{var state_10569__$1 = state_10569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10569__$1,(4),ch);
} else
{if((state_val_10570 === (11)))
{var inst_10546 = (state_10569[(7)]);var inst_10556 = (state_10569[(2)]);var state_10569__$1 = state_10569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10569__$1,(8),inst_10556,inst_10546);
} else
{if((state_val_10570 === (9)))
{var state_10569__$1 = state_10569;var statearr_10580_10603 = state_10569__$1;(statearr_10580_10603[(2)] = tc);
(statearr_10580_10603[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (5)))
{var inst_10549 = cljs.core.async.close_BANG_.call(null,tc);var inst_10550 = cljs.core.async.close_BANG_.call(null,fc);var state_10569__$1 = (function (){var statearr_10581 = state_10569;(statearr_10581[(8)] = inst_10549);
return statearr_10581;
})();var statearr_10582_10604 = state_10569__$1;(statearr_10582_10604[(2)] = inst_10550);
(statearr_10582_10604[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (14)))
{var inst_10563 = (state_10569[(2)]);var state_10569__$1 = state_10569;var statearr_10583_10605 = state_10569__$1;(statearr_10583_10605[(2)] = inst_10563);
(statearr_10583_10605[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (10)))
{var state_10569__$1 = state_10569;var statearr_10584_10606 = state_10569__$1;(statearr_10584_10606[(2)] = fc);
(statearr_10584_10606[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10570 === (8)))
{var inst_10558 = (state_10569[(2)]);var state_10569__$1 = state_10569;if(cljs.core.truth_(inst_10558))
{var statearr_10585_10607 = state_10569__$1;(statearr_10585_10607[(1)] = (12));
} else
{var statearr_10586_10608 = state_10569__$1;(statearr_10586_10608[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___10594,tc,fc))
;return ((function (switch__5794__auto__,c__5809__auto___10594,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_10590 = [null,null,null,null,null,null,null,null,null];(statearr_10590[(0)] = state_machine__5795__auto__);
(statearr_10590[(1)] = (1));
return statearr_10590;
});
var state_machine__5795__auto____1 = (function (state_10569){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e10591){if((e10591 instanceof Object))
{var ex__5798__auto__ = e10591;var statearr_10592_10609 = state_10569;(statearr_10592_10609[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10569);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10591;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10610 = state_10569;
state_10569 = G__10610;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10569){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10594,tc,fc))
})();var state__5811__auto__ = (function (){var statearr_10593 = f__5810__auto__.call(null);(statearr_10593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10594);
return statearr_10593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10594,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5809__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_10657){var state_val_10658 = (state_10657[(1)]);if((state_val_10658 === (7)))
{var inst_10653 = (state_10657[(2)]);var state_10657__$1 = state_10657;var statearr_10659_10675 = state_10657__$1;(statearr_10659_10675[(2)] = inst_10653);
(statearr_10659_10675[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10658 === (6)))
{var inst_10643 = (state_10657[(7)]);var inst_10646 = (state_10657[(8)]);var inst_10650 = f.call(null,inst_10643,inst_10646);var inst_10643__$1 = inst_10650;var state_10657__$1 = (function (){var statearr_10660 = state_10657;(statearr_10660[(7)] = inst_10643__$1);
return statearr_10660;
})();var statearr_10661_10676 = state_10657__$1;(statearr_10661_10676[(2)] = null);
(statearr_10661_10676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10658 === (5)))
{var inst_10643 = (state_10657[(7)]);var state_10657__$1 = state_10657;var statearr_10662_10677 = state_10657__$1;(statearr_10662_10677[(2)] = inst_10643);
(statearr_10662_10677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10658 === (4)))
{var inst_10646 = (state_10657[(8)]);var inst_10646__$1 = (state_10657[(2)]);var inst_10647 = (inst_10646__$1 == null);var state_10657__$1 = (function (){var statearr_10663 = state_10657;(statearr_10663[(8)] = inst_10646__$1);
return statearr_10663;
})();if(cljs.core.truth_(inst_10647))
{var statearr_10664_10678 = state_10657__$1;(statearr_10664_10678[(1)] = (5));
} else
{var statearr_10665_10679 = state_10657__$1;(statearr_10665_10679[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10658 === (3)))
{var inst_10655 = (state_10657[(2)]);var state_10657__$1 = state_10657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10657__$1,inst_10655);
} else
{if((state_val_10658 === (2)))
{var state_10657__$1 = state_10657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10657__$1,(4),ch);
} else
{if((state_val_10658 === (1)))
{var inst_10643 = init;var state_10657__$1 = (function (){var statearr_10666 = state_10657;(statearr_10666[(7)] = inst_10643);
return statearr_10666;
})();var statearr_10667_10680 = state_10657__$1;(statearr_10667_10680[(2)] = null);
(statearr_10667_10680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5809__auto__))
;return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_10671 = [null,null,null,null,null,null,null,null,null];(statearr_10671[(0)] = state_machine__5795__auto__);
(statearr_10671[(1)] = (1));
return statearr_10671;
});
var state_machine__5795__auto____1 = (function (state_10657){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10657);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e10672){if((e10672 instanceof Object))
{var ex__5798__auto__ = e10672;var statearr_10673_10681 = state_10657;(statearr_10673_10681[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10682 = state_10657;
state_10657 = G__10682;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10657){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();var state__5811__auto__ = (function (){var statearr_10674 = f__5810__auto__.call(null);(statearr_10674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);
return statearr_10674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);
return c__5809__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5809__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_10756){var state_val_10757 = (state_10756[(1)]);if((state_val_10757 === (7)))
{var inst_10738 = (state_10756[(2)]);var state_10756__$1 = state_10756;var statearr_10758_10781 = state_10756__$1;(statearr_10758_10781[(2)] = inst_10738);
(statearr_10758_10781[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (1)))
{var inst_10732 = cljs.core.seq.call(null,coll);var inst_10733 = inst_10732;var state_10756__$1 = (function (){var statearr_10759 = state_10756;(statearr_10759[(7)] = inst_10733);
return statearr_10759;
})();var statearr_10760_10782 = state_10756__$1;(statearr_10760_10782[(2)] = null);
(statearr_10760_10782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (4)))
{var inst_10733 = (state_10756[(7)]);var inst_10736 = cljs.core.first.call(null,inst_10733);var state_10756__$1 = state_10756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10756__$1,(7),ch,inst_10736);
} else
{if((state_val_10757 === (13)))
{var inst_10750 = (state_10756[(2)]);var state_10756__$1 = state_10756;var statearr_10761_10783 = state_10756__$1;(statearr_10761_10783[(2)] = inst_10750);
(statearr_10761_10783[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (6)))
{var inst_10741 = (state_10756[(2)]);var state_10756__$1 = state_10756;if(cljs.core.truth_(inst_10741))
{var statearr_10762_10784 = state_10756__$1;(statearr_10762_10784[(1)] = (8));
} else
{var statearr_10763_10785 = state_10756__$1;(statearr_10763_10785[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (3)))
{var inst_10754 = (state_10756[(2)]);var state_10756__$1 = state_10756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10756__$1,inst_10754);
} else
{if((state_val_10757 === (12)))
{var state_10756__$1 = state_10756;var statearr_10764_10786 = state_10756__$1;(statearr_10764_10786[(2)] = null);
(statearr_10764_10786[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (2)))
{var inst_10733 = (state_10756[(7)]);var state_10756__$1 = state_10756;if(cljs.core.truth_(inst_10733))
{var statearr_10765_10787 = state_10756__$1;(statearr_10765_10787[(1)] = (4));
} else
{var statearr_10766_10788 = state_10756__$1;(statearr_10766_10788[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (11)))
{var inst_10747 = cljs.core.async.close_BANG_.call(null,ch);var state_10756__$1 = state_10756;var statearr_10767_10789 = state_10756__$1;(statearr_10767_10789[(2)] = inst_10747);
(statearr_10767_10789[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (9)))
{var state_10756__$1 = state_10756;if(cljs.core.truth_(close_QMARK_))
{var statearr_10768_10790 = state_10756__$1;(statearr_10768_10790[(1)] = (11));
} else
{var statearr_10769_10791 = state_10756__$1;(statearr_10769_10791[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (5)))
{var inst_10733 = (state_10756[(7)]);var state_10756__$1 = state_10756;var statearr_10770_10792 = state_10756__$1;(statearr_10770_10792[(2)] = inst_10733);
(statearr_10770_10792[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (10)))
{var inst_10752 = (state_10756[(2)]);var state_10756__$1 = state_10756;var statearr_10771_10793 = state_10756__$1;(statearr_10771_10793[(2)] = inst_10752);
(statearr_10771_10793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10757 === (8)))
{var inst_10733 = (state_10756[(7)]);var inst_10743 = cljs.core.next.call(null,inst_10733);var inst_10733__$1 = inst_10743;var state_10756__$1 = (function (){var statearr_10772 = state_10756;(statearr_10772[(7)] = inst_10733__$1);
return statearr_10772;
})();var statearr_10773_10794 = state_10756__$1;(statearr_10773_10794[(2)] = null);
(statearr_10773_10794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto__))
;return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_10777 = [null,null,null,null,null,null,null,null];(statearr_10777[(0)] = state_machine__5795__auto__);
(statearr_10777[(1)] = (1));
return statearr_10777;
});
var state_machine__5795__auto____1 = (function (state_10756){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10756);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e10778){if((e10778 instanceof Object))
{var ex__5798__auto__ = e10778;var statearr_10779_10795 = state_10756;(statearr_10779_10795[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10778;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10796 = state_10756;
state_10756 = G__10796;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10756){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();var state__5811__auto__ = (function (){var statearr_10780 = f__5810__auto__.call(null);(statearr_10780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);
return statearr_10780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);
return c__5809__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10798 = {};return obj10798;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3614__auto__ = _;if(and__3614__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4262__auto__ = (((_ == null))?null:_);return (function (){var or__3626__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10800 = {};return obj10800;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11022 = (function (cs,ch,mult,meta11023){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11023 = meta11023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11022.cljs$lang$type = true;
cljs.core.async.t11022.cljs$lang$ctorStr = "cljs.core.async/t11022";
cljs.core.async.t11022.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11022");
});})(cs))
;
cljs.core.async.t11022.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11022.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11022.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11022.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11022.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11024){var self__ = this;
var _11024__$1 = this;return self__.meta11023;
});})(cs))
;
cljs.core.async.t11022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11024,meta11023__$1){var self__ = this;
var _11024__$1 = this;return (new cljs.core.async.t11022(self__.cs,self__.ch,self__.mult,meta11023__$1));
});})(cs))
;
cljs.core.async.__GT_t11022 = ((function (cs){
return (function __GT_t11022(cs__$1,ch__$1,mult__$1,meta11023){return (new cljs.core.async.t11022(cs__$1,ch__$1,mult__$1,meta11023));
});})(cs))
;
}
return (new cljs.core.async.t11022(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5809__auto___11243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11243,cs,m,dchan,dctr,done){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11243,cs,m,dchan,dctr,done){
return (function (state_11155){var state_val_11156 = (state_11155[(1)]);if((state_val_11156 === (7)))
{var inst_11151 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11157_11244 = state_11155__$1;(statearr_11157_11244[(2)] = inst_11151);
(statearr_11157_11244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (20)))
{var inst_11056 = (state_11155[(7)]);var inst_11066 = cljs.core.first.call(null,inst_11056);var inst_11067 = cljs.core.nth.call(null,inst_11066,(0),null);var inst_11068 = cljs.core.nth.call(null,inst_11066,(1),null);var state_11155__$1 = (function (){var statearr_11158 = state_11155;(statearr_11158[(8)] = inst_11067);
return statearr_11158;
})();if(cljs.core.truth_(inst_11068))
{var statearr_11159_11245 = state_11155__$1;(statearr_11159_11245[(1)] = (22));
} else
{var statearr_11160_11246 = state_11155__$1;(statearr_11160_11246[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (27)))
{var inst_11103 = (state_11155[(9)]);var inst_11096 = (state_11155[(10)]);var inst_11027 = (state_11155[(11)]);var inst_11098 = (state_11155[(12)]);var inst_11103__$1 = cljs.core._nth.call(null,inst_11096,inst_11098);var inst_11104 = cljs.core.async.put_BANG_.call(null,inst_11103__$1,inst_11027,done);var state_11155__$1 = (function (){var statearr_11161 = state_11155;(statearr_11161[(9)] = inst_11103__$1);
return statearr_11161;
})();if(cljs.core.truth_(inst_11104))
{var statearr_11162_11247 = state_11155__$1;(statearr_11162_11247[(1)] = (30));
} else
{var statearr_11163_11248 = state_11155__$1;(statearr_11163_11248[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (1)))
{var state_11155__$1 = state_11155;var statearr_11164_11249 = state_11155__$1;(statearr_11164_11249[(2)] = null);
(statearr_11164_11249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (24)))
{var inst_11056 = (state_11155[(7)]);var inst_11073 = (state_11155[(2)]);var inst_11074 = cljs.core.next.call(null,inst_11056);var inst_11036 = inst_11074;var inst_11037 = null;var inst_11038 = (0);var inst_11039 = (0);var state_11155__$1 = (function (){var statearr_11165 = state_11155;(statearr_11165[(13)] = inst_11039);
(statearr_11165[(14)] = inst_11037);
(statearr_11165[(15)] = inst_11038);
(statearr_11165[(16)] = inst_11036);
(statearr_11165[(17)] = inst_11073);
return statearr_11165;
})();var statearr_11166_11250 = state_11155__$1;(statearr_11166_11250[(2)] = null);
(statearr_11166_11250[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (39)))
{var state_11155__$1 = state_11155;var statearr_11170_11251 = state_11155__$1;(statearr_11170_11251[(2)] = null);
(statearr_11170_11251[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (4)))
{var inst_11027 = (state_11155[(11)]);var inst_11027__$1 = (state_11155[(2)]);var inst_11028 = (inst_11027__$1 == null);var state_11155__$1 = (function (){var statearr_11171 = state_11155;(statearr_11171[(11)] = inst_11027__$1);
return statearr_11171;
})();if(cljs.core.truth_(inst_11028))
{var statearr_11172_11252 = state_11155__$1;(statearr_11172_11252[(1)] = (5));
} else
{var statearr_11173_11253 = state_11155__$1;(statearr_11173_11253[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (15)))
{var inst_11039 = (state_11155[(13)]);var inst_11037 = (state_11155[(14)]);var inst_11038 = (state_11155[(15)]);var inst_11036 = (state_11155[(16)]);var inst_11052 = (state_11155[(2)]);var inst_11053 = (inst_11039 + (1));var tmp11167 = inst_11037;var tmp11168 = inst_11038;var tmp11169 = inst_11036;var inst_11036__$1 = tmp11169;var inst_11037__$1 = tmp11167;var inst_11038__$1 = tmp11168;var inst_11039__$1 = inst_11053;var state_11155__$1 = (function (){var statearr_11174 = state_11155;(statearr_11174[(18)] = inst_11052);
(statearr_11174[(13)] = inst_11039__$1);
(statearr_11174[(14)] = inst_11037__$1);
(statearr_11174[(15)] = inst_11038__$1);
(statearr_11174[(16)] = inst_11036__$1);
return statearr_11174;
})();var statearr_11175_11254 = state_11155__$1;(statearr_11175_11254[(2)] = null);
(statearr_11175_11254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (21)))
{var inst_11077 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11179_11255 = state_11155__$1;(statearr_11179_11255[(2)] = inst_11077);
(statearr_11179_11255[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (31)))
{var inst_11103 = (state_11155[(9)]);var inst_11107 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11108 = cljs.core.async.untap_STAR_.call(null,m,inst_11103);var state_11155__$1 = (function (){var statearr_11180 = state_11155;(statearr_11180[(19)] = inst_11107);
return statearr_11180;
})();var statearr_11181_11256 = state_11155__$1;(statearr_11181_11256[(2)] = inst_11108);
(statearr_11181_11256[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (32)))
{var inst_11096 = (state_11155[(10)]);var inst_11095 = (state_11155[(20)]);var inst_11097 = (state_11155[(21)]);var inst_11098 = (state_11155[(12)]);var inst_11110 = (state_11155[(2)]);var inst_11111 = (inst_11098 + (1));var tmp11176 = inst_11096;var tmp11177 = inst_11095;var tmp11178 = inst_11097;var inst_11095__$1 = tmp11177;var inst_11096__$1 = tmp11176;var inst_11097__$1 = tmp11178;var inst_11098__$1 = inst_11111;var state_11155__$1 = (function (){var statearr_11182 = state_11155;(statearr_11182[(22)] = inst_11110);
(statearr_11182[(10)] = inst_11096__$1);
(statearr_11182[(20)] = inst_11095__$1);
(statearr_11182[(21)] = inst_11097__$1);
(statearr_11182[(12)] = inst_11098__$1);
return statearr_11182;
})();var statearr_11183_11257 = state_11155__$1;(statearr_11183_11257[(2)] = null);
(statearr_11183_11257[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (40)))
{var inst_11123 = (state_11155[(23)]);var inst_11127 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11128 = cljs.core.async.untap_STAR_.call(null,m,inst_11123);var state_11155__$1 = (function (){var statearr_11184 = state_11155;(statearr_11184[(24)] = inst_11127);
return statearr_11184;
})();var statearr_11185_11258 = state_11155__$1;(statearr_11185_11258[(2)] = inst_11128);
(statearr_11185_11258[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (33)))
{var inst_11114 = (state_11155[(25)]);var inst_11116 = cljs.core.chunked_seq_QMARK_.call(null,inst_11114);var state_11155__$1 = state_11155;if(inst_11116)
{var statearr_11186_11259 = state_11155__$1;(statearr_11186_11259[(1)] = (36));
} else
{var statearr_11187_11260 = state_11155__$1;(statearr_11187_11260[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (13)))
{var inst_11046 = (state_11155[(26)]);var inst_11049 = cljs.core.async.close_BANG_.call(null,inst_11046);var state_11155__$1 = state_11155;var statearr_11188_11261 = state_11155__$1;(statearr_11188_11261[(2)] = inst_11049);
(statearr_11188_11261[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (22)))
{var inst_11067 = (state_11155[(8)]);var inst_11070 = cljs.core.async.close_BANG_.call(null,inst_11067);var state_11155__$1 = state_11155;var statearr_11189_11262 = state_11155__$1;(statearr_11189_11262[(2)] = inst_11070);
(statearr_11189_11262[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (36)))
{var inst_11114 = (state_11155[(25)]);var inst_11118 = cljs.core.chunk_first.call(null,inst_11114);var inst_11119 = cljs.core.chunk_rest.call(null,inst_11114);var inst_11120 = cljs.core.count.call(null,inst_11118);var inst_11095 = inst_11119;var inst_11096 = inst_11118;var inst_11097 = inst_11120;var inst_11098 = (0);var state_11155__$1 = (function (){var statearr_11190 = state_11155;(statearr_11190[(10)] = inst_11096);
(statearr_11190[(20)] = inst_11095);
(statearr_11190[(21)] = inst_11097);
(statearr_11190[(12)] = inst_11098);
return statearr_11190;
})();var statearr_11191_11263 = state_11155__$1;(statearr_11191_11263[(2)] = null);
(statearr_11191_11263[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (41)))
{var inst_11114 = (state_11155[(25)]);var inst_11130 = (state_11155[(2)]);var inst_11131 = cljs.core.next.call(null,inst_11114);var inst_11095 = inst_11131;var inst_11096 = null;var inst_11097 = (0);var inst_11098 = (0);var state_11155__$1 = (function (){var statearr_11192 = state_11155;(statearr_11192[(27)] = inst_11130);
(statearr_11192[(10)] = inst_11096);
(statearr_11192[(20)] = inst_11095);
(statearr_11192[(21)] = inst_11097);
(statearr_11192[(12)] = inst_11098);
return statearr_11192;
})();var statearr_11193_11264 = state_11155__$1;(statearr_11193_11264[(2)] = null);
(statearr_11193_11264[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (43)))
{var state_11155__$1 = state_11155;var statearr_11194_11265 = state_11155__$1;(statearr_11194_11265[(2)] = null);
(statearr_11194_11265[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (29)))
{var inst_11139 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11195_11266 = state_11155__$1;(statearr_11195_11266[(2)] = inst_11139);
(statearr_11195_11266[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (44)))
{var inst_11148 = (state_11155[(2)]);var state_11155__$1 = (function (){var statearr_11196 = state_11155;(statearr_11196[(28)] = inst_11148);
return statearr_11196;
})();var statearr_11197_11267 = state_11155__$1;(statearr_11197_11267[(2)] = null);
(statearr_11197_11267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (6)))
{var inst_11087 = (state_11155[(29)]);var inst_11086 = cljs.core.deref.call(null,cs);var inst_11087__$1 = cljs.core.keys.call(null,inst_11086);var inst_11088 = cljs.core.count.call(null,inst_11087__$1);var inst_11089 = cljs.core.reset_BANG_.call(null,dctr,inst_11088);var inst_11094 = cljs.core.seq.call(null,inst_11087__$1);var inst_11095 = inst_11094;var inst_11096 = null;var inst_11097 = (0);var inst_11098 = (0);var state_11155__$1 = (function (){var statearr_11198 = state_11155;(statearr_11198[(10)] = inst_11096);
(statearr_11198[(29)] = inst_11087__$1);
(statearr_11198[(20)] = inst_11095);
(statearr_11198[(21)] = inst_11097);
(statearr_11198[(30)] = inst_11089);
(statearr_11198[(12)] = inst_11098);
return statearr_11198;
})();var statearr_11199_11268 = state_11155__$1;(statearr_11199_11268[(2)] = null);
(statearr_11199_11268[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (28)))
{var inst_11114 = (state_11155[(25)]);var inst_11095 = (state_11155[(20)]);var inst_11114__$1 = cljs.core.seq.call(null,inst_11095);var state_11155__$1 = (function (){var statearr_11200 = state_11155;(statearr_11200[(25)] = inst_11114__$1);
return statearr_11200;
})();if(inst_11114__$1)
{var statearr_11201_11269 = state_11155__$1;(statearr_11201_11269[(1)] = (33));
} else
{var statearr_11202_11270 = state_11155__$1;(statearr_11202_11270[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (25)))
{var inst_11097 = (state_11155[(21)]);var inst_11098 = (state_11155[(12)]);var inst_11100 = (inst_11098 < inst_11097);var inst_11101 = inst_11100;var state_11155__$1 = state_11155;if(cljs.core.truth_(inst_11101))
{var statearr_11203_11271 = state_11155__$1;(statearr_11203_11271[(1)] = (27));
} else
{var statearr_11204_11272 = state_11155__$1;(statearr_11204_11272[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (34)))
{var state_11155__$1 = state_11155;var statearr_11205_11273 = state_11155__$1;(statearr_11205_11273[(2)] = null);
(statearr_11205_11273[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (17)))
{var state_11155__$1 = state_11155;var statearr_11206_11274 = state_11155__$1;(statearr_11206_11274[(2)] = null);
(statearr_11206_11274[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (3)))
{var inst_11153 = (state_11155[(2)]);var state_11155__$1 = state_11155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11155__$1,inst_11153);
} else
{if((state_val_11156 === (12)))
{var inst_11082 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11207_11275 = state_11155__$1;(statearr_11207_11275[(2)] = inst_11082);
(statearr_11207_11275[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (2)))
{var state_11155__$1 = state_11155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11155__$1,(4),ch);
} else
{if((state_val_11156 === (23)))
{var state_11155__$1 = state_11155;var statearr_11208_11276 = state_11155__$1;(statearr_11208_11276[(2)] = null);
(statearr_11208_11276[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (35)))
{var inst_11137 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11209_11277 = state_11155__$1;(statearr_11209_11277[(2)] = inst_11137);
(statearr_11209_11277[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (19)))
{var inst_11056 = (state_11155[(7)]);var inst_11060 = cljs.core.chunk_first.call(null,inst_11056);var inst_11061 = cljs.core.chunk_rest.call(null,inst_11056);var inst_11062 = cljs.core.count.call(null,inst_11060);var inst_11036 = inst_11061;var inst_11037 = inst_11060;var inst_11038 = inst_11062;var inst_11039 = (0);var state_11155__$1 = (function (){var statearr_11210 = state_11155;(statearr_11210[(13)] = inst_11039);
(statearr_11210[(14)] = inst_11037);
(statearr_11210[(15)] = inst_11038);
(statearr_11210[(16)] = inst_11036);
return statearr_11210;
})();var statearr_11211_11278 = state_11155__$1;(statearr_11211_11278[(2)] = null);
(statearr_11211_11278[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (11)))
{var inst_11056 = (state_11155[(7)]);var inst_11036 = (state_11155[(16)]);var inst_11056__$1 = cljs.core.seq.call(null,inst_11036);var state_11155__$1 = (function (){var statearr_11212 = state_11155;(statearr_11212[(7)] = inst_11056__$1);
return statearr_11212;
})();if(inst_11056__$1)
{var statearr_11213_11279 = state_11155__$1;(statearr_11213_11279[(1)] = (16));
} else
{var statearr_11214_11280 = state_11155__$1;(statearr_11214_11280[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (9)))
{var inst_11084 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11215_11281 = state_11155__$1;(statearr_11215_11281[(2)] = inst_11084);
(statearr_11215_11281[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (5)))
{var inst_11034 = cljs.core.deref.call(null,cs);var inst_11035 = cljs.core.seq.call(null,inst_11034);var inst_11036 = inst_11035;var inst_11037 = null;var inst_11038 = (0);var inst_11039 = (0);var state_11155__$1 = (function (){var statearr_11216 = state_11155;(statearr_11216[(13)] = inst_11039);
(statearr_11216[(14)] = inst_11037);
(statearr_11216[(15)] = inst_11038);
(statearr_11216[(16)] = inst_11036);
return statearr_11216;
})();var statearr_11217_11282 = state_11155__$1;(statearr_11217_11282[(2)] = null);
(statearr_11217_11282[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (14)))
{var state_11155__$1 = state_11155;var statearr_11218_11283 = state_11155__$1;(statearr_11218_11283[(2)] = null);
(statearr_11218_11283[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (45)))
{var inst_11145 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11219_11284 = state_11155__$1;(statearr_11219_11284[(2)] = inst_11145);
(statearr_11219_11284[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (26)))
{var inst_11087 = (state_11155[(29)]);var inst_11141 = (state_11155[(2)]);var inst_11142 = cljs.core.seq.call(null,inst_11087);var state_11155__$1 = (function (){var statearr_11220 = state_11155;(statearr_11220[(31)] = inst_11141);
return statearr_11220;
})();if(inst_11142)
{var statearr_11221_11285 = state_11155__$1;(statearr_11221_11285[(1)] = (42));
} else
{var statearr_11222_11286 = state_11155__$1;(statearr_11222_11286[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (16)))
{var inst_11056 = (state_11155[(7)]);var inst_11058 = cljs.core.chunked_seq_QMARK_.call(null,inst_11056);var state_11155__$1 = state_11155;if(inst_11058)
{var statearr_11223_11287 = state_11155__$1;(statearr_11223_11287[(1)] = (19));
} else
{var statearr_11224_11288 = state_11155__$1;(statearr_11224_11288[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (38)))
{var inst_11134 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11225_11289 = state_11155__$1;(statearr_11225_11289[(2)] = inst_11134);
(statearr_11225_11289[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (30)))
{var state_11155__$1 = state_11155;var statearr_11226_11290 = state_11155__$1;(statearr_11226_11290[(2)] = null);
(statearr_11226_11290[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (10)))
{var inst_11039 = (state_11155[(13)]);var inst_11037 = (state_11155[(14)]);var inst_11045 = cljs.core._nth.call(null,inst_11037,inst_11039);var inst_11046 = cljs.core.nth.call(null,inst_11045,(0),null);var inst_11047 = cljs.core.nth.call(null,inst_11045,(1),null);var state_11155__$1 = (function (){var statearr_11227 = state_11155;(statearr_11227[(26)] = inst_11046);
return statearr_11227;
})();if(cljs.core.truth_(inst_11047))
{var statearr_11228_11291 = state_11155__$1;(statearr_11228_11291[(1)] = (13));
} else
{var statearr_11229_11292 = state_11155__$1;(statearr_11229_11292[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (18)))
{var inst_11080 = (state_11155[(2)]);var state_11155__$1 = state_11155;var statearr_11230_11293 = state_11155__$1;(statearr_11230_11293[(2)] = inst_11080);
(statearr_11230_11293[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (42)))
{var state_11155__$1 = state_11155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11155__$1,(45),dchan);
} else
{if((state_val_11156 === (37)))
{var inst_11027 = (state_11155[(11)]);var inst_11114 = (state_11155[(25)]);var inst_11123 = (state_11155[(23)]);var inst_11123__$1 = cljs.core.first.call(null,inst_11114);var inst_11124 = cljs.core.async.put_BANG_.call(null,inst_11123__$1,inst_11027,done);var state_11155__$1 = (function (){var statearr_11231 = state_11155;(statearr_11231[(23)] = inst_11123__$1);
return statearr_11231;
})();if(cljs.core.truth_(inst_11124))
{var statearr_11232_11294 = state_11155__$1;(statearr_11232_11294[(1)] = (39));
} else
{var statearr_11233_11295 = state_11155__$1;(statearr_11233_11295[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11156 === (8)))
{var inst_11039 = (state_11155[(13)]);var inst_11038 = (state_11155[(15)]);var inst_11041 = (inst_11039 < inst_11038);var inst_11042 = inst_11041;var state_11155__$1 = state_11155;if(cljs.core.truth_(inst_11042))
{var statearr_11234_11296 = state_11155__$1;(statearr_11234_11296[(1)] = (10));
} else
{var statearr_11235_11297 = state_11155__$1;(statearr_11235_11297[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___11243,cs,m,dchan,dctr,done))
;return ((function (switch__5794__auto__,c__5809__auto___11243,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_11239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11239[(0)] = state_machine__5795__auto__);
(statearr_11239[(1)] = (1));
return statearr_11239;
});
var state_machine__5795__auto____1 = (function (state_11155){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11155);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e11240){if((e11240 instanceof Object))
{var ex__5798__auto__ = e11240;var statearr_11241_11298 = state_11155;(statearr_11241_11298[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11299 = state_11155;
state_11155 = G__11299;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11155){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11243,cs,m,dchan,dctr,done))
})();var state__5811__auto__ = (function (){var statearr_11242 = f__5810__auto__.call(null);(statearr_11242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11243);
return statearr_11242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11243,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11301 = {};return obj11301;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11421 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11422){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11422 = meta11422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11421.cljs$lang$type = true;
cljs.core.async.t11421.cljs$lang$ctorStr = "cljs.core.async/t11421";
cljs.core.async.t11421.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11421");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11421.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11423){var self__ = this;
var _11423__$1 = this;return self__.meta11422;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11423,meta11422__$1){var self__ = this;
var _11423__$1 = this;return (new cljs.core.async.t11421(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11422__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11421 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11421(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11422){return (new cljs.core.async.t11421(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11422));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11421(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5809__auto___11540 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11493){var state_val_11494 = (state_11493[(1)]);if((state_val_11494 === (7)))
{var inst_11437 = (state_11493[(7)]);var inst_11442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11437);var state_11493__$1 = state_11493;var statearr_11495_11541 = state_11493__$1;(statearr_11495_11541[(2)] = inst_11442);
(statearr_11495_11541[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (20)))
{var inst_11452 = (state_11493[(8)]);var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11493__$1,(23),out,inst_11452);
} else
{if((state_val_11494 === (1)))
{var inst_11427 = (state_11493[(9)]);var inst_11427__$1 = calc_state.call(null);var inst_11428 = cljs.core.seq_QMARK_.call(null,inst_11427__$1);var state_11493__$1 = (function (){var statearr_11496 = state_11493;(statearr_11496[(9)] = inst_11427__$1);
return statearr_11496;
})();if(inst_11428)
{var statearr_11497_11542 = state_11493__$1;(statearr_11497_11542[(1)] = (2));
} else
{var statearr_11498_11543 = state_11493__$1;(statearr_11498_11543[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (24)))
{var inst_11445 = (state_11493[(10)]);var inst_11437 = inst_11445;var state_11493__$1 = (function (){var statearr_11499 = state_11493;(statearr_11499[(7)] = inst_11437);
return statearr_11499;
})();var statearr_11500_11544 = state_11493__$1;(statearr_11500_11544[(2)] = null);
(statearr_11500_11544[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (4)))
{var inst_11427 = (state_11493[(9)]);var inst_11433 = (state_11493[(2)]);var inst_11434 = cljs.core.get.call(null,inst_11433,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11435 = cljs.core.get.call(null,inst_11433,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11436 = cljs.core.get.call(null,inst_11433,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_11437 = inst_11427;var state_11493__$1 = (function (){var statearr_11501 = state_11493;(statearr_11501[(11)] = inst_11434);
(statearr_11501[(12)] = inst_11435);
(statearr_11501[(7)] = inst_11437);
(statearr_11501[(13)] = inst_11436);
return statearr_11501;
})();var statearr_11502_11545 = state_11493__$1;(statearr_11502_11545[(2)] = null);
(statearr_11502_11545[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (15)))
{var state_11493__$1 = state_11493;var statearr_11503_11546 = state_11493__$1;(statearr_11503_11546[(2)] = null);
(statearr_11503_11546[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (21)))
{var inst_11445 = (state_11493[(10)]);var inst_11437 = inst_11445;var state_11493__$1 = (function (){var statearr_11504 = state_11493;(statearr_11504[(7)] = inst_11437);
return statearr_11504;
})();var statearr_11505_11547 = state_11493__$1;(statearr_11505_11547[(2)] = null);
(statearr_11505_11547[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (13)))
{var inst_11489 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11506_11548 = state_11493__$1;(statearr_11506_11548[(2)] = inst_11489);
(statearr_11506_11548[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (22)))
{var inst_11487 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11507_11549 = state_11493__$1;(statearr_11507_11549[(2)] = inst_11487);
(statearr_11507_11549[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (6)))
{var inst_11491 = (state_11493[(2)]);var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11493__$1,inst_11491);
} else
{if((state_val_11494 === (25)))
{var state_11493__$1 = state_11493;var statearr_11508_11550 = state_11493__$1;(statearr_11508_11550[(2)] = null);
(statearr_11508_11550[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (17)))
{var inst_11467 = (state_11493[(14)]);var state_11493__$1 = state_11493;var statearr_11509_11551 = state_11493__$1;(statearr_11509_11551[(2)] = inst_11467);
(statearr_11509_11551[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (3)))
{var inst_11427 = (state_11493[(9)]);var state_11493__$1 = state_11493;var statearr_11510_11552 = state_11493__$1;(statearr_11510_11552[(2)] = inst_11427);
(statearr_11510_11552[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (12)))
{var inst_11453 = (state_11493[(15)]);var inst_11448 = (state_11493[(16)]);var inst_11467 = (state_11493[(14)]);var inst_11467__$1 = inst_11448.call(null,inst_11453);var state_11493__$1 = (function (){var statearr_11511 = state_11493;(statearr_11511[(14)] = inst_11467__$1);
return statearr_11511;
})();if(cljs.core.truth_(inst_11467__$1))
{var statearr_11512_11553 = state_11493__$1;(statearr_11512_11553[(1)] = (17));
} else
{var statearr_11513_11554 = state_11493__$1;(statearr_11513_11554[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (2)))
{var inst_11427 = (state_11493[(9)]);var inst_11430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11427);var state_11493__$1 = state_11493;var statearr_11514_11555 = state_11493__$1;(statearr_11514_11555[(2)] = inst_11430);
(statearr_11514_11555[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (23)))
{var inst_11478 = (state_11493[(2)]);var state_11493__$1 = state_11493;if(cljs.core.truth_(inst_11478))
{var statearr_11515_11556 = state_11493__$1;(statearr_11515_11556[(1)] = (24));
} else
{var statearr_11516_11557 = state_11493__$1;(statearr_11516_11557[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (19)))
{var inst_11475 = (state_11493[(2)]);var state_11493__$1 = state_11493;if(cljs.core.truth_(inst_11475))
{var statearr_11517_11558 = state_11493__$1;(statearr_11517_11558[(1)] = (20));
} else
{var statearr_11518_11559 = state_11493__$1;(statearr_11518_11559[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (11)))
{var inst_11452 = (state_11493[(8)]);var inst_11458 = (inst_11452 == null);var state_11493__$1 = state_11493;if(cljs.core.truth_(inst_11458))
{var statearr_11519_11560 = state_11493__$1;(statearr_11519_11560[(1)] = (14));
} else
{var statearr_11520_11561 = state_11493__$1;(statearr_11520_11561[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (9)))
{var inst_11445 = (state_11493[(10)]);var inst_11445__$1 = (state_11493[(2)]);var inst_11446 = cljs.core.get.call(null,inst_11445__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11447 = cljs.core.get.call(null,inst_11445__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11448 = cljs.core.get.call(null,inst_11445__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_11493__$1 = (function (){var statearr_11521 = state_11493;(statearr_11521[(17)] = inst_11447);
(statearr_11521[(10)] = inst_11445__$1);
(statearr_11521[(16)] = inst_11448);
return statearr_11521;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11493__$1,(10),inst_11446);
} else
{if((state_val_11494 === (5)))
{var inst_11437 = (state_11493[(7)]);var inst_11440 = cljs.core.seq_QMARK_.call(null,inst_11437);var state_11493__$1 = state_11493;if(inst_11440)
{var statearr_11522_11562 = state_11493__$1;(statearr_11522_11562[(1)] = (7));
} else
{var statearr_11523_11563 = state_11493__$1;(statearr_11523_11563[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (14)))
{var inst_11453 = (state_11493[(15)]);var inst_11460 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11453);var state_11493__$1 = state_11493;var statearr_11524_11564 = state_11493__$1;(statearr_11524_11564[(2)] = inst_11460);
(statearr_11524_11564[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (26)))
{var inst_11483 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11525_11565 = state_11493__$1;(statearr_11525_11565[(2)] = inst_11483);
(statearr_11525_11565[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (16)))
{var inst_11463 = (state_11493[(2)]);var inst_11464 = calc_state.call(null);var inst_11437 = inst_11464;var state_11493__$1 = (function (){var statearr_11526 = state_11493;(statearr_11526[(7)] = inst_11437);
(statearr_11526[(18)] = inst_11463);
return statearr_11526;
})();var statearr_11527_11566 = state_11493__$1;(statearr_11527_11566[(2)] = null);
(statearr_11527_11566[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (10)))
{var inst_11453 = (state_11493[(15)]);var inst_11452 = (state_11493[(8)]);var inst_11451 = (state_11493[(2)]);var inst_11452__$1 = cljs.core.nth.call(null,inst_11451,(0),null);var inst_11453__$1 = cljs.core.nth.call(null,inst_11451,(1),null);var inst_11454 = (inst_11452__$1 == null);var inst_11455 = cljs.core._EQ_.call(null,inst_11453__$1,change);var inst_11456 = (inst_11454) || (inst_11455);var state_11493__$1 = (function (){var statearr_11528 = state_11493;(statearr_11528[(15)] = inst_11453__$1);
(statearr_11528[(8)] = inst_11452__$1);
return statearr_11528;
})();if(cljs.core.truth_(inst_11456))
{var statearr_11529_11567 = state_11493__$1;(statearr_11529_11567[(1)] = (11));
} else
{var statearr_11530_11568 = state_11493__$1;(statearr_11530_11568[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (18)))
{var inst_11453 = (state_11493[(15)]);var inst_11447 = (state_11493[(17)]);var inst_11448 = (state_11493[(16)]);var inst_11470 = cljs.core.empty_QMARK_.call(null,inst_11448);var inst_11471 = inst_11447.call(null,inst_11453);var inst_11472 = cljs.core.not.call(null,inst_11471);var inst_11473 = (inst_11470) && (inst_11472);var state_11493__$1 = state_11493;var statearr_11531_11569 = state_11493__$1;(statearr_11531_11569[(2)] = inst_11473);
(statearr_11531_11569[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (8)))
{var inst_11437 = (state_11493[(7)]);var state_11493__$1 = state_11493;var statearr_11532_11570 = state_11493__$1;(statearr_11532_11570[(2)] = inst_11437);
(statearr_11532_11570[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___11540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5794__auto__,c__5809__auto___11540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_11536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11536[(0)] = state_machine__5795__auto__);
(statearr_11536[(1)] = (1));
return statearr_11536;
});
var state_machine__5795__auto____1 = (function (state_11493){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e11537){if((e11537 instanceof Object))
{var ex__5798__auto__ = e11537;var statearr_11538_11571 = state_11493;(statearr_11538_11571[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11572 = state_11493;
state_11493 = G__11572;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11493){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5811__auto__ = (function (){var statearr_11539 = f__5810__auto__.call(null);(statearr_11539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11540);
return statearr_11539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11574 = {};return obj11574;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3626__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3626__auto__,mults){
return (function (p1__11575_SHARP_){if(cljs.core.truth_(p1__11575_SHARP_.call(null,topic)))
{return p1__11575_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11575_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3626__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11698 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11699){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11699 = meta11699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11698.cljs$lang$type = true;
cljs.core.async.t11698.cljs$lang$ctorStr = "cljs.core.async/t11698";
cljs.core.async.t11698.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11698");
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11698.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11700){var self__ = this;
var _11700__$1 = this;return self__.meta11699;
});})(mults,ensure_mult))
;
cljs.core.async.t11698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11700,meta11699__$1){var self__ = this;
var _11700__$1 = this;return (new cljs.core.async.t11698(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11699__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11698 = ((function (mults,ensure_mult){
return (function __GT_t11698(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11699){return (new cljs.core.async.t11698(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11699));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11698(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5809__auto___11820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11820,mults,ensure_mult,p){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11820,mults,ensure_mult,p){
return (function (state_11772){var state_val_11773 = (state_11772[(1)]);if((state_val_11773 === (7)))
{var inst_11768 = (state_11772[(2)]);var state_11772__$1 = state_11772;var statearr_11774_11821 = state_11772__$1;(statearr_11774_11821[(2)] = inst_11768);
(statearr_11774_11821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (20)))
{var state_11772__$1 = state_11772;var statearr_11775_11822 = state_11772__$1;(statearr_11775_11822[(2)] = null);
(statearr_11775_11822[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (1)))
{var state_11772__$1 = state_11772;var statearr_11776_11823 = state_11772__$1;(statearr_11776_11823[(2)] = null);
(statearr_11776_11823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (24)))
{var inst_11751 = (state_11772[(7)]);var inst_11760 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11751);var state_11772__$1 = state_11772;var statearr_11777_11824 = state_11772__$1;(statearr_11777_11824[(2)] = inst_11760);
(statearr_11777_11824[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (4)))
{var inst_11703 = (state_11772[(8)]);var inst_11703__$1 = (state_11772[(2)]);var inst_11704 = (inst_11703__$1 == null);var state_11772__$1 = (function (){var statearr_11778 = state_11772;(statearr_11778[(8)] = inst_11703__$1);
return statearr_11778;
})();if(cljs.core.truth_(inst_11704))
{var statearr_11779_11825 = state_11772__$1;(statearr_11779_11825[(1)] = (5));
} else
{var statearr_11780_11826 = state_11772__$1;(statearr_11780_11826[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (15)))
{var inst_11745 = (state_11772[(2)]);var state_11772__$1 = state_11772;var statearr_11781_11827 = state_11772__$1;(statearr_11781_11827[(2)] = inst_11745);
(statearr_11781_11827[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (21)))
{var inst_11765 = (state_11772[(2)]);var state_11772__$1 = (function (){var statearr_11782 = state_11772;(statearr_11782[(9)] = inst_11765);
return statearr_11782;
})();var statearr_11783_11828 = state_11772__$1;(statearr_11783_11828[(2)] = null);
(statearr_11783_11828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (13)))
{var inst_11727 = (state_11772[(10)]);var inst_11729 = cljs.core.chunked_seq_QMARK_.call(null,inst_11727);var state_11772__$1 = state_11772;if(inst_11729)
{var statearr_11784_11829 = state_11772__$1;(statearr_11784_11829[(1)] = (16));
} else
{var statearr_11785_11830 = state_11772__$1;(statearr_11785_11830[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (22)))
{var inst_11757 = (state_11772[(2)]);var state_11772__$1 = state_11772;if(cljs.core.truth_(inst_11757))
{var statearr_11786_11831 = state_11772__$1;(statearr_11786_11831[(1)] = (23));
} else
{var statearr_11787_11832 = state_11772__$1;(statearr_11787_11832[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (6)))
{var inst_11753 = (state_11772[(11)]);var inst_11751 = (state_11772[(7)]);var inst_11703 = (state_11772[(8)]);var inst_11751__$1 = topic_fn.call(null,inst_11703);var inst_11752 = cljs.core.deref.call(null,mults);var inst_11753__$1 = cljs.core.get.call(null,inst_11752,inst_11751__$1);var state_11772__$1 = (function (){var statearr_11788 = state_11772;(statearr_11788[(11)] = inst_11753__$1);
(statearr_11788[(7)] = inst_11751__$1);
return statearr_11788;
})();if(cljs.core.truth_(inst_11753__$1))
{var statearr_11789_11833 = state_11772__$1;(statearr_11789_11833[(1)] = (19));
} else
{var statearr_11790_11834 = state_11772__$1;(statearr_11790_11834[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (25)))
{var inst_11762 = (state_11772[(2)]);var state_11772__$1 = state_11772;var statearr_11791_11835 = state_11772__$1;(statearr_11791_11835[(2)] = inst_11762);
(statearr_11791_11835[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (17)))
{var inst_11727 = (state_11772[(10)]);var inst_11736 = cljs.core.first.call(null,inst_11727);var inst_11737 = cljs.core.async.muxch_STAR_.call(null,inst_11736);var inst_11738 = cljs.core.async.close_BANG_.call(null,inst_11737);var inst_11739 = cljs.core.next.call(null,inst_11727);var inst_11713 = inst_11739;var inst_11714 = null;var inst_11715 = (0);var inst_11716 = (0);var state_11772__$1 = (function (){var statearr_11792 = state_11772;(statearr_11792[(12)] = inst_11713);
(statearr_11792[(13)] = inst_11738);
(statearr_11792[(14)] = inst_11714);
(statearr_11792[(15)] = inst_11716);
(statearr_11792[(16)] = inst_11715);
return statearr_11792;
})();var statearr_11793_11836 = state_11772__$1;(statearr_11793_11836[(2)] = null);
(statearr_11793_11836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (3)))
{var inst_11770 = (state_11772[(2)]);var state_11772__$1 = state_11772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11772__$1,inst_11770);
} else
{if((state_val_11773 === (12)))
{var inst_11747 = (state_11772[(2)]);var state_11772__$1 = state_11772;var statearr_11794_11837 = state_11772__$1;(statearr_11794_11837[(2)] = inst_11747);
(statearr_11794_11837[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (2)))
{var state_11772__$1 = state_11772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11772__$1,(4),ch);
} else
{if((state_val_11773 === (23)))
{var state_11772__$1 = state_11772;var statearr_11795_11838 = state_11772__$1;(statearr_11795_11838[(2)] = null);
(statearr_11795_11838[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (19)))
{var inst_11753 = (state_11772[(11)]);var inst_11703 = (state_11772[(8)]);var inst_11755 = cljs.core.async.muxch_STAR_.call(null,inst_11753);var state_11772__$1 = state_11772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11772__$1,(22),inst_11755,inst_11703);
} else
{if((state_val_11773 === (11)))
{var inst_11713 = (state_11772[(12)]);var inst_11727 = (state_11772[(10)]);var inst_11727__$1 = cljs.core.seq.call(null,inst_11713);var state_11772__$1 = (function (){var statearr_11796 = state_11772;(statearr_11796[(10)] = inst_11727__$1);
return statearr_11796;
})();if(inst_11727__$1)
{var statearr_11797_11839 = state_11772__$1;(statearr_11797_11839[(1)] = (13));
} else
{var statearr_11798_11840 = state_11772__$1;(statearr_11798_11840[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (9)))
{var inst_11749 = (state_11772[(2)]);var state_11772__$1 = state_11772;var statearr_11799_11841 = state_11772__$1;(statearr_11799_11841[(2)] = inst_11749);
(statearr_11799_11841[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (5)))
{var inst_11710 = cljs.core.deref.call(null,mults);var inst_11711 = cljs.core.vals.call(null,inst_11710);var inst_11712 = cljs.core.seq.call(null,inst_11711);var inst_11713 = inst_11712;var inst_11714 = null;var inst_11715 = (0);var inst_11716 = (0);var state_11772__$1 = (function (){var statearr_11800 = state_11772;(statearr_11800[(12)] = inst_11713);
(statearr_11800[(14)] = inst_11714);
(statearr_11800[(15)] = inst_11716);
(statearr_11800[(16)] = inst_11715);
return statearr_11800;
})();var statearr_11801_11842 = state_11772__$1;(statearr_11801_11842[(2)] = null);
(statearr_11801_11842[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (14)))
{var state_11772__$1 = state_11772;var statearr_11805_11843 = state_11772__$1;(statearr_11805_11843[(2)] = null);
(statearr_11805_11843[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (16)))
{var inst_11727 = (state_11772[(10)]);var inst_11731 = cljs.core.chunk_first.call(null,inst_11727);var inst_11732 = cljs.core.chunk_rest.call(null,inst_11727);var inst_11733 = cljs.core.count.call(null,inst_11731);var inst_11713 = inst_11732;var inst_11714 = inst_11731;var inst_11715 = inst_11733;var inst_11716 = (0);var state_11772__$1 = (function (){var statearr_11806 = state_11772;(statearr_11806[(12)] = inst_11713);
(statearr_11806[(14)] = inst_11714);
(statearr_11806[(15)] = inst_11716);
(statearr_11806[(16)] = inst_11715);
return statearr_11806;
})();var statearr_11807_11844 = state_11772__$1;(statearr_11807_11844[(2)] = null);
(statearr_11807_11844[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (10)))
{var inst_11713 = (state_11772[(12)]);var inst_11714 = (state_11772[(14)]);var inst_11716 = (state_11772[(15)]);var inst_11715 = (state_11772[(16)]);var inst_11721 = cljs.core._nth.call(null,inst_11714,inst_11716);var inst_11722 = cljs.core.async.muxch_STAR_.call(null,inst_11721);var inst_11723 = cljs.core.async.close_BANG_.call(null,inst_11722);var inst_11724 = (inst_11716 + (1));var tmp11802 = inst_11713;var tmp11803 = inst_11714;var tmp11804 = inst_11715;var inst_11713__$1 = tmp11802;var inst_11714__$1 = tmp11803;var inst_11715__$1 = tmp11804;var inst_11716__$1 = inst_11724;var state_11772__$1 = (function (){var statearr_11808 = state_11772;(statearr_11808[(12)] = inst_11713__$1);
(statearr_11808[(17)] = inst_11723);
(statearr_11808[(14)] = inst_11714__$1);
(statearr_11808[(15)] = inst_11716__$1);
(statearr_11808[(16)] = inst_11715__$1);
return statearr_11808;
})();var statearr_11809_11845 = state_11772__$1;(statearr_11809_11845[(2)] = null);
(statearr_11809_11845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (18)))
{var inst_11742 = (state_11772[(2)]);var state_11772__$1 = state_11772;var statearr_11810_11846 = state_11772__$1;(statearr_11810_11846[(2)] = inst_11742);
(statearr_11810_11846[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11773 === (8)))
{var inst_11716 = (state_11772[(15)]);var inst_11715 = (state_11772[(16)]);var inst_11718 = (inst_11716 < inst_11715);var inst_11719 = inst_11718;var state_11772__$1 = state_11772;if(cljs.core.truth_(inst_11719))
{var statearr_11811_11847 = state_11772__$1;(statearr_11811_11847[(1)] = (10));
} else
{var statearr_11812_11848 = state_11772__$1;(statearr_11812_11848[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___11820,mults,ensure_mult,p))
;return ((function (switch__5794__auto__,c__5809__auto___11820,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_11816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11816[(0)] = state_machine__5795__auto__);
(statearr_11816[(1)] = (1));
return statearr_11816;
});
var state_machine__5795__auto____1 = (function (state_11772){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e11817){if((e11817 instanceof Object))
{var ex__5798__auto__ = e11817;var statearr_11818_11849 = state_11772;(statearr_11818_11849[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11850 = state_11772;
state_11772 = G__11850;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11772){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11820,mults,ensure_mult,p))
})();var state__5811__auto__ = (function (){var statearr_11819 = f__5810__auto__.call(null);(statearr_11819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11820);
return statearr_11819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11820,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5809__auto___11987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11987,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11987,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11957){var state_val_11958 = (state_11957[(1)]);if((state_val_11958 === (7)))
{var state_11957__$1 = state_11957;var statearr_11959_11988 = state_11957__$1;(statearr_11959_11988[(2)] = null);
(statearr_11959_11988[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (1)))
{var state_11957__$1 = state_11957;var statearr_11960_11989 = state_11957__$1;(statearr_11960_11989[(2)] = null);
(statearr_11960_11989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (4)))
{var inst_11921 = (state_11957[(7)]);var inst_11923 = (inst_11921 < cnt);var state_11957__$1 = state_11957;if(cljs.core.truth_(inst_11923))
{var statearr_11961_11990 = state_11957__$1;(statearr_11961_11990[(1)] = (6));
} else
{var statearr_11962_11991 = state_11957__$1;(statearr_11962_11991[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (15)))
{var inst_11953 = (state_11957[(2)]);var state_11957__$1 = state_11957;var statearr_11963_11992 = state_11957__$1;(statearr_11963_11992[(2)] = inst_11953);
(statearr_11963_11992[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (13)))
{var inst_11946 = cljs.core.async.close_BANG_.call(null,out);var state_11957__$1 = state_11957;var statearr_11964_11993 = state_11957__$1;(statearr_11964_11993[(2)] = inst_11946);
(statearr_11964_11993[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (6)))
{var state_11957__$1 = state_11957;var statearr_11965_11994 = state_11957__$1;(statearr_11965_11994[(2)] = null);
(statearr_11965_11994[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (3)))
{var inst_11955 = (state_11957[(2)]);var state_11957__$1 = state_11957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11957__$1,inst_11955);
} else
{if((state_val_11958 === (12)))
{var inst_11943 = (state_11957[(8)]);var inst_11943__$1 = (state_11957[(2)]);var inst_11944 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11943__$1);var state_11957__$1 = (function (){var statearr_11966 = state_11957;(statearr_11966[(8)] = inst_11943__$1);
return statearr_11966;
})();if(cljs.core.truth_(inst_11944))
{var statearr_11967_11995 = state_11957__$1;(statearr_11967_11995[(1)] = (13));
} else
{var statearr_11968_11996 = state_11957__$1;(statearr_11968_11996[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (2)))
{var inst_11920 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11921 = (0);var state_11957__$1 = (function (){var statearr_11969 = state_11957;(statearr_11969[(9)] = inst_11920);
(statearr_11969[(7)] = inst_11921);
return statearr_11969;
})();var statearr_11970_11997 = state_11957__$1;(statearr_11970_11997[(2)] = null);
(statearr_11970_11997[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (11)))
{var inst_11921 = (state_11957[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11957,(10),Object,null,(9));var inst_11930 = chs__$1.call(null,inst_11921);var inst_11931 = done.call(null,inst_11921);var inst_11932 = cljs.core.async.take_BANG_.call(null,inst_11930,inst_11931);var state_11957__$1 = state_11957;var statearr_11971_11998 = state_11957__$1;(statearr_11971_11998[(2)] = inst_11932);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11957__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (9)))
{var inst_11921 = (state_11957[(7)]);var inst_11934 = (state_11957[(2)]);var inst_11935 = (inst_11921 + (1));var inst_11921__$1 = inst_11935;var state_11957__$1 = (function (){var statearr_11972 = state_11957;(statearr_11972[(10)] = inst_11934);
(statearr_11972[(7)] = inst_11921__$1);
return statearr_11972;
})();var statearr_11973_11999 = state_11957__$1;(statearr_11973_11999[(2)] = null);
(statearr_11973_11999[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (5)))
{var inst_11941 = (state_11957[(2)]);var state_11957__$1 = (function (){var statearr_11974 = state_11957;(statearr_11974[(11)] = inst_11941);
return statearr_11974;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11957__$1,(12),dchan);
} else
{if((state_val_11958 === (14)))
{var inst_11943 = (state_11957[(8)]);var inst_11948 = cljs.core.apply.call(null,f,inst_11943);var state_11957__$1 = state_11957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11957__$1,(16),out,inst_11948);
} else
{if((state_val_11958 === (16)))
{var inst_11950 = (state_11957[(2)]);var state_11957__$1 = (function (){var statearr_11975 = state_11957;(statearr_11975[(12)] = inst_11950);
return statearr_11975;
})();var statearr_11976_12000 = state_11957__$1;(statearr_11976_12000[(2)] = null);
(statearr_11976_12000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (10)))
{var inst_11925 = (state_11957[(2)]);var inst_11926 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11957__$1 = (function (){var statearr_11977 = state_11957;(statearr_11977[(13)] = inst_11925);
return statearr_11977;
})();var statearr_11978_12001 = state_11957__$1;(statearr_11978_12001[(2)] = inst_11926);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11957__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11958 === (8)))
{var inst_11939 = (state_11957[(2)]);var state_11957__$1 = state_11957;var statearr_11979_12002 = state_11957__$1;(statearr_11979_12002[(2)] = inst_11939);
(statearr_11979_12002[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___11987,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5794__auto__,c__5809__auto___11987,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_11983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11983[(0)] = state_machine__5795__auto__);
(statearr_11983[(1)] = (1));
return statearr_11983;
});
var state_machine__5795__auto____1 = (function (state_11957){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11957);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e11984){if((e11984 instanceof Object))
{var ex__5798__auto__ = e11984;var statearr_11985_12003 = state_11957;(statearr_11985_12003[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12004 = state_11957;
state_11957 = G__12004;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11957){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11987,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5811__auto__ = (function (){var statearr_11986 = f__5810__auto__.call(null);(statearr_11986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11987);
return statearr_11986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11987,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5809__auto___12112 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12112,out){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12112,out){
return (function (state_12088){var state_val_12089 = (state_12088[(1)]);if((state_val_12089 === (7)))
{var inst_12067 = (state_12088[(7)]);var inst_12068 = (state_12088[(8)]);var inst_12067__$1 = (state_12088[(2)]);var inst_12068__$1 = cljs.core.nth.call(null,inst_12067__$1,(0),null);var inst_12069 = cljs.core.nth.call(null,inst_12067__$1,(1),null);var inst_12070 = (inst_12068__$1 == null);var state_12088__$1 = (function (){var statearr_12090 = state_12088;(statearr_12090[(7)] = inst_12067__$1);
(statearr_12090[(8)] = inst_12068__$1);
(statearr_12090[(9)] = inst_12069);
return statearr_12090;
})();if(cljs.core.truth_(inst_12070))
{var statearr_12091_12113 = state_12088__$1;(statearr_12091_12113[(1)] = (8));
} else
{var statearr_12092_12114 = state_12088__$1;(statearr_12092_12114[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (1)))
{var inst_12059 = cljs.core.vec.call(null,chs);var inst_12060 = inst_12059;var state_12088__$1 = (function (){var statearr_12093 = state_12088;(statearr_12093[(10)] = inst_12060);
return statearr_12093;
})();var statearr_12094_12115 = state_12088__$1;(statearr_12094_12115[(2)] = null);
(statearr_12094_12115[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (4)))
{var inst_12060 = (state_12088[(10)]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12088__$1,(7),inst_12060);
} else
{if((state_val_12089 === (6)))
{var inst_12084 = (state_12088[(2)]);var state_12088__$1 = state_12088;var statearr_12095_12116 = state_12088__$1;(statearr_12095_12116[(2)] = inst_12084);
(statearr_12095_12116[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (3)))
{var inst_12086 = (state_12088[(2)]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12088__$1,inst_12086);
} else
{if((state_val_12089 === (2)))
{var inst_12060 = (state_12088[(10)]);var inst_12062 = cljs.core.count.call(null,inst_12060);var inst_12063 = (inst_12062 > (0));var state_12088__$1 = state_12088;if(cljs.core.truth_(inst_12063))
{var statearr_12097_12117 = state_12088__$1;(statearr_12097_12117[(1)] = (4));
} else
{var statearr_12098_12118 = state_12088__$1;(statearr_12098_12118[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (11)))
{var inst_12060 = (state_12088[(10)]);var inst_12077 = (state_12088[(2)]);var tmp12096 = inst_12060;var inst_12060__$1 = tmp12096;var state_12088__$1 = (function (){var statearr_12099 = state_12088;(statearr_12099[(11)] = inst_12077);
(statearr_12099[(10)] = inst_12060__$1);
return statearr_12099;
})();var statearr_12100_12119 = state_12088__$1;(statearr_12100_12119[(2)] = null);
(statearr_12100_12119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (9)))
{var inst_12068 = (state_12088[(8)]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12088__$1,(11),out,inst_12068);
} else
{if((state_val_12089 === (5)))
{var inst_12082 = cljs.core.async.close_BANG_.call(null,out);var state_12088__$1 = state_12088;var statearr_12101_12120 = state_12088__$1;(statearr_12101_12120[(2)] = inst_12082);
(statearr_12101_12120[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (10)))
{var inst_12080 = (state_12088[(2)]);var state_12088__$1 = state_12088;var statearr_12102_12121 = state_12088__$1;(statearr_12102_12121[(2)] = inst_12080);
(statearr_12102_12121[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (8)))
{var inst_12067 = (state_12088[(7)]);var inst_12060 = (state_12088[(10)]);var inst_12068 = (state_12088[(8)]);var inst_12069 = (state_12088[(9)]);var inst_12072 = (function (){var c = inst_12069;var v = inst_12068;var vec__12065 = inst_12067;var cs = inst_12060;return ((function (c,v,vec__12065,cs,inst_12067,inst_12060,inst_12068,inst_12069,state_val_12089,c__5809__auto___12112,out){
return (function (p1__12005_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12005_SHARP_);
});
;})(c,v,vec__12065,cs,inst_12067,inst_12060,inst_12068,inst_12069,state_val_12089,c__5809__auto___12112,out))
})();var inst_12073 = cljs.core.filterv.call(null,inst_12072,inst_12060);var inst_12060__$1 = inst_12073;var state_12088__$1 = (function (){var statearr_12103 = state_12088;(statearr_12103[(10)] = inst_12060__$1);
return statearr_12103;
})();var statearr_12104_12122 = state_12088__$1;(statearr_12104_12122[(2)] = null);
(statearr_12104_12122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___12112,out))
;return ((function (switch__5794__auto__,c__5809__auto___12112,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_12108 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12108[(0)] = state_machine__5795__auto__);
(statearr_12108[(1)] = (1));
return statearr_12108;
});
var state_machine__5795__auto____1 = (function (state_12088){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12088);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e12109){if((e12109 instanceof Object))
{var ex__5798__auto__ = e12109;var statearr_12110_12123 = state_12088;(statearr_12110_12123[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12109;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12124 = state_12088;
state_12088 = G__12124;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12088){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12112,out))
})();var state__5811__auto__ = (function (){var statearr_12111 = f__5810__auto__.call(null);(statearr_12111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12112);
return statearr_12111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12112,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5809__auto___12217 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12217,out){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12217,out){
return (function (state_12194){var state_val_12195 = (state_12194[(1)]);if((state_val_12195 === (7)))
{var inst_12176 = (state_12194[(7)]);var inst_12176__$1 = (state_12194[(2)]);var inst_12177 = (inst_12176__$1 == null);var inst_12178 = cljs.core.not.call(null,inst_12177);var state_12194__$1 = (function (){var statearr_12196 = state_12194;(statearr_12196[(7)] = inst_12176__$1);
return statearr_12196;
})();if(inst_12178)
{var statearr_12197_12218 = state_12194__$1;(statearr_12197_12218[(1)] = (8));
} else
{var statearr_12198_12219 = state_12194__$1;(statearr_12198_12219[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (1)))
{var inst_12171 = (0);var state_12194__$1 = (function (){var statearr_12199 = state_12194;(statearr_12199[(8)] = inst_12171);
return statearr_12199;
})();var statearr_12200_12220 = state_12194__$1;(statearr_12200_12220[(2)] = null);
(statearr_12200_12220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (4)))
{var state_12194__$1 = state_12194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12194__$1,(7),ch);
} else
{if((state_val_12195 === (6)))
{var inst_12189 = (state_12194[(2)]);var state_12194__$1 = state_12194;var statearr_12201_12221 = state_12194__$1;(statearr_12201_12221[(2)] = inst_12189);
(statearr_12201_12221[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (3)))
{var inst_12191 = (state_12194[(2)]);var inst_12192 = cljs.core.async.close_BANG_.call(null,out);var state_12194__$1 = (function (){var statearr_12202 = state_12194;(statearr_12202[(9)] = inst_12191);
return statearr_12202;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12194__$1,inst_12192);
} else
{if((state_val_12195 === (2)))
{var inst_12171 = (state_12194[(8)]);var inst_12173 = (inst_12171 < n);var state_12194__$1 = state_12194;if(cljs.core.truth_(inst_12173))
{var statearr_12203_12222 = state_12194__$1;(statearr_12203_12222[(1)] = (4));
} else
{var statearr_12204_12223 = state_12194__$1;(statearr_12204_12223[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (11)))
{var inst_12171 = (state_12194[(8)]);var inst_12181 = (state_12194[(2)]);var inst_12182 = (inst_12171 + (1));var inst_12171__$1 = inst_12182;var state_12194__$1 = (function (){var statearr_12205 = state_12194;(statearr_12205[(10)] = inst_12181);
(statearr_12205[(8)] = inst_12171__$1);
return statearr_12205;
})();var statearr_12206_12224 = state_12194__$1;(statearr_12206_12224[(2)] = null);
(statearr_12206_12224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (9)))
{var state_12194__$1 = state_12194;var statearr_12207_12225 = state_12194__$1;(statearr_12207_12225[(2)] = null);
(statearr_12207_12225[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (5)))
{var state_12194__$1 = state_12194;var statearr_12208_12226 = state_12194__$1;(statearr_12208_12226[(2)] = null);
(statearr_12208_12226[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (10)))
{var inst_12186 = (state_12194[(2)]);var state_12194__$1 = state_12194;var statearr_12209_12227 = state_12194__$1;(statearr_12209_12227[(2)] = inst_12186);
(statearr_12209_12227[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12195 === (8)))
{var inst_12176 = (state_12194[(7)]);var state_12194__$1 = state_12194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12194__$1,(11),out,inst_12176);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___12217,out))
;return ((function (switch__5794__auto__,c__5809__auto___12217,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_12213 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12213[(0)] = state_machine__5795__auto__);
(statearr_12213[(1)] = (1));
return statearr_12213;
});
var state_machine__5795__auto____1 = (function (state_12194){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e12214){if((e12214 instanceof Object))
{var ex__5798__auto__ = e12214;var statearr_12215_12228 = state_12194;(statearr_12215_12228[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12214;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12229 = state_12194;
state_12194 = G__12229;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12194){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12217,out))
})();var state__5811__auto__ = (function (){var statearr_12216 = f__5810__auto__.call(null);(statearr_12216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12217);
return statearr_12216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12217,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5809__auto___12326 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12326,out){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12326,out){
return (function (state_12301){var state_val_12302 = (state_12301[(1)]);if((state_val_12302 === (7)))
{var inst_12296 = (state_12301[(2)]);var state_12301__$1 = state_12301;var statearr_12303_12327 = state_12301__$1;(statearr_12303_12327[(2)] = inst_12296);
(statearr_12303_12327[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (1)))
{var inst_12278 = null;var state_12301__$1 = (function (){var statearr_12304 = state_12301;(statearr_12304[(7)] = inst_12278);
return statearr_12304;
})();var statearr_12305_12328 = state_12301__$1;(statearr_12305_12328[(2)] = null);
(statearr_12305_12328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (4)))
{var inst_12281 = (state_12301[(8)]);var inst_12281__$1 = (state_12301[(2)]);var inst_12282 = (inst_12281__$1 == null);var inst_12283 = cljs.core.not.call(null,inst_12282);var state_12301__$1 = (function (){var statearr_12306 = state_12301;(statearr_12306[(8)] = inst_12281__$1);
return statearr_12306;
})();if(inst_12283)
{var statearr_12307_12329 = state_12301__$1;(statearr_12307_12329[(1)] = (5));
} else
{var statearr_12308_12330 = state_12301__$1;(statearr_12308_12330[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (6)))
{var state_12301__$1 = state_12301;var statearr_12309_12331 = state_12301__$1;(statearr_12309_12331[(2)] = null);
(statearr_12309_12331[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (3)))
{var inst_12298 = (state_12301[(2)]);var inst_12299 = cljs.core.async.close_BANG_.call(null,out);var state_12301__$1 = (function (){var statearr_12310 = state_12301;(statearr_12310[(9)] = inst_12298);
return statearr_12310;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12301__$1,inst_12299);
} else
{if((state_val_12302 === (2)))
{var state_12301__$1 = state_12301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12301__$1,(4),ch);
} else
{if((state_val_12302 === (11)))
{var inst_12281 = (state_12301[(8)]);var inst_12290 = (state_12301[(2)]);var inst_12278 = inst_12281;var state_12301__$1 = (function (){var statearr_12311 = state_12301;(statearr_12311[(7)] = inst_12278);
(statearr_12311[(10)] = inst_12290);
return statearr_12311;
})();var statearr_12312_12332 = state_12301__$1;(statearr_12312_12332[(2)] = null);
(statearr_12312_12332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (9)))
{var inst_12281 = (state_12301[(8)]);var state_12301__$1 = state_12301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12301__$1,(11),out,inst_12281);
} else
{if((state_val_12302 === (5)))
{var inst_12281 = (state_12301[(8)]);var inst_12278 = (state_12301[(7)]);var inst_12285 = cljs.core._EQ_.call(null,inst_12281,inst_12278);var state_12301__$1 = state_12301;if(inst_12285)
{var statearr_12314_12333 = state_12301__$1;(statearr_12314_12333[(1)] = (8));
} else
{var statearr_12315_12334 = state_12301__$1;(statearr_12315_12334[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (10)))
{var inst_12293 = (state_12301[(2)]);var state_12301__$1 = state_12301;var statearr_12316_12335 = state_12301__$1;(statearr_12316_12335[(2)] = inst_12293);
(statearr_12316_12335[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12302 === (8)))
{var inst_12278 = (state_12301[(7)]);var tmp12313 = inst_12278;var inst_12278__$1 = tmp12313;var state_12301__$1 = (function (){var statearr_12317 = state_12301;(statearr_12317[(7)] = inst_12278__$1);
return statearr_12317;
})();var statearr_12318_12336 = state_12301__$1;(statearr_12318_12336[(2)] = null);
(statearr_12318_12336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___12326,out))
;return ((function (switch__5794__auto__,c__5809__auto___12326,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_12322 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12322[(0)] = state_machine__5795__auto__);
(statearr_12322[(1)] = (1));
return statearr_12322;
});
var state_machine__5795__auto____1 = (function (state_12301){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12301);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e12323){if((e12323 instanceof Object))
{var ex__5798__auto__ = e12323;var statearr_12324_12337 = state_12301;(statearr_12324_12337[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12323;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12338 = state_12301;
state_12301 = G__12338;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12301){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12326,out))
})();var state__5811__auto__ = (function (){var statearr_12325 = f__5810__auto__.call(null);(statearr_12325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12326);
return statearr_12325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12326,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5809__auto___12473 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12473,out){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12473,out){
return (function (state_12443){var state_val_12444 = (state_12443[(1)]);if((state_val_12444 === (7)))
{var inst_12439 = (state_12443[(2)]);var state_12443__$1 = state_12443;var statearr_12445_12474 = state_12443__$1;(statearr_12445_12474[(2)] = inst_12439);
(statearr_12445_12474[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (1)))
{var inst_12406 = (new Array(n));var inst_12407 = inst_12406;var inst_12408 = (0);var state_12443__$1 = (function (){var statearr_12446 = state_12443;(statearr_12446[(7)] = inst_12407);
(statearr_12446[(8)] = inst_12408);
return statearr_12446;
})();var statearr_12447_12475 = state_12443__$1;(statearr_12447_12475[(2)] = null);
(statearr_12447_12475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (4)))
{var inst_12411 = (state_12443[(9)]);var inst_12411__$1 = (state_12443[(2)]);var inst_12412 = (inst_12411__$1 == null);var inst_12413 = cljs.core.not.call(null,inst_12412);var state_12443__$1 = (function (){var statearr_12448 = state_12443;(statearr_12448[(9)] = inst_12411__$1);
return statearr_12448;
})();if(inst_12413)
{var statearr_12449_12476 = state_12443__$1;(statearr_12449_12476[(1)] = (5));
} else
{var statearr_12450_12477 = state_12443__$1;(statearr_12450_12477[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (15)))
{var inst_12433 = (state_12443[(2)]);var state_12443__$1 = state_12443;var statearr_12451_12478 = state_12443__$1;(statearr_12451_12478[(2)] = inst_12433);
(statearr_12451_12478[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (13)))
{var state_12443__$1 = state_12443;var statearr_12452_12479 = state_12443__$1;(statearr_12452_12479[(2)] = null);
(statearr_12452_12479[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (6)))
{var inst_12408 = (state_12443[(8)]);var inst_12429 = (inst_12408 > (0));var state_12443__$1 = state_12443;if(cljs.core.truth_(inst_12429))
{var statearr_12453_12480 = state_12443__$1;(statearr_12453_12480[(1)] = (12));
} else
{var statearr_12454_12481 = state_12443__$1;(statearr_12454_12481[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (3)))
{var inst_12441 = (state_12443[(2)]);var state_12443__$1 = state_12443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12443__$1,inst_12441);
} else
{if((state_val_12444 === (12)))
{var inst_12407 = (state_12443[(7)]);var inst_12431 = cljs.core.vec.call(null,inst_12407);var state_12443__$1 = state_12443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12443__$1,(15),out,inst_12431);
} else
{if((state_val_12444 === (2)))
{var state_12443__$1 = state_12443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12443__$1,(4),ch);
} else
{if((state_val_12444 === (11)))
{var inst_12423 = (state_12443[(2)]);var inst_12424 = (new Array(n));var inst_12407 = inst_12424;var inst_12408 = (0);var state_12443__$1 = (function (){var statearr_12455 = state_12443;(statearr_12455[(10)] = inst_12423);
(statearr_12455[(7)] = inst_12407);
(statearr_12455[(8)] = inst_12408);
return statearr_12455;
})();var statearr_12456_12482 = state_12443__$1;(statearr_12456_12482[(2)] = null);
(statearr_12456_12482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (9)))
{var inst_12407 = (state_12443[(7)]);var inst_12421 = cljs.core.vec.call(null,inst_12407);var state_12443__$1 = state_12443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12443__$1,(11),out,inst_12421);
} else
{if((state_val_12444 === (5)))
{var inst_12416 = (state_12443[(11)]);var inst_12407 = (state_12443[(7)]);var inst_12411 = (state_12443[(9)]);var inst_12408 = (state_12443[(8)]);var inst_12415 = (inst_12407[inst_12408] = inst_12411);var inst_12416__$1 = (inst_12408 + (1));var inst_12417 = (inst_12416__$1 < n);var state_12443__$1 = (function (){var statearr_12457 = state_12443;(statearr_12457[(12)] = inst_12415);
(statearr_12457[(11)] = inst_12416__$1);
return statearr_12457;
})();if(cljs.core.truth_(inst_12417))
{var statearr_12458_12483 = state_12443__$1;(statearr_12458_12483[(1)] = (8));
} else
{var statearr_12459_12484 = state_12443__$1;(statearr_12459_12484[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (14)))
{var inst_12436 = (state_12443[(2)]);var inst_12437 = cljs.core.async.close_BANG_.call(null,out);var state_12443__$1 = (function (){var statearr_12461 = state_12443;(statearr_12461[(13)] = inst_12436);
return statearr_12461;
})();var statearr_12462_12485 = state_12443__$1;(statearr_12462_12485[(2)] = inst_12437);
(statearr_12462_12485[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (10)))
{var inst_12427 = (state_12443[(2)]);var state_12443__$1 = state_12443;var statearr_12463_12486 = state_12443__$1;(statearr_12463_12486[(2)] = inst_12427);
(statearr_12463_12486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12444 === (8)))
{var inst_12416 = (state_12443[(11)]);var inst_12407 = (state_12443[(7)]);var tmp12460 = inst_12407;var inst_12407__$1 = tmp12460;var inst_12408 = inst_12416;var state_12443__$1 = (function (){var statearr_12464 = state_12443;(statearr_12464[(7)] = inst_12407__$1);
(statearr_12464[(8)] = inst_12408);
return statearr_12464;
})();var statearr_12465_12487 = state_12443__$1;(statearr_12465_12487[(2)] = null);
(statearr_12465_12487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___12473,out))
;return ((function (switch__5794__auto__,c__5809__auto___12473,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_12469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12469[(0)] = state_machine__5795__auto__);
(statearr_12469[(1)] = (1));
return statearr_12469;
});
var state_machine__5795__auto____1 = (function (state_12443){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e12470){if((e12470 instanceof Object))
{var ex__5798__auto__ = e12470;var statearr_12471_12488 = state_12443;(statearr_12471_12488[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12489 = state_12443;
state_12443 = G__12489;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12443){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12473,out))
})();var state__5811__auto__ = (function (){var statearr_12472 = f__5810__auto__.call(null);(statearr_12472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12473);
return statearr_12472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12473,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5809__auto___12632 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12632,out){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12632,out){
return (function (state_12602){var state_val_12603 = (state_12602[(1)]);if((state_val_12603 === (7)))
{var inst_12598 = (state_12602[(2)]);var state_12602__$1 = state_12602;var statearr_12604_12633 = state_12602__$1;(statearr_12604_12633[(2)] = inst_12598);
(statearr_12604_12633[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (1)))
{var inst_12561 = [];var inst_12562 = inst_12561;var inst_12563 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12602__$1 = (function (){var statearr_12605 = state_12602;(statearr_12605[(7)] = inst_12562);
(statearr_12605[(8)] = inst_12563);
return statearr_12605;
})();var statearr_12606_12634 = state_12602__$1;(statearr_12606_12634[(2)] = null);
(statearr_12606_12634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (4)))
{var inst_12566 = (state_12602[(9)]);var inst_12566__$1 = (state_12602[(2)]);var inst_12567 = (inst_12566__$1 == null);var inst_12568 = cljs.core.not.call(null,inst_12567);var state_12602__$1 = (function (){var statearr_12607 = state_12602;(statearr_12607[(9)] = inst_12566__$1);
return statearr_12607;
})();if(inst_12568)
{var statearr_12608_12635 = state_12602__$1;(statearr_12608_12635[(1)] = (5));
} else
{var statearr_12609_12636 = state_12602__$1;(statearr_12609_12636[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (15)))
{var inst_12592 = (state_12602[(2)]);var state_12602__$1 = state_12602;var statearr_12610_12637 = state_12602__$1;(statearr_12610_12637[(2)] = inst_12592);
(statearr_12610_12637[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (13)))
{var state_12602__$1 = state_12602;var statearr_12611_12638 = state_12602__$1;(statearr_12611_12638[(2)] = null);
(statearr_12611_12638[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (6)))
{var inst_12562 = (state_12602[(7)]);var inst_12587 = inst_12562.length;var inst_12588 = (inst_12587 > (0));var state_12602__$1 = state_12602;if(cljs.core.truth_(inst_12588))
{var statearr_12612_12639 = state_12602__$1;(statearr_12612_12639[(1)] = (12));
} else
{var statearr_12613_12640 = state_12602__$1;(statearr_12613_12640[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (3)))
{var inst_12600 = (state_12602[(2)]);var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12602__$1,inst_12600);
} else
{if((state_val_12603 === (12)))
{var inst_12562 = (state_12602[(7)]);var inst_12590 = cljs.core.vec.call(null,inst_12562);var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12602__$1,(15),out,inst_12590);
} else
{if((state_val_12603 === (2)))
{var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12602__$1,(4),ch);
} else
{if((state_val_12603 === (11)))
{var inst_12566 = (state_12602[(9)]);var inst_12570 = (state_12602[(10)]);var inst_12580 = (state_12602[(2)]);var inst_12581 = [];var inst_12582 = inst_12581.push(inst_12566);var inst_12562 = inst_12581;var inst_12563 = inst_12570;var state_12602__$1 = (function (){var statearr_12614 = state_12602;(statearr_12614[(11)] = inst_12582);
(statearr_12614[(7)] = inst_12562);
(statearr_12614[(8)] = inst_12563);
(statearr_12614[(12)] = inst_12580);
return statearr_12614;
})();var statearr_12615_12641 = state_12602__$1;(statearr_12615_12641[(2)] = null);
(statearr_12615_12641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (9)))
{var inst_12562 = (state_12602[(7)]);var inst_12578 = cljs.core.vec.call(null,inst_12562);var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12602__$1,(11),out,inst_12578);
} else
{if((state_val_12603 === (5)))
{var inst_12566 = (state_12602[(9)]);var inst_12563 = (state_12602[(8)]);var inst_12570 = (state_12602[(10)]);var inst_12570__$1 = f.call(null,inst_12566);var inst_12571 = cljs.core._EQ_.call(null,inst_12570__$1,inst_12563);var inst_12572 = cljs.core.keyword_identical_QMARK_.call(null,inst_12563,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12573 = (inst_12571) || (inst_12572);var state_12602__$1 = (function (){var statearr_12616 = state_12602;(statearr_12616[(10)] = inst_12570__$1);
return statearr_12616;
})();if(cljs.core.truth_(inst_12573))
{var statearr_12617_12642 = state_12602__$1;(statearr_12617_12642[(1)] = (8));
} else
{var statearr_12618_12643 = state_12602__$1;(statearr_12618_12643[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (14)))
{var inst_12595 = (state_12602[(2)]);var inst_12596 = cljs.core.async.close_BANG_.call(null,out);var state_12602__$1 = (function (){var statearr_12620 = state_12602;(statearr_12620[(13)] = inst_12595);
return statearr_12620;
})();var statearr_12621_12644 = state_12602__$1;(statearr_12621_12644[(2)] = inst_12596);
(statearr_12621_12644[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (10)))
{var inst_12585 = (state_12602[(2)]);var state_12602__$1 = state_12602;var statearr_12622_12645 = state_12602__$1;(statearr_12622_12645[(2)] = inst_12585);
(statearr_12622_12645[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12603 === (8)))
{var inst_12566 = (state_12602[(9)]);var inst_12562 = (state_12602[(7)]);var inst_12570 = (state_12602[(10)]);var inst_12575 = inst_12562.push(inst_12566);var tmp12619 = inst_12562;var inst_12562__$1 = tmp12619;var inst_12563 = inst_12570;var state_12602__$1 = (function (){var statearr_12623 = state_12602;(statearr_12623[(7)] = inst_12562__$1);
(statearr_12623[(14)] = inst_12575);
(statearr_12623[(8)] = inst_12563);
return statearr_12623;
})();var statearr_12624_12646 = state_12602__$1;(statearr_12624_12646[(2)] = null);
(statearr_12624_12646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5809__auto___12632,out))
;return ((function (switch__5794__auto__,c__5809__auto___12632,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_12628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12628[(0)] = state_machine__5795__auto__);
(statearr_12628[(1)] = (1));
return statearr_12628;
});
var state_machine__5795__auto____1 = (function (state_12602){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e12629){if((e12629 instanceof Object))
{var ex__5798__auto__ = e12629;var statearr_12630_12647 = state_12602;(statearr_12630_12647[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12629;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12648 = state_12602;
state_12602 = G__12648;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12602){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12632,out))
})();var state__5811__auto__ = (function (){var statearr_12631 = f__5810__auto__.call(null);(statearr_12631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12632);
return statearr_12631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12632,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map