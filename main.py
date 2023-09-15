import player_stats
import matches
import utils
import json

data = player_stats.getAssisters(player_stats.scrapeAssisters(''))

print(utils.create_html_table(data))