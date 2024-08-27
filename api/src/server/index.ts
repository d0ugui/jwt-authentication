import express from "express";

import { makeSignUpController } from "../factories/makeSIgnUpController";
import { makeSignInController } from "../factories/makeSIgnInController";
import { routeAdapter } from "./adapters/routeAdapter";

const app = express();

app.use(express.json());

app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

app.listen("3001", () =>
  console.log("🚀 Server started at http://localhost:3001")
);
