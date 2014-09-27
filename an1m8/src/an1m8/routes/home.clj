(ns an1m8.routes.home
            (:require [an1m8.layout :as layout]
                      [an1m8.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [noir.io :as io]
                      [noir.response :as response]
                      [noir.util.middleware :refer [app-handler]]
                      [ring.util.response :refer [file-response]]))

(defn home-page []
      (layout/render
        "app.html" {:docs (util/md->html "/md/docs.md")}))

(defn save-document [doc]
      (pprint doc)
      {:status "ok"})

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
