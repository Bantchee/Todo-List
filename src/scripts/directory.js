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
        state.createdProjects.push(newProject);
        return newProject;
    };

    const getProject = (name) => {
        if(name === 'inbox') {
            return state.defaultProjects[0];
        }
        else {
            for(let i = 0; i < state.createdProjects.length; i++) {
                if(name === state.createdProjects[i].name) {
                    return state.createdProjects[i];
                }
            }
        }
        // else 
            // loop through createProjects
                // if project.name == name
                    // return project
    };

    return Object.assign(
        state,
        {createProject},
        {getProject}
    );
})();