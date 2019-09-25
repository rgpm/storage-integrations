"use strict"

const NotImplementedError = require("./notImplementedError");


class StorageFactory {
    static getLocalStorage() {
        /* Browser */
        try {
            /* Use crypto to reliability determine if browser or not*/
            if (crypto.subtle !== undefined) {
                const BrowserStorage = require("./browserStorage");
                return new BrowserStorage();
            }
        } catch (e) { }

        /* Node */
        throw new NotImplementedError("Local Storage for NodeJS not ready");
    }
}

module.exports = StorageFactory;
