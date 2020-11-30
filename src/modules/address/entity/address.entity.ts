import { Customer } from 'src/modules/customer/entity/customer.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Direccion')
export class Address {
  @PrimaryGeneratedColumn('increment', { name: 'id_direccion' })
  id!: number;

  @Column({ type: 'varchar', name: 'comuna' })
  commune!: string;

  @Column({ type: 'varchar', name: 'calle' })
  street!: string;

  @Column({ type: 'int', name: 'numero_de_calle' })
  street_number!: number;

  @OneToOne(type => Customer, customer => customer.address)
  customer : Customer;
}

