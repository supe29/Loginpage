from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import psycopg2

app = Flask(__name__)


@app.route("/register", methods=["POST"])
def register():

    registerdata = request.form
    Full_name = registerdata.get('Full name')
    email = registerdata.get('email')
    password = registerdata.get('password')
# how to dake form register datain dictionry?
    connection = psycopg2.connect(user='postgres',
                                  password='manebuchu',
                                  host='localhost',
                                  database='postgres')
    cursor = connection.cursor()

    # querry

    insert_querry = "INSERT INTO register VALUES(%s, %s, %s)"
    db_values = [registerdata['Full name'],
                 registerdata['email'], registerdata['password']]

    # perform query
    cursor.execute(insert_querry, db_values)
    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({"message": "Registration successful"})


if __name__ == "__main__":
    app.run(debug=True)
