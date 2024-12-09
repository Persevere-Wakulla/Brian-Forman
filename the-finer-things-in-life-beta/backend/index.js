import express from "express";
import mongoose from "mongoose";

import merchandisesRoute from "./routes/merchandisesRoute.js"
import cors from "cors";
import userRoute from "./routes/userRoute.js";
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow All Origins with Default or cors(*)
app.use(cors());
// Option 2: Allow Customs Origins
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to The Finer Things in Life");
});

app.use("/merchandises", merchandisesRoute);
app.use("/users", userRoute);

mongoose
  .connect("mongodb://127.0.0.1/Finer_Things")
  .then(() => {
    console.log("DB has been connect");
    app.listen(3000, () => {
      console.log("Listening on 3000 http://localhost:3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

