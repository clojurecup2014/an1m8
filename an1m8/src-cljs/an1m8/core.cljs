(ns an1m8.core
  "I do stuff"
	(:require
            [an1m8.dom :as d]
            [an1m8.anim :as a]
            [an1m8.svg :as s]
            [an1m8.app :as app]

            [ajax.core :refer [GET POST
                               edn-response-format
                               edn-request-format]]))

;
;
; Junta Power!
;
;


(defn svg-init [id handler]
  (let [el (d/by-id id)
        svg (d/svg-doc el)]

      (s/fix-viewBox! svg)
      (d/scale-el! el 0.75)

      (handler)))


(defn- prepare-svg[id handler]
  (let [obj (d/by-id id)
        svg (d/svg-doc obj)
        f (partial svg-init id handler)]

    (if (or (nil? svg)
            (empty? (d/nodelist->coll (.querySelectorAll svg "svg"))))
      (.addEventListener obj "load" f) ; no svg - add listener
      (f))))



;;;; gallery-view

;; underscores to for visibiliness from js

(defonce animations (atom {}))

(defn run-animation [svg-id]
  (let [status (get @animations svg-id)]
    (println "ANIMATE " svg-id status)

    (swap! animations merge
           {svg-id
            (if-not (:running status)
              (merge status {:running
                             (a/dev-animation (d/svg-doc (d/by-id svg-id)) status)})
              (do
                ; stop animations
                (a/stop-animations (:running status))
                (dissoc status :running))

              )})))


(defn init-gallery-svg[i el cfg]
  (let [el (d/by-id (str "svg-" i))
        svg (d/svg-doc el)]

    (s/fix-viewBox! svg)
    (d/scale-el! el 0.75)

    (d/on-click! (str "run-svg-" i)
       #(this-as b (run-animation (.getAttribute b "data-source"))))))


(defn gallery-handler [response]
  (let [container (d/by-id "anim-list")]
    (doall (for [i (range (count response))]
             (let [[svg-path cfg] (nth response i)
                   el (.createElement js/document "div")
                   id (str "svg-" i)
                   ]


               (d/set-html! el
                            (str "<div id='svg-wrapper-" i "' class='bordered w_2_3' style='display: inline-block;' >
                                 <object id='" id "'  class='fill-w' data='" svg-path "' type='image/svg+xml'></object></div>
                                 <button id='run-" id "' data-source='" id "'>Run</button>"))
               (.appendChild container el)
               (prepare-svg id (partial init-gallery-svg i el cfg))

               (swap! animations assoc id {:cfg cfg})
               ))
           )
    ))


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


(defn ^:export init_gallery_page[]
   (app/small-logo)
   (GET "/gallery/" {
              :handler gallery-handler
              :error-handler error-handler
              :response-format (edn-response-format)
              :request-format (edn-request-format)
              :keywords? true}))


(defn ^:export init_editor_page[]
  (app/small-logo)
  )



(defn ^:export init_landing_page []
  (app/big-logo)

  (d/on-click! "gallery-btn"
               (fn[e]
                 (app/show-viewport "gallery-view" init_gallery_page)
                 false))

  (d/on-click! "editor-btn"
               (fn[e]
                 (app/show-viewport "editor-view" init_editor_page)
                 false)))


(defn- app-loaded []
  (let [c (a/animation (d/svg-doc (d/by-id "logo-solid-1")) "path")]
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
  (prepare-svg "logo-solid-1" app-loaded))


