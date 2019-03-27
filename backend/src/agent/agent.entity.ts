import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'agent' })
export class Agent {
  @PrimaryGeneratedColumn('uuid', { name: 'id_agent' })
  idAgent: string;

  @Column({ name: 'description_agent', type: 'varchar' })
  descriptionAgent: string;

  constructor(copy: Partial<Agent> = {}) {
    this.idAgent = copy.idAgent || undefined;

    this.descriptionAgent = copy.descriptionAgent || null;
  }
}
