describe("StorageFactory", () => {
    it("should be a class", () => {
        const StorageFactory = require("../../src/storageFactory");
        expect(typeof StorageFactory).toBe("function");
        // Classes are not callable; functions are
        expect(StorageFactory).toThrow(TypeError);
    });
});


describe("StorageFactory methods", () => {
    beforeEach(async() => {
        await page.goto(PATH, { waitUntil: 'load'});
        page.on('console', msg => { console.log(msg.text())}); //Redirect console events to us
    });

    describe("getLocalStorage method", () => {
        it("should return browserStorage", async () => {
            const result = await page.evaluate(() => {
                return app.getLocalStorage().type();
            });
            expect(result).toEqual("browserStorage");
        });
    });
});