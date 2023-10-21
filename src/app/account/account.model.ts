export interface Account {
    id?: number | null,
    email?: string | null,
    username?: string | null,
    password?: string | null,
    valid?: boolean | null,
    expireAt?: any
}