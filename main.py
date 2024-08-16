from flask import Flask, request
from flask import jsonify
from db import Base , DB_ENGINE

from business import airline , flight, ticket
from business import Flights, Airlines, Ticket




Base.metadata.create_all(DB_ENGINE)

app = Flask(__name__)

app.register_blueprint(airline,url_prefix="/airline")
app.register_blueprint(flight,url_prefix="/flight")
app.register_blueprint(ticket,url_prefix="/ticket")

if __name__ == "__main__":
    app.run(debug=True)
