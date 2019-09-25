"use strict"

const NotImplementedError = require("./notImplementedError");

class StorageIntegration {
    authorize() {
        throw new NotImplementedError("StorageIntegration: authorize: not implemented");
    }

    unauthorize() {
        throw new NotImplementedError("StorageIntegration: unauthorize: not implemented");
    }

    createFile() {
        throw new NotImplementedError("StorageIntegration: createFile: not implemented");
    }

    readFile() {
        throw new NotImplementedError("StorageIntegration: readFile: not implemented");
    }   

    updateFile() {
        throw new NotImplementedError("StorageIntegration: updateFile: not implemented");
    }

    deleteFile() {
        throw new NotImplementedError("StorageIntegration: deleteFile: not implemented");
    }

    check() {
        throw new NotImplementedError("StorageIntegration: check: not implemented");
    }

    type() {
        throw new NotImplementedError("StorageIntegration: check: not implemented");
    }
}

module.exports = StorageIntegration;

