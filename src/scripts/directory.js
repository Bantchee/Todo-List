import {project} from './project';

// module that stores all projects
// default projects : Inbox, Today, Upcoming
// created projects

export const directory = (() => {
    const state = {
        defaultProjects: {
            inbox: project('inbox'),
            today: project('today'),
            upcoming: project('upcoming'),
        },
        createdProjects: {
            temp1: project('temp1'), 
            temp2: project('temp2'),
        },
    };

    return Object.assign(
        state,
    );
})();