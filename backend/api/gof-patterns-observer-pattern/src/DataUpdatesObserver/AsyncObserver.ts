import Observer from '../DataUpdatesObserver/Observer';

class AsyncObserver extends Observer {
    update(data: any) {
        // Microtask: Immediate, lightweight action
        Promise.resolve().then(() => console.log(`Processing data in microtask: ${data}`));

        // Macrotask: More substantial, potentially time-consuming action
        setTimeout(() => console.log(`Processing data in macrotask: ${data}`), 1000);
    }
}

export default AsyncObserver;
