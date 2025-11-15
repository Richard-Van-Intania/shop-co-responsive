export const { format: formatNumber } = Intl.NumberFormat("en-US", {
  style: "decimal",
  useGrouping: true,
});

export function debugClicked(message: string): void {
  alert(message);
}
