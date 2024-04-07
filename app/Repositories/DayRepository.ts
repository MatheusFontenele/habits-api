import { prisma } from "../../config/prisma";
import { IDay } from "../Interfaces/Day/IDay";
import { IDayRepository } from "../Interfaces/Repositories/DayRepository";

export class DayRepository implements IDayRepository {
  
  async create(data: Date): Promise<IDay> {
    return await prisma.day.create({
      data: {
        date: data
      }
    })
  }
  
  async findByDate(date: Date): Promise<IDay | null> {    
    return await prisma.day.findUnique({
      where: {
        date: date
      },
      include: {
        dayHabits: true
      }
    })
  }

  findById(id: string): Promise<IDay | null> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<IDay[]> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: Date): Promise<IDay> {
    throw new Error("Method not implemented.");
  }
}