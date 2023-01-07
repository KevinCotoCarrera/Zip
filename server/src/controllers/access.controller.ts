import { HttpException, HttpStatus } from "@nestjs/common";
import { Body, Controller, Post, Res } from "@nestjs/common/decorators";
import { AuthService } from "src/auth/auth.service";
import { User } from "src/models/Users/entities/user.entity";

@Controller()
export class AccessController{
    constructor(private readonly authService: AuthService) {}
    @Post('/signup')
    async signup(@Res() response, @Body() user: User) {
        try{
        const newUser = await this.authService.signup(user)
        return response.status(HttpStatus.CREATED).json({newUser})

        }
        catch(error){
            new HttpException("Can't create User", HttpStatus.BAD_REQUEST)
        }
    }
    @Post('/signin')
    async signin(@Res() response: Response, @Body() user: User) {
      try{
        const cookie = await this.authService.signin(user)
      }
      catch(error){
        new HttpException('Incorrect Credentials', HttpStatus.UNAUTHORIZED)
      }
    }

}