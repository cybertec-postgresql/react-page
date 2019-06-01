import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { Plugin } from '@cybertec/react-page-core/lib/service/plugin/classes';

import draggable from '../Draggable/index';

import InformationDialog from './InformationDialog';

const styles = (theme: Theme) => ({
  item: {
    flexDirection: 'column' as 'column',
    background: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 1px',
    textAlign: 'center' as 'center',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'grab',
    },
  },
  itemAvatar: {
    margin: '0 auto',
  },
  information: {
    textAlign: 'right' as 'right',
  },
});

export interface ItemProps {
  plugin: Plugin;
  // tslint:disable-next-line:no-any
  insert: any;
}

interface ItemState {
  openInformationDialog: boolean;
  description?: string;
}

class Item extends React.Component<
  ItemProps & WithStyles<typeof styles>,
  ItemState
> {
  public state: ItemState  = {
    openInformationDialog: false,
  };

  public handleOpenInformationDialog = () => {
    if (typeof this.props.plugin.handleMoreInformation === 'function') {
      this.props.plugin.handleMoreInformation(this.props.plugin.name).then(description => {
        this.setState({
          openInformationDialog: true,
          description,
        });
      });
    }
  };

  public handleCloseInformationDialog = () => {
    this.setState({
      openInformationDialog: false,
    });
  };

  render() {
    const { classes, plugin, insert } = this.props;
    const { openInformationDialog, description } = this.state;

    if (!plugin.IconComponent && !plugin.text) {
      // logger.warn('Plugin text or plugin icon missing', plugin)
      return null;
    }

    const Draggable = draggable(plugin.name);

    return (
      <Draggable insert={insert}>
        <InformationDialog
          open={openInformationDialog}
          plugin={plugin}
          description={description}
          handleClose={this.handleCloseInformationDialog}
        />

        <ListItem className={classes.item}>
          <Tooltip placement="bottom" title="Drag me">
            <div>
              <Avatar
                children={plugin.IconComponent}
                className={classes.itemAvatar}
              />
              <ListItemText primary={plugin.text} />
            </div>
          </Tooltip>
          <Tooltip placement="bottom" title="Information">
            <IconButton
              aria-label="Information"
              onClick={this.handleOpenInformationDialog}
            >
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </ListItem>
      </Draggable>
    );
  }
}

export default withStyles(styles)(Item);
