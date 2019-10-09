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
        it("should throw error", () => {
            const StorageFactory = require("../../src/storageFactory");
            const result = StorageFactory.getLocalStorage().type();
            expect(result).toEqual("nodeStorage");
        });
    });
});