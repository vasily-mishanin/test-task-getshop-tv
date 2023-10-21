export type SplitScreenProps = {
  children: JSX.Element[];
  leftWeight?: number | string;
  rightWeight?: number | string;
};

export function SplitScreen({
  children,
  leftWeight,
  rightWeight,
}: SplitScreenProps) {
  const [leftComponent, rightComponent] = children;

  const leftWidth =
    typeof leftWeight === 'string'
      ? { width: leftWeight }
      : { flex: `${leftWeight}` };

  const rightWidth =
    typeof rightWeight === 'string'
      ? { width: rightWeight }
      : { flex: `${rightWeight}` };

  return (
    <div style={{ display: 'flex' }}>
      <div style={leftWidth ? leftWidth : {}}>{leftComponent}</div>
      <div style={rightWidth ? rightWidth : {}}>{rightComponent}</div>
    </div>
  );
}
