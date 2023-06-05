"""
What are we scrapping? 
https://www.netflix.com/in/browse/genre/34399

- Name of the movie : <h1> tag class = title-title
- Maturity Number : <span> tag class = maturity-number
- Duration : <span> tag class = duration
- Synopsis : <div> class = title-info-synopsis
- Main Genre : <a> class = title-info-metadata-item item-genre
- Tag : <span> class = nm-collections-row-name        #From Home Page
- Image : <img> class= = nm-collections-title-img        #From Home Page
- Related Genres - <a> class = more-details-item item-genres
- Movie Link - <a> class = nm-collections-title nm-collections-link
- Cast - <span> class = title-data-info-item-list

google - class="yuRUbf" -> first wikipedia link
wikipedia - class="suggestion-description" - if description has the word 'film' then go ahead
          - class="suggestion-dropdown" - has 0 children nodes then ignore
"""


from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
from bs4 import BeautifulSoup
import json
import time
import re
import Spoiler_Detection


def get_genre(website_link):
	html_data = requests.get(website_link).text
	soup = BeautifulSoup(html_data, "html.parser")
	list_genre = []
	for link in soup.find_all("a", {"class":"more-details-item item-genres"}):
		list_genre.append(link.text)
	return list_genre

def open_wiki(name,year):
    # options = Options()
    # options.headless = False
    # options.add_argument("--window-size=1920,1200")
    # DRIVER_PATH = '/path/to/chromedriver'
    # driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
    p = driver.current_window_handle
    driver.execute_script("window.open('about:blank','secondtab');")
    driver.switch_to.window("secondtab")
    driver.get('https://www.google.com/')
    search = driver.find_element(By.CLASS_NAME,"gLFyf")
    name = name + " " + year + " film wikipedia english" 
    search.send_keys(name)
    search.send_keys(Keys.RETURN)

    wiki_page = driver.find_element(By.CLASS_NAME, "yuRUbf")
    wiki_link = wiki_page.find_element(By.XPATH,".//*")
    try:
        
        summary = ""
        link = wiki_link.get_attribute("href")
        if not link.startswith("https://en.wikipedia.org"):
            driver.close()
            driver.switch_to.window(p)
            return None
        # URL of the Wikipedia page you want to scrape
        # Send a GET request to the URL
        response = requests.get(link)
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        # Find the section you want to scrape by its heading
        section = soup.find('span', {'id': 'Plot'})
        next_section = soup.find('span', {'id': 'Cast'})
        # Find all the HTML elements between the section heading and the next heading
        paragraph = section.find_next('p')
        summary = ""
        while paragraph!= next_section.find_next('p'):
            summary = summary + paragraph.get_text()
            section = paragraph
            paragraph = section.find_next('p')
        summary = re.sub("[\(\[].*?[\)\]]", "",summary)
        driver.close()
        driver.switch_to.window(p)
        return summary
    except BaseException:
        driver.close()
        driver.switch_to.window(p)
        return None

def save_json(filename, json_list):
    with open(f"./{filename}.json", "w") as outfile:
        for json_object in json_list:
            outfile.write(json_object)

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.headless = False
options.add_argument("--window-size=1920,1200")
DRIVER_PATH = r'D:\School\College\Books-20210104T150531Z-001\Books\Sem 6\Mini Project\Mini-Project\ScrappingLogic\chromedriver.exe'
driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
driver.get('https://www.netflix.com/in/browse/genre/34399')
all_links = driver.find_elements(By.TAG_NAME,"a")
count = 1
section = 2
movie_dictionary = {}
json_list =[]
list_tag = []
all_movies = []
index_count = 1

for link in all_links:
    url = link.get_attribute("href")
    if not (url.startswith("https://www.netflix.com/in/title/")):
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    if count>40:   #home page has 14 sections each with 40 movies
        section = section + 1
        count = 1
        save_json(tag,json_list)
        json_list = []
    tag = driver.find_element(By.XPATH,f"/html/body/div[1]/div/div[2]/main/section[{section}]/h2").text
    print(url)
    
    xpath = f"/html/body/div[1]/div/div[2]/main/section[{section}]/div/ul/li[{count}]/a/img"
    image_url = driver.find_element(By.XPATH,xpath).get_attribute("src")
    movie_id = url.lstrip("https://www.netflix.com/in/title/")
    count = count + 1
    movie_dictionary["id"] = int(movie_id)
    movie_dictionary["tag"] = tag
    if tag in ["Action & Adventure", "Kids & Family Movies", "Tamil-Language Movies", "Horror Movies"]:
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    # if tag == "Action & Adventure" or tag == "Children & Family Movies":
    #     movie_dictionary["genre"] = ""
    #     movie_dictionary["related-genre"] = ""
    #     continue
    movie_dictionary["image"] = image_url
    movie_dictionary["source"] = url
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, 'html.parser')
    regex = re.compile(".*?\((.*?)\)")
    name = soup.find("h1", {"class":"title-title"}).text
    # if name in ["AKA","Guillermo del Toro’s Pinocchio","Minions & More Volume 2", "STAND BY ME Doraemon 2","Pokémon the Movie: Secrets of the Jungle","Motu Patlu: Kung Fu Kings","The Elephant Whisperers"]: 
    #     movie_dictionary["genre"] = ""
    #     movie_dictionary["related-genre"] = ""
    #     continue
    
    result = re.sub("[\(\[].*?[\)\]]", "", name).rstrip(" ")
    if result == "The Matchmaker" or result == "Muoi: The Curse Returns" or result == "The Light We Carry: Michelle Obama and Oprah Winfrey":
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    movie_dictionary["index"] = index_count
    index_count = index_count + 1
    movie_dictionary["name"]= result
    
    
    movie_dictionary["genre"] = soup.find("a",{"class":"title-info-metadata-item item-genre"}).text
    movie_dictionary["maturity"] = soup.find("span", {"class":"maturity-number"}).text
    movie_dictionary["duration"] = soup.find("span", {"class":"duration"}).text
    movie_dictionary["synopsis"] = soup.find("div", {"class":"title-info-synopsis"}).text
    movie_dictionary["year"] = soup.find("span", {"class":"title-info-metadata-item item-year"}).text
    try:
        movie_dictionary["related-genre"] = get_genre(url)
    except BaseException:
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    try:
        plot = open_wiki(movie_dictionary["name"],movie_dictionary["year"])
    except BaseException:
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    if plot == None:
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    spoilers = Spoiler_Detection.generate_spoilers(plot)
    movie_dictionary["spoilers"] = spoilers
    json_object = json.dumps(movie_dictionary, indent=4)
    if json_object in all_movies:
        movie_dictionary["genre"] = ""
        movie_dictionary["related-genre"] = ""
        continue
    all_movies.append(json_object)
    json_list.append(json_object)

    movie_dictionary["genre"] = ""
    movie_dictionary["related-genre"] = ""

save_json("movies",all_movies)