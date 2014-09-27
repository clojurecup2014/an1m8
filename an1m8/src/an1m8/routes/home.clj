(ns an1m8.routes.home
            (:require [clj-time.coerce :as tc]
                      [an1m8.layout :as layout]
                      [an1m8.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [noir.io :as io]
                      [noir.response :as resp]
                      [noir.util.middleware :refer [app-handler]]
                      [ring.util.response :refer [file-response]]))

(defn- render[args]
  (layout/render "an1m8.html" args))


(defn home-page []
      (render {
               ;:docs (util/md->html "/md/docs.md")
               :svg "<svg id=\"circle\" height=\"240\" width=\"240\">
                    <circle cx=\"120\" cy=\"120\" r=\"90\"
                            stroke=\"black\" stroke-width=\"45\" fill=\"rgba(255,0,0,0.77)\"
                            />
                    Sorry, your browser does not support inline SVG.
                </svg>"
              }))


;(defn index-page []
;      (render))


(defn upload-page []
  (layout/render "upload.html"))

(defn debug-page []
  (layout/render "lt.html"))

(defn save-document [doc]
      ; (pprint doc)
      {:status "ok"})

(def resource-path "/tmp/")

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/lt" [] (debug-page))

  ; (GET "/index" [] (index-page))
  (GET "/upload" [] (upload-page))

  (POST "/upload" [file]
      (let [{fname :filename} file
            timed-name (str fname "-" (System/currentTimeMillis))
            file-url (str "/files/" timed-name)
            res (assoc file :filename timed-name)]
         (io/upload-file resource-path res)
         (resp/redirect file-url)))

  (GET "/files/:filename" [filename]
       (content-type (str resource-path filename))  "xml")

  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params)))



  )
