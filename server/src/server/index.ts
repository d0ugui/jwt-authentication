import express from "express";
import cors from "cors";

import { routeAdapter } from "./adapters/routeAdapter";
import { middlewareAdapter } from "./adapters/middlewareAdapter";

import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInController } from "../factories/makeSignInController";
import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware";
import { makeGetUserController } from "../factories/makeGetUserController";
import { makeAuthorizationMiddleware } from "../factories/makeAuthorizationMiddleware";
import { makeRefreshTokenController } from "../factories/makeRefreshTokenController";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

app.get(
  "/me",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetUserController())
);

app.post("/refresh", routeAdapter(makeRefreshTokenController()));

app.post(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(["USER"])),
  (req, res) => {
    res.json({ created: true });
  }
);

app.listen("3001", () =>
  console.log("🚀 Server started at http://localhost:3001")
);
