import { IHabit } from "../Habit/IHabit";
import { IHabitDTO } from "../Habit/IHabitDTO";

export interface IHabitRepository {
  create(data: IHabitDTO): Promise<IHabit>;
  findById(id: string): Promise<IHabit | null>;
  getHabitsOnDate(
    date: Date, 
    weekDay: number, 
    user_id: string
  ): Promise<IHabit[] | null>;
  list(user_id: string): Promise<IHabit[]>;
  update(id: string, data: IHabitDTO): Promise<IHabit>;
}