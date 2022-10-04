import {project} from './project';

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

    const createProject = (name) => {
        const lowName = name.toLowerCase();
        const newProject = project(lowName);
        state.createdProjects[lowName] = newProject;
        return newProject;
    };

    return Object.assign(
        state,
        {createProject}
    );
})();