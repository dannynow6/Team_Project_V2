import requests
import json
import config


def get_news_headlines():
    """using newsapi to retrieve top headlines"""
    url = config.api_url
    headers = {"Authorization": config.api_key}

    r = requests.get(url, headers=headers)

    topnews = r.json()
    total_news = len(topnews)

    print(total_news)


get_news_headlines()
