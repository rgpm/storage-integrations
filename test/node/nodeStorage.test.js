describe("NodeStorage", () => {
    it("should be a class", () => {
        const NodeStorage = require("../../src/nodeStorage");
        expect(typeof NodeStorage).toBe("function");
        // Classes are not callable; functions are
        expect(NodeStorage).toThrow(TypeError);
    });
});


describe("NodeStorage methods", () => {
    beforeEach(() => {
        const StorageFactory = require("../../src/storageFactory");
        storage = StorageFactory.getLocalStorage();
    });

    describe("authorize method", () => {
        it("should return true", () => {
            expect(storage.authorize()).toBeTruthy();
        });
    });

    describe("unauthorize method", () => {
        it("should return true", () => {
            expect(storage.unauthorize()).toBeTruthy();
        });
    });

    describe("createFile method", () => {
        it("should return true", () => {
            expect(storage.createFile("test")).toBeTruthy();
        });
    });

    describe("readFile method", () => {
        it.each([
            ["test"]
        ])("should return true", (fileName) => {
            const result = storage.readFile(fileName);
            expect(result).toBeNull();
        });
    });

    describe("updateFile method", () => {
        it.each([
            ["test", "Hello there"]
        ])("should return true", (fileName, fileContents) => {
            const result = storage.updateFile(fileName, fileContents);
            expect(result).toBeTruthy();
        });
    });

    describe("deleteFile method", () => {
        it.each([
            ["test"],
            ["results"]
        ])("should return true", (fileName) => {
            const result = storage.deleteFile(fileName);
            expect(result).toBeTruthy();
        });
    });

    describe("check method", () => {
        it("should return true", async () => {
            const result = storage.check();
            expect(result).toBeTruthy();
        });
    })
});

describe("NodeStorage Operations", () => {
    describe("Creating a file, updating and reading from the file", () => {
        beforeEach(() => {
            StorageFactory = require("../../src/storageFactory");
        });
        it.each([
            ["test", "Hello there"],
            ["results", "{ \"Hello\": 343 }"]
        ])("should return the contents", (fileName, fileContents) => {
            var storage = StorageFactory.getLocalStorage();
            storage.createFile(fileName);
            storage.updateFile(fileName, fileContents);
            const result = StorageFactory.getLocalStorage().readFile(fileName);
            expect(result).toEqual(fileContents);
        });

        it.each([
            ["test", "Hello there"],
            ["results", "{ \"Hello\": 343 }"]
        ])("should not return any file", async (fileName, fileContents) => {
            var storage = StorageFactory.getLocalStorage();
            storage.createFile(fileName);
            storage.updateFile(fileName, fileContents);
            const result = StorageFactory.getLocalStorage().readFile(fileName + "wrong");
            expect(result).not.toEqual(fileContents);
        });
    });
});