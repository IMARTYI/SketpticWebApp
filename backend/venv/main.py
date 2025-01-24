from flask import Flask,request,jsonify

import requests
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials,db, auth

app = Flask(__name__)

cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(cred,
{"databaseURL":"https://console.firebase.google.com/u/0/project/skeptic-213fc/database/skeptic-213fc-default-rtdb/data/~2F"})
ref =  db.reference("/")
ref.get()


CORS(app)



@app.route('/register', methods = ['POST'])
def register_user():
    data = request.get_json()

    pass

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Flask!'})

@app.route('/test', methods=['POST'])
def test():
    data = request.get_json()

    username = data.get('username','no username provided')
    print(f"Recieved {username}")
    return jsonify({'message': f"Username {username} received successfully!"})


if __name__ == '__main__':
    app.run(debug=True)

    