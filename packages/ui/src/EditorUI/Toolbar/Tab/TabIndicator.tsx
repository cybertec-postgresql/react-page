import { withStyles } from '@material-ui/core/styles';

import Tab from '@material-ui/core/Tab';

const TabIndicator = withStyles(({}) => ({
  tabRoot: {
    minWidth: 72,
  },
  tabSelected: {
    backgroundColor: 'rgb(249, 249, 249)',
  },
}))(Tab);

export default TabIndicator;
