export class Roles {
    id: number;
    roleName: string;
    status: boolean;

    constructor(
        id: number,
        roleName: string,
        status: boolean
    ) {
        this.id = id;
        this.roleName = roleName;
        this.status = status;
    }
}