import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import CalendarService from '../services/calendar.service';

class CalendarController {
  public calendarService = new CalendarService();
  public getDefaultData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const calendarDefaultInfo = await this.calendarService.getDefautInfo();
      res.status(201).json({ data: calendarDefaultInfo, message: 'info gotten' });
    } catch (error) {
      next(error);
    }
  };
  public updateCalendarData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const calendarUpdateData = req.body;
      console.log(calendarUpdateData)
      const upDateStatus = await this.calendarService.updateCalendarInfo(calendarUpdateData);
      res.status(201).json({ message: 'info gotten' });
    } catch (error) {
      next(error);
    }
  }
  public deleteCalendarItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const calendarDeleteData = req.body;
      console.log(calendarDeleteData)
      const deleteStatus = await this.calendarService.deleteCalendarItemService(calendarDeleteData);
        console.log(calendarDeleteData);
      res.status(201).json({ message: 'info gotten' });
    } catch (error) {
      next(error);
    }
  }
  public createCalendarItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const calendarItemCreateData = req.body;
      console.log(calendarItemCreateData)
      const deleteStatus = await this.calendarService.createCalendarItem(calendarItemCreateData);
      res.status(201).json({ message: 'info gotten' });
    } catch (error) {
      next(error);
    }
  }
}

export default CalendarController;
