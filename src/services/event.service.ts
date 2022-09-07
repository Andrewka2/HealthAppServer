import { AppDataSource } from '../database/index';
import { EventDataEntity } from '../entity/eventData.entity';
import { EventData } from '../interfaces/event.interface';

class EventDataService {
  public EventData = EventDataEntity;
  public async saveEventData(EventDataObj: EventData): Promise<any> {

    let EventDataRepository = await AppDataSource.getRepository(EventDataEntity)
    const createdEventData = await EventDataRepository.save(EventDataObj)
    return createdEventData;
  }
}

export default EventDataService;
