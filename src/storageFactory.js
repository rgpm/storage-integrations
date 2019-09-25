"use strict"

const NotImplementedError = require("./notImplementedError");


class StorageFactory {
    static getLocalStorage() {
        /* Browser */
        try {
            if (crypto.subtle !== undefined) {
                const BrowserStorage = require("./browserStorage");
            return new BrowserStorage();
            }
        } catch (e) { }

        /* Node */
        return null;
    }
}

module.exports = StorageFactory;
