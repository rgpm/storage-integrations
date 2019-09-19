describe("StorageIntegration", () => {
    it("should be a class", () => {
        const StorageIntegration = require("../src/storageIntegration");
        expect(typeof StorageIntegration).toBe("function");
        // Classes are not callable; functions are
        expect(StorageIntegration).toThrow(TypeError);
    });

    it("should produce an object with new", () => {
        const StorageIntegration = require("../src/storageIntegration");
        expect(new StorageIntegration()).toBeInstanceOf(Object);
    })
});


describe("StorageIntegration methods", () => {
    let StorageIntegration = undefined;
    beforeEach(() => {
        StorageIntegrationLib = require("../src/storageIntegration");
        StorageIntegration = new StorageIntegrationLib();
    });

    describe("authorize method", () => {
        it("should exist", () => {
            expect(StorageIntegration.authorize).toBeDefined();
        });
    });

    describe("unauthorize method", () => {
        it("should exist", () => {
            expect(StorageIntegration.unauthorize).toBeDefined();
        });
    });

    describe("createFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.createFile).toBeDefined();
        });
    });

    describe("readFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.readFile).toBeDefined();
        });
    });

    describe("updateFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.updateFile).toBeDefined();
        });
    });

    describe("deleteFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.deleteFile).toBeDefined();
        });
    });
});