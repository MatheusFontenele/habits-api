import { DayRepository } from "../../Repositories/DayRepository";
import { HabitRepository } from "../../Repositories/HabitRepository";
import { GetHabitsOnDateUsecase } from "../../UseCases/Habit/GetHabitsOnDayUsecase";

export function makeGetHabitsOnDateFactory() {
    const habitRepository = new HabitRepository();
    const dayRepository = new DayRepository();
    const getHabitsOnDayUsecase = new GetHabitsOnDateUsecase(
        habitRepository,
        dayRepository
    );
    return getHabitsOnDayUsecase;
}