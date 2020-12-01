import { Address } from 'src/modules/address/entity/address.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('Cliente')
export class Customer {
  @PrimaryColumn({ type: 'int' })
  rut!: number;

  @Column({ type: 'varchar', name: 'nombre', length: 25 })
  firstname!: string;

  @Column({ type: 'varchar', name: 'apellido', length: 25 })
  lastname!: string;

  @Column({ type: 'varchar', unique: true, length: 35 })
  email!: string;

  @Column({ type: 'int', name: 'celular' })
  phonenumber: number;

  @OneToMany(() => Address, addres => addres.customer)
  
  address : Address [];

}
