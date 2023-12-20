import StudentPost, { IStudentPost } from "../models/student_post_model";
import { BaseConstroller } from "./base_controller";

class StudentPostController extends BaseConstroller<IStudentPost>{
    constructor() {
        super(StudentPost);
    }
}

export default new StudentPostController();
