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
