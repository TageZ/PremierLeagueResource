from flask import Flask
from flask_cors import CORS
import json

with open('teams.json', 'r') as file:
    teams_data = json.load(file)

teams_data = sorted(teams_data, key=lambda x: x['name'])

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/teams')
def teams():
    return teams_data


if __name__ == '__main__':
    app.run(debug=True)
