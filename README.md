jquery.actions.js
====
aタグやformタグの挙動をclassで実装できるjqueryライブラリです。

## Description
``` html
<a href="example.html">SAMPLE</a>
``` 
などの単純なリンク先に確認のためのconfirmなどを挟み込む際に、わざわざjavascriptを記述するのが面倒なので作成しました。

## Example
``` html
<a href="example.html" class="href" data-confirm="are you ok?">
```
``` html
<form>
  <input type="text">
  <button type="button" class="submit" data-action="example.html" data-method="post" data-confirm="are you ok?">
</form>
```

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)
