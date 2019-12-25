import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddlewareFun } from '../common/logger-middleware.service';

@Module({
  providers: [UserService],
  controllers:[UserController],
  exports:[UserService]
})
export class UserModule implements NestModule{
  configure( consumer:MiddlewareConsumer){
    consumer
      .apply(LoggerMiddlewareFun)
      .forRoutes(UserController);//不加这句话 只用上面那句，就是用module下所有的controller
  }
}
