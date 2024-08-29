import { Request, Response } from "express";
import { IController } from "../../application/interfaces/IController";

export function routeAdapter(controller: IController) {
  return async (req: Request, res: Response) => {
    const { statusCode, body } = await controller.handle({
      body: req.body,
      params: req.params,
      account: req.metadata?.account,
      headers: req.headers as Record<string, string>,
    });

    res.status(statusCode).json(body);
  };
}
