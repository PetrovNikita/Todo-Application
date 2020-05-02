Todo Application.
Main part of it made on cource: Professional React Development.
I've made it's several steps myself due to course, such as: item-status-filter, deletion item and add-to-do-item-form.
All functional, which was made with teacher you can see there: https://github.com/Juriy/pro-react-redux/tree/master/todo/todo-final .

I've added more functions and components to make it similar to production app:
    1. new components: ErrorBoundry, ErrorIndicator, LoadingIndicator (with hooks).
    2. mock service which simulating lag and errors using promises (first time will replace normal server).
    3. moved state to redux. 
    4. Logic assigned to state data with user actions in App component removed to components which listening user actions.  (actions with items)
    5. Rewrite reducer to more comfortable view: each state data element routes by its own function.
    6. Added thunkMiddleware;
    7. new feature: changing label of todo-item.


Plans:
    1. Save app data in Database (server / web db). 
    2. New functions on item: time to start/finish doing; change label.
    3. Add notification: when to start item, when it's 20 minutes remained or it's time to finish.
    4. Add customization for what time it's necessary to store done items.  