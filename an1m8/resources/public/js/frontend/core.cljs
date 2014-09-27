(ns frontend.core
  "I do stuff"
	(:require [frontend.dom :as d]
            [frontend.anim :as a]
            [frontend.svg :as s]))

;
;
; Junta Power!
;
;


;;;;;;;;;;
;
; tests

;(a/test-core-async)

(defn ^:export test_svg [id]
  (let [el (d/by-id id)
        svg (.getSVGDocument el)]
    (if svg
      (do
        ;(.log js/console svg)
        (s/fix-viewBox! svg)
        )
      (js/alert "Error while loading svg")
      ))
  )

;;;;;;;;;;;
;
; main

(d/on-load (fn[]
               (enable-console-print!) ; does not work in ie :)
               (println "Junta Power!")
             ))


