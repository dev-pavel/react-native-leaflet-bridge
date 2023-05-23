import {WebViewProps} from "react-native-webview";
import * as L from 'leaflet';

export interface ILeafletWebViewProps extends WebViewProps {
    mapRef: any
}

export interface ILeafletProxy {
    L: typeof L & {
        end: void
    }
}