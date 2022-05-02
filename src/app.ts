import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors({ origin: ["https://saits.prz.edu.pl", "https://keepitsecure.prz.edu.pl"] }));

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
