(ns an1m8.app
  "single page web app facilities"
  (:require
   [an1m8.dom :as d])
  )

(defonce current-view (atom ""))

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
