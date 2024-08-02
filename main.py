from flask import Flask, request
from flask import jsonify
from db import Base , DB_ENGINE
from Controller import query_boletos, cear_boletos, borrar_boleto, actualizar_boletos
from Controller import CargarVuelo , QueryVuelo , DeleteVuelo , UpdateVuelo , MostrarVuelo

Base.metadata.create_all(DB_ENGINE)

app = Flask(__name__)

#CRUD VUELO
@app.route("/createVuelo", methods=['POST'])
def CreateVuelo():
    try:
        Data = request.get_json()
        CargarVuelo(Data)

        return {"msg" : "Vuelo cargado exitosamente "}
    
    except:
        return {"msg": "No se ha podido cargar el vuelo ",
                "AtributosObjeto" : "Destino , Origen , HorarioDespegue , HorarioEmbarque"}
    
@app.route("/buscarVuelo", methods=['POST'])
def BuscarVuelo():
    Data = request.get_json().get("id")
    return MostrarVuelo(QueryVuelo(Data))

@app.route("/actualizarVuelo", methods=['POST'])
def ActualizarVuelo():
    data = request.get_json()
    id = request.get_json().get("id")
    return UpdateVuelo(id , data)

@app.route("/borrarVuelo", methods=['POST'])
def BorrarVuelo():
    Data = request.get_json().get("id")
    return DeleteVuelo(Data)

#####



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


if __name__ == "__main__":
    app.run(debug=True)
