import { getDate, getMonth, getYear, isAfter, isEqual } from 'date-fns';
import {project} from './project';
import {task} from './task';

// module that stores all projects
// default projects : Inbox, Today, Upcoming
// created projects

export const directory = (() => {
    const state = {
        defaultProjects: [
            project('inbox'),
            project('today'),
            project('upcoming'),
        ],
        createdProjects: [],
        currentProject: null,
    };

    const createProject = (name) => {
        const lowName = name.toLowerCase();
        const newProject = project(lowName);
        state.createdProjects.push(newProject);
        return newProject;
    };

    const getProject = (name) => {
        const projectArr = state.defaultProjects.concat(state.createdProjects)

        for(let i = 0; i < projectArr.length; i++) {
            if(name === projectArr[i].name) {
                return projectArr[i];
            }
        }
    };

    const deleteProject = (name) => {
        state.createdProjects = state.createdProjects.filter(project => project.name !== name);
    }

    const updateIndexTasks = () => {
        // reset index task list
        state.defaultProjects[0].tasks = [];

        state.createdProjects.forEach((project) => {
            state.defaultProjects[0].tasks = state.defaultProjects[0].tasks.concat(project.tasks);
        });
        state.defaultProjects[0].sortTasks();
    };

    const updateTodayTasks = () => {
        // reset today task list
        state.defaultProjects[1].tasks = [];

        const currentDate = new Date();
        state.defaultProjects[0].tasks.forEach((task) => {
            if(getYear(currentDate) === getYear(task.createDueDate(task.dueDate))) {
                if (getMonth(currentDate) === getMonth(task.createDueDate(task.dueDate))) {
                    if(getDate(currentDate) === getDate(task.createDueDate(task.dueDate))) {
                        state.defaultProjects[1].tasks.push(task);
                        
                    }
                }
            }
        });
        state.defaultProjects[1].sortTasks();
    };

    // task scheduled for the next 7 days
    const updateUpcomingTasks = () => {
        // reset today task list
        state.defaultProjects[2].tasks = [];

        const pastDate = new Date();
        pastDate.setDate(getDate(pastDate) - 1);
        const futureDate = new Date();
        futureDate.setDate(getDate(futureDate) + 7);

        state.defaultProjects[0].tasks.forEach((task) => {
            if(getYear(pastDate) === getYear(task.createDueDate(task.dueDate))) {
                if(getMonth(pastDate) === getMonth(task.createDueDate(task.dueDate))) {
                    if((getDate(pastDate) < getDate(task.createDueDate(task.dueDate))) && (getDate(task.createDueDate(task.dueDate)) < getDate(futureDate))) {
                        state.defaultProjects[2].tasks.push(task);
                    }
                }
            }
        });

        state.defaultProjects[2].sortTasks();
    };

    const saveStorage = () => {
        state.createdProjects.forEach((project, index) => {
            localStorage.setItem(project.name, JSON.stringify(project.tasks));
        });   
    };

    const loadStorage = () => {
        if (Object.keys(localStorage).length === 0) {
            saveStorage();
        } 
        else {
            loadCreatedProject();
        }          
    };

    const loadCreatedProject = () => {
        // Loop through project names in localStorage
        for(let i = 0; i < localStorage.length; i++) {
            // Create new project using localStorage projectName
            const newProject = createProject(localStorage.key(i));

            // Assign value of localStorage projectName to objArray
            const objArray = JSON.parse(localStorage.getItem(localStorage.key(i)));

            // Loop through objArray
            for(let j = 0; j < objArray.length; j++) {
                
                // deconstruct obj in array
                let {title, details, priority, dueDate, projectName, id} = objArray[j];

                // create new task using deconstructed values of obj
                const newTask = task(title, details, priority, dueDate, projectName, id);

                // add task to new project
                newProject.addTask(newTask);
            }

        }
    }

    state.currentProject = state.defaultProjects[0];
    loadStorage();
    updateIndexTasks();
    updateTodayTasks();
    updateUpcomingTasks();

    return Object.assign(
        state,
        {createProject},
        {getProject},
        {deleteProject},
        {updateIndexTasks},
        {updateTodayTasks},
        {updateUpcomingTasks},
        {saveStorage},
    );
})();