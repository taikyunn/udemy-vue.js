<!-- シングルファイルコンポーネントはtemplate,script,styleの三つから構成される --> 
<template>
  <div>
    <!-- いいねを返したい時 -->
    <!-- <p>いいね({{ number }})</p> -->
    <!-- LikeNumberを読み込む -->
    <!-- template内は一つの要素でないといけない -->
    <!-- つまりdivタグの中にたくさん書く分には問題ないけどたくさんdivタグを書くことはできない。 -->
    <!-- パスカルケースは大文字スタートで大文字で連結させる方法のこと -->
    <!-- コンポーネント名もパスカルケースで統一がいいかな -->

    <LikeHeader></LikeHeader>
    <h1>{{ number }}</h1>

    <!-- 親コンポーネントから子コンポーネントに値を渡すには属性名('子コンポーネントで定義した値')で渡すことができる -->
    <!-- 値を動的に渡すにはv-bind(省略形 :)で渡すと動的に渡せる-->

    <!-- propsはケバブケース推奨 -->
    <LikeNumber :totalNumber='number'></LikeNumber>
    <LikeNumber :total-number='number'></LikeNumber>
    <!-- パスカルケースで指定したものは、ケバブケースでも表現できる -->
    <!-- htmlはカバブケースでかく -->
    <!-- なぜならブラウザは大文字と小文字の区別ができないから -->
    <!-- DOMテンプレート内ではケバブケースでかく -->
    <!-- DOMテンプレートとは、CDNで書いてた時。CLIではindex.htmlとか -->
    <!-- キャメルケースは頭文字が小文字で繋げる場合大文字 -->
    <!-- キャメルケースも使えるけど、基本パスカルケースで作成すること -->

     <!-- App.vueからするとLikeHeader,LikeNumberともの子コンポーネント -->
  </div>
</template>

<script>
// ローカル登録のためにimport
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data: function() {
    return {
      number: 10,
    }
  },
  components: {
    LikeHeader : LikeHeader
    // 上:ES5 下：ES6の書き方
    // LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid  blue;
  }
</style>
