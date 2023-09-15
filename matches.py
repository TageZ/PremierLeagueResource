# File for retriving fixture information.

import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Loads teams.json into the file.
with open('teams.json', 'r') as file:
    teams_data = json.load(file)
teams = {team['name']: team for team in teams_data}

#Declares constant variable for the number of matches to show.
NUM_MATCHES = 3


#Defines a match object, which reprsents any fixture. A match has a date, hometeam, awayteam, and can have a score if it's already happened, or a time of kickoff if the game hasn't been played yet.
class Match:
    def __init__(self, date, time, hometeam, awayteam):
        self.date = date
        self.time = time
        self.hometeam = hometeam
        self.awayteam = awayteam

    def __init__(self, date, score, hometeam, awayteam):
        self.date = date
        self.score = score
        self.hometeam = hometeam
        self.awayteam = awayteam

    def __str__(self):
        return self.hometeam + ' ' + self.score + ' ' + self.awayteam

#Collects the fixtures for a given team from the Premier League website. Returns matches, which is a list of html blocks, each of which hold the information for a single match.
def scrapeFixtures(team):
    website = teams[team]['website'] + '/fixtures'
    service = Service(executable_path='chromedriver.exe')
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(website)
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.presence_of_element_located(
        (By.CSS_SELECTOR, "div[class*='fixtures__date-container'")))
    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('section', {'class', 'fixtures'})
    matches = table.findAll('div', attrs={'class': 'fixtures__date-container'})
    return matches

#Collects the results for a given team from the Premier League website. Returns matches, which is a list of html blocks, each of which hold the information for a single match.
def scrapeResults(team):
    website = teams[team]['website'] + '/results'
    service = Service(executable_path='chromedriver.exe')
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(website)
    wait = WebDriverWait(driver, 10)
    element = wait.until(EC.presence_of_element_located(
        (By.CSS_SELECTOR, "div[class*='fixtures__date-container'")))
    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')
    table = soup.find('section', {'class', 'fixtures'})
    matches = table.findAll('div', attrs={'class': 'fixtures__date-container'})
    return matches


#Grabs the appropriate data from the html and creates match objects to represent each fixture.
def getFixtures(matches):
    fixtures = []
    for i in range(0, NUM_MATCHES):
        matchTeams = (matches[i].findAll(
            'span', {'class', 'match-fixture__team'}))
        hometeam = matchTeams[0].find(
            'span', {'class', 'match-fixture__short-name'}).text
        awayteam = matchTeams[1].find(
            'span', {'class', 'match-fixture__short-name'}).text
        date = matches[i].find(
            'time', {'class', 'fixtures__date fixtures__date--short'}).text
        time = matches[i].find(
            'span', {'class', 'match-fixture__teams'}).find('time').text

        fixtures.append(Match(date, time, hometeam, awayteam))

    return fixtures


#Grabs the appropriate data from the html and creates match objects to represent each result
def getResults(matches):
    results = []
    for i in range(0, NUM_MATCHES):
        matchTeams = (matches[i].findAll(
            'span', {'class', 'match-fixture__team'}))
        hometeam = matchTeams[0].find(
            'span', {'class', 'match-fixture__short-name'}).text
        awayteam = matchTeams[1].find(
            'span', {'class', 'match-fixture__short-name'}).text
        date = matches[i].find(
            'time', {'class', 'fixtures__date fixtures__date--short'}).text
        score = matches[i].find('span', {'class', 'match-fixture__score'}).text

        results.append(Match(date, score, hometeam, awayteam))

    return results
