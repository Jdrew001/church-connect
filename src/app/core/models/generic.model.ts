export class GenericResponse<T> {
    message: string;
    status: number;
    error: boolean | undefined = false;
    data?: T;

    constructor(message: string, status: number, error?: boolean, data?: T) {
        this.message = message;
        this.status = status;
        this.error = error;
        this.data = data;
    } 
}