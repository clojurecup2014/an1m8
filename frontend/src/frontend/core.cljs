(ns frontend.core
	(:require [frontend.dom :as dom]
            [frontend.anim :as a]))

;
;
; Junta Power!
;
;


;;;;;;;;;;
;
; tests

;(a/test-core-async)


;;;;;;;;;;;
;
; main

(dom/on-load (fn[]
               (enable-console-print!) ; does not work in ie :)
               (println "Junta Power!")))
