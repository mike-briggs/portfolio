from flask import Flask, request
from flask import render_template, send_from_directory
import os


app = Flask(__name__,static_folder="./build/static", template_folder="./build")

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/favicon.ico')
def fav():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico')

if __name__ == "__main__":
    app.run(debug=True)