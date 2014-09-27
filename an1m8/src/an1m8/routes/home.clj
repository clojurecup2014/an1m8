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

(defn home-page []
      (layout/render
        "app.html" {:docs (util/md->html "/md/docs.md")}))


(defn index-page []
      (layout/render
       "index.html"))

(defn upload-page []
      (layout/render
        "upload.html"))

(defn save-document [doc]
      (pprint doc)
      {:status "ok"})

(def resource-path "/tmp/")

(defroutes home-routes

  (GET "/" [] (home-page))

  (GET "/index" [] (index-page))

  (GET "/upload" [] (upload-page))

  (POST "/upload" [file]
      (let [{fname :filename} file
            timed-name (str fname "-" (System/currentTimeMillis))
            file-url (str "/files/" timed-name)
            res (assoc file :filename timed-name)]
         (io/upload-file resource-path res)
         (resp/redirect file-url)))

  (GET "/files/:filename" [filename]
       (file-response (str resource-path filename)))

  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
