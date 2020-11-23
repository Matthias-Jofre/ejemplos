import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('EvaluacionTecnica')
export class TechnicalEvaluation{
    
    @PrimaryColumn({ type: 'int' })
    evaluationId!: number;
    
    @Column({ type: 'varchar', name: 'descripcion' })
    description!: string;
}