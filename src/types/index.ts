export type Order = 'asc' | 'desc';

export type Value = 'popular' | 'name'

export interface ErrorStatus {
    pending: boolean;
    error: Object | null ;
    success: boolean
}

export interface TableHeaderProps {
    valueToOrderBy: Value;
    orderDirection: Order;
    handleRequestSort: (event: React.MouseEvent<unknown>, property: Value) => void;
}
export type Tag = {
    collectives?: Object[];
    count: number;
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    name: string;
    last_activity_date?: Date;
    synonyms?: string[];
    user_id?: number;
};

export interface tagsInitialState {
    tags: Tag[];
    request?: ErrorStatus;
}

export type Action = {type: string; payload?: Tag[]; error?: Object}