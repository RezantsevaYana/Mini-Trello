export type ColumnCode = 'todo' | 'progress' | 'done';

export interface Column {
  id: number;
  title: string;
  code: ColumnCode;
}
