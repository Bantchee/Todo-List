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

    return Object.assign(
        state
    );
};