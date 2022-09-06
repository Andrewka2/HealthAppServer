import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import CalendarService from '../services/calendar.service';

class CalendarController {
  public calendarService = new CalendarService();

  public getDefaultData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData = req.body;
      const calendarDefaultInfo = await this.calendarService.getDefautInfo();
      res.status(201).json({ data: calendarDefaultInfo, message: 'info gotten' });
    } catch (error) {
      next(error);
    }
  };

  
}

export default CalendarController;
