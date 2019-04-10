/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */
import * as React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Drawer from '@material-ui/core/Drawer';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import { isInsertMode } from '@cybertec/ory-editor-core/lib/selector/display';
import { Editor } from '@cybertec/ory-editor-core/lib';
import { Plugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

import { WidgetGroup } from '../../Provider';

import Tabs from './Tabs';

const styles = ({}) => ({
  drawer: {
    flexShrink: 0,
    minHeight: '400px',
  },
});

type Props = {
  isInsertMode: boolean;
  editor: Editor;
  noPluginFoundContent: JSX.Element | string;
  drawerWidth: string;
  widgetGroups?: WidgetGroup[];
} & WithStyles;

interface ToolbarState {
  isSearching: boolean;
  searchText: string;
  activeTab: number;
}

class Toolbar extends React.Component<Props, ToolbarState> {
  static defaultProps = {
    isInsertMode: true,
    noPluginFoundContent: 'No plugins found',
  };

  public readonly state = {
    isSearching: false,
    searchText: '',
    activeTab: 0,
  };

  input: HTMLInputElement;

  componentDidUpdate() {
    const input = this.input;
    if (input && this.props.isInsertMode && input instanceof HTMLElement) {
      setTimeout(() => {
        const e = input.querySelector('input');
        if (e) {
          e.focus();
        }
      }, 100);
    }
  }

  onRef = component => {
    this.input = component;
  }

  onSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      this.setState({
        isSearching: target.value.length > 0,
        searchText: target.value,
      });
    }
  }

  searchFilter = (plugin: Plugin) => {
    return (
      plugin &&
      plugin.name &&
      plugin.name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    );
  }

  render() {
    const {
      editor: { plugins },
      classes,
      drawerWidth,
      widgetGroups,
    } = this.props;

    const content = plugins.plugins.content;

    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        style={{
          width: drawerWidth,
        }}
        ModalProps={{
          container: document.getElementById('editorUI-drawer-container'),
          style: { position: 'absolute' },
        }}
        PaperProps={{ style: { position: 'absolute', height: '100%', width: drawerWidth, } }}
        BackdropProps={{ style: { position: 'absolute' } }}
        anchor="right"
      >
        <Tabs content={content} widgetGroups={widgetGroups} />
      </Drawer>
    );
  }
}

const mapStateToProps = createStructuredSelector({ isInsertMode });

export default connect(mapStateToProps)(withStyles(styles)(Toolbar));
