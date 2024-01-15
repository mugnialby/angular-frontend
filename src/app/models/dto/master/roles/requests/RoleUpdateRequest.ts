export class RoleUpdateRequest {
    id: number;
    roleName: string;
    status: boolean;
    modifiedBy: string;

    constructor(
        id: number,
        roleName: string,
        status: boolean,
        modifiedBy: string
    ) {
        this.id = id;
        this.roleName = roleName;
        this.status = status;
        this.modifiedBy = modifiedBy;
    }
}