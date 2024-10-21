"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Initialize the map
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://demotiles.maplibre.org/style.json", // OSM style
        center: [-74.006, 40.7128], // Initial map center (Longitude, Latitude)
        zoom: 1, // Initial zoom level
      });

      // Add navigation controls to the top-left corner of the map
      map.addControl(new maplibregl.NavigationControl(), "top-left");

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default Map;
