$(function() {
	//テーブル生成
	$("#excel_to_json_to_html").css("fontSize", "var(--font-size-base-height)").css("position", "relative").css("top", "2vh").css("left", "20vw").html(
		'<table id="table_menu">' +
			'<tbody>');
		for(var i=0;i<sample_excel_to_json_to_html.length;i+=1){
			if(sample_excel_to_json_to_html[i]["cell01"]!="&nbsp;"){//chapterレベル…thタグ
				//&nbsp;を空文字に変換
				if(sample_excel_to_json_to_html[i]["cell01link"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell01link"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell02"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell02"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell02link"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell02link"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell03"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell03"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell03link"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell03link"]="";
				}
				//タグ生成
				$("#excel_to_json_to_html").append(
					"<tr>" +
						"<th class='chapter01'>" + sample_excel_to_json_to_html[i]["cell01"] + "</th>" +
						"<th class='chapter02'>" + sample_excel_to_json_to_html[i]["cell01link"] + "</th>" +
						"<th class='chapter03'>" + sample_excel_to_json_to_html[i]["cell02"] + "</th>" +
						"<th class='chapter04'>" + sample_excel_to_json_to_html[i]["cell02link"] + "</th>" +
						"<th class='chapter05'>" + sample_excel_to_json_to_html[i]["cell03"] + "</th>" +
						"<th class='chapter05'>" + sample_excel_to_json_to_html[i]["cell03link"] + "</th>" +
					"</tr>"
				);
			} else{//sectionレベル…tdタグ
				//&nbsp;を空文字に変換
				if(sample_excel_to_json_to_html[i]["cell01"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell01"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell01link"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell01link"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell02"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell02"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell02link"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell02link"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell03"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell03"]="";
				}
				if(sample_excel_to_json_to_html[i]["cell03link"]=="&nbsp;"){
					sample_excel_to_json_to_html[i]["cell03link"]="";
				}
				//タグ生成
				$("#excel_to_json_to_html").append(
					"<tr>" +
						"<td class='section01'>" + sample_excel_to_json_to_html[i]["cell01"] + "</td>" +
						"<td class='section02'>" + sample_excel_to_json_to_html[i]["cell01link"] + "</td>" +
						"<td class='section03'>" + sample_excel_to_json_to_html[i]["cell02"] + "</td>" +
						"<td class='section04'>" + sample_excel_to_json_to_html[i]["cell02link"] + "</td>" +
						"<td class='section05'>" + sample_excel_to_json_to_html[i]["cell03"] + "</td>" +
						"<td class='section05'>" + sample_excel_to_json_to_html[i]["cell03link"] + "</td>" +
					"</tr>"
				);
			}//end if(sample_excel_to_json_to_html[i]["cell01"]!="&nbsp;"){
		};//end for(var i=0;i<sample_excel_to_json_to_html.length;i+=1){
	$("#excel_to_json_to_html").append(
			"</tbody>" +
		"</table>"
	);
});//end $(function() {
