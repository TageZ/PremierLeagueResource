import player_stats
import matches
import utils
import json

data = player_stats.getScorers(player_stats.scrapeScorers('arsenal'))

print(utils.create_html_table(data))