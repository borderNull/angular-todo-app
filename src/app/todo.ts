export class Todo {
    text: string = '';
    completed: boolean = false;
    important: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
