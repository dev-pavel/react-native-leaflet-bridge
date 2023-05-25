import React, { FC, useRef } from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import type { ILeafletWebViewProps } from '../interfaces/interfaces';
import createLeafletProxy from '../utils/leaflet-proxy';
import createMap from '../utils/create-map';
import type { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';

const mapSource = {
  html: createMap(),
};

//todo: create way to clear garbage
const callbacks = new Map<string, any>();

const LeafletWebview: FC<ILeafletWebViewProps> = ({ mapRef, ...props }) => {
  const webviewRef = useRef<WebView>(null);

  const onMapLoad = (event: WebViewNavigationEvent) => {
    mapRef.current = {
      L: createLeafletProxy(webviewRef, callbacks),
    };
    //todo: replace to combine props
    props.onLoad?.(event);
  };

  const onMessage = (event: WebViewMessageEvent) => {
    //todo: remove ts-ignore
    // @ts-ignore
    const eventData = event.nativeEvent?.data;

    //todo: add event types
    if (eventData) {
      const [, data, id] = JSON.parse(eventData);
      callbacks.get(id)(data);
    }
  };

  //todo: combine props
  return (
    //todo: remove ts-ignore
    // @ts-ignore
    <WebView
      {...props}
      onMessage={onMessage}
      source={mapSource}
      onLoad={onMapLoad}
      ref={webviewRef}
    />
  );
};

export default LeafletWebview;
