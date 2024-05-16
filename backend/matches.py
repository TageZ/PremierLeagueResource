# File for retriving fixture information.
from bs4 import BeautifulSoup
import requests
import requests.auth

# Collects the fixtures for a given team from the Sky Sports website. Returns matches, which is a list of html blocks, each of which hold the information for a single match.

def scrapeFixtures(team):
    website = 'https://www.skysports.com/' + team + '-fixtures'
    fixturesWebsite = requests.get(website, timeout=10)
    html = fixturesWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    matches = soup.find('div', {'class', 'fixres__body'})
    return matches

# Collects the results for a given team from the Sky Sports website. Returns matches, which is a list of html blocks, each of which hold the information for a single match.


def scrapeResults(team):
    website = 'https://www.skysports.com/' + team + '-results'
    fixturesWebsite = requests.get(website, timeout=10)
    html = fixturesWebsite.text
    soup = BeautifulSoup(html, 'lxml')
    matches = soup.find('div', {'class', 'fixres__body'})
    return matches


# Grabs the appropriate data from the html and creates match objects to represent each fixture.
def getFixtures(matches):
    fixtures = []
    dates = matches.findAll('h4', class_="fixres__header2")
    competitions = matches.findAll('h5', class_="fixres__header3")
    teams = matches.findAll('div', class_='fixres__item')
    for i in range (0, len(teams)):
        homeTeam = (teams[i].find('span', class_='matches__item-col matches__participant matches__participant--side1').find('span', class_='swap-text__target').text)
        awayTeam = (teams[i].find('span', class_='matches__item-col matches__participant matches__participant--side2').find('span', class_='swap-text__target').text)
        time = (teams[i].find('span', class_='matches__item-col matches__status').find('span', class_='matches__date').text.strip())
        date = dates[i].text
        competition = competitions[i].text
        fixtures.append({"homeTeam": homeTeam, "awayTeam": awayTeam, "time": time, "date": date, "competition": competition})

    return fixtures


# Grabs the appropriate data from the html and creates match objects to represent each result
def getResults(matches):
    fixtures = []
    dates = matches.findAll('h4', class_="fixres__header2")
    competitions = matches.findAll('h5', class_="fixres__header3")
    teams = matches.findAll('div', class_='fixres__item')
    for i in range (0, len(teams)):
        homeTeam = (teams[i].find('span', class_='matches__item-col matches__participant matches__participant--side1').find('span', class_='swap-text__target').text)
        awayTeam = (teams[i].find('span', class_='matches__item-col matches__participant matches__participant--side2').find('span', class_='swap-text__target').text)
        scores = (teams[i].find('span', class_='matches__item-col matches__status').findAll('span', class_='matches__teamscores-side'))
        homeScore = scores[0].text.strip()
        awayScore = scores[1].text.strip()
        score = homeScore + '-' + awayScore
        date = dates[i].text
        competition = competitions[i].text
        fixtures.append({"homeTeam": homeTeam, "awayTeam": awayTeam, "score": score, "date": date, "competition": competition})

    return fixtures