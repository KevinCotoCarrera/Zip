import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller()
export class AppController { 
    constructor() {}
    @Get()
    getHome() : string{
    return "Home"
    }

    
}
