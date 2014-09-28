(ns an1m8.anim
  "Animation core"
	(:require [cljs.core.async :as async
             	:refer [<! >! chan put! timeout close!]]
            [an1m8.dom :as dom]
            [an1m8.colors :as colors]
            )
	(:require-macros [cljs.core.async.macros :refer [go]]))


;
; stepping functions
;

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



;;;;
;
; time function
;
(defn timing-f[params]
  (let [{id :id
         duration :duration
         :or {id :const duration 1000}} params]
    (case id
      :ln #(do
              Math/log ( + % 333)
            )
       :rand #(do
                 (* (rand-int %) 10)
               )

       :sin #(do
                 (+ 200 (Math/sin (+ % 100)))
              )

        :list #(nth (:duration params) (rem % (count (:duration params))))

    ; same intervals of time between keyframe
      :const (constantly duration)
      (constantly duration)
      )
  ))


;((timing-f {:duration 100}))
;((timing-f {:duration 1000 :id :const}))



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


;;;;;;;;;;;;;;;;;;;;;;;
;
; animation config
;
(defn animation-config [cfg]
  (let [{total :total
         timing :timing-f
         :or {
              total 100
              timing {}
              }
         } cfg

        anim-f #(do (println "put: " %) (nth [:a :b :c :d :e :nil] %)  )
        consume-f (partial println "take: ")
        ]
    {:timing-f (timing-f timing)
     :frame-f (keyframe-f total anim-f)
     :consume-f consume-f
     }))

#_(keys (animation-config {:total 10
                   :timing-f {:duration 500}
                   }))

;(animation-config {})
;(animation-config {:foo 321})


; animation fn consist of timing and animation
; f is keyframe func
; timing-f total is a step function
(defn an1m [timing-f frame-f consume-f]
  (let [c (chan 100) ; 100 is a buffer
        c1 (chan)]

    ; init
    (go (>! c1 (frame-f)))

    ; produce
    (go (loop []
          (let [[op i] (<! c1)]
            (<! (timeout (timing-f i)))
            (when-let [r (frame-f i)]
              (if (= :nil r)
                  (close! c)
                  (do
                    (>! c r)
                    (go (>! c1 (frame-f op i)))
                    (recur)))))
          (close! c1)))

    ; consume
    (go (loop []
          (when-let [data (<! c)]
            (when-not (= :nil data)
              (consume-f data)
              (recur)))
          (close! c)))
    c
    ))


(defn an1m8 [cfg]
   (let [{t :timing-f f :frame-f c :consume-f} (animation-config cfg)]
     (an1m t f c)))


;
;
; older stuff
;
;



;;;;;;;;;;;;;;;
;
; specific
;   animations

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
  (let [N 100

        fills (get-layer svg selector)

        color-morph-f (partial (color-animation-fn [0 0 0] [255 100  100]) N)
        ;color-morph-f (fn [x]
        ;
        ;                (colors/random-color)
        ;                )


        t (timing-f {:total N :duration 500})
        f (keyframe-f N color-morph-f)
        c (fn[fill]
              (doseq [f fills]
                (dom/set-style! f "fill" (colors/rgb->s fill)))
            )
        ]
    (an1m t f c)))

(defn stop-animation [c]
  (go (>! c :nil)))

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

