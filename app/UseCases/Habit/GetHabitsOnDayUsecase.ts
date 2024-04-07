import { IHabit } from "../../Interfaces/Habit/IHabit";
import { IDayRepository } from "../../Interfaces/Repositories/DayRepository";
import { IHabitRepository } from "../../Interfaces/Repositories/HabitRepository";

interface IRequest {
  date: Date;
  weekDay: number;
  user_id: string;
  dateFormatted: Date;
}

interface IResponse {
  habits: IHabit[] | null;
  completedHabits: string[];
}

export class GetHabitsOnDateUsecase {
  constructor(
    private habitRepository: IHabitRepository,
    private dayRepository: IDayRepository
  ) {}

  async execute({ date, weekDay, user_id, dateFormatted }: IRequest): Promise< IResponse > {
    try {
      const habits = await this.habitRepository.getHabitsOnDate(
        date,
        weekDay,
        user_id
      )
      const day = await this.dayRepository.findByDate(dateFormatted);      
      const dayHabits = day?.DayHabit?.map(habit => habit.habitId);

      return {
        habits,
        completedHabits: dayHabits || []
      }
    } catch (error: any) {
      throw new Error("erro inesperado" + error);
    }
  }
}