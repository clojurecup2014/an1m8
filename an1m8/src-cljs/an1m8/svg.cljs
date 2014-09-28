(ns an1m8.svg
  "SVG utils"
  (:require [an1m8.dom :as d]))

;
;
; svg, you piece of shit
;
;

(defn base-val[el prop]
  (.-baseVal (aget el prop)))


(defn- len [el prop]
  (.-value (base-val el prop))) ; will units be pixels


(defn- empty-rect? [r]
  (or (nil? r)
       (= 0 (.-width r) (.-height r) (.-x r) (.-y r))))


(defn svg-root [svg]
  (let [[root] (d/find-child svg "svg")]
    root))


(defn fix-viewBox! [svg]
   (let [root (svg-root svg)
         viewBox (base-val root "viewBox")]
     ;(.log js/console root)
     ;(.log js/console viewBox)

     (if (empty-rect? viewBox)
       (let [h (len root "height")
             w (len root "width")]
         ;(.log js/console (str "0 0 " w " " h " ")) ; todo: fix this if there is left & top in svg
         (.setAttribute root "viewBox" (str "0 0 " w " " h " "))))))



