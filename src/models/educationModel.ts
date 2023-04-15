import { Schema, model } from "mongoose";

interface IEducation {
  date: string;
  describe: string;
}

const EducationSchema = new Schema<IEducation>({
  date: { type: String },
  describe: { type: String },
});

const EducationModel = model<IEducation>("Education", EducationSchema);

export default EducationModel;
