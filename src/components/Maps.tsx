"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Maps() {
  const position = { lat: 34.072208404541016, lng: -118.44091796875 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={"APIKEY"}>
      <div style={{ height: "40vh", width: "40vw" }}>
        <Map zoom={17} center={position} mapId={"MAPID"}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"red"}
              borderColor={"green"}
              glyphColor={"darkred"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <h1 style={({ color: "black" })}>Test header</h1>
              <p style={({ color: "black" })}>Hi this is ucla</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}


export default Maps
