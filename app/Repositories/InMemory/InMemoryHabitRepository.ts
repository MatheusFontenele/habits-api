import { IHabit } from "../../Interfaces/Habit/IHabit";
import { IHabitDTO } from "../../Interfaces/Habit/IHabitDTO";
import { IHabitRepository } from "../../Interfaces/Repositories/HabitRepository";

export class InMemoryHabitRepository implements IHabitRepository {
  private habits: IHabit[] = [];

  async create(habit: IHabitDTO): Promise<IHabit> {
    const newHabit = {
      id: "any_id",
      name: habit.name,
      weekDays: [0,1,2],
      user_id: "any_user_id",
      created_at: new Date(),
      updated_at: new Date()
    }
    this.habits.push(newHabit);
    return newHabit;
  }

  async findById(id: string): Promise<IHabit | null> {
    return this.habits.find(habit => habit.id === id) || null; 
  }
  async getHabitsOnDate(date: Date, weekDay: number, user_id: string): Promise<IHabit[] | null> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<IHabit[]> {
    throw new Error("Method not implemented.");
  }
  async update(id: string, data: IHabitDTO): Promise<IHabit> {
    throw new Error("Method not implemented.");
  }
}