"use strict"

const NotImplementedError = require("./notImplementedError");
const StorageIntegration = require("./storageIntegration");

/**
 * Uses localStorage in browsers to store information
 */
class BrowserStorage extends StorageIntegration {
    constructor() {
        super();
        this.storage = window.localStorage;
    }

    /**
     * Not needed.
     */
    authorize() {
        return true;
    }

    /**
     * Not needed.
     */
    unauthorize() {
        return true;
    }

    /**
     * Not needed.
     */
    createFile(name) {
        return true;
    }

    /**
     * Returns the file contents
     * @param name The name of the file
     * @returns {String} The file contents
     */
    readFile(name) {
        return this.storage.getItem(name)
    }   

    /**
     * Updates the contents of the file
     * @param {String} name The name of the file
     * @param {String} content The file contents
     */
    updateFile(name, content) {
        this.storage.setItem(name, content)
        return true;
    }

    /**
     * Removes the file from storage
     * @param {String} name The name of the file
     */
    deleteFile(name) {
        this.storage.removeItem(name);
        return true;
    }

    check() {
        return true;
    }

    type() {
        return "browserStorage";
    }
}

module.exports = BrowserStorage;

