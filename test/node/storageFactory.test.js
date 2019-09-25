describe("StorageFactory", () => {
    it("should be a class", () => {
        const StorageFactory = require("../../src/storageFactory");
        expect(typeof StorageFactory).toBe("function");
        // Classes are not callable; functions are
        expect(StorageFactory).toThrow(TypeError);
    });
});


describe("StorageFactory methods", () => {

    describe("getLocalStorage method", () => {
        it("should return null", () => {
            const StorageFactory = require("../../src/storageFactory");
            expect(StorageFactory.getLocalStorage()).toBeNull();
        });
    });
});