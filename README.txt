Todo Application.	
See it at https://petrovnikita.github.io/Todo-Application/.
Half of this project has made due to course: Professional React Development	with teacher, you can see this part there: https://github.com/Juriy/pro-react-redux/tree/master/todo/todo-final .	

I've added more functions and components to make it similar to production app:	
    1. new components: ErrorBoundry, ErrorIndicator, LoadingIndicator and new feature: changing label of todo-item. (with hooks).	
    2. mock service which simulating lag and errors using promises.	
    3. moved state to Redux. 	
    4. Logic assigned to state data with user actions in App component removed to components which listening user actions.  (actions with items)	
    5. Rewrite reducer to more comfortable view: each state data element routes by its own function.	
    6. Added thunkMiddleware.