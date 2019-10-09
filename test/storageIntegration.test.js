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
    const NotImplementError = require("../src/notImplementedError")
    beforeEach(() => {
        StorageIntegrationLib = require("../src/storageIntegration");
        StorageIntegration = new StorageIntegrationLib();
    });

    describe("authorize method", () => {
        it("should exist", () => {
            expect(StorageIntegration.authorize).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.authorize).toThrow(NotImplementError);
        })
    });

    describe("unauthorize method", () => {
        it("should exist", () => {
            expect(StorageIntegration.unauthorize).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.unauthorize).toThrow(NotImplementError);
        })
    });

    describe("createFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.createFile).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.createFile).toThrow(NotImplementError);
        })
    });

    describe("readFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.readFile).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.readFile).toThrow(NotImplementError);
        })
    });

    describe("updateFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.updateFile).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.updateFile).toThrow(NotImplementError);
        })
    });

    describe("deleteFile method", () => {
        it("should exist", () => {
            expect(StorageIntegration.deleteFile).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.deleteFile).toThrow(NotImplementError);
        })
    });

    describe("check method", () => {
        it("should exist", () => {
            expect(StorageIntegration.check).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.check).toThrow(NotImplementError);
        })
    })

    describe("type method", () => {
        it("should exist", () => {
            expect(StorageIntegration.check).toBeDefined();
        });

        it("should throw an error", () =>{
            expect(StorageIntegration.check).toThrow(NotImplementError);
        })
    })
});