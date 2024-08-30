export interface ObserverInterface {
    update(data: any): void;
}

class Observer implements ObserverInterface {
    update(data: any) {
        console.log(`Observer received data: ${data}`);
    }
}

export default Observer;
