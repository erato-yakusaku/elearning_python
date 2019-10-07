import json
import collections as cl
from flask import Flask, render_template, request, jsonify, redirect, Blueprint

app = Flask(__name__)


@app.route('/')
def menu_data_analysis_python():
    return render_template('index.html',
                           name0='データ解析Python'
                           )


@app.route('/pages/<page_name>.html', methods=['GET'])
def transit_another_page(page_name):
    return render_template('/pages/%s.html' % page_name,
                           name0=page_name,
                           )


@app.route('/pages/git/<page_name>.html', methods=['GET'])
def transit_another_page_git(page_name):
    return render_template('/pages/git/%s.html' % page_name,
                           name0=page_name,
                           )


@app.route('/pages/samples/<page_name>.html', methods=['GET'])
def transit_another_page_sample(page_name):
    return render_template('/pages/samples/%s.html' % page_name,
                           name0=page_name,
                           )


# ページタイトルの取得
@app.route('/get_page_title', methods=['GET', 'POST'])
def get_page_title():
    global page_title
    if request.method == 'POST':
        page_title = request.data.decode('utf-8')
    else:
        name = "no name."
    return page_title


# HTML生成用のデータをJSON形式で保存
@app.route('/get_json', methods=['GET', 'POST'])
def get_json():
    if request.method == 'POST':
        json_data = request.json
        jsonfy_data = jsonify(json_data)  # sample_edit_html_directly.htmlでのアラート表示用
        json_data_file = 'var ' + str(page_title) + ' = ' + str(json_data)  # フォルダdataへの.jsonファイル保存用
        # 保存
        file_name_json = 'static/data/' + str(page_title) + '.json'
        fw_json = open(file_name_json, 'w')
        fw_json.write(json_data_file)
        fw_json.close()
    else:
        name = "no name."
    return jsonfy_data


if __name__ == "__main__":
    app.run()
