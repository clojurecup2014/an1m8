(ns an1m8.anim
  "Animation core"
	(:require [cljs.core.async :as async
             	:refer [<! >! chan put! timeout]])
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
  (let [c (chan 100)]
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
