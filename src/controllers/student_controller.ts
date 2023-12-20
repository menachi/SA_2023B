import StudentModel, { IStudent } from "../models/student_model";
import createController from "./base_controller";

const studentController = createController<IStudent>(StudentModel);

export default studentController
