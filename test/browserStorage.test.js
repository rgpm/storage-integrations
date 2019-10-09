describe("BrowserStorage", () => {
    it("should be a class", () => {
        const BrowserStorage = require("../src/browserStorage");
        expect(typeof BrowserStorage).toBe("function");
        // Classes are not callable; functions are
        expect(BrowserStorage).toThrow(TypeError);
    });
});