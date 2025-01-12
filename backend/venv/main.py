from flask import Flask,request,jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


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

    