import type { ColumnCode } from './column';

export interface Task {
  id: number;
  title: string;
  description?: string;
  columnCode: ColumnCode;
}
