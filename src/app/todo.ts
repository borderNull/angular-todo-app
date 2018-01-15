export class Todo {
    text: string = '';
    completed: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
