import { IHabit } from "../../Interfaces/Habit/IHabit";
import { IHabitDTO } from "../../Interfaces/Habit/IHabitDTO";
import { IHabitRepository } from "../../Interfaces/Repositories/HabitRepository";

export class CreateHabitUsecase {
  constructor(private habitRepository: IHabitRepository) {}

  async execute(data: IHabitDTO): Promise<IHabit> {
    return await this.habitRepository.create(data)
  }
}