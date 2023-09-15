import player_stats
import matches
import utils
import json


goalData = player_stats.getScorers(
    player_stats.scrapeScorers('arsenal'))

print(utils.create_html_table(goalData))

assistData = player_stats.getAssisters(player_stats.scrapeAssisters(''))

print(utils.create_html_table(assistData))

fixtures = matches.scrapeFixtures('Arsenal')
fixture_list = matches.getFixtures(fixtures)
for i in range(0, len(fixture_list)):
    print(fixture_list[i])

results = matches.scrapeResults('Arsenal')
results_list = matches.getResults(results)
for i in range(0, len(results_list)):
    print(results_list[i])
