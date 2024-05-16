from flask import Flask, request
from flask_cors import CORS
import player_stats
import matches
import json

with open('teams.json', 'r') as file:
    teams_data = json.load(file)

teams_data = sorted(teams_data, key=lambda x: x['name'])

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/teams')
def teams():
    return teams_data

@app.route('/scorers')
def scorers():
    team = request.args.get('name')
    scorers = player_stats.scrapeScorers(team)
    return player_stats.getScorers(scorers)

@app.route('/assisters')
def assisters():
    team = request.args.get('name')
    assisters = player_stats.scrapeAssisters(team)
    return player_stats.getAssisters(assisters)


if __name__ == '__main__':
    app.run(debug=True)
