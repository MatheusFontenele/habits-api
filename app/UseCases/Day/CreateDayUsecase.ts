import { IDayRepository } from "../../Interfaces/Repositories/DayRepository";

export class CreateDayUsecase {
    constructor(private dayRepository: IDayRepository) {}
    async execute(data: Date) {
      return await this.dayRepository.create(data);
    }
}