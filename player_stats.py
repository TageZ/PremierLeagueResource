# File for retrieving player statistics (top scorers/assisters).

from bs4 import BeautifulSoup
import requests
import requests.auth


def scrapeScorers(team):
    if (not team):
        team = 'premier-league'
    website = 'https://www.bbc.com/sport/football/teams/' + team + '/top-scorers'
    goalsWebsite = requests.get(website, timeout=10)
    html = goalsWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    goalScorers = soup.find('tbody', {'class', 'gel-long-primer'})
    return goalScorers


def scrapeAssisters(team):
    if (not team):
        team = 'premier-league'
    website = 'https://www.bbc.com/sport/football/teams/' + team + '/top-scorers/assists'
    assitsWebsite = requests.get(website, timeout=10)
    html = assitsWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    assisters = soup.find('tbody', {'class', 'gel-long-primer'})
    return assisters


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
