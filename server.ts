import express, { Request, Response } from "express";
import { log } from "./utils/logger";
import companies from "./data/companies.json";

const port = 3003;
const app = express();
app.use(express.json());

app.get("/companies", (req: Request, res: Response) => {
  res.status(200).json(companies);
});

// catching exceptions at process level
process
  .on("uncaughtException", (err) => {
    log.error(`Exception caught at process level.`, err);
  })
  .on("unhandledRejection", (reason, promise) => {
    log.error("Unhandled rejection at:", promise, "reason:", reason);
  });

app.listen(port);
log.info(`API started at: ${port}`);
