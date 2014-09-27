(ns an1m8.core
  "I do stuff"
	(:require [an1m8.dom :as d]
            [an1m8.anim :as a]
            [an1m8.svg :as s]))

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
        svg (d/svg-doc el)]
    (if svg
      (s/fix-viewBox! svg)
      (js/alert "Error while loading svg"))))


(defn ^:export test_scaling [id scale]
	(let [el (d/by-id id)]
		(d/scale-el! el scale)))


;;;;;;;;;;;
;
; main

(d/on-load (fn[]
; does not work in ie :)
               (enable-console-print!)
               (println "Junta Power!")
             ))


