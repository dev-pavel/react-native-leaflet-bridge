import type { WebViewProps } from 'react-native-webview';
import type * as L from 'leaflet';

export interface ILeafletWebViewProps extends WebViewProps {
  mapRef: any;
}

export interface ILeafletProxy {
  L: typeof L & {
    end: void
  };
}

//todo: find other way to add .end in types
declare module 'leaflet' {
  interface Map {
    end: Map;
  }

  interface TileLayer {
    end: TileLayer;
  }

  interface Marker {
    end: Marker;
  }

  interface Polygon {
    end: Polygon;
  }
}
