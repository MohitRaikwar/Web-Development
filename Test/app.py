from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
@app.route("/register",methods=["POST","GET"])
def register():
    name=request.form.get("name")
    return render_template("success.html",name=name)

