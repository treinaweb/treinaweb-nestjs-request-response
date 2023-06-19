import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHeaders(
    @Req() req: Request,
    @Headers('Cache-Control') cache: string,
  ): string {
    return this.appService.getHeaders(req);
  }

  @Get('verbo')
  getVerbo(@Req() req: Request): string {
    return this.appService.getVerbo(req);
  }

  @Post('verbo')
  postVerbo(@Req() req: Request): string {
    return this.appService.getVerbo(req);
  }

  @Post('body')
  postBody(@Req() req: Request, @Body('nome') nome: string): string {
    return this.appService.postBody(req);
  }

  @Get('carro')
  getCar(@Query('modelo') modelo: string, @Query('cor') cor: string) {
    return this.appService.getCar(modelo, cor);
  }

  @Get('usuario/:id')
  response(@Param('id') id: number, @Res() res: Response) {
    return this.appService.response(id, res);
  }

  @Get('carro/:id')
  responseHttp(@Param('id') id: number) {
    return this.appService.responseHttp(id);
  }
}
