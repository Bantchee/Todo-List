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
        createProjects: {},
    };

    return Object.assign(
        state,
    );
})();