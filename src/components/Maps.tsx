"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

// let geocoder: google.maps.Geocoder;

const key = "";

export default function Maps() {
  //geocoder = new google.maps.Geocoder();
  getCoords();
  const position = { lat: 34.072208404541016, lng: -118.44091796875 };
  return (
    <APIProvider apiKey={key}>
      <div style={{ height: "40vh", width: "auto" }}>
        <Map zoom={17} center={position} mapId={""}>
          <AdvancedMarker position={position}>
            <Pin
              background={"red"}
              borderColor={"green"}
              glyphColor={"darkred"}
            />
          </AdvancedMarker>
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

function getCoords(): google.maps.LatLngLiteral {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://maps.googleapis.com/maps/api/geocode/json?address=821+rigel+ln+foster+city+ca+94404&key=" +
      key
  );
  request.send();
  let obj;
  request.onload = () => {
    console.log(request);
    if (request.status === 200) {
      // by default the response comes in the string format, we need to parse the data into JSON
      obj = JSON.parse(request.response);
      console.log(obj);
      console.log("hi im here" + request.response["0"]["geometry"]);
      //return {lat:obj.results.geometry.location.lat, lng:obj.results.geometry.location.lat};
    } else {
      console.log("heyo");
      // console.log(`error ${request.status} ${request.statusText}`);
    }
  };
  return { lat: 0, lng: 0 };
}

const markers = [
  { lat: 34.072208404541016, lng: -118.44091796875 },
  { lat: 35.072208404541016, lng: -118.44091796875 },
  { lat: 36.072208404541016, lng: -118.44091796875 },
  { lat: 37.072208404541016, lng: -118.44091796875 },
  { lat: 38.072208404541016, lng: -118.44091796875 },
  { lat: 39.072208404541016, lng: -118.44091796875 },
  { lat: 40.072208404541016, lng: -118.44091796875 },
  { lat: 41.072208404541016, lng: -118.44091796875 },
  getCoords(),
];

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
