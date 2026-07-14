import { Role } from './enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  // name can be omitted when name is the same as attribute name
  // @Column({ nullable: false, unique: true })
  @Column({ name: 'email', nullable: false, unique: true })
  email: string;

  @Column({ name: 'password', nullable: false, unique: false })
  password: string;

  @Column({ name: 'name', nullable: false, unique: false })
  name: string;

  @Column({ name: 'role', nullable: false, type: 'enum', enum: Role })
  role: Role;

  @Column({ name: 'active', nullable: false, default: true, unique: false })
  active: boolean;
}
