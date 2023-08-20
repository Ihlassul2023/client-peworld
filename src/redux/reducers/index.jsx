import { combineReducers } from "redux";
import { registerRecruiter, loginRecruiter, updateRecruiter, deleteRecruiter, myProfileRecruiter } from "./recruiter";
import { registerWorker, loginWorker, updateWorker, myProfileWorker, detail_worker, worker, delete_worker } from "./worker";
const rootReducers = combineReducers({
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
});

export default rootReducers;
