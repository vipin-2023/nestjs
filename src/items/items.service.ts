import { Injectable } from '@nestjs/common';
import { Item } from "./item.entity"

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [];

    create(item: Item) {
        this.items.push(item);
        return item;
    }

    findAll(): Item[] {
        return this.items
    }

    findOne(id: number): Item {
        return this.items.find(item => item.id == id)
    }

    update(id: number, item: Item) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items[index] = item;
            return item;
        }
        return null;
    }
    
    remove(id: number) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            return this.items.splice(index, 1);
        }
        return null;
    }
}
