(ns frontend.dom
"DOM stuff"
)

; dom functions here

;; The results are a nodelist, which looks like an array, but
;; isn't one. We have to turn it into a collection that we can
;; work with.
(defn nodelist->coll [nl]
  (for [x (range 0 (.-length nl))]
    (aget nl x)))
