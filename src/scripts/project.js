import { compareAsc } from "date-fns";

// In > Out : String List-of-Tasks > Object
export const project = (name) => {
    const state = {
        name,
        tasks: [],
    };

    // Get property
    const get = (property) => {
        if(state.hasOwnProperty(property)) {
            return state[property];
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
    const addTask = (tasks) => {
        console.log(Array.isArray(tasks));
        if(Array.isArray(tasks)) {
            tasks.forEach((task) => {
                get('tasks').push(task);
            });
        } 
        else {
            get('tasks').push(tasks);
        }
    }

    // Get Task
    const getTask = (title) => {
        get('tasks').filter(task => task.title === title);
    }

    // Delete Task
    const deleteTask = (index) => {
        state.tasks.splice(index, 1);
    }

    // Sort tasks
    const sortTasks = () => {
        state.tasks.sort((a, b) => compareAsc(a.createDueDate(a.dueDate), b.createDueDate(b.dueDate)));
    }

    return Object.assign(
        state,
        {set},
        {addTask},
        {deleteTask},
        {getTask},
        {sortTasks},
    );
};