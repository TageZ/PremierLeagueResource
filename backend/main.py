from flask import Flask, request
from flask_cors import CORS
import player_stats
import matches
import teams
import json

with open('teams.json', 'r') as file:
    teams_data = json.load(file)

teams_data = sorted(teams_data, key=lambda x: x['sky_tag'])

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/update_teams')
def update_teams():
    teams.buildTeamsJson()
    return "Completed"

@app.route('/teams')
def get_teams():
    return teams_data

@app.route('/fixtures')
def fixtures():
    team = request.args.get('name')
    fixtures = matches.scrapeFixtures(team)
    return matches.getFixtures(fixtures)

@app.route('/results')
def results():
    team = request.args.get('name')
    results = matches.scrapeResults(team)
    return matches.getResults(results)

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
