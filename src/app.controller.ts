import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items/items.service';
import { Item } from './items/item.entity';

@Controller("items")
export class ItemController {

  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item:Item){
    return this.itemsService.create(item)
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  update(@Param('id') id:number,@Body() item:Item){
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemsService.remove(id);
  }
}
