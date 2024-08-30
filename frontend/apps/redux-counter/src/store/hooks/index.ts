import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState, AppStore } from '@/store';

/**
 * Custom Hooks with Typed Access
 * Use throughout your app instead of plain `useDispatch` and `useSelector`.
 */
/**
 * useAppDispatch
 * A custom hook that wraps useDispatch from react-redux, providing a type-safe dispatch function (AppDispatch).
 * This ensures that when you dispatch actions, they are correctly typed.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/**
 * useAppSelector
 * A typed version of useSelector, ensuring the selector functions you use are type-safe based on RootState.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
/**
 * useAppStore
 * A custom hook that provides access to the AppStore, which might be useful for more advanced store interactions.
 */
export const useAppStore = () => useStore<AppStore>();

/**
 * Some examples where useAppSelector might come in handy:
 * 
 * 1. Accessing the entire Store object
 * - sometimes you might need to access the entire store object to perform operations that aren't directly related to dispatching actions or selecting state.
 * Example: Middleware Integration
 *  - If you want to dynamically add middleware or enhancers to your store, you might need direct access to the store.
 *  - Although it's uncommon to do this within a component, there might be advanced use cases where you need the store reference directly.
        const store = useAppStore();

        useEffect(() => {
            // Example: Logging the current state
            console.log('Current state:', store.getState());

            // Or subscribing to store changes directly
            const unsubscribe = store.subscribe(() => {
                console.log('State changed:', store.getState());
            });

            return () => {
                unsubscribe();
            };
        }, [store]);
 *
 * 2. Replacing Reducers Dynamically
 * - In large applications, you might want to load or unload reducers dynamically based on the current route or feature usage. This is often referred to as "code splitting" or "lazy loading" reducers.
 * Example: Dynamically Adding a Reducer
        const store = useAppStore();

        useEffect(() => {
            // Assuming you have a function to add a reducer
            function addReducer(key: string, reducer: Reducer) {
                store.replaceReducer(combineReducers({
                    ...store.getState(),
                    [key]: reducer,
                }));
            }

            // Add a reducer dynamically
            addReducer('dynamicSlice', dynamicSliceReducer);

            return () => {
                // Cleanup: remove the reducer if necessary
            };
        }, [store]);

 *
 * 3. Custom Store Enhancers
 * - Sometimes, you might want to directly interact with store enhancers, which are functions that wrap the store and extend its functionality (e.g., adding a logger, handling persistence).
 * Accessing Enhancer Methods
    const store = useAppStore();

    useEffect(() => {
        // Access an enhancer's method if it's been added to the store
        if (store.enhancerMethod) {
            store.enhancerMethod();
        }
    }, [store]);

 * 
 * 4. Complex State Management Operations
 * - When dealing with very complex state interactions, such as synchronizing the store with an external state or integrating with non-React environments (e.g., Web Workers), you might need to manage the store lifecycle more manually.
 * Example: Synchronizing State with Local Storage 
    const store = useAppStore();

        useEffect(() => {
            // Sync state to localStorage whenever it changes
            const unsubscribe = store.subscribe(() => {
                localStorage.setItem('appState', JSON.stringify(store.getState()));
            });

            return () => {
                unsubscribe();
            };
        }, [store]);


 * 5. Throttling State Updates
 * - If you want to throttle or debounce the frequency of state updates (e.g., to improve performance with high-frequency events like scroll or resize), you might need direct access to the store.
 * Example: Throttling Updates
        import { throttle } from 'lodash';

        const store = useAppStore();

        useEffect(() => {
            const throttledUpdate = throttle(() => {
                console.log('Throttled state:', store.getState());
            }, 1000);

            const unsubscribe = store.subscribe(throttledUpdate);

            return () => {
                unsubscribe();
            };
        }, [store]);

 */
