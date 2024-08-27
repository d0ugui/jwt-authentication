import express from "express";

import { makeSignUpController } from "../factories/makeSIgnUpController";
import { makeSignInController } from "../factories/makeSIgnInController";

const app = express();

app.use(express.json());

app.post("/sign-up", async (req, res) => {
  const signUpController = makeSignUpController();

  const { statusCode, body } = await signUpController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.post("/sign-in", async (req, res) => {
  const signInController = makeSignInController();

  const { statusCode, body } = await signInController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.listen("3001", () =>
  console.log("🚀 Server started at http://localhost:3001")
);
