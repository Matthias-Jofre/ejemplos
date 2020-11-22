import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Direccion')
export class Address {
  @PrimaryGeneratedColumn('uuid', { name: 'id_direccion' })
  id!: string;

  @Column({ type: 'varchar', name: 'comuna' })
  commune!: string;

  @Column({ type: 'varchar', name: 'calle' })
  street!: string;

  @Column({ type: 'int', name: 'numero_de_calle' })
  street_number!: number;
}
