import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IMiddleware } from './IMiddleware.interface';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					console.log(err);
					next();
				} else if (payload) {
					if (typeof payload != 'string') {
						console.log('1');
						req.user = payload.email;
						next();
					}
				}
			});
		}

		next();
	}
}
