"""
What are we scrapping? 
https://www.netflix.com/in/browse/genre/34399

- Name of the movie : <h1> tag class = title-title
- Maturity Number : <span> tag class = maturity-number
- Duration : <span> tag class = duration
- Synopsis : <div> class = title-info-synopsis
- Genre : <a> class = title-info-metadata-item item-genre
"""

import requests
from bs4 import BeautifulSoup
l=list()
o={}
e={}
d={}
m={}
c={}
url="https://www.netflix.com/in/browse/genre/34399"

# create empty dict
dict_href_links = {}

def getdata(url):
	r = requests.get(url)
	return r.text

def get_links(website_link):
	html_data = getdata(website_link)
	soup = BeautifulSoup(html_data, "html.parser")
	list_links = []
	for link in soup.find_all("a", {"class":"nm-collections-title nm-collections-link"}, href=True):
		list_links.append(link["href"])
	return list_links

subpages = get_links(url)
for target_url in subpages:
    print(target_url)
    resp = requests.get(target_url)
    print(resp.status_code) #200 = success
    soup = BeautifulSoup(resp.text, 'html.parser')
    o["name"]=soup.find("h1", {"class":"title-title"}).text
    o["maturity"] = soup.find("span", {"class":"maturity-number"}).text
    o["duration"] = soup.find("span", {"class":"duration"}).text
    o["synopsis"] = soup.find("div", {"class":"title-info-synopsis"}).text
    o["genres"] = soup.find("a",{"class":"title-info-metadata-item item-genre"}).text
    print(o)


