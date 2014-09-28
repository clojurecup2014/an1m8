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

(defn run [handler]
  (d/on-load handler))



(defn- show-loader[]
  (d/set-style! (d/by-id "loader") "height" (aget js/window "innerHeight")))


(defn- hide-loader[]
  (d/set-style! (d/by-id "loader") "display" "none"))

(defn- show-viewport [id]
  (d/set-style! (d/by-id "viewport") "display" "block"))


(defn- prepare-svg[id handler]
  (let [logo (d/by-id id)
        f (fn[]
            (if-let [svg (d/svg-doc logo)]
              (do
                (s/fix-viewBox! (d/svg-doc logo))
                (d/scale-el! logo 0.7)
                (handler)
                )
              (.log "BIDA")
              )

            )]
    (.addEventListener logo "load" f)
    (if (nil? (d/svg-doc logo))
      (js/setTimeout (fn[] (prepare-svg id handler)) 300)
      (f)
      )

    ))


(defn ^:export app[]
  (enable-console-print!) ; does not work in ie :)

  (show-loader)
  (show-viewport "intro-view")
  (prepare-svg "logo-solid-1"
               (fn[]
                 (.log js/console "Junta Power!")

                 ; hard coded a/animation

                 (a/animation (d/svg-doc (d/by-id "logo-solid-1")) "path")


                 (hide-loader))))


;;;;;;;;;;
;
; tests

;(a/test-core-async)

;(defn ^:export test_svg [id]
;  (let [el (d/by-id id)
;        svg (d/svg-doc el)]
;    (if svg
;      (s/fix-viewBox! svg)
;      (js/alert "Error while loading svg"))))


;(defn ^:export test_scaling [id scale]
;	(let [el (d/by-id id)]
;		(d/scale-el! el scale)))


;;;;;;;;;;;
;
; main

#_(d/on-load (fn[]

             (enable-console-print!) ; does not work in ie :)
             (println "Junta Power!")

             (let [logos (map d/by-id ["logo" "logo-light" "logo-3d" "logo-solid-1"])]
                (doseq [logo logos]

                    (js/fix_ie_svg logo)
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


