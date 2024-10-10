import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  category: string;

  @Column({ nullable: true })
  imgUrl: string;

  @Column({ nullable: true })
  description: string;
}
