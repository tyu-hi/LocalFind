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

// USE THIS CODE TO ADD MORE MARKERS W ADDRESSES
getCoords("405 hilgard ave los angeles").then(
  (data) => (
    console.log(data["results"]["0"]["geometry"]["location"]["lat"]),
    markers.push({
      lat: data["results"]["0"]["geometry"]["location"]["lat"],
      lng: data["results"]["0"]["geometry"]["location"]["lng"],
    })
  )
);

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
