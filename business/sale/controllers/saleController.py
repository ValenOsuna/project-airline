from ..models.saleClass import Sale
from flask import jsonify
from db import Session


def  createSale(data):
    try:
        sale = Sale()
        sale.createSale(data)
        sale.save()
        return jsonify({"msg" : "sale created successfully"})
    
    except:
        return jsonify ({"msg" : "destination could not be loaded" , 
                        "DestinationAttributes": {
                                                "issue_date": "--",
                                                "reservation_number": "--",
                                                "passenger_data": "--",
                                                "pay_method": "--",
                                                "accumulated_miles": "--"}}) , 400
    
def updateSale(**kwargs):
    session = Session()

    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No data has been sent to modify the id: '{id}'"}),400
    
    id = kwargs.get("id")
    sale = search_by_id(id)

    if not sale:
        return jsonify({"msg" : "Sale not found" , "keyError" : "id"}), 404    
    
    for key, value in kwargs.items():
        if hasattr(sale, key):
            setattr(sale, key, value)

    session.add(sale)
    session.commit()
    session.close()

    return jsonify({"msg" : "Sale updated successfully"}),200

def deleteSale(id):
    session = Session()
    sale = search_by_id(id)
    if not sale:
        return jsonify({"msg" : "Sale not found" , "keyError" : "id"}), 404 


def readSale(id):
    session = Session()
    sale = search_by_id(id)
    if not sale:
        return jsonify({"msg" : "Destination not found" , "keyError" : "id"}), 404 
    session.close()

    return jsonify({"issue_date": sale.issue_date,
                    "reservation_number": sale.reservation_number,
                    "passenger_data": sale.passenger_data,
                    "pay_method": sale.pay_method,
                    "accumulated_miles": sale.accumulated_miles}), 200


             
def search_by_id(id) -> Sale:
        session = Session()
        sale = session.query(Sale).filter_by(id).first()
        session.close()
        return sale
    