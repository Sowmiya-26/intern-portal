from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/intern')
def intern():
    return jsonify({
        "name": "Sowmiya Sanjay",
        "referralCode": "sowmiya2025",
        "donationRaised": 5000
    })

@app.route('/api/leaderboard')
def leaderboard():
    return jsonify([
        {"name": "Sowmiya", "donationRaised": 5000},
        {"name": "Ravi", "donationRaised": 3500},
        {"name": "Asha", "donationRaised": 2000}
    ])

if __name__ == "__main__":
    app.run(debug=True)
