from flask import Flask
from flask_cors import CORS, cross_origin
from flask import jsonify
from db import Base, ENGINE

from business import airline, flight, ticket, destination, sale, luggage, passenger, airport, airplane, seat
from business import Flight, Airlines, Ticket, Destination, Sale, Luggages, Passenger, Airport, Airplane, Seat


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.register_blueprint(airline, url_prefix="/airline")
app.register_blueprint(flight, url_prefix="/flight")
app.register_blueprint(ticket, url_prefix="/ticket")
app.register_blueprint(destination, url_prefix="/destination")
app.register_blueprint(sale, url_prefix="/sale")
app.register_blueprint(luggage, url_prefix="/luggage")
app.register_blueprint(passenger, url_prefix="/passenger")
app.register_blueprint(airport, url_prefix="/airport")
app.register_blueprint(airplane, url_prefix="/airplane")
app.register_blueprint(seat, url_prefix="/seat")

if __name__ == "__main__":
    app.run(debug=True)
