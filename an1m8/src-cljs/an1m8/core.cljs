(ns an1m8.core
  "I do stuff"
	(:require
            [an1m8.dom :as d]
            [an1m8.anim :as a]
            [an1m8.svg :as s]
            [an1m8.app :as app]
            [an1m8.gallery :as gal]
            [an1m8.colors :as colors]
   ))

;
;
; Junta Power!
;
;

(defonce LOGO-ID "logo-solid-1")

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

;

(defn- animate-logo[]
  ; old domain
  ; (a/animation (d/svg-by-id LOGO-ID) "path")

  (let [svg (d/svg-by-id LOGO-ID)]
    (a/an1m8-many
     {:total 100

      :svg svg}

     [{:els (d/get-layer svg "#A path")
       :f (partial (a/color-animation-fn (colors/random-color) (colors/random-color)) 100)
       :timing-f {:id :const
                  :duration (long (+ 50 (* (Math/random) 1000)))}
       }
      {:total 300
       :timing-f {:id :const
                  :duration 300}
       :els (d/get-layer svg "#N path")
      }
      {:els (d/get-layer svg "[id='1'] path")
       :timing-f {:id :rand}

       }
      {:els (d/get-layer svg "#M path")
       :total 50
       :f (partial (a/color-animation-fn (colors/random-color) (colors/random-color)) 50)

       }
      {:els (d/get-layer svg "[id='8'] path")
       :timing-f {:id :list
                  :duration [10 500 250 230 200 170 100 50 135 10]}
       }
      ])))


  (defn- app-loaded []
    (animate-logo)

    (d/on-click! "logo-wrapper" #(app/show-viewport "intro-view" init_landing_page))

    (if (= (str js/initial_view js/initial_action) "")
      (app/show-viewport "intro-view" init_landing_page)
      (app/show-viewport js/initial_view (aget js/an1m8.core js/initial_action)))

    (app/hide-loader))
;
;
; main
;
;
(defn ^:export app_fn[]
  (enable-console-print!) ; does not work in ie :)
  (.log js/console "Junta Power!")

  (app/show-loader) ; ff fix
  (s/wait-for-svg LOGO-ID app-loaded))
