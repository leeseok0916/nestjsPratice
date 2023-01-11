import { Controller, Get, Param } from '@nestjs/common';
import { Board } from 'src/entities/board.entity';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardService.getAll();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }
}
