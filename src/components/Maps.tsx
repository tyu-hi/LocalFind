"use client";

import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIREBASE_FIRESTORE } from "../firebase/firebase";

// let geocoder: google.maps.Geocoder;

const key = "";

export default function Maps() {
  const [restaurants, setRestaurants] = useState<
    {
      id: string;
      address: string;
      restaurantName: string;
      city: string;
      foodStyle: string;
      price: number;
      imageURL: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const q = query(collection(FIREBASE_FIRESTORE, "restaurants"));
      const querySnapshot = await getDocs(q);
      const fetchedRestaurants: {
        id: string;
        address: string;
        restaurantName: string;
        city: string;
        foodStyle: string;
        price: number;
        imageURL: string;
      }[] = [];
      querySnapshot.forEach((doc) => {
        const restaurantData = doc.data();
        fetchedRestaurants.push({
          id: doc.id,
          address:
            restaurantData.address ||
            "Search up a city and we will recommend you a local restaurant!",
          restaurantName:
            restaurantData.restaurantName || "What do you want to eat?",
          city: restaurantData.city || "Default City",
          foodStyle: restaurantData.foodStyle || "Feeling a specific cuisine?",
          price: restaurantData.price || "Have a price range?",
          imageURL:
            restaurantData.imageURL ||
            "https://static.thenounproject.com/png/1181336-200.png", //Local Find logo?
        });
      });

      setRestaurants(fetchedRestaurants);
    };
    fetchRestaurants();
  }, []);

  for (let i = 0; i < restaurants.length; i++) {
    getCoords(restaurants[i].address).then((data) =>
      markers.push({
        lat: data["results"]["0"]["geometry"]["location"]["lat"],
        lng: data["results"]["0"]["geometry"]["location"]["lng"],
      })
    );
  }

  const position = { lat: 34.072208404541016, lng: -118.44091796875 };
  return (
    <APIProvider apiKey={key}>
      <div style={{ height: "40vh", width: "auto" }}>
        <Map zoom={17} center={position} mapId={""}>
          <Markers points={markers} />
        </Map>
      </div>
    </APIProvider>
  );
}
/*
const geocode = async (address) => {
  const results = await getGeocode({ address });
  const {lat, lng} = await getLatLng({ results });
};
*/

async function getCoords(address: string) {
  let fixedAddress = encodeURIComponent(address);
  let response = await fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      fixedAddress +
      "&key=" +
      key
  );
  let data = await response.json();
  return data;
}

const markers = [{ lat: 0, lng: 0 }];

type Point = google.maps.LatLngLiteral;
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
  return (
    <>
      {points.map((point) => (
        <AdvancedMarker position={point}>
          <Pin
            background={"red"}
            borderColor={"green"}
            glyphColor={"darkred"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};
