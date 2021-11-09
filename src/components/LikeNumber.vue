<!-- ローカル登録のコンポーネントにしたい。今回はApp.vueでのみ使えるものにする -->
<template>
  <div>
    <p>いいね数({{ totalNumber}})</p>
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
  // props: ['totalNumber'],

// 複数のpropsの指定方法(オブジェクトで指定する方法)
  // props: {
  //   totalNumber: {
  //     type: Number,
  //     default: 10,
  //   },
  //   testProps: {
  //     type: String,
  //   }
  // },

// 複数のpropsの指定方法(配列で指定する方法)
// props: ["totalNumber","testProps"],

// propsで受け取る値が配列やオブジェクトの場合、参照渡しになる。つまり子コンポーネントの変更が親コンポーネントへ影響を与えてしまう。
// 一方プリミティブな場合(bool number stringなど)は参照渡しではないので子コンポーネント内のみでの値の変更となる

props: ["totalNumber"],

  // props: {
  //   // オブジェクト形式で渡すこともできる。
  //   // キー（送られてくる値）:バリュー（型を指定）
  // 型が違うと警告が表示される。エラーに気づきやすい
  // 型を指定することでリファクタりんごできる。
  // これはバリデーションの一つ
  //   totalNumber : Number
  // type: Number
  // totalNumber: String
  // デフォルト値の指定ができる
  //  default: 10
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
      // this.number += 1

      // 子コンポーネントから親コンポーネントに値を渡すには$emitを使用
      // 第一引数：自由に指定できる 第二引数：親コンポーネントに渡したい値
      // これで送る側は完了

      // $emitは送る専用ではなく、親コンポーネントのイベントを発火するスイッチと捉えること
      // 今回ではmy-clickという親コンポーネントで発生するイベントによって値を変更する
      // つまり$emitはカスタムイベントを作成するときに使うものである。

      // 子コンポーネントは親コンポーネントの値に依存。よって親の値を変更すれば子にも影響が出る。
      // 一方で逆つまり、子コンポーネントが親コンポーネントの値を操作することはできない。これはデータフローが複雑になり理解も難しくなるからである。

      // カスタムイベントの書き方はケバブケースで書くこと
      // カスタムイベントはvue(html)で使用する時が多い。そのためケバブケースで書く方がいい。
      this.$emit("my-click", this.totalNumber + 1)
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
