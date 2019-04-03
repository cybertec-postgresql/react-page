import * as React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Drawer from '@material-ui/core/Drawer';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { isInsertMode } from '@cybertec/ory-editor-core/lib/selector/display';
import { Editor } from '@cybertec/ory-editor-core/lib';
import { Plugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

import Tabs from './Tabs';
import Provider from '../Provider/index';
import { ProviderProps } from './../Provider/index';

const styles = ({}) => ({
  drawer: {
    flexShrink: 0,
  },
});

type Props = {
  isInsertMode: boolean;
  editor: Editor;
  noPluginFoundContent: JSX.Element | string;
  drawerWidth: string;
  widgetGroups?: string[];
} & WithStyles<typeof styles>;

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
    } = this.props;
    const content = plugins.plugins.content.filter(this.filter);
    const layout = plugins.plugins.layout.filter(this.filter);

    return (
      <Drawer
        variant="persistent"
        className="ory-toolbar-drawer"
        open={this.props.isInsertMode}
        PaperProps={{ style: { width: drawerWidth, } }}
      >
        <Tabs content={content} layout={layout} widgetGroups={widgetGroups} />
      </Drawer>
    );
  }
}

const mapStateToProps = createStructuredSelector({ isInsertMode });

const Decorated = connect(mapStateToProps)(withStyles(styles)(Raw));

const Toolbar: React.SFC<ProviderProps> = props => (
  <Provider {...props}>
    <Decorated {...props} />
  </Provider>
);

export default Toolbar;
