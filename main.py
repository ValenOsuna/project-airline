from flask import Flask

app = Flask(__name__)


@app.route("/")
def pela():
    return "Hola que haces"


if __name__ == 'main':
    app.run(debug=True)