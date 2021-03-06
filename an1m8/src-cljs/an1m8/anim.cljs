(ns an1m8.anim
  "Animation core"
  (:use [an1m8.f
         :only [nth-val step-fn long-step float-step timing-f]])
	(:require [cljs.core.async :as async
             	:refer [<! >! chan put! timeout close!]]
            [an1m8.dom :as dom]
            [an1m8.colors :as colors])
	(:require-macros [cljs.core.async.macros :refer [go]])
  )




;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
; keyframe function generators
;
; (step-function from to total) -> (fn [frame]) -> [:asc/:desc frame]
;                                  (fn [op frame]) -> does the animation

(defn keyframe-f
  "Generator of the cycled keyframe function for N frames:
  creates a looped function (state machine?) that will go indefinitely from zero to total and vice versa.
  (f) returns default op and starting frame, frame number is zero-based and op is :asc or :desc keyword
  (f frame) executes the animation-f
  (f op frame) will returns next op and frame "
  [total animation-f]
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


;
; animation func
;

(defn animation-f [cfg]
  (let [{total :total
         svg :svg
         els :els
         prop :prop
         f :f
         :or { total 100 }} cfg]

    #(do
       ;(println "put: " (keys r))
       ;(println "f(" % ") = " (f %) )
       (merge cfg (if f {;:prop  :fill ;(f %)
                         :value (f %)} {})))))


(defn consume-f
  [{total :total
    svg :svg, :as global-cfg}]

  (fn[data]
    (let [{els :els
           prop :prop
           value :value
           :or {value (colors/random-color)}} data]


      ;(println "take: " (keys data))

      (doseq [el els]
        (case prop
         :fill (dom/set-style! el "fill" (colors/rgb->s value))
         :stroke (dom/set-style! el "stroke" (colors/rgb->s (colors/random-color)))
         :scale (dom/scale-el! el (Math/random))
         (do
           ;(println "default animation" value)
           (dom/set-style! el "fill" (colors/rgb->s value))
           ;(dom/set-style! el "stroke" (colors/rgb->s (colors/random-color)))
         )
        )
      )
    )
  )
)


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

        ]
    {:timing-f (timing-f timing)
     :frame-f (keyframe-f total (animation-f cfg))
     :consume-f (consume-f cfg)
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

(defn an1m8-many [global-cfg layers]
  (reduce #(conj
            %1 (an1m8 (merge global-cfg %2)))
          [] layers)
  )



;;;;;;;;;;;;;;;
;
; specific
;   animations
;
; TODO: update

(defn color-animation-fn[from to]
  (let [[r1 g1 b1] from
        [r2 g2 b2] to
        red    (partial long-step r1 r2)
        green  (partial long-step g1 g2)
        blue   (partial long-step b1 b2)]
    (fn [total-frames n]
      [(red total-frames n) (green total-frames n) (blue total-frames n)])))

; ((color-animation-fn [0 0 0] [255 0 0]) 255 128)



;; deprecated
(defn animation[svg selector]
  (let [N 100

        fills (dom/get-layer svg selector)

        color-morph-f (partial (color-animation-fn [0 0 0] [255 175 100]) N)

        t (timing-f {:total N :duration 10})
        f (keyframe-f N color-morph-f)
        c (fn[fill]
              (doseq [f fills]
                (dom/set-style! f "fill" (colors/rgb->s (map #(/ 5) fill)))
                (dom/set-style! f "stroke" (colors/rgb->s fill)))
            )
        ]
    (an1m t f c)))

(defn stop-animation [c]
  (go (>! c :nil)))

(defn stop-animations [c]
    (doseq [sub-c c]
      (stop-animation sub-c)
      ))

; start

;(run animation)



;
;
;
;
; DEV ANIM - animates svg via config from sever
;
;

(defn dev-animation[svg global-cfg]

  (an1m8-many (merge {:svg svg} global-cfg)
              (reduce (fn [a [k v]]
                        (conj a
                              (merge v
                                     {:els (dom/get-layer svg k)})))
                      [] (:layers (:cfg global-cfg))))


   ;(let [full-cfg (merge {:svg svg} config)
   ;      {t :timing-f f :frame-f c :consume-f}
   ;      (animation-config full-cfg)]
   ;  (an1m t f c))


  )


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

