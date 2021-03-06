import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Right } from './right.entity';

@Entity()
export class RightGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: false })
  libelle: string;

  @Column({ nullable: false, default: false })
  isDelete: boolean;

  @ManyToMany(type => Right)
  @JoinTable({ name: 'right_group_right' })
  rights: Right[];
}
