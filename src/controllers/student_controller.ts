import StudentModel, { IStudent } from "../models/student_model";
import createController from "./base_controller";


const studentController = createController<IStudent>(StudentModel);

// class StudentController extends BaseController<IStudent> {
//   constructor() {
//     super(StudentModel);
//   }
// }


export default studentController
