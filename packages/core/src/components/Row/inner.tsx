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

import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

import Cell from '../Cell';
import { ComponetizedRow } from '../../types/editable';

import { ContentPlugin, LayoutPlugin } from '../../service/plugin/classes';
import defaultPlugin from '../../service/plugin/default';

import { createDefaultCell } from '../../actions/cell';

class Inner extends React.PureComponent<ComponetizedRow & {
  createDefaultCell(plugin: ContentPlugin | LayoutPlugin, row: string): void;
}> {
  componentDidMount() {
    this.createDefaultCell();
  }

  componentDidUpdate() {
    this.createDefaultCell();
  }

  createDefaultCell = () => {
    const { node, id } = this.props;
    if (!node) {
      return;
    }

    const { cells = [] } = node;
    if (cells.length === 0) {
      this.props.createDefaultCell(new ContentPlugin(defaultPlugin), id);
    }
  }

  render() {
    const {
      editable,
      ancestors,
      node: { id, hover, cells = [], hasInlineChildren },
      containerHeight,
      blurAllCells,
      containerWidth,
    } = this.props;

    return (
      <Grid
        container={true}
        spacing={8}
        className={classNames('ory-row', {
          'ory-row-is-hovering-this': Boolean(hover),
          [`ory-row-is-hovering-${hover || ''}`]: Boolean(hover),
          'ory-row-has-floating-children': hasInlineChildren,
        })}
        onClick={blurAllCells}
      >
        {cells.map((c: string) => (
          <Cell
            rowWidth={containerWidth}
            rowHeight={containerHeight}
            ancestors={[...ancestors, id]}
            editable={editable}
            key={c}
            id={c}
          />
        ))}
      </Grid>
    );
  }
}

const mapDispatchToProps = { createDefaultCell };

export default connect(
  null,
  mapDispatchToProps
)(Inner);
