import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter';
import authentication from './slices/authentication';
/**
 * Creates and configures the Redux store.
 * The store is created with a root reducer consisting of `unitReducer` and `statusSlice`.
 * @NOTE: The configureStore function is designed to infer types automatically, so you typically don't need to manually specify types with Store
 */
export const store = configureStore({
    reducer: {
        counter,
        authentication,
    },
});

// Get the type of our store variable
export type AppStore = typeof store;

/**
 * Infers and exports the `RootState` type from the store's state.
 * The `RootState` type represents the complete state of the Redux store.
 * Infer the `RootState` and `AppDispatch` types from the store itself
 */
export type RootState = ReturnType<AppStore['getState']>;

/**
 * Infers and exports the `AppDispatch` type from the store's dispatch function.
 * The `AppDispatch` type represents the dispatch function to interact with the Redux store.
 * Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 */
export type AppDispatch = AppStore['dispatch'];

export const isAuthenticatedSelector = (state: RootState) => state.authentication;
export const counterSelector = (state: RootState) => state.counter;

/**
 * Title: Exploring Redux Store Setup Patterns: Direct Store Creation vs. Setup Function with Root Reducer
When building a Redux-powered application, setting up the store is one of the first tasks you'll tackle. The way you configure your Redux store can significantly impact your application's scalability, maintainability, and flexibility. Two common patterns for setting up a Redux store are **Direct Store Creation** and using a **Setup Function with a Root Reducer**. In this article, we'll explore these two patterns, discuss their benefits, pitfalls, and best practices, and provide guidance on how to choose the right approach for your project.
 * ---
 * Pattern 1: Direct Store Creation
 * Overview
In the **Direct Store Creation** pattern, you create the Redux store directly using `configureStore` from Redux Toolkit. The store is typically configured in a single, concise statement, passing in the individual reducers directly within the `reducer` field.

Example

```typescript
export const store = configureStore({
    reducer: {
        cart,
        modal,
    }
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
```

* Benefits

- **Simplicity**: This approach is straightforward and easy to understand. It works well for small to medium-sized applications with minimal configuration needs.
- **Less Boilerplate**: By configuring the store directly, you reduce the amount of boilerplate code, which can make your codebase cleaner and easier to maintain.
- **Direct Type Inference**: Types are inferred directly from the store instance, making type management seamless.

* Best Practices

- **Keep It Simple**: If your application doesn't require complex store configurations, stick with this pattern to maintain simplicity.
- **Limit Reducer Count**: This approach works best when you have a manageable number of reducers. If you find yourself adding many reducers, consider refactoring to the second pattern.

* Pitfalls

- **Limited Flexibility**: This pattern doesn't easily accommodate scenarios where additional setup logic, middleware, or enhancers are needed.
- **Difficult to Scale**: As your application grows, directly configuring the store can become cumbersome. Managing multiple reducers within the `configureStore` call may lead to a more complex and harder-to-maintain codebase.

---

* Pattern 2: Setup Function with Root Reducer

* Overview

The **Setup Function with Root Reducer** pattern introduces a `rootReducer` using `combineReducers` and a `setupStore` function to configure the store. This approach allows for greater flexibility and modularity, particularly in larger applications.

* Example

```typescript
const rootReducer = combineReducers({
    cart,
    modal,
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

// Infer the `RootState` type from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;
// Infer the `AppDispatch` type from the store's dispatch function
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
```

* Benefits

- **Flexibility**: This pattern allows you to include additional logic when setting up the store, such as adding middleware, enhancers, or handling specific environment configurations.
- **Scalability**: Using a root reducer and a setup function makes it easier to manage a growing number of reducers and configure the store in a modular way.
- **Reusability**: The `setupStore` function can be reused, making it easier to reset or reconfigure the store in different contexts (e.g., for testing or server-side rendering).

* Best Practices

- **Modularize Reducers**: Keep your reducers modular by separating them into different files and combining them with `combineReducers` to avoid a monolithic `rootReducer`.
- **Abstract Complex Logic**: If your store setup involves complex logic, abstract it into the `setupStore` function to keep the main store configuration clean and focused.
- **Use for Large Applications**: This pattern is well-suited for large applications where the store configuration is likely to evolve.

* Pitfalls

- **Increased Complexity**: The setup function can introduce additional complexity, especially for developers new to Redux or Redux Toolkit.
- **Overengineering**: If your application is small or doesn't require extensive configuration, this pattern might be overkill, leading to unnecessary abstraction.

---

* How to Choose Between the Two Patterns

Choosing the right pattern depends on several factors, including the size of your application, its complexity, and your team's familiarity with Redux. Here are some key questions to help guide your decision:

* 1. **How Complex is Your Application?**
   - **Simple/Small Application**: If your application is small and the store configuration is straightforward, the **Direct Store Creation** pattern is likely sufficient.
   - **Complex/Large Application**: For applications that require more advanced configuration, middleware, or scaling considerations, the **Setup Function with Root Reducer** pattern offers the necessary flexibility.

* 2. **Will Your Application Grow Significantly?**
   - **Yes**: If you anticipate significant growth in your application, opt for the **Setup Function with Root Reducer**. It allows for easier scaling and modularization of your store configuration.
   - **No**: If your application is unlikely to grow much, the simpler **Direct Store Creation** pattern will be easier to maintain.

* 3. **Do You Need to Add Middleware or Enhancers?**
   - **Yes**: If your store setup needs custom middleware or enhancers, the **Setup Function with Root Reducer** pattern is the better choice as it allows for more complex configurations.
   - **No**: If you don't need additional middleware or enhancers, stick with the **Direct Store Creation** pattern to keep things simple.

* 4. **How Familiar Are You with Redux?**
   - **Experienced**: If you or your team are experienced with Redux, you'll likely benefit from the added flexibility of the **Setup Function with Root Reducer**.
   - **New to Redux**: If you're new to Redux, the **Direct Store Creation** pattern offers a more straightforward entry point without the need to manage additional abstraction.

---

* Conclusion

Both the **Direct Store Creation** and **Setup Function with Root Reducer** patterns are valid ways to configure a Redux store, each with its own strengths and trade-offs. The choice between them depends on your specific use case, including the complexity and expected growth of your application, as well as your team's familiarity with Redux.

By considering the benefits, pitfalls, and best practices of each pattern, and asking the right questions about your project's needs, you can make an informed decision that sets your application up for success. Whether you opt for simplicity or flexibility, understanding these patterns will help you build more effective and maintainable Redux applications.
 */
