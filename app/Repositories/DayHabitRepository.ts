import { prisma } from "../../config/prisma";
import { IDayHabitRepository } from "../Interfaces/Repositories/DayHabitRepostiory";

interface data {
    habit_Id: string;
    day_Id: string;
}

export class DayHabitRepository implements IDayHabitRepository {
  async create({habit_Id, day_Id}: data): Promise<void> {    
    await prisma.dayHabit.create({
      data: {
        habit_id: habit_Id,
        day_id: day_Id,
      }
    });
  }

  async findByHabitIdAndDayId(habit_id: string, day_id: string) {
    return await prisma.dayHabit.findUnique({
      where: {
        habit_id_day_id: {
          habit_id: habit_id,
          day_id: day_id
        }
      }
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.dayHabit.delete({
      where: {
        id: id
      }
    });
  }
}