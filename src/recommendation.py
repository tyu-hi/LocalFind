from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import pandas as pd

app = Flask(__name__)

cred =  credentials.Certificate('/Users/naomigong/Coding/LocalFind/src/local-find-cl-firebase-adminsdk-i2nmm-be6679f30c.json')
firebase_app = firebase_admin.initialize_app(cred)
db = firestore.client()
vec = TfidfVectorizer()

#add data cleaning
#prepping the data to use
restaurants = db.collection('restaurants')
users = db.collection('Users')

restaurantDocs = restaurants.get()
userDocs = users.get()
restaurantData = []
userData = []
 
restaurantData = [doc.to_dict() for doc in restaurantDocs]
restaurantData = pd.DataFrame(restaurantData)
restaurantData["id"] = [i for i in range(0, restaurantData.shape[0])]
print(restaurantData.columns)


userData = [doc.to_dict() for doc in userDocs]
userData = pd.DataFrame(userData)
userData["id"] = [i for i in range(0, userData.shape[0])]

def restaurantImportantInfo(restaurantData):
  data = restaurantData.copy()
  for i in range (0,  data.shape[0]):
    data["info"] = data["foodStyle"] + ' ' + data["price"]
  return data

restaurantData = restaurantImportantInfo(restaurantData)

def userImportantInfo(userData):
  data = userData.copy()
  for i in range (0,  data.shape[0]):
    data["info"] = data["favoriteCuisine"] + data["secondFavoriteCuisine"] + data["thirdFavoriteCuisine"] + data["preferredPriceRange"]
  return data

userData = userImportantInfo(userData)


def createRecommendation(userID):
    combinedInfo = userData["info"].tolist() + restaurantData["info"].tolist()
    combined_vec = vec.fit_transform(combinedInfo)

    # Separate user and restaurant vectors
    userVec = combined_vec[:len(userData)]
    restaurantVec = combined_vec[len(userData):]

    # Calculate cosine similarity
    sim = cosine_similarity(userVec, restaurantVec)

    if userID not in userData["uid"].values:
        print("no person found")
        return
    user_id = userData[userData.uid == userID]["id"].values[0]
    scores = list(enumerate(sim[user_id]))
    sortedScores = sorted(scores, key = lambda x: x[1], reverse = True)
    sortedScores = sortedScores[1:]
    print(sortedScores)
    restaurants = [restaurantData[restaurants[0] == restaurantData["id"]]["restaurantName"].values[0] for restaurants in sortedScores]
    return restaurants


print(createRecommendation('sJzrkxCj56Q3MulZsOHMxyaWjud2'))

#retrieves data from the front end
@app.route('/recommend', methods = ['POST'])
def recommend():

    userID = request.json.get('userID', '')
    recommendedRestaurants = createRecommendation(userID)



