import Script from 'next/script'
import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

export default function GoogleMap(){
    console.log(process.env.API_KEY, "api")

  const googlemap = useRef(null);
  const myLatLng = {lat: 41.8325235, lng: -88.0189121}

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.API_KEY,
      version: 'weekly',
    });
    let map; 
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: myLatLng,
        zoom: 18,
      });

      console.log(map, "map")

        new google.maps.Marker({
            position: myLatLng,
            map,
            title: "Team Kuma Jitsu!",
        });
        
    });
    console.log(map, "map")
  });
  return (
    <div className="h-96 w-96 bg-cover" ref={googlemap} />
  );
}