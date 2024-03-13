from flask import Flask, request, jsonify, render_template
import firebase_admin
from firebase_admin import credentials, firestore
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

cred =  credentials.Certificate('/Users/naomigong/Coding/LocalFind/src/local-find-cl-firebase-adminsdk-i2nmm-be6679f30c.json')
firebase_app = firebase_admin.initialize_app(cred)
db = firestore.client()
vec = TfidfVectorizer()

restaurantData = []
userData = []

def prepRestaurantData():
  restaurants = db.collection('restaurants')
  restaurantDocs = restaurants.get()

  restaurantData = [doc.to_dict() for doc in restaurantDocs]
  restaurantData = pd.DataFrame(restaurantData)
  restaurantData["id"] = [i for i in range(0, restaurantData.shape[0])]
  print(restaurantData.columns)

  return restaurantData


def prepUserData():
  #add data cleaning
  #prepping the data to use
  users = db.collection('Users')

  userDocs = users.get()


  userData = [doc.to_dict() for doc in userDocs]
  userData = pd.DataFrame(userData)
  userData["id"] = [i for i in range(0, userData.shape[0])]

  return userData

def restaurantImportantInfo(restaurantData):
  data = restaurantData.copy()
  data["info"] = data["foodStyle"].fillna('') + ' ' + data["price"].fillna('')
  return data

def userImportantInfo(userData):
  data = userData.copy()
  data["info"] = (
      data["favoriteCuisine"].fillna('') + ' ' +
      data["secondFavoriteCuisine"].fillna('') + ' ' +
      data["thirdFavoriteCuisine"].fillna('') + ' ' +
      data["preferredPriceRange"].fillna('')
  )
  return data



def createRecommendation(userID):
    
  userData = prepUserData()
  restaurantData = prepRestaurantData()

  userData = userImportantInfo(userData)
  restaurantData = restaurantImportantInfo(restaurantData)

  print("great")
  combinedInfo = userData["info"].tolist() + restaurantData["info"].tolist()
  combined_vec = vec.fit_transform(combinedInfo)

  # Separate user and restaurant vectors
  userVec = combined_vec[:len(userData)]
  restaurantVec = combined_vec[len(userData):]
  # Calculate cosine similarity
  sim = cosine_similarity(userVec, restaurantVec)

  if userID not in userData["uid"].values:
      print("no person found")
      return []
  user_id = userData[userData.uid == userID]["id"].values[0]
  scores = list(enumerate(sim[user_id]))
  sortedScores = sorted(scores, key = lambda x: x[1], reverse = True)
  sortedScores = sortedScores[1:]
  print(sortedScores)
  restaurants = [restaurantData[restaurants[0] == restaurantData["id"]]["restaurantName"].values[0] for restaurants in sortedScores]
  top12restaurants = restaurants[slice(12)]
  print("restaurants:", top12restaurants)
  return top12restaurants



# Route for serving frontend
@app.route('/')
def index():
    return render_template('index.html')

#print(createRecommendation('sJzrkxCj56Q3MulZsOHMxyaWjud2'))
#retrieves data from the front end
@app.route('/recommend', methods = ['POST'])
def recommend():

    userID = request.json.get('userID', '')
    print("Received userID:", userID)  # Debug print
    recommendedRestaurants = createRecommendation(userID)
    print(recommendedRestaurants)
    return jsonify({"restaurants" : recommendedRestaurants})


if __name__ == '__main__':
    app.run(port=5174)