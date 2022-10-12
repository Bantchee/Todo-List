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

    // Add Task
    const addTask = (task) => {
        get('tasks').push(task);
    }

    // Get Task
    const getTask = (title) => {
        get('tasks').filter(task => task.title === title);
    }

    // Delete Task
    const deleteTask = (index) => {
        state.tasks.splice(index, 1);
    }

    return Object.assign(
        state,
        {addTask},
        {deleteTask},
        {getTask},
    );
};