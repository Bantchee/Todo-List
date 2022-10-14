import { getDate, getMonth, getYear, isAfter, isEqual } from 'date-fns';
import {project} from './project';
// Temp
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
        createdProjects: [
            project('temp1'), 
            project('temp2'),
        ],
        currentProject: null,
    };

    state.currentProject = state.defaultProjects[0];

    // Temp
    const lowTask = task("Low Task Title", "Cool Stuff to do", "low", '10-17-2022', 'temp1');
    const mediuemTask = task("Medium Task Title", "Cool Stuff to do", "medium", '10-17-2022', 'temp1');
    const highTask = task("High Task Title", "Cool Stuff to do", "high", '10-17-2022', 'temp1');
    state.createdProjects[0].addTask(lowTask);
    state.createdProjects[0].addTask(mediuemTask);
    state.createdProjects[0].addTask(highTask);

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
            console.log('in for');
            console.log(getDate(currentDate) === getDate(task.dueDate));
            if(getYear(currentDate) === getYear(task.dueDate)) {
                if (getMonth(currentDate) === getMonth(task.dueDate)) {
                    console.log(getMonth(currentDate), );
                    if(getDate(currentDate) === getDate(task.dueDate)) {
                        state.defaultProjects[1].tasks.push(task);
                    }
                }
            }
        });
        state.defaultProjects[1].sortTasks();

        console.log(directory.defaultProjects[1]);
    };

    // task scheduled for the next 7 days
    const updateUpcomingTasks = () => {
        // reset today task list
        state.defaultProjects[2].tasks = [];

        const pastDate = new Date();
        pastDate.setDate = pastDate.getDate - 1;
        const futureDate = new Date();
        futureDate.setDate = futureDate.getDate + 7;

        state.defaultProjects[0].tasks.forEach((project) => {
            if(isAfter(project.dueDate, pastDate) && isBefore(project.dueDate, futureDate) ) {
                state.defaultProjects[2].tasks = state.defaultProjects[2].tasks.concat(project.tasks);
            }
        });
        state.defaultProjects[2].sortTasks();
    };

    return Object.assign(
        state,
        {createProject},
        {getProject},
        {deleteProject},
        {updateIndexTasks},
        {updateTodayTasks},
        {updateUpcomingTasks},
    );
})();