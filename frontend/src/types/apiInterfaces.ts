export interface LoginResponse {
    username: string;
    access: string;
    refresh: string;
}
export interface TestResponse {
    message: string;
}
export interface ProfileType {
    id: number;
    user: {
        username: string;
    };
    profile_picture: string;
    followers: number[];
    following: number[];
}
export interface PaginatedRippleetResponse {
    results: RippleetType[];
    next: string | null;
    previous?: string | null;
}
export interface RippleetType {
    id: number;
    author: string;
    content: string;
    created_at: string;
    updated_at: string;
    is_edited: boolean;
    likes_count: number;
    liked?: boolean;
    is_owner?: boolean;
}