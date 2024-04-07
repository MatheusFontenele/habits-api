import { IDayHabitRepository } from "../../Interfaces/Repositories/DayHabitRepostiory";
import { IDayRepository } from "../../Interfaces/Repositories/DayRepository";

interface IToggleHabitDTO {
  habitId: string;
  date: Date;
}

export class ToggleHabitUsecase {
  constructor(
    private dayRepository: IDayRepository,
    private dayHabitRepository: IDayHabitRepository
  ) {}

  async execute({date, habitId}: IToggleHabitDTO): Promise<void> {
    let day = await this.dayRepository.findByDate(date);
    if(!day) {
      day = await this.dayRepository.create(date);
    }
    
    const dayHabit = await this.dayHabitRepository.findByHabitIdAndDayId(habitId, day.id);
    if(dayHabit) {
      await this.dayHabitRepository.delete(dayHabit.id);
      return;
    } else {
      await this.dayHabitRepository.create({habit_Id: habitId, day_Id: day.id});
    }    
  }
}