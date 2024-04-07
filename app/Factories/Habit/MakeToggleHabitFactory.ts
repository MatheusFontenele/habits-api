import { DayHabitRepository } from "../../Repositories/DayHabitRepository";
import { DayRepository } from "../../Repositories/DayRepository";
import { ToggleHabitUsecase } from "../../UseCases/Habit/ToggleHabitUsecase";

export function makeToggleHabitFactory() {
    const dayRepository = new DayRepository();
    const dayHabitRepository = new DayHabitRepository();
    const toggleHabitUsecase = new ToggleHabitUsecase(
        dayRepository,
        dayHabitRepository
    );
    return toggleHabitUsecase;
}