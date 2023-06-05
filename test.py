import requests
from bs4 import BeautifulSoup

# URL of the Wikipedia page you want to scrape
url = 'https://en.wikipedia.org/wiki/Baahubali:_The_Beginning'

# Section heading you want to scrape
section_heading = 'Plot'

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find the section you want to scrape by its heading
section = soup.find('span', {'id': 'Plot'})
print(section)
next_section = soup.find('span', {'id': 'Cast'})
# Find all the HTML elements between the section heading and the next heading
paragraph = section.find_next('p')
newpara = next_section.find_next('p')
print(newpara)
while paragraph!= next_section.find_next('p'):
    print(paragraph.get_text())
    section = paragraph
    paragraph = section.find_next('p')