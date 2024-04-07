import { prisma } from "../../config/prisma";
import { IHabit } from "../Interfaces/Habit/IHabit";
import { IHabitDTO } from "../Interfaces/Habit/IHabitDTO";
import { IHabitRepository } from "../Interfaces/Repositories/HabitRepository";

export class HabitRepository implements IHabitRepository {
  async create(data: IHabitDTO): Promise<IHabit> {
    return await prisma.habit.create({
      data: {
        name: data.name,
        weekDays: {
          create: data.weekDays.map((weekDay) => {
            return {
              week_day: weekDay
            }
          })
        },
        user_id: data.user_id
      }
    })
  }
  
  async findById(id: string): Promise<IHabit | null> {
    return await prisma.habit.findUnique({
      where: {
        id
      }
    })
  }

  async getHabitsOnDate(
    date: Date, 
    weekDay: number,
    user_id: string
  ): Promise<IHabit[] | null> {
    return await prisma.habit.findMany({
      where: {
        user_id,
        created_at: {
          lte: date
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })
  }

  async list(): Promise<IHabit[]> {
    return await prisma.habit.findMany()
  }

  update(id: string, data: IHabitDTO): Promise<IHabit> {
    throw new Error("Method not implemented.");
  }
}