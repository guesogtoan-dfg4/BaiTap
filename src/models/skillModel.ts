import { Schema, model } from "mongoose";

interface ISkill {
  name: string;
  language: string;
}

const SkillSchema = new Schema<ISkill>({
  name: {
    type: String
  },
  language: {
    type: String
  }
});

const SkillModel = model<ISkill>("Skill", SkillSchema);

export default SkillModel;
