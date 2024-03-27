/* eslint-disable react/require-default-props */

import {Property} from 'csstype';
import {ReactNode} from 'react';

interface GridProps {
  children: ReactNode;
  gridTemplateColumns: Property.GridTemplateColumns;
  gridTemplateRows?: Property.GridTemplateRows;
  gap?: Property.Gap;
  paddingHorizontal?: Property.Padding;
  paddingVertical?: Property.Padding;
}

function Grid({
  children,
  gridTemplateColumns,
  gridTemplateRows,
  gap,
  paddingHorizontal,
  paddingVertical,
}: GridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns,
        gridTemplateRows,
        gap: `${gap}px`,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
      }}
    >
      {children}
    </div>
  );
}

export default Grid;
