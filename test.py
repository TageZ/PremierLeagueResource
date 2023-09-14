from bs4 import BeautifulSoup
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

url = "https://www.premierleague.com/clubs/1/Arsenal/fixtures"
service = Service(executable_path='chromedriver.exe')
options = webdriver.ChromeOptions()
options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)
driver.implicitly_wait(5)
driver.get(url)
time.sleep(10)

content = driver.find_element(By.CSS_SELECTOR, "div[class*='fixtures__date-container'")

section_content = content.text
print(section_content)

driver.quit()

# html = driver.page_source
# soup = BeautifulSoup(html, 'lxml')
# print(soup)
# table = soup.find('section', {'class', 'fixtures'})
# matches = table.findAll('div', attrs={'class': 'fixtures__date-container'})

# print(matches)
