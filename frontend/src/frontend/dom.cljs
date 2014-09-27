(ns frontend.dom
  "DOM stuff"
  (:require [goog.dom :as dom]
            [goog.style :as style]
            [goog.dom.classes :as classes]))

;; The results are a nodelist, which looks like an array, but
;; isn't one. We have to turn it into a collection that we can
;; work with.
(defn nodelist->coll [nl]
  (for [x (range 0 (.-length nl))]
    (aget nl x)))

(defn by-id [id]
  (.getElementById js/document id))

(defn set-html! [el s]
  (set! (.-innerHTML el) s))

(defn set-style! [el st value]
  (style/setStyle el st value))

(defn set-text! [el s]
  (dom/setTextContent el s))

(defn set-class! [el name]
  (classes/set el name))

(defn add-class! [el name]
  (classes/add el name))

(defn remove-class! [el name]
  (classes/remove el name))

(defn tag-match [tag]
  (fn [el]
  	(when-let [tag-name (.-tagName el)]
      (= tag (.toLowerCase tag-name)))))

(defn parent [el tag]
  (let [matcher (tag-match tag)]
    (if (matcher el)
      el
      (dom/getAncestor el (tag-match tag)))))

(defn el-matcher [el]
  (fn [other] (identical? other el)))

(defn by-tag-name [el tag]
  (prim-seq (dom/getElementsByTagNameAndClass tag nil el)))

(defn offset [el]
  [(style/getPageOffsetLeft el) (style/getPageOffsetTop el)])

(defn in? [e el]
  (let [target (.-target e)]
    (or (identical? target el)
        (not (nil? (dom/getAncestor target (el-matcher el)))))))

(defn doc-ready-handler [handler]
  (fn[]
    (let[ ready-state (. js/document -readyState)]
      (when (= "complete" ready-state)
        (handler)))))

(defn on-load [handler]
    (aset js/document "onreadystatechange" (doc-ready-handler handler)))

(defn scale-el! [el scale]
  ; multiple transforms?
  (set-style! el "transform" (str "scale(" scale "," scale ")" )))


(defn find-child[el tag]
  (let [matcher (tag-match tag)]
    (filter tag-match (nodelist->coll (dom/getChildren el)))
    )
  )


(defn svg-doc [obj]
  (if-let [d (aget obj "contentDocument")]
    d
    (.getSVGDocument obj)
    )
  )
