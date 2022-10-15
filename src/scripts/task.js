import { format } from "date-fns";

// In > Out : String String Priority Date Project > Object
export const task = (title, details, priority, dueDate, projectName) => {
    

    const state = {
        title,
        details,
        priority,
        dueDate: dueDate,
        projectName,
        id: null,
    }

    // CRUD : Create, Read, Update, Delete

    const createDueDate = (value) => {
        // Input > YYYY MM DD
        // Output > YYYY MM DD
        const arrValue = value.split('-');
        return new Date(parseInt(arrValue[0]), parseInt(arrValue[1]) - 1, parseInt(arrValue[2]));
    }

    const returnFormatedDueDate = () => {
        return format(createDueDate(state.dueDate), 'MM/dd/yyyy');
    }

    const genRandomId = () => Math.random();

    const get = (property) => {
        if(state.hasOwnProperty(property)) {
            return state[property] 
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    const set = (property, value) => {
        if(state.hasOwnProperty(property)) {
            state[property] = value;
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    // Change Project
    // Delete Task

    state.id = genRandomId();

    return Object.assign(
        state,
        {get},
        {set},
        {returnFormatedDueDate},
        {createDueDate},
    );
};