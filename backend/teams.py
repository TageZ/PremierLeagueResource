# File for compiling the relevant information for each team such as name/logo/tags for webscraping
import json
from bs4 import BeautifulSoup
import requests
import requests.auth

def scrapeBBCTeams():
    website = 'https://www.bbc.com/sport/football/premier-league/table'
    bbc = requests.get(website, timeout=10)
    html = bbc.text
    soup = BeautifulSoup(html, 'lxml')
    data = soup.find('tbody')
    return data

def getBBCTeams(data):
    teams = []
    clubs = data.findAll('tr')
    for i in range(0, len(clubs)):
        tag = clubs[i].find('a')['href'].split("teams/")[1]
        logo = clubs[i].find('img')['src']
        name = clubs[i].find('a').text
        teams.append((name, logo, tag))
        
    return teams

def scrapeSkyTeams():
    website = 'https://www.skysports.com/premier-league-table'
    bbc = requests.get(website, timeout=10)
    html = bbc.text
    soup = BeautifulSoup(html, 'lxml')
    teams = soup.find('tbody')
    return teams

def getSkyTeams(teams):
    sky_teams = []
    clubs = teams.findAll('tr')
    for i in range(0, len(clubs)):
        club = clubs[i].find('a')
        tag = club['href'].lstrip('/')
        name = club.text.rstrip(' *')
        sky_teams.append((name, tag))

    return sky_teams

def createTeamJsonObject(name, logo, sky_tag, bbc_tag, alt_name):
    return {'name': name, 'logo': logo, 'sky_tag': sky_tag, 'bbc_tag': bbc_tag, 'alt_name': alt_name}


def buildTeamsJson():
    num_teams = 20
    bbc_teams = getBBCTeams(scrapeBBCTeams())
    sky_teams = getSkyTeams(scrapeSkyTeams())
    clubs = []

    for i in range(0, num_teams):
        bbc_team = bbc_teams[i]
        sky_team = sky_teams[i]
        clubs.append(createTeamJsonObject(bbc_team[0], bbc_team[1], sky_team[1], bbc_team[2], sky_team[0]))

    file_path = 'teams.json'
    try:
        with open(file_path, 'w') as f:
            json.dump(clubs, f)
        print(f"File '{file_path}' created successfully.")
    except Exception as e:
        print(f"Error: {e}")