import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Right {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: false })
  libelle: string;
}
