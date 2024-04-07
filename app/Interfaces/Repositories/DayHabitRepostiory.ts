export interface IDayHabitRepository {
  create(data: any): Promise<void>;
  findByHabitIdAndDayId(habitId: string, dayId: string): Promise<any>;
  delete(id: string): Promise<void>;
}