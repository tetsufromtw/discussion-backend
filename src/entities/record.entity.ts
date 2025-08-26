import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity('records')
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'master' })
  master: Member;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'slave' })
  slave: Member;
}