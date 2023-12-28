"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_post_model_1 = __importDefault(require("../models/student_post_model"));
const base_controller_1 = require("./base_controller");
class StudentPostController extends base_controller_1.BaseController {
    constructor() {
        super(student_post_model_1.default);
    }
    post(req, res) {
        const _super = Object.create(null, {
            post: { get: () => super.post }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("postStudent:" + req.body);
            const _id = req.user._id;
            req.body.owner = _id;
            _super.post.call(this, req, res);
        });
    }
}
exports.default = new StudentPostController();
//# sourceMappingURL=student_post_controller.js.map