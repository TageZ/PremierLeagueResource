import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

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
    print(matches)


def parseResults(team):
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
    print(matches)


def getFixtures(results, team, num):
    matches = 'N/A'
    return matches


def getResults(results, team, num):
    matches = 'N/A'
    return matches
