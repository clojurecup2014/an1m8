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

             (enable-console-print!) ; does not work in ie :)
             (println "Junta Power!")

             (let [logos (map d/by-id ["logo" "logo-light" "logo-3d" "logo-solid-1"])]
                (doseq [logo logos]

                    ;(js/fix_ie_svg logo)
                    (s/fix-viewBox! (d/svg-doc logo))
                    (d/scale-el! logo 0.7)

                  ))

               (let [timing (constantly 1500)
                     frame-f (a/keyframe-f 10 identity)
                     consume-f println
                     ]

                 ; do not kill ie, for now
                 ;(a/an1m timing frame-f consume-f)
                 )


               ; svg
               (a/animation (d/by-id "circle") "[fill]")
               (a/animation (d/svg-doc (d/by-id "logo_4")) "path")
               (a/test-core-async)
             ))


