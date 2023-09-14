import json

with open('teams.json', 'r') as file:
    teams_data = json.load(file)
    print(teams_data)

teams = {team["name"]: team for team in teams_data}


class Match:
    def __init__(self, date, time, hometeam, awayteam):
        self.date = date
        self.time = time
        self.hometeam = hometeam
        self.awayteam = awayteam

# def parseFixtures(team):
#     website =

# def getFixtures(fixtures, team, num):
#     matches = "N/A"
#     return matches

# def parseResults(team):

# def getResults(results, team, num):
#     matches = 'N/A'
#     return matches
