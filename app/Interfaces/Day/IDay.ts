type IDayHabit = {
  id: string;        
  habitId: string; 
  dayId: string;   
  created_at: Date;
  updated_at: Date;
}

export interface IDay {
  id: string;
  date: Date;
  DayHabit?: IDayHabit[] | null;
}

