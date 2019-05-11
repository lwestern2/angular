export class Messages {
    public id: number;
    public subject: string;
    public msgText: string;
    public sender: string;

    constructor(id: number, subject: string, msg: string, sender: string) {
        this.id = id;
        this.subject = subject;
        this.msgText = msg;
        this.sender = sender;
    }
}