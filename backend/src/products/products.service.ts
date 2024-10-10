import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(filter?: string, sortBy?: string, sortOrder: 'ASC' | 'DESC' = 'ASC'): Promise<Product[]> {
    const queryBuilder = this.productsRepository.createQueryBuilder('product');

    if (filter) {
      queryBuilder.where('product.name ILIKE :filter', { filter: `%${filter}%` });
    }

    if (sortBy) {
      queryBuilder.orderBy(`product.${sortBy}`, sortOrder);
    }

    return queryBuilder.getMany();
  }


  findOne(id: string): Promise<Product> {
    return this.productsRepository.findOneBy({ id: parseInt(id) });
  }

  create(productData: Partial<Product>): Promise<Product> {
    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  async update(id: string, productData: Partial<Product>): Promise<Product> {
    await this.productsRepository.update(id, productData);
    return this.productsRepository.findOneBy({ id: parseInt(id) });
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
