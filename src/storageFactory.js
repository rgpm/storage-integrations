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
        } catch (e) { 
            if (!(e instanceof NotImplementedError) && !(e instanceof ReferenceError)) {
                throw e;
            }
        }

        /* Node */
        try {
            require('crypto');
            const NodeStorage = require("./nodeStorage");
            return new NodeStorage();
        } catch (e) {
            if (!(e instanceof NotImplementedError)) {
                throw e;
            }
        }
        throw new NotImplementedError("Local Storage for NodeJS not ready");
    }
}

module.exports = StorageFactory;
