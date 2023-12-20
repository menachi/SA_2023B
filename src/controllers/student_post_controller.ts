import StudentPost, { IStudentPost } from "../models/student_post_model";
import { BaseConstroller } from "./base_controller";
import { Response } from "express";
import { AuthRequest } from "../common/auth_middleware";

class StudentPostController extends BaseConstroller<IStudentPost>{
    constructor() {
        super(StudentPost);
    }

    async post(req: AuthRequest, res: Response) {
        req.body.owner = req.user._id;
        return super.post(req, res);
    }
}

export default new StudentPostController();
