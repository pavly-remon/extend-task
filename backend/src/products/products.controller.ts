import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(
    @Query('filter') filter?: string,
    @Query('category') category?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
  ): Promise<Product[]> {
    return this.productsService.findAll(filter, category, sortBy, sortOrder);
  }

  @Get('categories')
  async getCategories(): Promise<string[]> {
    return this.productsService.findAllCategories();
  }

  @Get('info/:id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(id, productData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }
}
