$(function () {
  //引き継いだ保存情報の取得
  loadLocalStorageMenuDataAnalysisPython();
//var result=JSON.parse(sectionTitle);
//var result=(new Function(sectionTitle))();
//var result=eval(sectionTitle);
//var result=Function('"use strict";return (' + sectionTitle + ')')();
//var result=Function('return' + sectionTitle)();



//eval()を使わない代替案（★★firefoxではうまくいかない）
function safeEval(val){
    return Function('"use strict";return ('+val+')')();
}
var result = safeEval(sectionTitle);

  $("#hyouji01").text("sectionTitleは"+sectionTitle);//この段階でsectionTitleは，"result"という文字列で変数ではない！
  $("#hyouji02").text("result.lengthは"+result.length);//28 Object
//  $("#hyouji02").text("resultは"+result);//28 Object
  $("#hyouji03").text("sectionTitle.lengthは"+sectionTitle.length);//24 String
  $("#hyouji04").text("typeof resultは"+typeof result);//Object
  $("#hyouji05").text("typeof sectionTitleは"+typeof sectionTitle);//String
  $("#hyouji06").text("typeof resultは"+typeof result);
  $("#hyouji07").text("result.lengthは"+result.length);





//sectionTitleは文字列のため，このままでは変数として使えない → resultとしてObject型に変換することで変数として扱えるようになる。★firefoxでは使えないので注意！（Chromeは正常動作する）★
  
  //テーブル生成
  $("#procedure").css("fontSize", "var(--font-size-base-height)").css("position", "relative").css("top", "2vh").css("left", "20vw").html(
    '<table id="table_menu">'
    + '<tbody>');
  for (var i = 0; i < result.length; i += 1) {
    if (result[i]["cell01"] != "&nbsp;") { //chapterレベル…thタグ
      //&nbsp;を空文字に変換
      if (result[i]["cell01link"] == "&nbsp;") {
        result[i]["cell01link"] = "";
      }
      if (result[i]["cell02"] == "&nbsp;") {
        result[i]["cell02"] = "";
      }
      if (result[i]["cell02link"] == "&nbsp;") {
        result[i]["cell02link"] = "";
      }
      if (result[i]["cell03"] == "&nbsp;") {
        result[i]["cell03"] = "";
      }
      if (result[i]["cell03link"] == "&nbsp;") {
        result[i]["cell03link"] = "";
      }
      //タグ生成
      $("#procedure").append(
        "<tr>"
        + "<th class='chapter01'>" + result[i]["cell01"] + "</th>"
        + "<th class='chapter02'>" + result[i]["cell01link"] + "</th>"
        + "<th class='chapter03'>" + result[i]["cell02"] + "</th>"
        + "<th class='chapter04'>" + result[i]["cell02link"] + "</th>"
        + "<th class='chapter05'>" + result[i]["cell03"] + "</th>"
        + "<th class='chapter05'>" + result[i]["cell03link"] + "</th>"
        + "</tr>"
      );
    } else { //sectionレベル…tdタグ
      //&nbsp;を空文字に変換
      if (result[i]["cell01"] == "&nbsp;") {
        result[i]["cell01"] = "";
      }
      if (result[i]["cell01link"] == "&nbsp;") {
        result[i]["cell01link"] = "";
      }
      if (result[i]["cell02"] == "&nbsp;") {
        result[i]["cell02"] = "";
      }
      if (result[i]["cell02link"] == "&nbsp;") {
        result[i]["cell02link"] = "";
      }
      if (result[i]["cell03"] == "&nbsp;") {
        result[i]["cell03"] = "";
      }
      if (result[i]["cell03link"] == "&nbsp;") {
        result[i]["cell03link"] = "";
      }
      //タグ生成
      $("#procedure").append(
        "<tr>"
        + "<td class='section01'>" + result[i]["cell01"] + "</td>"
        + "<td class='section02'>" + result[i]["cell01link"] + "</td>"
        + "<td class='section03'>" + result[i]["cell02"] + "</td>"
        + "<td class='section04'>" + result[i]["cell02link"] + "</td>"
        + "<td class='section05'>" + result[i]["cell03"] + "</td>"
        + "<td class='section05'>" + result[i]["cell03link"] + "</td>"
        + "</tr>"
      );
    } //end if(result[i]["cell01"]!="&nbsp;"){
  }; //end for(var i=0;i<result.length;i+=1){
  $("#excel_to_json_to_html").append(
    "</tbody>"
    + "</table>"
  );
}); //end $(function() {
