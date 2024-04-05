import { prisma } from "../../config/prisma";
import { IHabit } from "../Interfaces/Habit/IHabit";
import { IHabitDTO } from "../Interfaces/Habit/IHabitDTO";
import { IHabitRepository } from "../Interfaces/Repositories/HabitRepository";

export class HabitRepository implements IHabitRepository {
  async create(data: IHabitDTO): Promise<IHabit> {
    return await prisma.habit.create({
      data: {
        name: data.name,
        HabitWeekDay: {
          create: data.weekDays.map((weekDay) => {
            return {
              weekDay: weekDay
            }
          })
        },
        userId: data.userId
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

  async list(): Promise<IHabit[]> {
    return await prisma.habit.findMany()
  }

  update(id: string, data: IHabitDTO): Promise<IHabit> {
    throw new Error("Method not implemented.");
  }
}