from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

url = "https://www.premierleague.com/clubs/1/Arsenal/fixtures"
service = Service(executable_path='chromedriver.exe')
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
driver.get(url)
html = driver.page_source
soup = BeautifulSoup(html, 'lxml')
table = soup.find('section', {'class', 'fixtures'})
matches = table.findAll('div', attrs={'class': 'fixtures__date-container'})

print(matches)


driver.quit()