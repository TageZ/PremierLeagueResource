from flask import Flask
import json

with open('teams.json', 'r') as file:
    teams_data = json.load(file)

teams_data = sorted(teams_data, key=lambda x: x['name'])
names = [item["logo"] for item in teams_data]
team_names = {'name': names}

app = Flask(__name__)


@app.route('/teams')
def teams():
    return team_names


if __name__ == '__main__':
    app.run(debug=True)
