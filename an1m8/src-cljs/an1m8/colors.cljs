(ns an1m8.colors
  "Color handling")

; todo rgba colors


(defn rgb->s [rgb]
  "rgb color to css format"
  (let [[r g b] rgb]
    (str "rgb(" r ", " g ", " b ")")))

; (rgb->s [123 10 10])

(defn s->rgb[s]
  "css color to [rgb]"
  (let [[_ r g b] (re-matches #"rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)" s)]
    [(js/parseInt r)
     (js/parseInt g)
     (js/parseInt b)]))

;(s->rgb "rgb(123, 10, 1)")


(defn random-color[]
  (let [f #(long (* (Math/random) 255))]
    [(f) (f) (f)]))

;(random-color)



