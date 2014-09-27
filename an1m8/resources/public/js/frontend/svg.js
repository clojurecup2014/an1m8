// Compiled by ClojureScript 0.0-2342
goog.provide('frontend.svg');
goog.require('cljs.core');
goog.require('frontend.dom');
goog.require('frontend.dom');
frontend.svg.base_val = (function base_val(el,prop){return (el[prop]).baseVal;
});
frontend.svg.len = (function len(el,prop){return frontend.svg.base_val.call(null,el,prop).value;
});
frontend.svg.empty_rect_QMARK_ = (function empty_rect_QMARK_(r){return ((r == null)) || (cljs.core._EQ_.call(null,(0),r.width,r.height,r.x,r.y));
});
frontend.svg.svg_root = (function svg_root(svg){return (svg.children[(0)]);
});
frontend.svg.fix_viewBox_BANG_ = (function fix_viewBox_BANG_(svg){var root = frontend.svg.svg_root.call(null,svg);var viewBox = frontend.svg.base_val.call(null,root,"viewBox");if(frontend.svg.empty_rect_QMARK_.call(null,viewBox))
{var h = frontend.svg.len.call(null,root,"height");var w = frontend.svg.len.call(null,root,"width");return root.setAttribute("viewBox",("0 0 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)));
} else
{return null;
}
});

//# sourceMappingURL=svg.js.map