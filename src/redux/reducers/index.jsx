import { combineReducers } from "redux";
import { registerRecruiter, loginRecruiter, updateRecruiter, deleteRecruiter, myProfileRecruiter, chatHire, getContactChat, getChatMessage, chatRecruiter } from "./recruiter";
import { registerWorker, loginWorker, updateWorker, myProfileWorker, detail_worker, worker, delete_worker } from "./worker";
import { postSkill, getSkill, getSkillForRecruit } from "./skill";
import { postExperience, getDetailExperience, getExperience, getExperienceForRecruit, updateExperience, deleteExperience } from "./experience";
import { postPortofolio, getDetailPortofolio, getPortofolio, getPortofolioForRecruit, updatePortofolio, deletePortofolio } from "./portofolio";
import { getSearchSort } from "./home";
const rootReducers = combineReducers({
  postPortofolio,
  getDetailPortofolio,
  getPortofolio,
  getPortofolioForRecruit,
  updatePortofolio,
  deletePortofolio,
  registerRecruiter,
  loginRecruiter,
  updateRecruiter,
  deleteRecruiter,
  registerWorker,
  loginWorker,
  updateWorker,
  myProfileWorker,
  detail_worker,
  worker,
  delete_worker,
  myProfileRecruiter,
  postSkill,
  getSkill,
  getSkillForRecruit,
  postExperience,
  getDetailExperience,
  getExperience,
  getExperienceForRecruit,
  updateExperience,
  deleteExperience,
  getSearchSort,
  chatHire,
  getContactChat,
  getChatMessage,
  chatRecruiter,
});

export default rootReducers;
