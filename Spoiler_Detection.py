import spacy
from collections import Counter
from spacy.lang.en.stop_words import STOP_WORDS
from transformers import pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.cluster import AgglomerativeClustering
from scipy.spatial.distance import pdist, squareform
from sentence_transformers import SentenceTransformer, util
from sklearn.cluster import AgglomerativeClustering
from transformers import pipeline

def get_spoiler_rating(sentiment_score):
        if sentiment_score >= 0.9955:
            return 10
        elif sentiment_score >= 0.995:
            return 9
        elif sentiment_score >= 0.98:
            return 8
        elif sentiment_score >= 0.97:
            return 7
        elif sentiment_score >= 0.96:
            return 6
        elif sentiment_score >= 0.95:
            return 5
        elif sentiment_score >= 0.94:
            return 4
        elif sentiment_score >= 0.50:
            return 3
        elif sentiment_score >= 0.30:
            return 2
        else:
            return 1
        
def generate_spoilers(movie_plot):
        
    nlp = spacy.load("en_core_web_sm")
    sentiment_analyzer = pipeline("sentiment-analysis")

    doc = nlp(movie_plot)    
    words = [token.text for token in doc if token.text not in STOP_WORDS and token.is_punct != True]
    word_freq = Counter(words)
    common_words = word_freq.most_common(10)
    vectorizer = TfidfVectorizer(stop_words='english', use_idf=True, ngram_range=(1,10))
    X = vectorizer.fit_transform([movie_plot])
    feature_names = vectorizer.get_feature_names()
    dense = X.todense()
    denselist = dense.tolist()[0]
    phrase_scores = [pair for pair in zip(range(0, len(denselist)), denselist) if pair[1] > 0]
    sorted_phrase_scores = sorted(phrase_scores, key=lambda t: t[1] * -1)
    keyphrases = []
    for phrase, score in [(feature_names[word_id], score) for (word_id, score) in sorted_phrase_scores]:
        keyphrases.append(phrase)

    entities = doc.ents
    important_sents = []
    for sent in doc.sents:
        for phrase in keyphrases:
            if phrase in sent.text:
                important_sents.append(sent.text)
                break
    spoiler_ratings = []
    for sent in important_sents:
        result = sentiment_analyzer(sent)
        sentiment_score = result[0]["score"]
        rating = get_spoiler_rating(sentiment_score)
        spoiler_ratings.append(rating)

    spolier_text = ""
    for i, sent in enumerate(important_sents):
        spolier_text =  spolier_text +"\n" + f"Rating {spoiler_ratings[i]}: {sent}".strip()
    return spolier_text
