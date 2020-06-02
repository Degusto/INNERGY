export function exists<T>(array: T[], element: T): boolean {
  return array.indexOf(element) > -1;
}
