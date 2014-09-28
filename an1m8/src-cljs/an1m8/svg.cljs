(ns an1m8.svg
  "SVG utils"
  (:require [an1m8.dom :as d]))

;
;
; svg, you piece of shit
;
;

(defn base-val[el prop]
  (if-let [v (aget el prop)]
    (.-baseVal v)))


(defn- len [el prop]
  (if-let [v (base-val el prop)]
    (.-value v))) ; will units be pixels


(defn- empty-rect? [r]
  (or (nil? r)
       (= 0 (.-width r) (.-height r) (.-x r) (.-y r))))


(defn svg-root [svg]
  (let [[root] (d/find-child svg "svg")]
    root))


(defn fix-viewBox! [svg]
  (let [root (svg-root svg)
        viewBox (base-val root "viewBox")]
      (if (empty-rect? viewBox)
        (let [h (len root "height")
              w (len root "width")]
          ;(.log js/console (str "0 0 " w " " h " ")) ; todo: fix this if there is left & top in svg
          (.setAttribute root "viewBox" (str "0 0 " w " " h " "))))))


(defn svg-init [id handler]
  (let [el (d/by-id id)
        svg (d/svg-doc el)]

      (fix-viewBox! svg)
      (d/scale-el! el 1)

      (handler)))

(defn wait-for-svg[id handler]
  (let [obj (d/by-id id)
        svg (d/svg-doc obj)
        f (partial svg-init id handler)]

    (if (or (nil? svg)
            (empty? (d/nodelist->coll (.querySelectorAll svg "svg"))))
      (.addEventListener obj "load" f) ; no svg - add listener
      (f))))
