export type SearchMode =
    | "startsWith"
    | "contains"
    | "regex";

export interface LookupItem {

    id: string;

    label: string;

}

export interface LookupRequest {

    text: string;

    mode: SearchMode;

    limit: number;

}

export interface LookupFieldProps {

    label: string;

    placeholder?: string;

    value: LookupItem | null;

    onChange: (item: LookupItem | null) => void;

    search: (
        request: LookupRequest
    ) => Promise<LookupItem[]>;

    limit?: number;

    defaultSearchMode?: SearchMode;

    allowedSearchModes?: SearchMode[];

}