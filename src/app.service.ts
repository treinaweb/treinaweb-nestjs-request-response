import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { form } from './form';

@Injectable()
export class AppService {
  /*   getHello(): string {
    return 'Olá mundo!';
  } */

  getHeaders(req: Request) {
    console.log(req.headers.accept);
    return 'Teste REQ';
  }

  getVerbo(req: Request) {
    if (req.method === 'GET') {
      return form;
    }
    console.log(req.body.nome, req.body.idade);
    return 'Cadastro efetuado com sucesso';
  }

  postBody(req: Request) {
    console.log(req.body.endereco);
    return req.body.endereco;
  }

  getCar(modelo: string, cor: string) {
    const carro = {
      modelo: modelo,
      cor: cor,
    };
    return carro;
  }

  response(id: number, res: Response) {
    const users = ['Wesley', 'Maria'];
    if (id >= users.length) {
      return res.status(404).send({ msg: 'Usuário não encontrado' });
    }
    return res.status(200).send(users[id]);
  }

  responseHttp(id: number) {
    const cars = ['Fiesta', 'Gol'];
    if (id >= cars.length) {
      throw new HttpException('Carro não encontrado', HttpStatus.BAD_REQUEST);
    }
    return cars[id];
  }
}
