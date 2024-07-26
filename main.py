from flask import Flask

app = Flask(__name__)


@app.route("/")
def pela():
    return "Hola que haces"

@app.route("/Titi")
def titi():
    return "Su amigo el negro"


if __name__ == 'main':
    app.run(debug=True)