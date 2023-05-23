import React, {FC, useRef} from 'react'
import WebView, {WebViewMessageEvent} from "react-native-webview";
import {ILeafletWebViewProps} from "../interfaces/interfaces";
import createLeafletProxy from "../utils/leaflet-proxy";
import createMap from "../utils/create-map";

const mapSource = {
    html: createMap()
}

//todo: create way to clear garbage
const callbacks = new Map<string, any>()

const LeafletWebview: FC<ILeafletWebViewProps> = (props) => {
    const webviewRef = useRef<WebView>(null)

    const onMapLoad = () => {
        props.mapRef.current = {
            L: createLeafletProxy(webviewRef, callbacks)
        }
    }

    const onMessage = (event: WebViewMessageEvent) => {
        const eventData = event.nativeEvent?.data

        //todo: add event types
        if (eventData) {
            const {id, data} = JSON.parse(eventData)
            callbacks.get(id)(data)
        }
    }

    //todo: combine props
    return <WebView
        {...props}
        onMessage={onMessage}
        source={mapSource}
        onLoad={onMapLoad}
        ref={webviewRef}
    />
}

export default LeafletWebview;