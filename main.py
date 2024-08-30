from flask import Flask, request
from flask import jsonify
from db import Base, ENGINE

from business import airline, flight, ticket , destination , sale
from business import Flights, Airlines, Ticket , Destination , Sale


app = Flask(__name__)

app.register_blueprint(airline, url_prefix="/airline")
app.register_blueprint(flight, url_prefix="/flight")
app.register_blueprint(ticket, url_prefix="/ticket")
app.register_blueprint(destination, url_prefix="/destination")
app.register_blueprint(sale , url_prefix="/sale")


if __name__ == "__main__":
    app.run(debug=True)
