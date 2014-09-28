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

(def current-view (atom ""))

(defn run [handler]
  (d/on-load handler))

(defn- show-loader[]
  (d/set-style! (d/by-id "loader") "height" (aget js/window "innerHeight")))


(defn- hide-loader[]
  (d/hide (d/by-id "loader")))

(defn- show-viewport [id handler]
  (d/show (d/by-id "viewport"))
  (d/show (d/by-id id))
  (if-not (= "" @current-view)
    (d/hide (d/by-id @current-view)))

  (handler)

  (reset! current-view id))


(defn- prepare-svg[id handler]
  (let [logo (d/by-id id)
        f (fn[]
            (if-let [svg (d/svg-doc logo)]
              (do
                (s/fix-viewBox! svg)
                (d/scale-el! logo 0.7)
                (handler)
                )))]
    (if (empty? (d/nodelist->coll (.querySelectorAll (d/svg-doc logo) "svg")))
      (.addEventListener logo "load" f) ; no svg - add listener
      (f) ; apply f
    )))


;; underscores to for visibiliness from js

(defn ^:export init_gallery_page[]
  (hide-loader)
  )

(defn ^:export init_editor_page[]
  (hide-loader))


(defn ^:export init_landing_page []
  (prepare-svg "logo-solid-1"
               (fn[]
                 (.log js/console "Junta Power!")

                 (a/animation (d/svg-doc (d/by-id "logo-solid-1")) "path") ; hard coded a/animation, for now

                 (d/on-click! "gallery-btn"
                              (fn[e]
                                (show-viewport "gallery-view" init_gallery_page)
                                false))

                 (d/on-click! "editor-btn"
                              (fn[e]
                                (show-viewport "editor-view" init_editor_page)
                                false))


                 (hide-loader))))


(defn ^:export app[]
  (enable-console-print!) ; does not work in ie :)

  (show-loader) ; ff fix


  (if (= (str js/initial_view js/initial_action) "")
    (show-viewport "intro-view" init_landing_page)
    (show-viewport js/initial_view (aget js/an1m8.core js/initial_action)))

  )


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


