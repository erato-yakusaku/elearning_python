$(function () {
    //▼▼表の行を追加・削除・移動・変更▼▼
    // CSSで非表示にした1行目の行を複製し、その行の下に挿入
    $('#p2146-2-tbody>tr')
        .clone(true)
        .insertAfter($('#p2146-2-tbody>tr'));

    // 行を追加する
    $(document).on('change', '.changeList', function () {
        $(this)
            .parent()
            .next()
            .html($(this).val());
    });

    // 行を削除する
    $(document).on('click', '#p2146-2-tbody>tr:gt(1) .upList', function () {
        var t = $(this)
            .parent()
            .parent();
        if (t.prev('tr')) {
            t.insertBefore(t.prev('tr')[0]);
        }
    });

    // 行を一つ上に移動させる
    $(document).on('click', '.downList', function () {
        var t = $(this)
            .parent()
            .parent();
        if (t.next('tr')) {
            t.insertAfter(t.next('tr')[0]);
        }
    });

    // 行を一つ下に移動させる
    $(document).on('click', '.addList', function () {
        $('#p2146-2-tbody>tr')
            .eq(0)
            .clone(true)
            .insertAfter(
                $(this)
                    .parent()
                    .parent() //※.parent(),の末尾のカンマを削除した
            );
    });

    // 行の一部を変更する
    $(document).on('click', '.removeList', function () {
        $(this)
            .parent()
            .parent()
            .remove();
    });
    //▲▲表の行を追加・削除・移動・変更▲▲


    //▼▼HTML直接編集▼▼
    var $TABLE = $('#table');
    var $BTN = $('#export-btn');

    // A few jQuery helpers for exporting only
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;

    //テーブルコンテンツのJSONファイル生成
    $BTN.click(function () {
        var $rows = $TABLE.find('tr:not(:hidden)');
        var headers = [];
        var data = [];

        // Get the headers (add special header logic here)
        $($rows.shift()).find('th:not(:empty)').each(function () {
            headers.push($(this).text().toLowerCase());
        });

        // Turn all existing rows into a loopable array
        $rows.each(function () {
            var $td = $(this).find('td');
            var h = {};

            // Use the headers from earlier to name our hash keys
            headers.forEach(function (header, i) {
                h[header] = $td.eq(i).text();
            });

            data.push(h);
        });

        // Output the result
        result = 'var sample_edit_html_directly = ' + JSON.stringify(data)
        result_json = JSON.stringify(data)

        //◆データを.pyへ渡す
        // menu_data_analysis_python.pyの31行目へ渡す処理
        // 1.ファイル名のデータを.pyへ渡す（保存は渡したあとの.py側で処理）
        var getPageTitle = document.title;//ページタイトル取得
        $.ajax({
            url: "/get_page_title", //左記の.pyへデータを渡す
            data: getPageTitle,
            type: 'POST',
            dataType: 'text',
            contentType: 'application/json;charset=UTF-8',
        })
        // 2.JSON形式のデータを.pyへ渡す（保存は渡したあとの.py側で処理）
        $.ajax({
            url: "/get_json", //左記の.pyへデータを渡す
            data: result_json,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
        })
    });
    //▲▲HTML直接編集▲▲
});