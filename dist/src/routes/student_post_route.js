"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello World!");
});
router.get("/:id", (req, res) => {
    res.send("Hello World!");
});
router.post("/", (req, res) => {
    res.send("Hello World!");
});
router.put("/:id", (req, res) => {
    res.send("Hello World!");
});
router.delete("/:id", (req, res) => {
    res.send("Hello World!");
});
exports.default = router;
//# sourceMappingURL=student_post_route.js.map