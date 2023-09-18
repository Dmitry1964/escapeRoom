import {TileLayer, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, MutableRefObject } from 'react';

const MapItem = (): JSX.Element => {
  const mapRef: MutableRefObject<HTMLElement | null> = useRef(null);
  if (mapRef.current !== null) {
    const map = new Map(mapRef.current, {
      center: {
        lat: 59.968137,
        lng: 30.316272,
      },
      zoom: 13,
    });

    const layer = new TileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    map.addLayer(layer);
    map.setView({lat:59.968137, lng: 30.316272}, 13);
  }

  return <div className="map__container" ref={mapRef}></div>};

export default MapItem;
