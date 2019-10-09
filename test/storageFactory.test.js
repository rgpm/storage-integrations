describe("StorageFactory", () => {
    it("should be a class", () => {
        const StorageFactory = require("../src/storageFactory");
        expect(typeof StorageFactory).toBe("function");
        // Classes are not callable; functions are
        expect(StorageFactory).toThrow(TypeError);
    });
});


describe("StorageFactory methods", () => {
    beforeEach(async() => {
        /* Used for the browser tests */
        await page.goto(PATH, { waitUntil: 'load'});

        /* Used for the node tests */
        StorageFactory = require("../src/storageFactory");
        storage = StorageFactory.getLocalStorage();
    });

    describe("getLocalStorage method should return correct type", () => {
        it("on node", () => {
            const result = StorageFactory.getLocalStorage().type();
            expect(result).toEqual("nodeStorage");
        });
        it("on browser", async () => {
            const result = await page.evaluate(() => {
                return app.getLocalStorage().type();
            });
            expect(result).toEqual("browserStorage");
        });
    });

    describe("authorize method should return true", () => {
        it("on node", () => {
            expect(storage.authorize()).toBeTruthy();
        });

        it("on browser", async () => {
            const result = await page.evaluate(() => {
                return app.getLocalStorage().authorize();
            });
            expect(result).toBeTruthy();
        });
    });

    describe("unauthorize method should return true", () => {
        it("on node", () => {
            expect(storage.unauthorize()).toBeTruthy();
        });

        it("on browser", async () => {
            const result = await page.evaluate(() => { 
                return app.getLocalStorage().unauthorize();
            });
            expect(result).toBeTruthy();
        });
    });

    describe("createFile method should return true", () => {
        it("on node", () => {
            expect(storage.createFile("test")).toBeTruthy();
        });

        it("on browser", async () => {
            const result = await page.evaluate(() => { 
                return app.getLocalStorage().createFile("test");
            });
            expect(result).toBeTruthy();
        });
    });

    describe.each([
        "test"
    ])("readFile method should return true", (filename) => {
        it("on node", () => {
            const result = storage.readFile(filename);
            expect(result).toBeNull();
        });

        it("on browser", async () => {
            const result = await page.evaluate((filename) => {
                return app.getLocalStorage().readFile(filename);
            }, filename);
            expect(result).toBeNull();
        });
    });

    describe.each([
        ["test", "hello there"]
    ])("updateFile method should return true", (filename, fileContents) => {
        it("on node", () => {
            const result = storage.updateFile(filename, fileContents);
            expect(result).toBeTruthy();
        });

        it("on browser", async () => {
            const result = await page.evaluate((filename, fileContents) => { 
                return app.getLocalStorage().updateFile(filename, fileContents);
            }, filename, fileContents);
            expect(result).toBeTruthy();
        });
    });

    describe.each([
        "test",
        "results"
    ])("deleteFile method should return true", (filename) => {
        it("on node", () => {
            const result = storage.deleteFile(filename);
            expect(result).toBeTruthy();
        });

        it("on browser", async () => {
            const result = await page.evaluate((filename) => { 
                return app.getLocalStorage().deleteFile(filename);
            }, filename);
            expect(result).toBeTruthy();
        });
    });

    describe("check method should return true", () => {
        it("on node", async () => {
            const result = storage.check();
            expect(result).toBeTruthy();
        });

        it("on browser", async () => {
            const result = await page.evaluate(() => { 
                return app.getLocalStorage().check();
            });
            expect(result).toBeTruthy();
        });
    })
});


describe("storageFactory Operations", () => {
    beforeEach(async() => {
        /* Used for the browser tests */
        await page.goto(PATH, { waitUntil: 'load'});

        /* Used for the node tests */
        StorageFactory = require("../src/storageFactory");
    });

    describe.each([
        ["test", "Hello there"],
        ["results", "{ \"Hello\": 343 }"]
    ])("Creating a file, updating and reading from the file", (filename, fileContents) => {
        describe("should return the contents", () => {
            test("on node", () => {
                var storage = StorageFactory.getLocalStorage();
                storage.createFile(filename);
                storage.updateFile(filename, fileContents);
                const result = StorageFactory.getLocalStorage().readFile(filename);
                expect(result).toEqual(fileContents);
            });

            test("on browser", async () => {
                const result = await page.evaluate((filename, fileContents) => { 
                    var storage = app.getLocalStorage();
                    storage.createFile(filename);
                    storage.updateFile(filename, fileContents);
                    return app.getLocalStorage().readFile(filename);
                }, filename, fileContents);
                expect(result).toEqual(fileContents);
            });
            
        });

        describe("should return no information", () => {
            test("on node", () => {
                var storage = StorageFactory.getLocalStorage();
                storage.createFile(filename);
                storage.updateFile(filename, fileContents);
                const result = StorageFactory.getLocalStorage().readFile(filename + "wrong");
                expect(result).toBeNull();
            });

            test("on browser", async () => {
                const result = await page.evaluate((filename, fileContents) => { 
                    var storage = app.getLocalStorage();
                    storage.createFile(filename);
                    storage.updateFile(filename, fileContents);
                    return app.getLocalStorage().readFile(filename + "wrong");
                }, filename, fileContents);
                expect(result).toBeNull();
            });
        });
    });
});