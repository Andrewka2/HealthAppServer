import { CalendarEntity } from '../entity/calendar.entity';
import { AppDataSource } from '../database/index';

class CalendarService {
  public calendar = CalendarEntity;
  public async getDefautInfo(): Promise<any> {

    let data = JSON.stringify({
      "2022-09-04": [{
        id: 1, procedure: "Плановий огляд", emergency: "Цеентральна лікарня", address: "вул. Перемоги 21",
        name: "Петренко Петро Петрович", time: "10:20", cabinet: "322", position: 'педіатр', height: 110, day: '2022-09-04'
      },
      { id: 2, name: 'Item for 2022-09-04 #110', height: 110, day: '2022-09-04' },
      { id: 3, name: 'Item for 2022-09-04 #1', height: 117, day: '2022-09-04' },
      { id: 4, name: 'Item for 2022-09-04 #2', height: 113, day: '2022-09-04' }],
      "2022-09-06": [{ name: '', height: 110, day: '2022-09-04' },
      { id: 1, name: 'Item for 2022-09-04 #110', height: 110, day: '2022-09-04' },
      { id: 2, name: 'Item for 2022-09-04 #1', height: 117, day: '2022-09-04' },
      { id: 3, name: 'Item for 2022-09-04 #2', height: 113, day: '2022-09-04' }]
    })

    let calendarRepository = await AppDataSource.getRepository(CalendarEntity)
    const createdCalendar = await calendarRepository.save({
      date: '2022-09-04',
      name: 'Петренко Петро Петрович',
      procedure: 'Плановий огляд',
      emergency: 'Цеентральна лікарня',
      address: 'вул. Перемоги 21',
      time: '10:20',
      cabinet: '322',
      position: 'педіатр',
      height: 110,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return createdCalendar;
  }
}

export default CalendarService;
