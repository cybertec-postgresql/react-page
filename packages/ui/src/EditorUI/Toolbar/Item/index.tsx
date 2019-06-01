import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { Plugin } from '@cybertec/react-page-core/lib/service/plugin/classes';

import draggable from '../Draggable/index';

const styles = ({}) => ({
  item: {
    flexDirection: 'column' as 'column',
    background: '#fff',
    textAlign: 'center' as 'center',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 1px',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'grab',
    },
  },
});

export interface ItemProps {
  plugin: Plugin;
  // tslint:disable-next-line:no-any
  insert: any;
}

class Item extends React.Component<ItemProps & WithStyles<typeof styles>> {
  render() {
    const { classes, plugin, insert } = this.props;

    if (!plugin.IconComponent && !plugin.text) {
      // logger.warn('Plugin text or plugin icon missing', plugin)
      return null;
    }

    const Draggable = draggable(plugin.name);

    // not using css modules here because they don't work with svg icons
    return (
      <Draggable insert={insert}>
        <Tooltip
          placement="bottom"
          title="Drag me"
        >
          <ListItem className={classes.item}>
            <Avatar children={plugin.IconComponent} />
            <ListItemText primary={plugin.text} />

          </ListItem>
        </Tooltip>
      </Draggable>
    );
  }
}

export default withStyles(styles)(Item);
