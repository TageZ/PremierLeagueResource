import json
import time
import requests
import requests.auth
from selenium import webdriver
from bs4 import BeautifulSoup

with open('teams.json', 'r') as file:
    teams_data = json.load(file)

teams = {team['name']: team for team in teams_data}


class Match:
    def __init__(self, date, time, hometeam, awayteam):
        self.date = date
        self.time = time
        self.hometeam = hometeam
        self.awayteam = awayteam


def parseFixtures(team):
    website = teams[team]['website'] + '/fixtures'
    teamWebsite = requests.get(website, timeout=(15))
    html = teamWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('section', {'class', 'fixtures'})
    matches = table.findAll('div', attrs={'class': 'fixtures__date-container'})
    return matches

print(parseFixtures("Arsenal"))

def parseResults(team):
    website = teams[team]['website'] + '/results'
    teamWebsite = requests.get(website, timeout=15)
    html = teamWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('section', {'class', 'fixtures'}).text
    matches = table.findAll('div', attrs={'class': 'fixtures__date-container'})
    return matches


def getResults(results, team, num):
    matches = 'N/A'
    return matches