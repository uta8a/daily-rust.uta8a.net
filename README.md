# daily-rust.uta8a.net

習慣的にRustを書いていきたい気持ち

```
pnpm run dev
```

# 記事を書くフロー

- [workflow dispatch > Add docs](https://github.com/uta8a/daily-rust.uta8a.net/actions/workflows/generate.yaml) から `title` と `description` を入力してRun workflowを押す
- devServerを手元で立ち上げる `pnpm run dev`
- ページへ行って右上の `Edit this page` を押す
- VS Codeへのリンクを開き、記事を書く
- publish前にmdxのdescriptionをチェックする

基本的に日毎に書いて、切り出せそうならその部分を切り出してmdxのリンクを日毎ページに貼っておく運用をする。
