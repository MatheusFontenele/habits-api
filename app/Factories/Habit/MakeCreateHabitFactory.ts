import { HabitRepository } from "../../Repositories/HabitRepository";
import { CreateHabitUsecase } from "../../UseCases/Habit/CreateHabitUsecase";

export function makeCreateHabitFactory() {
    const habitRepository = new HabitRepository()
    const createHabitUsecase = new CreateHabitUsecase(habitRepository)

    return createHabitUsecase
}