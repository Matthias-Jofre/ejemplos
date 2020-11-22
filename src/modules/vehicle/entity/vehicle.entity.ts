import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Vehiculo')
export class Vehicle {
  @PrimaryColumn({ type: 'varchar', length: 10, name: 'patente' })
  patent!: string;

  @Column({ type: 'varchar', length: 15, name: 'marca' })
  brand!: string;

  @Column({ type: 'varchar', length: 20, name: 'modelo' })
  model!: string;

  @Column({ type: 'int', name: 'año' })
  year!: number;

  @Column({ type: 'varchar', length: 28 })
  vin!: string;

  @Column({ type: 'int', name: 'kilometraje' })
  mileage!: number;
}
