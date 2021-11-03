// index.htmlに対応する
// src配下のものを全てまとめている。


// vueを使用するために記載。
// npm install vue
import Vue from 'vue'
// コンポーネントをimport
// シングルファイルコンポーネント
// 中身は./App.vue
// これにはVueに必要な諸々のデータが入っている。
import App from './App.vue'
// LikeNumber.vueをimport
import LikeNumber from './components/LikeNumber.vue'

// tips=助言のこと。defaultではfalse
// 検証ツールで見ると確認できる
// trueだと開発モードになる。
Vue.config.productionTip = false
// LikeNumber.vueをグローバル登録する
Vue.component('LikeNumber', LikeNumber);

// #appはindex.htmlのid=appに使われている
new Vue({
  // ES6の書き方
  // 今までは第一引数：タグ 第二引数:文字列 だった
  // render関数はオブジェクトを引数に取ることもできる
  // Appはコンポーネントを返している。上でimportしているやつ
  render: h => h(App),
  // ES5の書き方 hはcreateElementと同じ
  // render: function(h) {
  // return h
  // }
}).$mount('#app')
