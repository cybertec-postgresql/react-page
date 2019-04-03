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
 * @author Agustin Ramirez <agustin.ramirez@cybertec.at>
 *
 */
import * as React from 'react';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import { Editor, Editable } from '@cybertec/ory-editor-core/lib';
import { isInsertMode } from '@cybertec/ory-editor-core/lib/selector/display';

import Provider, { ProviderProps }  from '../Provider/index';

import Toolbar from './Toolbar';

type Props = {
  isInsertMode: boolean;
  editor: Editor;
  drawerWidth: string;
  widgetGroups?: string[];
  editableID?: string;
  onChangeEditable?: (state: any) => void;
} & WithStyles<typeof styles>;

interface RawState {
  isSearching: boolean;
  searchText: string;
}

const styles = ({}) => ({
  root: {
    display: 'flex',
  },
  drawerContainer: {
    position: 'relative' as 'relative',
  },
  content: {
    flexGrow: 1,
    maxHeight: `${window.innerHeight - 100}px`,
    overflowY: 'scroll' as 'scroll',
  },
});

class EditorUI extends React.Component<Props, RawState> {
  static defaultProps = {
    noPluginFoundContent: 'No plugins found',
    drawerWidth: '425px',
  };

  input: HTMLInputElement;

  render() {
    const {
      classes,
      editor,
      editableID,
      onChangeEditable,
      drawerWidth,
      widgetGroups,
    } = this.props;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <Editable
            editor={editor}
            id={editableID}
            onChange={onChangeEditable}
          />
        </main>
        <section id="editorUI-drawer-container" className={classes.drawerContainer}>
          <Toolbar editor={editor} drawerWidth={drawerWidth} widgetGroups={widgetGroups} />
        </section>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({ isInsertMode });

const Decorated = connect(mapStateToProps)(withStyles(styles)(EditorUI));

const EditorUIComponent: React.SFC<ProviderProps> = props => (
  <Provider {...props}>
    <Decorated {...props} />
  </Provider>
);

export default EditorUIComponent;
