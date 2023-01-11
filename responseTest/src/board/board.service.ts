import { Injectable } from '@nestjs/common';
import { Exclude } from 'class-transformer';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

class ResponseClass {
  orderId: number;
  price: number;
  // @Exclude()
  orderAgencyOrderId: string;
}

type ResponseType = {
  orderId: number;
  price: number;
  orderAgencyOrderId: string;
};

@Injectable()
export class BoardService {
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  findAll() {
    // return `This action returns all board`;
    // return 1;
    // return true;
    // return {
    //   orderId: 1,
    //   orderAgency: 'korea',
    //   deliveries: [
    //     {
    //       deliveryId: 3,
    //       deliveryAgency: 'korea',
    //     },
    //   ],
    //   product: {
    //     id: 100,
    //     price: 3000,
    //   },
    // };

    const response = new ResponseClass();
    response.orderId = 1;
    response.price = 3000;
    response.orderAgencyOrderId = 'korea';
    return response;

    // return {
    //   orderId: 1,
    //   price: 3000,
    //   orderAgencyOrderId: 'korea',
    // };

    // const responsType: ResponseType = {
    //   orderId: 1,
    //   price: 3000,
    //   orderAgencyOrderId: 'korea',
    // };

    // return responsType;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
