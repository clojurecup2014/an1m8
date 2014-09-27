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

             (let [logos [(d/by-id "logo") (d/by-id "logo-light") (d/by-id "logo-3d")]]
                (doseq [logo logos]
                    (s/fix-viewBox! (d/svg-doc logo))
                    (d/scale-el! logo 0.5)
                  )



               )
               ; svg
               ; animation
               (a/animation (d/by-id "circle") "[fill]")

               ;(a/animation (d/svg-doc (d/by-id "logo_4")) "path")
               ;(a/test-core-async)
             ))


