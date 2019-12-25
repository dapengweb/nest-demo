import { NestMiddleware, Injectable } from '@nestjs/common';
import { ServerResponse } from 'http';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        next();
    }
}

export function LoggerMiddlewareFun(
    req: Request, res: ServerResponse, next: () => void) {
    console.log('req');
    res.addListener('finish', () => console.log('finished'));
    next();
}