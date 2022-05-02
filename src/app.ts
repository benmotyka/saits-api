import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors({ origin: ["https://saits.prz.edu.pl", "https://keepitsecure.prz.edu.pl"] }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
