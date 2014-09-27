(ns frontend.anim
  "Animation core"
	(:require [cljs.core.async :as async
             	:refer [<! >! chan put! timeout]])
	(:require-macros [cljs.core.async.macros :refer [go]]))


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
