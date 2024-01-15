export class Toast {
    headerText: string;
    className: string;
    message: string;

    constructor(
        headerText: string,
        className: string,
        message: string,
    ) {
        this.headerText = headerText;
        this.className = className;
        this.message = message;
    }
}