<!-- ローカル登録のコンポーネントにしたい。今回はApp.vueでのみ使えるものにする -->
<template>
  <div>
    <!-- <p>いいね数({{ totalNumber}})</p> -->
    <p>いいね数半分({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // 親コンポーネントから子コンポーネントに値を渡す
  // 親コンポーネントのdataを使いたい時はpropsを使用する
  // propsは配列で定義する。

  // propsはキャメルケースとケバブケースがある
  // おすすめはキャメルケース
  // props :['このコンポーネント内での呼び名を定義（親クラスで指定した値と同じにする）']
  props: ['totalNumber'],
  // props: {
  //   // オブジェクト形式で渡すこともできる。
  //   // キー（送られてくる値）:バリュー（型を指定）
  // 型が違うと警告が表示される。エラーに気づきやすい
  // 型を指定することでリファクタりんごできる。
  // これはバリデーションの一つ
  //   totalNumber : Number
  // type: Number
  // デフォルト値の指定ができる
  //  default:
  // 必須入力
  // requrired: true
  // },
  computed: {
    halfNumber(){
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.number += 1
    }
   },
}
</script>

<!-- そのままクラス指定で書くと全てのテンプレートに反映されてしまう -->
<!-- scopedをつけるとそのファイル内のみに対してCSSを適応させられる -->
<style scoped>
  div {
    border: 1px solid  red;
  }
</style>
