import { NextFunction, Request, Response, Router } from 'express';
import { IMiddleware } from './IMiddleware.interface';

export interface IControllerRoute {
	path: string;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
	function: (req: Request, res: Response, next: NextFunction) => void;
	middlewares?: IMiddleware[];
}

export type ExpressReturnType = Response<any, Record<string, any>>;
