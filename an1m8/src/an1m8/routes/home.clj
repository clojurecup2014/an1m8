(ns an1m8.routes.home

            (:require
                      [clojure.java.io]
                      [clj-time.coerce :as tc]
                      [an1m8.layout :as layout]
                      [an1m8.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn xml]]
                      [clojure.pprint :refer [pprint]]
                      [noir.io :as io]
                      [noir.response :as resp]
                      [noir.util.middleware :refer [app-handler]]
                      [ring.util.response :refer [content-type]]
                      [selmer.parser :refer [render-file]]))

(defonce image-path "/tmp/images")

(defonce config-path "/tmp/config/")


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

(defn upload-page []
  (layout/render "upload.html"))

(defn debug-page []
  (layout/render "lt.html"))

(defn list-all-svg []
    {:images
     (drop 1 (for [file (file-seq (clojure.java.io/file image-path))] (.getName file)))})


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
         (io/upload-file image-path res)
         (resp/redirect file-url)))

  (GET "/files/:filename" [filename]
       (xml (slurp (str image-path filename))))


  (GET "/files/" []
       (edn (list-all-svg)))

  ;; hardcoded animations
  (GET "/gallery/" []
       (edn [;["/svg/logo.svg" {}]
             ;["/svg/logo_3d.svg" {}]
             ["/svg/logo_light.svg" {:duration 1000 :total 100}]
             ;["/svg/1.svg" {}]
             ;["/svg/2.svg" {}]
             ]))


)
