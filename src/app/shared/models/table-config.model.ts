export interface ColumnConfig {
    id: string;
    label: string;
    sort: boolean;
    display: boolean;
    width: number;
    columnTooltip?: string;
}

export interface TableConfig {
    columns: Array<ColumnConfig>;
    search: boolean;
}