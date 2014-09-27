(ns an1m8.anim
  "Animation core"
	(:require [cljs.core.async :as async
             	:refer [<! >! chan put! timeout]]
            [an1m8.dom :as dom]
            [an1m8.colors :as colors]
            )
	(:require-macros [cljs.core.async.macros :refer [go]]))


(defn nth-val[start end n]
  (let [N (if (< n 2) 2 (- n 1))]
    (-> end (+ start) (/ N))))

; usually curry this function for specified start/end/n
(defn- step-fn[convert-fn start end n current]
  (let [step (nth-val start end n)
        op (if (<= start end) + -)]
    (convert-fn (op start (* step current)))))

(def long-step (partial step-fn long))

(def float-step (partial step-fn identity))

;;;;;;;;;;;;;;
; animations

(defn color-animation-fn[from to]
  (let [[r1 g1 b1] from
        [r2 g2 b2] to
        red    (partial long-step r1 r2)
        green  (partial long-step g1 g2)
        blue   (partial long-step b1 b2)]
    (fn [total-frames n]
      [(red total-frames n) (green total-frames n) (blue total-frames n)])))


; ((color-animation-fn [0 0 0] [255 0 0]) 255 128)


(defn- get-layer [svg selector]
  (dom/nodelist->coll
   (.querySelectorAll svg selector)))



(defn animation[svg selector]
  (let [c (chan 100)             ; the channel for animation
        ;fills   (get-layer svg "[fill]")
        fills   (get-layer svg selector)

        strokes (get-layer svg "[fill]")
        from [255 0 0]
        to [0 0 0]
        frames 100
        wait-interval (nth-val 0 2500 frames)
        color-f (partial (color-animation-fn from to) frames)]

    ; ? how timing will work if the buffer of the channel will be overflown - use interval?
    (let [c1 (chan)]                ; internal channel for
      ; send first msg to fade out
      (go (>! c1 [:dec 0]))

      ; loop forever
      (go
       (while true
         (<! (timeout wait-interval)) ; wait

         (let [[op i] (<! c1)]        ; get new color change

           (>! c {:fill (color-f i)}) ; send message to animation channel

           (go (>! c1                 ; send a new color change
                   (cond
                    (and (= 0 i) (= :dec op)) [:asc i]
                    (= :dec op)               [:dec (dec i)]
                    (and (= :asc op) (= frames (inc i))) [:dec i]
                    (= :asc op)                          [:asc (inc i)])))))))



    (go
     (while true
       (let [{fill :fill
              stroke :stroke} (<! c)]

         ;(println [fill stroke])

         (if fill
           (doseq [f fills]
             (dom/set-style! f "fill" (colors/rgb->s fill))
             ))

         (if stroke
           (doseq [s strokes]
             (dom/set-style! s "stroke" (colors/rgb->s stroke))
             )))))

    )
  )

; start

;(run animation)

;;;;;;;;;
;
; tests

(comment ; test case )
  (let [steps 5
        fade-out (partial long-step 255 0 steps)
        fade-in  (partial long-step 0 255 steps)]
    {:1 (map fade-in (range 0 steps))     ; (0 63 127 191 255)
     :2 (map fade-out (range 0 steps))})  ; (255 191 127 63 0)

  (let [steps 3
        f (partial float-step 0 1 steps)]
    (map f (range 0 steps))) ; (0 0.5 1)

)

(defn test-core-async []
  (let [c (chan 10)]
    ; put stuff async
    (go
     (while true
       (<! (timeout 1500))
       (>! c (long (* (Math/random) 255)))))

    ; retrieve asap
    (go
     (while true
       (let [data (<! c)]
          (.log js/console data)
          )))))

