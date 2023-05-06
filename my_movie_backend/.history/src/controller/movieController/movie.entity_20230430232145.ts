import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Movie {
  @PrimaryGeneratedColumn()
  public id!: number;

  public movie_name!: string;

  @CreateDateColumn({ type: 'timestamp' })
  public created_at!: string;
}
