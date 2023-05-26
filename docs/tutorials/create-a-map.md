---
sidebar_position: 1
---

# Create a Map

Before all: add **React Native Leaflet Bridge** to your project. [How to install?](/docs/introduction/getting-started)

### Create your first Leaflet Map

Open your file or file at `src/App.tsx`:

```tsx title="src/App.tsx"
import React, { useRef } from 'react';
import { FC, SafeAreaView } from 'react-native';
import LeafletWebview, { ILeafletProxy } from 'react-native-leaflet-bridge';

const App: FC = () => {
  const mapRef = useRef<ILeafletProxy>();

  const onLoad = () => {
    const L = mapRef.current?.L;

    if (L) {
      const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LeafletWebview
        mapRef={mapRef}
        onLoad={onLoad}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default; 
```

Learn more about [Leaflet API](https://leafletjs.com/).