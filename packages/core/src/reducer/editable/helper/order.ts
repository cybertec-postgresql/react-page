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

import { CellOrder } from '../../../types/editable';

const computeOrder = ({
  rows,
  cells,
  id,
  content: { plugin: { name = '' } = {} } = {},
  order,
}: {
  // tslint:disable-next-line:no-any
  rows: Array<any>;
  // tslint:disable-next-line:no-any
  cells: Array<any>;
  id: string;
  // tslint:disable-next-line:no-any
  content?: { plugin?: any };
  order?: number;
}) =>
  [
    [
      {
        id,
        isLeaf: Boolean(name),
        order,
      },
    ],
    ...(rows || []).map(computeOrder),
    ...(cells || []).map(computeOrder),
    // tslint:disable-next-line:no-any
  ].reduce((p: Array<any>, n: Array<any>) => [...p, ...n], [])
  .sort((co1: CellOrder, co2: CellOrder ) => co1.order - co2.order);

// tslint:disable-next-line:no-any
export const cellOrder = (os: Array<any>) =>
  os
    .map(computeOrder)
    // tslint:disable-next-line:no-any
    .reduce((p: Array<any>, n: Array<any>) => [...p, ...n], []);
