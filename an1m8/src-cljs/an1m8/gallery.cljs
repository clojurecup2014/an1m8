(ns an1m8.gallery
  "showcase of the animations"
  (:require
   [an1m8.dom :as d]
   [an1m8.anim :as a]
   [an1m8.svg :as s]

   [ajax.core :refer [GET POST
                      edn-response-format
                      edn-request-format]]))

(defonce animations (atom {}))

(defn run-animation [svg-id]
  (let [status (get @animations svg-id)
        svg (d/svg-by-id svg-id)]
    ;(println "ANIMATE " svg-id status)

    (swap! animations merge
           {svg-id
            (if-not (:running status)
              (merge status {:running (a/dev-animation svg status)})
              (do
                (a/stop-animations (:running status))
                (dissoc status :running)))})))


  (defn init-gallery-svg[i el cfg]
  (let [el (d/by-id (str "svg-" i))
        svg (d/svg-doc el)]

    (s/fix-viewBox! svg)
    (d/scale-el! el 1)

    (d/on-click! (str "run-svg-" i)
       #(this-as b (run-animation (.getAttribute b "data-source"))))))


(defn gallery-handler [response]
  (let [container (d/by-id "anim-list")]
    (doall (for [i (range (count response))]
             (let [[svg-path cfg] (nth response i)
                   el (.createElement js/document "div")
                   id (str "svg-" i)
                   ]


               (d/set-html! el
                            (str "<div id='svg-wrapper-" i "' class='bordered w_2_3' style='display: inline-block;' >
                                 <object id='" id "'  class='fill-w' data='" svg-path "' type='image/svg+xml'></object></div>
                                 <button id='run-" id "' data-source='" id "'>Run</button>"))
               (.appendChild container el)
               (s/wait-for-svg id (partial init-gallery-svg i el cfg))

               (swap! animations assoc id {:cfg cfg})
               ))
           )
    ))


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))


(defn load-gallery[]
  (GET "/gallery/" {
                    :handler gallery-handler
                    :error-handler error-handler
                    :response-format (edn-response-format)
                    :request-format (edn-request-format)
                    :keywords? true
                    :headers {"Cache-Control" "no-cache"}
                    }))
