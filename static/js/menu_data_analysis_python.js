$(function () {
  //◆マウスクリックしたセルのデータ保存_他ページへの引継ぎ用
  $(".section").click(function (evt) {
    var sectionTitle = $(this).attr("id");

    function saveLocalStorageMenuDataAnalysisPython() {
      localStorage.sectionTitle = sectionTitle; //節タイトル
    } //end function saveLocalStorageMenuDataAnalysisPython(){
    saveLocalStorageMenuDataAnalysisPython(); //保存
  }); //end $(".section").click(function(evt) {

}); //end $(function() {
