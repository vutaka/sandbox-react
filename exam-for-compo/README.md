# Reactで作るコンポのExample

## やりたかったこと

- [ ] Reactでコンポーネントを作れるようになる
  - [ ] 子要素あり
  - [ ] （オプション）hooksを使う
- [ ] Reactのライフサイクルを知る
- [ ] CSS in JS（CSS modules）
  - [x] SCSS
  - [x] CSS modulesでコンポのみにスタイルが当たる。
  - [x] アニメーション
  - [x] 影つける
  - [ ] SVG表示
- [ ] （オプション）Jestでテストする
- [ ] storybookでコンポの使い方を出せる
  - [ ] viewportのエミュレート
  - [ ] propsを変更
  - [ ] 説明を記載できる

## 作るコンポ

- [ ] カード
  - [x] クリックするとひっくり返る
  - [ ] おもて面にシンボルと紐付く画像（svgを出せる）
  - [x] 薄めのデザイン

## 感想とか

### Good

- storybookが見た目とか見るために使いやすい使い方をチームに展開するものが一瞬でできそう。
  - よくあるページを追加したら一覧にも追加しなきゃをしなくて良い
  - addonで色々できるらしい
  - 導入も公式のマニュアルセットアップだけで全然余裕
- 色とかはSCSSとかで変数化した方が変更に強くなると思う
- CSS Modules使うならSCSSをネストさせる必要性がなくなる。結局はこのモジュール内に閉じた内容。

### Bad

- JSXのコールバックにおけるthisがきもい。メソッドをバインドしておく必要がある。
- 回避方法が2つあるが片方は非推奨なので実質1つ。それもまだJavaScriptの仕様になっていないES6のパブリックフィールドを使用するというもの。（流石に廃止されることはないか？）
  - [Reactのページ：イベント処理](https://ja.reactjs.org/docs/handling-events.html)。
  - [MDN：クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)。

### 他

- JS in CSSについて
  - ~~JS in CSSは何を取り入れればよかったのか判断が必要になる。CSS modulesとstyled-componentsのどっちかみたい？そもそもBEMだけでもあまり困らないのかもしれない。vueなら単一ファイルコンポーネントにそのまま書ける。~~
  - Create React AppならデフォルトでCSS Modulesが使える。[create-react-appのページ](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
  - クラス名にハイフンを使うとJSXの中で使えなくなる。引き算と解釈される。。。回避方法ないんかい。
- CSSのtrasitionが3Dに対応している！
  - 3Dアニメーションが容易にできる
  - 内容が結構難しい・・・・
- コンポーネントの状態によるアニメーションとか
  - リアルタイムなインタラクションでないならclassとCSSだけで実現できるし余計な物を混ぜ込まなくて良い
  - リアルタイムなインタラクションとかコンポーネントのライフサイクルによるアニメーションは [react trasition group](https://github.com/reactjs/react-transition-group)が良さそう。
- デフォルトで複数classを出力する機構がなさそう。半角スペース空けるのはダサい。
  - classnamesの導入が必須になりそう。

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Launches the storybook.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
