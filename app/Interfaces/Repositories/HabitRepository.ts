import { IHabit } from "../Habit/IHabit";
import { IHabitDTO } from "../Habit/IHabitDTO";

export interface IHabitRepository {
  create(data: IHabitDTO): Promise<IHabit>;
  findById(id: string): Promise<IHabit | null>;
  list(): Promise<IHabit[]>;
  update(id: string, data: IHabitDTO): Promise<IHabit>;
}