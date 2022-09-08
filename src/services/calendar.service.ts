import { CalendarEntity } from '../entity/calendar.entity';
import { AppDataSource } from '../database/index';

class CalendarService {
  public calendar = CalendarEntity;
  public async createCalendarItem(calendarItemCreateData) {
    let calendarRepository = await AppDataSource.getRepository(CalendarEntity)
    const createdCalendar = await calendarRepository.save({
      date: calendarItemCreateData.date,
      name: calendarItemCreateData.name,
      procedure: calendarItemCreateData.procedure,
      emergency: calendarItemCreateData.emergency,
      address: calendarItemCreateData.address,
      time: calendarItemCreateData.time,
      cabinet: calendarItemCreateData.cabinet,
      position: calendarItemCreateData.position,
      height: calendarItemCreateData.height,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return createdCalendar;
  }

  public async getDefautInfo(): Promise<any> {
    let calendarRepository = await AppDataSource.getRepository(CalendarEntity)
    let calendars = await calendarRepository.find()
    return JSON.stringify(calendars)
  }

  public async updateCalendarInfo(userInfo) {
    console.log(userInfo)
    let calendarRepository = await AppDataSource.getMongoRepository(CalendarEntity)
    let calendar = await calendarRepository.findOne({
      where: { name: userInfo.name }
    })
    for (let prop in userInfo) {
      calendar[prop] = userInfo[prop]
    }
    await calendarRepository.update({ name: userInfo.name }, calendar)
  }

  public async deleteCalendarItemService(calendarDeleteData) {
    let calendarRepository = await AppDataSource.getMongoRepository(CalendarEntity)
    let test = await calendarRepository.findOne({ where: { id: calendarDeleteData.id } })
    await calendarRepository.deleteOne({
      id: calendarDeleteData.id
    })
  }
}

export default CalendarService;
