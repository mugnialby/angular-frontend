export class RolePagingRequest {
    roleName: string;
    status: boolean;
    page: number;
    pageSize: number;

    constructor(
        roleName: string,
        status: boolean,
        page: number,
        pageSize: number
    ) {
        this.roleName = roleName;
        this.status = status;
        this.page = page;
        this.pageSize = pageSize;
    }
}