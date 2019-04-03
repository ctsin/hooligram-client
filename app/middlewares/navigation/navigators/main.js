import { createStackNavigator } from 'react-navigation'
import { colors } from 'hg/constants'
import {
  HOME
} from 'hg/middlewares/navigation/routes'
import {
  Contact,
  ContactCreate,
  GroupCreate,
  Home
} from 'hg/screens'

export default createStackNavigator(
  {
    Contact,
    ContactCreate,
    GroupCreate,
    Home
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.BOLD_GREEN
      },
      headerTintColor: colors.WHITE,
      headerTitleStyle: {
        color: colors.WHITE
      }
    },
    initialRouteName: HOME
  }
)
