import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { RightGroup } from '../right/right-group.entity';

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

  @Column({ length: 500, nullable: true })
  phone: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, default: false })
  isAdmin: boolean;

  @Column({ nullable: false, default: false })
  isDelete: boolean;

  @ManyToMany(type => RightGroup)
  @JoinTable({ name: 'user_group_right' })
  rightGroups: RightGroup[];
}
