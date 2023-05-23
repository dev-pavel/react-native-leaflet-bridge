//todo: create methods for work with webview variables
class WebviewVariable {
    readonly id: string;
    readonly _isWebviewVariable = true

    constructor(id: string) {
        this.id = id
    }

    static isWebviewVariable(obj: any) {
        return obj?._isWebviewVariable
    }
}


export default WebviewVariable