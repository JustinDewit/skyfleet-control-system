"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      let map: maplibregl.Map | undefined;

      fetch("/api/map-style")
        .then((response) => response.json())
        .then((style) => {
          map = new maplibregl.Map({
            container: mapContainerRef.current!,
            style: style,
            center: [0, 0],
            zoom: 2,
          });

          map.addControl(new maplibregl.NavigationControl(), "top-left");
        });

      return () => map?.remove();
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default Map;
