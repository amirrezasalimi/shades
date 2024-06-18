export default interface ListResponse<T>{
    items: T[];
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
}