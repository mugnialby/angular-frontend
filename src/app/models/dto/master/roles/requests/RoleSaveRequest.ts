export class RoleSaveRequest {
    roleName: string;
    createdBy: string;

    constructor(
        roleName: string,
        createdBy: string
    ) {
        this.roleName = roleName;
        this.createdBy = createdBy;
    }
}