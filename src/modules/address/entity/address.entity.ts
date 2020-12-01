import { Customer } from 'src/modules/customer/entity/customer.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Customer, customer => customer.address, {
    eager: true,
    cascade: true
  })
  
  @JoinColumn({name: 'customer_rut'})
  customer : Customer;
}

