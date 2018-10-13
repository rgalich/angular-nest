import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: false })
  firstName: string;

  @Column({ length: 500, nullable: false })
  lastName: string;

  @Column({ length: 500, unique: true, nullable: false })
  mail: string;

  @Column({ nullable: false })
  password: string;
}
