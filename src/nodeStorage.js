"use strict"

const NotImplementedError = require("./notImplementedError");
const StorageIntegration = require("./storageIntegration");

/**
 * Uses a localStorage module to store information on the server (for node)
 */
class NodeStorage extends StorageIntegration {
    constructor() {
        super();
        const LocalStorage = require('node-localstorage').LocalStorage;
        this.storage = new LocalStorage('./rgpm.data');
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
     * Returns the value from the specified key
     * @param name The name of key
     * @returns {String} The value contents
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
        return "nodeStorage";
    }
}

module.exports = NodeStorage;

