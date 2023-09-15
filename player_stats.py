# File for retrieving player statistics (top scorers/assisters).

from bs4 import BeautifulSoup
import requests
import requests.auth

# Collects a table of top scorers for a given club from the BBC website. Returns goal scorers, a table containing all top scorers.


def scrapeScorers(team):
    website = 'https://www.bbc.com/sport/football/teams/' + team + '/top-scorers'
    if (not team):
        website = 'https://www.bbc.com/sport/football/premier-league/top-scorers'
    goalsWebsite = requests.get(website, timeout=10)
    html = goalsWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    goalScorers = soup.find('tbody', {'class', 'gel-long-primer'})
    return goalScorers


# Collects a table of top assisters for a given club from the BBC website. Returns assiters, a table containing all top assisters.
def scrapeAssisters(team):
    website = 'https://www.bbc.com/sport/football/teams/' + team + '/top-scorers/assists'
    if (not team):
        website = 'https://www.bbc.com/sport/football/premier-league/top-scorers/assists'
    assitsWebsite = requests.get(website, timeout=10)
    html = assitsWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    assisters = soup.find('tbody', {'class', 'gel-long-primer'})
    return assisters


# Gathers the appropriate information from the html table and creates a dictionary (associative array) containing the scorer's name and goal tally.
def getScorers(goalScorers):
    players = []
    stats = goalScorers.findAll('tr')
    for i in range(0, len(stats)):

        player = stats[i].find(
            'td', {'class', 'gs-o-table__cell gs-o-table__cell--left'}).find('span').find(
            'span').text

        goals = stats[i].find(
            'td', {'class', 'gs-o-table__cell gs-o-table__cell--right'}).text

        players.append({'Name': player, 'Goals': goals})
    return players


# Gathers the appropriate information from the html table and creates a dictionary (associative array) containing the assist provider's name and assist tally.
def getAssisters(assisters):
    players = []
    stats = assisters.findAll('tr')
    for i in range(0, len(stats)):

        player = stats[i].find(
            'td', {'class', 'gs-o-table__cell gs-o-table__cell--left'}).find('span').find(
            'span').text

        assists = stats[i].find(
            'td', {'class', 'gs-o-table__cell gs-o-table__cell--right'}).text

        players.append({'Name': player, 'Assists': assists})
    return players
