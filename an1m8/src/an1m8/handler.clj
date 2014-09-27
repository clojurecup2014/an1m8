(ns an1m8.handler
  (:require [compojure.core :refer [defroutes]]
            [an1m8.routes.home :refer [home-routes]]
            [an1m8.middleware :refer [load-middleware]]
            [an1m8.session-manager :as session-manager]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.rotor :as rotor]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [cronj.core :as cronj]
            [an1m8.routes.auth :refer [auth-routes]]
            [an1m8.db.schema :as schema]))

(defroutes
  base-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info,
     :enabled? true,
     :async? false,
     :max-message-per-msecs nil,
     :fn rotor/appender-fn})
  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "an1m8.log", :max-size (* 512 1024), :backlog 10})
  (if (env :dev) (parser/cache-off!))
  (cronj/start! session-manager/cleanup-job)
  (if-not (schema/initialized?) (schema/create-tables))
  (timbre/info
    "
-=[ an1m8 started successfully"
    (when (env :dev) "using the development profile")
    "]=-"))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "an1m8 is shutting down...")
  (cronj/shutdown! session-manager/cleanup-job)
  (timbre/info "shutdown complete!"))


(def app
 (app-handler
   [auth-routes home-routes base-routes]
   :middleware
   (load-middleware)
   :session-options
   {:timeout (* 60 30), :timeout-response (redirect "/")}
   :access-rules
   []
   :formats
   [:json-kw :edn]))

