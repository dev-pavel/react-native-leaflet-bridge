import React from 'react';
import LeafletBridgeView, { ILeafletProxy } from 'react-native-leaflet-bridge';
import { useRef } from 'react';
import { Alert, SafeAreaView } from 'react-native';

export default function App() {
  const ref = useRef<ILeafletProxy>();

  const onLoad = () => {

    if (ref.current?.L) {
      const L = ref.current.L;

      let map = L.map('map')
        .setView([51.505, -0.09], 13)
        .on('click', () => Alert.alert('click!'))
        .end; //todo: detect chain end without .end

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
        .addTo(map)
        .end; //todo: detect chain end without .end

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup()
        .end; //todo: detect chain end without .end

      L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ])
        .addTo(map)
        .end; //todo: detect chain end without .end
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LeafletBridgeView
        mapRef={ref}
        onLoad={onLoad}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
