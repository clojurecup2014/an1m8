(ns an1m8.core
  "I do stuff"
	(:require
            [an1m8.dom :as d]
            [an1m8.anim :as a]
            [an1m8.svg :as s]
            [an1m8.app :as app]
            [an1m8.gallery :as gal]

            ))

;
;
; Junta Power!
;
;


;; underscores to for visibiliness from js in the template (for debugging)

(defn ^:export init_gallery_page[]
    (app/small-logo)
    (gal/load-gallery))

(defn ^:export init_editor_page[]
  (app/small-logo))

(defn ^:export init_landing_page []
  (app/big-logo)

  (d/on-click! "gallery-btn" #(do (app/show-viewport "gallery-view" init_gallery_page) false))
  (d/on-click! "editor-btn"#(do (app/show-viewport "editor-view" init_editor_page) false)))



(defn- app-loaded []
  (let [c (a/animation (d/svg-by-id "logo-solid-1") "path")]
    (d/on-click! "logo-wrapper" #(app/show-viewport "intro-view" init_landing_page))

    (if (= (str js/initial_view js/initial_action) "")
      (app/show-viewport "intro-view" init_landing_page)
      (app/show-viewport js/initial_view (aget js/an1m8.core js/initial_action)))

    (app/hide-loader)))
;
;
; main
;
;
(defn ^:export app_fn[]
  (enable-console-print!) ; does not work in ie :)
  (.log js/console "Junta Power!")

  (app/show-loader) ; ff fix
  (s/wait-for-svg "logo-solid-1" app-loaded))
