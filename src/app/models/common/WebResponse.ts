export class WebResponse {
    message: string;
    data: any[];

    constructor(
        message: string,
        data: any[]
    ) {
        this.message = message;
        this.data = data;
    }
}