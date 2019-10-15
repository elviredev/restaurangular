import { EveningEvent } from './evening-event.interface';

// Type Schedule
export interface Schedule {
    version: string;
    events: EveningEvent[];
}