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

import { Cell, Row } from '../../../types/editable';

const computeRowParent = (a: Row, parentId?: string): Row => {
  const { cells = [], ...props } = a;
  const pId = parentId;

  let newCells: Cell[] = [];
  if (cells.length) {
    newCells = cells.map((c: Cell, k: number) =>
      computeCellParent(c, pId)
    );
  }

  return {
    ...props,
    ...{ cells: newCells },
  };
};

const computeCellParent = (a: Cell, parentId?: string): Cell => {
  const { rows = [], ...props } = a;

  let pId = parentId;

  let newRows: Row[];
  if (rows.length) {
    newRows = rows.map((r: Row, k: number) =>
      computeRowParent(r, a.id)
    );
  }

  delete props.parent; // eslint-disable-line prefer-reflect
  return {
    parent: pId,
    ...props,
    ...{ rows: newRows },
  };
};

export const computeDropParent = (c: Cell): Cell => computeCellParent(c);
