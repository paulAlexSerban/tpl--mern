import { createReducer, createAction } from '@reduxjs/toolkit';
import { AUTHENTICATION_ACTIONS } from './authentication.actions';
import * as reducerFunctions from './authentication.reducer.function';
import { type AuthenticationState } from './authentication';

const initialState: AuthenticationState = {
    isAuthenticated: false,
};

const authenticationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(AUTHENTICATION_ACTIONS.LOGIN, reducerFunctions.login)
        .addCase(AUTHENTICATION_ACTIONS.LOGOUT, reducerFunctions.logout);
});

export const logout = createAction(AUTHENTICATION_ACTIONS.LOGOUT);
export const login = createAction(AUTHENTICATION_ACTIONS.LOGIN);

export default authenticationReducer;

/**
 * createReducer vs createSlice
 *
 **********************
 * createReducer
 **********************
 * Use `createReducer` when you need more flexibility and control over how your reducers
 * are defined. This approach is ideal for complex cases where action creators might be
 * defined outside of the slice, or when you require dynamic action handling.
 *
 * Benefits of createReducer:
 * - **Dynamic Action Handling**: Allows you to define reducers with dynamic keys, making it easier to manage actions that are not predefined.
 * - **External Action Creators**: If your action creators are defined in separate modules or files, `createReducer` lets you map these actions to reducers without automatically generating new action creators.
 * - **Flexible Organization**: Provides more control over how your reducers are organized, allowing you to define and structure them in a way that best suits your application's architecture.
 * - **Custom Middleware Compatibility**: Works well in middleware-heavy applications where actions may be dispatched by middleware, enabling better control over how these actions are handled.
 *
 * When to use `createReducer`:
 * - **Complex Reducer Logic**: When your state management involves complex logic that spans multiple actions or requires external utilities.
 * - **Modular Applications**: In cases where actions and reducers are defined across different modules, `createReducer` offers better separation of concerns and flexibility.
 * - **Non-Standard Action Flows**: When your application architecture involves non-standard action flows, such as those driven by middleware or external events, `createReducer` allows you to handle these cases more effectively.
 *
 **********************
 * createSlice
 **********************
 * Use `createSlice` when you prefer a streamlined and consistent approach to defining Redux logic.
 * This method is best for situations where you want Redux Toolkit to handle the boilerplate,
 * automatically generating action creators and types for you.
 *
 * Benefits of createSlice:
 * - **Automatic Action Creation**: `createSlice` automatically generates action creators and action types, reducing the need for manual definitions and ensuring consistency.
 * - **Simplified Reducer Definition**: Combines reducers, actions, and initial state into a single, cohesive structure, making the setup more intuitive and easier to maintain.
 * - **Reduced Boilerplate**: Minimizes the amount of code needed to set up Redux logic by encapsulating everything within the slice definition, allowing for quicker development.
 * - **Consistency and Simplicity**: Promotes a consistent pattern across your Redux setup, which simplifies both development and onboarding of new developers.
 * - **Built-in Best Practices**: `createSlice` enforces best practices by default, such as using Immer for immutable state updates, which reduces common errors and bugs.
 * - **Enhanced Code Readability**: With all related logic bundled together, `createSlice` improves the readability of your Redux code, making it easier to understand and modify.
 *
 * When to use `createSlice`:
 * - **Simple State Management**: Ideal for straightforward state management tasks where the actions and reducers are closely related and can be defined together.
 * - **Rapid Development**: Use `createSlice` when you want to quickly set up Redux with minimal boilerplate and maximize developer productivity.
 * - **Integrated Action Creation**: Perfect when you want Redux Toolkit to handle the creation of actions and action types, ensuring consistency across your application.
 *
 **********************
 * Summary
 **********************
 * - **Use `createSlice`** for simplicity, automatic action creation, consistency, and built-in best practices across your Redux logic.
 * - **Use `createReducer`** when you need more flexibility, such as handling dynamic actions, working with external action creators, or managing complex reducer logic.
 */
