$(function () {
	
/*▼▼▼▼▼★★★★★仮置き Excel → JSON → HTML変換試行用★★★★★▼▼▼▼▼*/
	//Excel起動
	$("#button_sample_excel_to_json_to_html").click(function () {
		window.open("data/sample_excel_to_json_to_html.xlsm","_blank","top=50,left=50,width=500,height=500,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1");
		return false;
	});
/*▲▲▲▲▲★★★★★仮置き Excel → JSON → HTML変換試行用★★★★★▲▲▲▲▲*/
	
	
  //ページ先頭へ戻るボタン
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) { //設定値のpx以上スクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  $('a[href^="#"]').click(function () {
    var time = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({
      scrollTop: distance
    }, time, "swing");
    return false;
  });

  //絞り込みワード検索
  //$('input#search').quicksearch('table tbody td');
  $('input#search').quicksearch('tbody tr td');
  //$('input#search').quicksearch('td');
	
	//tooltip（デザインはcommon.cssに記述）
	$(".tooltip").tooltip({
		position: {
			my: 'bottom',//tooltipの左記の位置が要素に接する
			at: 'right top',//要素の左記の位置がtooltipに接する
			collision: 'flipfit'//flip…表示位置を反転（topならbottom，leftならright），fit…画面の端に合わせる
		}
	});
	
	//クロージング
  $('#closing').html('お疲れさまでした！');

  //footer
  $('.copyright').html('<small>Copyright&copy;2019<a href="http://www.f.u-tokyo.ac.jp/">東京大学大学院 薬学系研究科・薬学部</a>All Right Reserved.</small>');
});
