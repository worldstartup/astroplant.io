const callbacks = {};

export function RegisterCallback(callbackFunction, callbackName) {
    // Register the callback if it does not yet exist
    if (!callbacks.hasOwnProperty(callbackName)) {
        callbacks[callbackName] = callbackFunction;
    }
}

export function CallCallback(callbackName, param1, param2, param3) {
    // Call the callback if it exists with the 3 optional params
    if (callbacks.hasOwnProperty(callbackName)) {
        return callbacks[callbackName](param1, param2, param3);
    }
}
