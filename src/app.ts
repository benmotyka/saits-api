import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(bodyParser.json());

app.use(helmet());
app.use(
  cors({
    origin: [
      "https://saits.prz.edu.pl",
      "https://keepitsecure.prz.edu.pl",
      "http://127.0.0.1:5500", // dev
    ],
  })
);

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
