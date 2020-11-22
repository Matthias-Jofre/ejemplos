import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('OrdenDeServicio')
export class ServiceOrder {
  @PrimaryGeneratedColumn('increment', { name: 'id_os' })
  id!: number;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_ingreso' })
  date!: Date;
}