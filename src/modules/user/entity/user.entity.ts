import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Usuario')
export class User {
  @PrimaryColumn({ type: 'int' })
  rut!: number;

  @Column({ type: 'varchar', name: 'nombre', length: 25 })
  firstname!: string;

  @Column({ type: 'varchar', name: 'apellido', length: 25 })
  lastname!: string;

  @Column({ type: 'varchar', name: 'tipo', default: 'USER_ROLE', length: 15 })
  role!: string;
}
