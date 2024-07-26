from flask import Flask

app = Flask(__name__)


@app.route("/")
def pela():
    return "Hola que haces"

@app.route("/Titi")
def titi():
    return "Su amigo el negro"

@app.route("/Valen")
def vale():
    return {"Nombre" : "Andres",
            "Apellido" : "Colazo",
            "DNI" : 42328132}


if __name__ == "__main__":
    app.run(debug=True)