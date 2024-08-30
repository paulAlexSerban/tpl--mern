import { Request, Response, NextFunction } from 'express';
import { ExtendedRequest } from '../middlewares/check-auth';
export type Controller = (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export type ExtendedController = (req: ExtendedRequest, res: Response, next: NextFunction) => Promise<Response | void>;
