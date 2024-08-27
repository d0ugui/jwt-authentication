import express from "express";
import { SignUpController } from "../application/controllers/SignUpController";
import { SignUpUseCase } from "../application/useCases/SignUpUseCase";
import { SignInController } from "../application/controllers/SignInController";
import { SignInUseCase } from "../application/useCases/SignInUseCase";

const app = express();

app.use(express.json());

app.post("/sign-up", async (req, res) => {
  const SALT = 10;
  const signUpUseCase = new SignUpUseCase(SALT);
  const signUpController = new SignUpController(signUpUseCase);

  const { statusCode, body } = await signUpController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.post("/sign-in", async (req, res) => {
  const signInUseCase = new SignInUseCase();
  const signInController = new SignInController(signInUseCase);

  const { statusCode, body } = await signInController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.listen("3001", () =>
  console.log("🚀 Server started at http://localhost:3001")
);
