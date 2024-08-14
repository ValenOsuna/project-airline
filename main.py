from flask import Flask, request
from flask import jsonify
from db import Base , DB_ENGINE

from business import airline , flight, ticket
from business.flight.models import VueloClass
from business.airline.models import AeroliniaClass
from business.ticket.models import BoletosClass



Base.metadata.create_all(DB_ENGINE)

app = Flask(__name__)



@app.route('/muestranos', methods=['POST'])
def respuesta():
    algo = request.get_json()
    print("JSON recibido:", algo)
    nombre = algo.get('nombre', 'no lo encuentro creo?')
    return jsonify({'nombre': nombre})


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

@app.route("/submit" , methods = ['POST']) 
def submit():
    respuesta = request.get_json()
    if "Nombre" in respuesta:
        return respuesta["Nombre"]
    else:
        return respuesta

@app.route("/GetTiti", methods = ["GET"])
def Getiti():
    if request.method == "GET":
        return {"Apodo": 
                "Titi"}

@app.route("/PostTiti", methods = ["POST"])
def Postiti():
    if request.method == "POST":
        print(request.get_json().get("Apodo"))
        return request.data
    else:
        {"msg": "method not allowed"}


app.register_blueprint(airline,url_prefix="/airline")
app.register_blueprint(flight,url_prefix="/flight")
app.register_blueprint(ticket,url_prefix="/ticket")

if __name__ == "__main__":
    app.run(debug=True)
