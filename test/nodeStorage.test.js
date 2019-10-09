describe("NodeStorage", () => {
    it("should be a class", () => {
        const NodeStorage = require("../src/nodeStorage");
        expect(typeof NodeStorage).toBe("function");
        // Classes are not callable; functions are
        expect(NodeStorage).toThrow(TypeError);
    });
});
