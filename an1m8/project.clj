(defproject an1m8 "0.1.0-SNAPSHOT"
  :description "AN1M8 is an tool for creating svg animations"

  :ring {:handler an1m8.handler/app,
         :init    an1m8.handler/init,
         :destroy an1m8.handler/destroy}

  :cljsbuild {:builds [{:source-paths ["src-cljs"],
                        :id "dev",
                        :compiler {:output-dir "resources/public/js/",
                                   :optimizations :none,
                                   :output-to "resources/public/js/app.js",
                                   :source-map true,
                                   :pretty-print true}}
                       {:source-paths ["src-cljs"],
                        :id "release",
                        :compiler {:closure-warnings {:non-standard-jsdoc :off},
                                   :optimizations :advanced,
                                   :output-to "resources/public/js/app.js",
                                   :output-wrapper false,
                                   :pretty-print false}}]}
  :plugins [[lein-ring "0.8.10"]
            [lein-environ "0.5.0"]
            [lein-ancient "0.5.5"]
            [lein-cljsbuild "1.0.3"]]

  :url "http://an1m8.clojurecup.com"

  :repl-options {:init-ns an1m8.repl}

  :profiles {:uberjar {:aot :all},
             :production {:ring {:open-browser? false, :stacktraces? false, :auto-reload? false}},
             :dev {:dependencies
                   [[ring-mock "0.1.5"]
                    [ring/ring-devel "1.3.1"]
                    [pjstadig/humane-test-output "0.6.0"]
                    [org.clojure/core.cache "0.6.3"]
                    [org.clojure/core.memoize "0.5.6" :exclusions [org.clojure/core.cache]]
                    [com.cemerick/friend "0.2.1"]],
                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)],
                   :env {:dev true}}}

  :jvm-opts ["-server"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [org.clojure/google-closure-library "0.0-20140718-946a7d39"]

                 [markdown-clj "0.9.47"]
                 [environ "0.5.0"]
                 [im.chit/cronj "1.0.1"]
                 [noir-exception "0.2.2"]
                 [markdown-clj "0.9.53"]
                 [lib-noir "0.8.9"]
                 [log4j "1.2.17" :exclusions [javax.mail/mail
                                              javax.jms/jms
                                              com.sun.jdmk/jmxtools
                                              com.sun.jmx/jmxri]]
                 [reagent "0.4.2"]
                 [prone "0.6.0"]
                 [cljs-ajax "0.3.0"]
                 [noir-exception "0.2.2"]
                 [com.taoensso/timbre "3.3.1"]
                 [com.h2database/h2 "1.4.181"]
                 [com.taoensso/tower "3.0.1"]
                 [secretary "1.2.0"]
                 [korma "0.4.0"]
                 [selmer "0.7.1"]
                 [environ "1.0.0"]
                 [ring-server "0.3.1"]
                 [im.chit/cronj "1.4.2"]
                 [enlive "1.1.5"]]

  :min-lein-version "2.5.0")
