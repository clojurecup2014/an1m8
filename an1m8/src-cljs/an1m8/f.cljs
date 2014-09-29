(ns an1m8.f
  "functions, functions, functions")

;
; stepping functions
;

(defn nth-val
  ""
  [start end n]
  (let [N (if (< n 2) 2 (- n 1))]
    (-> end (+ start) (/ N))))

; usually curry this function for specified start/end/n
(defn- step-fn
  ""
  [convert-fn start end n current]
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
  ; use other param than duration
  (let [{id :id
         duration :duration
         :or {id :const duration 1000}} params]
    (case id
       :ln #(do
              Math/log ( + % 333)
            )
       :rand #(do
                 (* (rand-int %) 2000) ; todo
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
