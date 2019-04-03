import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';

const VerticalTabs = withStyles(({}) => ({
  flexContainer: {
    flexDirection: 'column',
  },
  indicator: {
    display: 'none',
  },
}))(Tabs);

export default VerticalTabs;
