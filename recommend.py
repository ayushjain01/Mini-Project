import numpy as np
import pandas as pd
import difflib
from scipy.sparse import find

from sklearn.feature_extraction.text import TfidfVectorizer 
# for transforming the textual data to numerical feature vector to find present similarity values 
from sklearn.metrics.pairwise import cosine_similarity
import json
with open(r'movie-recommendation-main\data.json', 'r') as datafile:
        data = json.load(datafile)
dataset = pd.DataFrame(data)
selected_features = ['tag', 'maturity', 'synopsis','duration','related-genre']
print(selected_features)

for features in selected_features :
    dataset[features] = dataset[features].fillna('')
dataset['duration'] = dataset['duration'].astype(str)
combined_features = dataset['genre']+''+dataset['maturity']+''+dataset['synopsis']+''+''+dataset['duration']+''

vectorizer = TfidfVectorizer()
feature_vector = vectorizer.fit_transform(combined_features )
similarity = cosine_similarity(feature_vector)
list_of_all_titles = dataset['name'].str.lower().tolist()
movie_names = "Spiderman far from home"
find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)
print(find_close_match)
close_match = find_close_match[0]
print(close_match)
index_of_movie = 38
print(index_of_movie)
score = list(enumerate(similarity[1]))
print(score)
# finding movies having higher similarity score 

sorted_list = sorted(score, key = lambda x:x[1], reverse = True)
# sort based on non increasing order, key is based on first index of score in list element which is score in (index, score)
print(sorted_list)
print(sorted_list[0], sorted_list[1], sorted_list[2], sorted_list[3], sorted_list[4])
# top five score with index 
# printing the name of simila rmovies based on the index

print("Movies Results : \n")

i = 1

for movie in sorted_list:
  index = movie[0]
  title_of_movie = dataset[dataset.index == index]['name'].values[0]
  if(i<=5):
    print(i, '.', title_of_movie)
    i += 1