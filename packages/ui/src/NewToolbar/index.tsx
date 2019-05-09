import * as React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';

import { editMode } from '@cybertec/ory-editor-core/lib/actions/display';
import { isInsertMode } from '@cybertec/ory-editor-core/lib/selector/display';
import { Editor } from '@cybertec/ory-editor-core/lib';
import { Plugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

import Tabs from './Tabs';
import Provider from '../Provider/index';
import { ProviderProps, WidgetGroup } from './../Provider/index';

const styles = (theme: Theme) => ({
  drawer: {
    flexShrink: 0,
  },
  closeButton: {
    position: 'absolute' as 'absolute',
    right: -theme.spacing.unit * 2.5,
    top: 0,
    color: theme.palette.grey[500],
    overflow: 'visible',
    background: 'rgb(249, 249, 249)',
    '&:hover': {
      background: 'rgb(249, 249, 249)',
    },
  },
});

export interface InnerActionProps {
  editMode: React.MouseEventHandler<HTMLElement>;
}

type Props = {
  isInsertMode: boolean;
  editor: Editor;
  noPluginFoundContent: JSX.Element | string;
  drawerWidth: string;
  widgetGroups?: WidgetGroup[];
} & WithStyles<typeof styles> & InnerActionProps;

interface State {
  activeTab: number;
}

class Raw extends React.Component<Props, State> {
  static defaultProps = {
    noPluginFoundContent: 'No widgets found',
    drawerWidth: '400px',
  };

  filter = (plugin: Plugin): boolean => {
    return (
      plugin &&
      !!plugin.name &&
      !!plugin.IconComponent
    );
  }

  render() {
    const {
      editor: { plugins },
      widgetGroups,
      drawerWidth,
      classes,
    } = this.props;
    const content = plugins.plugins.content.filter(this.filter);
    const layout = plugins.plugins.layout.filter(this.filter);

    return (
      <Drawer
        variant="persistent"
        className="ory-toolbar-drawer"
        open={this.props.isInsertMode}
        PaperProps={{ style: { width: drawerWidth, maxWidth: drawerWidth, overflow: 'inherit' } }}
      >
        <IconButton aria-label="Close" className={classes.closeButton} onClick={this.props.editMode}>
          <CloseIcon />
        </IconButton>
        <Tabs content={content} layout={layout} widgetGroups={widgetGroups} />
      </Drawer>
    );
  }
}

const mapStateToProps = createStructuredSelector({ isInsertMode });
const mapDispatchToProps = { editMode };

const Decorated = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Raw));

const Toolbar: React.SFC<ProviderProps> = props => (
  <Provider {...props}>
    <Decorated {...props} />
  </Provider>
);

export default Toolbar;
