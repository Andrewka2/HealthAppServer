import 'dotenv/config';
import App from './app';
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import CalendarRoute from './routes/calendar.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([new CalendarRoute(), new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
