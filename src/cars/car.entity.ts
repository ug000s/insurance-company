import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'brand', nullable: false, unique: false })
  brand: string;

  @Column({ name: 'model', nullable: false, unique: false })
  model: string;

  @Column({ name: 'year', nullable: false, unique: false })
  year: number;

  @Column({ name: 'vin', nullable: false, unique: true })
  vin: string;
  
  @Column({ name: 'color', nullable: false, unique: false })
  color: string;

  @ManyToOne(() => User, { nullable: false })
  owner: User;

  @Column({ name: 'active', nullable: false, default: true, unique: false })
  active: boolean;
}
