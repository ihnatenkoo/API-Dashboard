import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { BaseController } from '../common/base.controller';
import { ILogger } from '../logger/logger.interface';
import { IUserController } from './user.controller.interface';
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/register', method: 'post', function: this.register },
			{ path: '/login', method: 'post', function: this.login },
		]);
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register');
	}
	login(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'login');
	}
}
