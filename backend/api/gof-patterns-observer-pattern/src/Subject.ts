import { ObserverInterface } from './DataUpdatesObserver/Observer';
interface SubjectInterface {
    attach(observer: ObserverInterface): void;
    detach(observer: ObserverInterface): void;
    notify(data: any): void;
}

class Subject implements SubjectInterface {
    private observers: ObserverInterface[] = [];
    constructor() {
        this.observers = [];
    }

    attach(observer: ObserverInterface) {
        this.observers.push(observer);
    }

    detach(observer: ObserverInterface) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data: any) {
        this.observers.forEach((observer) => observer.update(data));
    }
}

export default Subject;
