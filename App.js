import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import ColumnScreen from './components/Column';
import RowScreen from './components/Row';
import AbsoluteScreen from './components/Absolute';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Column: {
    screen: ColumnScreen,
  },
  Row: {
    screen: RowScreen,
  },
  Absolute: {
    screen: AbsoluteScreen,
  },
});