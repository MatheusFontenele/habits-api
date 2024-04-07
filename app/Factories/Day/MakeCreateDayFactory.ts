import { DayRepository } from "../../Repositories/DayRepository";
import { CreateDayUsecase } from "../../UseCases/Day/CreateDayUsecase";

export function MakeCreateDayFactory() {
    const dayRepository = new DayRepository();
    const dayUsecase = new CreateDayUsecase(dayRepository);
    return dayUsecase;
}