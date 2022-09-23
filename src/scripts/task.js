// Priority :
    // 1. String > "Low"
    // 2. String > "Medium"
    // 3. String > "High"

// In > Out : String String Priority Date Project > Object
export const task = (title, details, priority, dueDate, project) => {
    const state = {
        title,
        details,
        priority,
        dueDate,
        project,
    }

    // CRUD : Create, Read, Update, Delete

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

    return Object.assign(
        state,
        {get},
        {set}
    );
};