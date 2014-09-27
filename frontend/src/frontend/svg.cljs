(ns frontend.svg
  "SVG utils"
  (:require [frontend.dom :as d]))

;
;
; svg, you piece of shit
;
;


(defn base-val[el prop]
  (.-baseVal (aget el prop)))


(defn- len [el prop]
  (.-value (base-val el prop))) ; will units be pixels


;(defn- svg-viewBox [el]
;  (let [vb (.-viewBox el)
;        v (.-baseVal el)]
    ; todo
;    v
;    ))


 (defn svg-root [svg]
  (aget (.-children svg) 0))


 (defn fix-viewBox! [svg]
   (let [root (svg-root svg)
         h (len root "height")
         w (len root "width")
         ]
     (.log js/console (aget root "viewBox"))
     )
   )


