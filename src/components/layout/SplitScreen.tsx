export type SplitScreenProps = {
  fullHeight?: boolean;
  leftWeight?: number | string;
  rightWeight?: number | string;
  leftHeight?: number | string;
  rightHeight?: number | string;
  children: JSX.Element[];
};

export function SplitScreen({
  fullHeight,
  leftWeight,
  rightWeight,
  leftHeight,
  rightHeight,
  children,
}: SplitScreenProps) {
  const [leftComponent, rightComponent] = children;

  const leftWidth =
    typeof leftWeight === 'string'
      ? { width: leftWeight }
      : { flex: `${leftWeight}` };

  const rightWidth =
    typeof rightWeight === 'string'
      ? { width: leftWeight }
      : { flex: `${leftWeight}` };

  const heightL =
    typeof leftHeight === 'string'
      ? { height: leftHeight }
      : { flex: `${leftHeight}` };

  const heightR =
    typeof rightHeight === 'string'
      ? { height: rightHeight }
      : { flex: `${rightHeight}` };

  const leftSize = {
    ...(leftWeight ? leftWidth : {}),
    ...(leftHeight ? heightL : {}),
  };

  const rightSize = {
    ...(rightWeight ? rightWidth : {}),
    ...(rightHeight ? heightR : {}),
  };

  return (
    <div style={{ display: 'flex', height: fullHeight ? '100%' : '' }}>
      <div style={leftSize}>{leftComponent}</div>
      <div style={rightSize}>{rightComponent}</div>
    </div>
  );
}
