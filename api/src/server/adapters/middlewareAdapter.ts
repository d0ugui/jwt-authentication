import { NextFunction, Request, Response } from "express";
import { IMiddleware } from "../../application/interfaces/IMiddleware";

export function middlewareAdapter(middleware: IMiddleware) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await middleware.handle({
      body: req.body,
      params: req.params,
      account: req.metadata?.account,
      headers: req.headers as Record<string, string>,
    });

    if ("statusCode" in result) {
      return res.status(result.statusCode).json(result.body);
    }

    req.metadata = {
      ...req.metadata,
      ...result.data,
    };

    next();
  };
}
