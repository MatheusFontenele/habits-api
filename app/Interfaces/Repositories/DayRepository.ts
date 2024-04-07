import { IDay } from "../Day/IDay";

export interface IDayRepository {
  create(data: Date): Promise<IDay>;
  findById(id: string): Promise<IDay | null>;
  findByDate(date: Date): Promise<IDay | null>;
  list(): Promise<IDay[]>;
  update(id: string, data: Date): Promise<IDay>;
}