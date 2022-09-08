import { Router } from 'express';
import CalendarController from '../controllers/calendar.controller';
import Route from '../interfaces/routes.interface';

class CalendarRoute implements Route {
  public router = Router();
  public calendarController = new CalendarController()
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/getDefaultData',  this.calendarController.getDefaultData);
    this.router.post('/updateCalendarData', this.calendarController.updateCalendarData);
    this.router.post('/deleteCalendarItem', this.calendarController.deleteCalendarItem);
    this.router.post('/createCalendarItem', this.calendarController.createCalendarItem);
  }
}

export default CalendarRoute;
