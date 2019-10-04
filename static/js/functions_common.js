//★★関数（共通使用）★★
//MathJaxを設定する関数
function setMathJax(){
	$('head script:last').after('<script type="text/x-mathjax-config" class="mathjaxconfig">'
	+'MathJax.Hub.Config({'
	+'  jax: ["input/TeX", "output/HTML-CSS"],'
	+'  TeX: {'
	+'    extensions: ["mhchem.js"]'//化学用
	+'  },'
	+'  tex2jax: {'
	+'    inlineMath: [["$","$"],["\\(","\\)"]],'
	+'    processEscapes: false'
	+'  },'
	+'  CommonHTML: { matchFontHeight: false },'
	+'  displayAlign: "left",'
	+'  displayIndent: "2em"'
	+'});'
	+'</script>');
	$('head script:last').after('<script async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_CHTML" class="mathjax"></script>');
	$('head script:last').after('<script async src="tools/MathJax/MathJax.js?config=TeX-AMS_CHTML" class="mathjax"></script>');
    //動的処理
    $('head script:last').after('<script type="text/javascript">'
	+'$(function() {'
	+'  function makePreview() {'
	+'    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);'
	+'  }'
	+'  $("body").keyup(function(){makePreview()});'
	+'  $("body").bind("updated",function(){makePreview()});'
	+'  makePreview();'
	+'});'
	+'</script>');
}

//データを取得する関数
function loadLocalStorageMenuDataAnalysisPython() { //保存用の関数はprocedure.jsで記述
  sectionTitle = localStorage.sectionTitle; //節タイトル
}