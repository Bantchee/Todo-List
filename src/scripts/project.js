import { task } from "./task";

// In > Out : String List-of-Tasks > Object
export const project = (name) => {
    const state = {
        name,
        tasks: [],
    };

    // Get property
    const get = (property) => {
        if(state.hasOwnProperty(property)) {
            return state[property] 
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    // Set property
    const set = (property, value) => {
        if(state.hasOwnProperty(property)) {
            state[property] = value;
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    // Create Task
    const createTask = (title, details, priority, dueDate, project) => {
        task(title, details, priority, dueDate, project);
    }

    // Add Task
    const addTask = (task) => {
        get('tasks').push(task);
    }

    // Get Task
    const getTask = (title) => {
        get('tasks').filter(task => task.title === title);
    }

    // Delete Task
    const deleteTask = (task) => {
        tasks.filter(x => {
            x.id === task.id; 
        });
    }

    return Object.assign(
        state,
        {createTask},
        {addTask},
        {deleteTask}
    );
};