import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('RegistroDeEstado')
export class StatusRecord {
  @PrimaryColumn({ type: 'int' })
  id!: number;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_de_registro' })
  registrationDate!: Date;

  @Column({ type: 'varchar', name: 'estado_actual' })
  actualState!: string;
    
  @Column({ type: 'varchar', name: 'estado_anterior' })
  previousState!: string;

}