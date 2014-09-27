// Compiled by ClojureScript 0.0-2342
goog.provide('frontend.anim');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
frontend.anim.nth_val = (function nth_val(start,end,n){var N = (((n < (2)))?(2):(n - (1)));return ((end + start) / N);
});
frontend.anim.step_fn = (function step_fn(convert_fn,start,end,n,current){var step = frontend.anim.nth_val.call(null,start,end,n);var op = (((start <= end))?cljs.core._PLUS_:cljs.core._);return convert_fn.call(null,op.call(null,start,(step * current)));
});
frontend.anim.long_step = cljs.core.partial.call(null,frontend.anim.step_fn,cljs.core.long$);
frontend.anim.float_step = cljs.core.partial.call(null,frontend.anim.step_fn,cljs.core.identity);
frontend.anim.test_core_async = (function test_core_async(){var c = cljs.core.async.chan.call(null,(100));var c__5809__auto___8851 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___8851,c){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___8851,c){
return (function (state_8806){var state_val_8807 = (state_8806[(1)]);if((state_val_8807 === (8)))
{var inst_8798 = (state_8806[(2)]);var state_8806__$1 = (function (){var statearr_8808 = state_8806;(statearr_8808[(7)] = inst_8798);
return statearr_8808;
})();var statearr_8809_8852 = state_8806__$1;(statearr_8809_8852[(2)] = null);
(statearr_8809_8852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8807 === (7)))
{var inst_8793 = (state_8806[(2)]);var inst_8794 = Math.random.call(null);var inst_8795 = (inst_8794 * (255));var inst_8796 = cljs.core.long$.call(null,inst_8795);var state_8806__$1 = (function (){var statearr_8810 = state_8806;(statearr_8810[(8)] = inst_8793);
return statearr_8810;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8806__$1,(8),c,inst_8796);
} else
{if((state_val_8807 === (6)))
{var inst_8802 = (state_8806[(2)]);var state_8806__$1 = state_8806;var statearr_8811_8853 = state_8806__$1;(statearr_8811_8853[(2)] = inst_8802);
(statearr_8811_8853[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8807 === (5)))
{var state_8806__$1 = state_8806;var statearr_8812_8854 = state_8806__$1;(statearr_8812_8854[(2)] = null);
(statearr_8812_8854[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8807 === (4)))
{var inst_8791 = cljs.core.async.timeout.call(null,(1500));var state_8806__$1 = state_8806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8806__$1,(7),inst_8791);
} else
{if((state_val_8807 === (3)))
{var inst_8804 = (state_8806[(2)]);var state_8806__$1 = state_8806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8806__$1,inst_8804);
} else
{if((state_val_8807 === (2)))
{var state_8806__$1 = state_8806;var statearr_8813_8855 = state_8806__$1;(statearr_8813_8855[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8807 === (1)))
{var state_8806__$1 = state_8806;var statearr_8815_8856 = state_8806__$1;(statearr_8815_8856[(2)] = null);
(statearr_8815_8856[(1)] = (2));
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
});})(c__5809__auto___8851,c))
;return ((function (switch__5794__auto__,c__5809__auto___8851,c){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_8819 = [null,null,null,null,null,null,null,null,null];(statearr_8819[(0)] = state_machine__5795__auto__);
(statearr_8819[(1)] = (1));
return statearr_8819;
});
var state_machine__5795__auto____1 = (function (state_8806){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_8806);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e8820){if((e8820 instanceof Object))
{var ex__5798__auto__ = e8820;var statearr_8821_8857 = state_8806;(statearr_8821_8857[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8820;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8858 = state_8806;
state_8806 = G__8858;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_8806){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_8806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___8851,c))
})();var state__5811__auto__ = (function (){var statearr_8822 = f__5810__auto__.call(null);(statearr_8822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___8851);
return statearr_8822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___8851,c))
);
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,c){
return (function (){var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,c){
return (function (state_8835){var state_val_8836 = (state_8835[(1)]);if((state_val_8836 === (7)))
{var inst_8826 = (state_8835[(2)]);var inst_8827 = console.log(inst_8826);var state_8835__$1 = (function (){var statearr_8837 = state_8835;(statearr_8837[(7)] = inst_8827);
return statearr_8837;
})();var statearr_8838_8859 = state_8835__$1;(statearr_8838_8859[(2)] = null);
(statearr_8838_8859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8836 === (6)))
{var inst_8831 = (state_8835[(2)]);var state_8835__$1 = state_8835;var statearr_8839_8860 = state_8835__$1;(statearr_8839_8860[(2)] = inst_8831);
(statearr_8839_8860[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8836 === (5)))
{var state_8835__$1 = state_8835;var statearr_8840_8861 = state_8835__$1;(statearr_8840_8861[(2)] = null);
(statearr_8840_8861[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8836 === (4)))
{var state_8835__$1 = state_8835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8835__$1,(7),c);
} else
{if((state_val_8836 === (3)))
{var inst_8833 = (state_8835[(2)]);var state_8835__$1 = state_8835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8835__$1,inst_8833);
} else
{if((state_val_8836 === (2)))
{var state_8835__$1 = state_8835;var statearr_8841_8862 = state_8835__$1;(statearr_8841_8862[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8836 === (1)))
{var state_8835__$1 = state_8835;var statearr_8843_8863 = state_8835__$1;(statearr_8843_8863[(2)] = null);
(statearr_8843_8863[(1)] = (2));
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
});})(c__5809__auto__,c))
;return ((function (switch__5794__auto__,c__5809__auto__,c){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){var statearr_8847 = [null,null,null,null,null,null,null,null];(statearr_8847[(0)] = state_machine__5795__auto__);
(statearr_8847[(1)] = (1));
return statearr_8847;
});
var state_machine__5795__auto____1 = (function (state_8835){while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_8835);if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5797__auto__;
}
break;
}
}catch (e8848){if((e8848 instanceof Object))
{var ex__5798__auto__ = e8848;var statearr_8849_8864 = state_8835;(statearr_8849_8864[(5)] = ex__5798__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8848;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8865 = state_8835;
state_8835 = G__8865;
continue;
}
} else
{return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_8835){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_8835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,c))
})();var state__5811__auto__ = (function (){var statearr_8850 = f__5810__auto__.call(null);(statearr_8850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);
return statearr_8850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__,c))
);
return c__5809__auto__;
});

//# sourceMappingURL=anim.js.map