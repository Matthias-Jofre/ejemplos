import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('EvaluacionTecnica')
export class TechnicalEvaluation{
    
    @PrimaryColumn({ type: 'int' })
    id!: number;
    
    @Column({ type: 'varchar', name: 'descripcion' })
    description!: string;
}