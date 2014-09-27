(ns an1m8.anim
  "Animation core"
	(:require [cljs.core.async :as async
             	:refer [<! >! chan put! timeout]]
            [an1m8.dom :as dom]
            [an1m8.colors :as colors]
            )
	(:require-macros [cljs.core.async.macros :refer [go]]))


;;;;;;;;;;;;;;;;;;
;
; kind of cycled step functions
;
; (step-function from to total) -> (fn [frame]) -> [:asc/:desc frame]
;                                  (fn [op frame]) -> does the animation

(defn keyframe-f [total animation-f]
  "creates a looped function (state machine?) that will go indefinitely from zero to total and vice versa.
  (f) returns default op and starting frame, frame number is zero-based and op is :asc or :desc keyword
  (f frame) executes the animation-f
  (f op frame) will returns next op and frame "
  (fn ([] [:asc 0])
      ([frame]
       (animation-f frame))
      ([op frame]
       (cond (and (= 0 frame)
                    (= :desc op)) [:asc frame]
               (= :desc op) [:desc (dec frame)]
               (and (= :asc op)
                    (= total (inc frame))) [:desc frame]
               (= :asc op) [:asc (inc frame)]))))


#_(let [f! (keyframe-f 10 println )
      params '([:asc 0] [:asc 5] [:asc 9]
               [:desc 9] [:desc 6] [:desc 0])]

  (map (fn [[op i]]
         (let [[next-op next-i] (f! op i)]
           (f! i)
           [next-op next-i])
         ) params))

; will println frame numbers '(0 5 9 6 0) and return the following next steps
; [:asc 1] [:asc 6] [:desc 9] [:desc 8] [:desc 5] [:asc 0]


; animation fn consist of timing and animation


; f is keyframe func

; timing-f total is a step function
(defn an1m [timing-f frame-f consume-f]
  (let [c (chan 10) ; 100 is a buffer
        c1 (chan)]

    ; init
    (go (>! c1 (frame-f)))

    ; produce
    (go (while true
          (let [[op i] (<! c1)]
            (<! (timeout (timing-f i)))
            (>! c (frame-f i))
            (go (>! c1 (frame-f op i)))
            )))

    ; consume
    (go (while true
         (let [data (<! c)]
            (consume-f data))))

    ))



; older stuff

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

