import Reports from '../screens/app/Reports';
import Expenses from '../screens/app/Expenses';
import Home from '../screens/app/Home';
import Interviews from '../screens/app/Interviews';
import Menu from '../screens/app/Menu';
import Sales from '../screens/app/Sales';
import Customer from '../screens/app/Customer';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ProfitReports from '../screens/app/Reports/ProfitLossReport';

const Screens = {
  Login: Login,
  Register: Register,
  Home: Home,
  Sales: Sales,
  Menu: Menu,
  Expenses: Expenses,
  Reports: Reports,
  Interviews: Interviews,
  Customer: Customer,
  ProfitReports:ProfitReports
};

export default Screens;
