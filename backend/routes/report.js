import express from "express"
import { report ,issue,Data,getData ,getIssue,AssignIssue,IssueAssigned,status, IssueFixed} from "../Controllers/report.js";
const routerr = express.Router();

routerr.post("/report",report);
routerr.post("/issue",issue);
routerr.post("/storeFilteredData",Data);
routerr.get("/getData/:namee",getData);
routerr.get("/getIssue",getIssue);
routerr.post("/AssignIssue",AssignIssue);
routerr.get("/IssueAssigned",IssueAssigned)
routerr.post("/IssueFixed",IssueFixed)
routerr.get("/status",status)



export default routerr;