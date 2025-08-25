import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import routes from "./routes/index.js";

// récupèr
import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-type"],
    credentials: true,
  })
);

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
  connectDB();
});
