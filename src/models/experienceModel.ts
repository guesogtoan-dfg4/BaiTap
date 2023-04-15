import { Schema, model } from "mongoose";

interface IExperience {
  startDate: number;
  endDate: number;
  job: string;
  company: string;
}

const ExperienceSchema = new Schema<IExperience>({
  startDate: { type: Number },
  endDate: { type: Number },
  job: { type: String },
  company: { type: String }
});

const ExperienceModel = model<IExperience>("Experience", ExperienceSchema);

export default ExperienceModel;
