from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email is required'}), 400

    file_exists = os.path.isfile('emails.csv')
    with open('emails.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['Email'])
        writer.writerow([email])
        print([email])

    return jsonify({'message': 'Email received'}), 200

if __name__ == '__main__':
    app.run(debug=True)
