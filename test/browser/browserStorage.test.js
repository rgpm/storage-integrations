describe("BrowserStorage", () => {
    it("should be a class", () => {
        const BrowserStorage = require("../../src/browserStorage");
        expect(typeof BrowserStorage).toBe("function");
        // Classes are not callable; functions are
        expect(BrowserStorage).toThrow(TypeError);
    });
});


describe("BrowserStorage methods", () => {
    beforeEach(async() => {
        await page.goto(PATH, { waitUntil: 'load'});
    });

    describe("authorize method", () => {
        it("should return true", async () => {
            const result = await page.evaluate(() => {
                return app.getLocalStorage().authorize();
            });
            expect(result).toBeTruthy();
        });
    });

    describe("unauthorize method", () => {
        it("should return true", async () => {
            const result = await page.evaluate(() => { 
                return app.getLocalStorage().unauthorize();
            });
            expect(result).toBeTruthy();
        });
    });

    describe("createFile method", () => {
        it("should return true", async () => {
            const result = await page.evaluate(() => { 
                return app.getLocalStorage().createFile("test");
            });
            expect(result).toBeTruthy();
        });
    });

    describe("readFile method", () => {
        it.each([
            ["test"]
        ])("should return true", async (fileName) => {
            const result = await page.evaluate((fileName) => {
                return app.getLocalStorage().readFile(fileName);
            }, fileName);
            expect(result).toBeNull();
        });
    });

    describe("updateFile method", () => {
        it.each([
            ["test", "Hello there"]
        ])("should return true", async (fileName, fileContents) => {
            const result = await page.evaluate((fileName, fileContents) => { 
                return app.getLocalStorage().updateFile(fileName, fileContents);
            }, fileName, fileContents);
            expect(result).toBeTruthy();
        });
    });

    describe("deleteFile method", () => {
        it.each([
            ["test"],
            ["results"]
        ])("should return true", async (fileName) => {
            const result = await page.evaluate((fileName) => { 
                return app.getLocalStorage().deleteFile(fileName);
            }, fileName);
            expect(result).toBeTruthy();
        });
    });

    describe("check method", () => {
        it("should return true", async () => {
            const result = await page.evaluate(() => { 
                return app.getLocalStorage().check();
            });
            expect(result).toBeTruthy();
        });
    })
});

describe("BrowserStorage Operations", () => {
    beforeEach(async() => {
        await page.goto(PATH, { waitUntil: 'load'});
        page.on('console', msg => { console.log(msg.text())}); //Redirect console events to us
    });
    describe("Creating a file, updating and reading from the file", () => {
        it.each([
            ["test", "Hello there"],
            ["results", "{ \"Hello\": 343 }"]
        ])("should return the contents", async (fileName, fileContents) => {
            const result = await page.evaluate((fileName, fileContents) => { 
                var storage = app.getLocalStorage();
                storage.createFile(fileName);
                storage.updateFile(fileName, fileContents);
                return app.getLocalStorage().readFile(fileName);
            }, fileName, fileContents);
            expect(result).toEqual(fileContents);
        });

        it.each([
            ["test", "Hello there"],
            ["results", "{ \"Hello\": 343 }"]
        ])("should return the wrong file", async (fileName, fileContents) => {
            const result = await page.evaluate((fileName, fileContents) => { 
                var storage = app.getLocalStorage();
                storage.createFile(fileName);
                storage.updateFile(fileName, fileContents);
                return app.getLocalStorage().readFile(fileName + "wrong");
            }, fileName, fileContents);
            expect(result).not.toEqual(fileContents);
        });
    });
});