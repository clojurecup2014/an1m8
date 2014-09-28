(ns an1m8.core
  "I do stuff"
	(:require
            [an1m8.dom :as d]
            [an1m8.anim :as a]
            [an1m8.svg :as s]
            [ajax.core :refer [GET POST
                               edn-response-format
                               edn-request-format]]))

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
  (if-not (or (= "" @current-view) (= id @current-view))
    (d/hide (d/by-id @current-view)))

  (handler)

  (reset! current-view id))


(defn- prepare-svg[id handler]
  (let [logo (d/by-id id)
        f (fn[]
            (if-let [svg (d/svg-doc logo)]
              (do
                (s/fix-viewBox! svg)
                (d/scale-el! logo 0.75)

                (handler)
                )))]
    (if (empty? (d/nodelist->coll (.querySelectorAll (d/svg-doc logo) "svg")))
      (.addEventListener logo "load" f) ; no svg - add listener
      (f) ; apply f
    )))


(defn- small-logo[]
  (let [logo-wrapper (d/by-id "logo-wrapper")]
    (d/remove-class! logo-wrapper "fill-w")
    (d/add-class! logo-wrapper "w_1_5")
    (d/add-class! logo-wrapper "click-i")
    ))


(defn- big-logo[]
  (let [logo-wrapper (d/by-id "logo-wrapper")]
    (d/add-class! logo-wrapper "fill-w")
    (d/remove-class! logo-wrapper "w_1_5")
    (d/remove-class! logo-wrapper "click-i")

    ))


;; underscores to for visibiliness from js


(defn img-handler [response]
  (doseq [image (:images response)]
        (js/alert image)

    )
  )


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


(defn ^:export init_gallery_page[]
   (small-logo)
   (GET "/files/" {
              :handler img-handler
              :error-handler error-handler
              :response-format (edn-response-format)
              :request-format (edn-request-format)
              :keywords? true}))


(defn ^:export init_editor_page[]
  (small-logo)

  )



(defn ^:export init_landing_page []
  (big-logo)

  (d/on-click! "gallery-btn"
               (fn[e]
                 (show-viewport "gallery-view" init_gallery_page)
                 false))

  (d/on-click! "editor-btn"
               (fn[e]
                 (show-viewport "editor-view" init_editor_page)
                 false)))



(defn ^:export app[]
  (enable-console-print!) ; does not work in ie :)
  (.log js/console "Junta Power!")

  ;   (a/an1m8 {:timing-f {:duration 500}})


  (show-loader) ; ff fix
  (prepare-svg "logo-solid-1"
               #(let [c (a/animation (d/svg-doc (d/by-id "logo-solid-1")) "path")]
                  (d/on-click! "logo-wrapper"
                               (fn[e]
                                 (show-viewport "intro-view" init_landing_page)

                                 ; (a/stop-animation c)
                                 ))

                  (if (= (str js/initial_view js/initial_action) "")
                    (show-viewport "intro-view" init_landing_page)
                    (show-viewport js/initial_view (aget js/an1m8.core js/initial_action)))

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



