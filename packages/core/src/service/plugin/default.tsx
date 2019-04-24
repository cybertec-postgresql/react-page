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
import { ContentPluginProps, ContentPluginConfig } from './classes';

const Default: React.SFC<ContentPluginProps<{ value: string }>> = ({
  state: { value },
}) => <div>{value}</div>;

const _defaultContentPlugin: ContentPluginConfig<{}> = {
  Component: Default,
  name: 'ory/editor/core/default',
  version: '0.0.1',
  createInitialState: () => ({
    value:
      'No widget here. Drag widget from Widget Toolbar',
  }),
};

export {
  Default as DefaultComponent
};

export default _defaultContentPlugin;
