import {v4 as generateId} from 'uuid'
import WebviewVariable from "../classes/webview-variable";

//L.map('map').setView([1,1]) ---> "L.map('map').setView([1,1])"
const createLeafletProxy = (webviewRef: any, callbacksCollection: Map<string, any>) => {
    let propertyChain = '';

    const handler = {
        //todo: create good typing
        get(target: any, property: any): any {
            //todo: check end proxy chain without call .end
            if (property === 'end') {
                const tempChain = propertyChain
                const id = generateId()
                propertyChain = ''

                //todo: refactor to call internal webview interfaces
                webviewRef.current?.injectJavaScript(`variables.set('${id}', L.${tempChain})`)
                return new WebviewVariable(id)
            }
            if (propertyChain !== '') {
                propertyChain += '.';
            }
            propertyChain += property;
            return new Proxy(() => {
            }, handler);
        },
        //todo: create good typing
        apply(target: any, thisArg: any, argumentsList: any): any {
            const argumentsArray = []

            for (let argument of argumentsList) {
                if (typeof argument === 'function') {
                    const id = generateId()
                    callbacksCollection.set(id, argument)

                    //todo: refactor to call internal webview interfaces
                    argumentsArray.push(`data => ReactNativeWebView.postMessage(Flatted.stringify({data, id: '${id}'}))`)
                } else if (WebviewVariable.isWebviewVariable(argument)) {

                    //todo: refactor to call internal webview interfaces
                    argumentsArray.push(`variables.get('${argument.id}')`)
                } else {
                    argumentsArray.push(JSON.stringify(argument))
                }
            }
            propertyChain += '(' + argumentsArray.join(', ') + ')';

            return new Proxy(() => {
            }, handler);
        },
    };

    return new Proxy(() => {
    }, handler);
}

export default createLeafletProxy;