import menuSvg from '../icons/menu.svg';
import githubSvg from '../icons/github.svg';
import {directory} from './directory';
import arrowSvg from '../icons/arrow.svg';
import inboxSvg from '../icons/inbox.svg';
import todaySvg from '../icons/star.svg';
import upcomingSvg from '../icons/calendar.svg';
import cirlcePlusSvg from '../icons/circlePlus.svg';
import deleteSvg from '../icons/trash.svg';
import editSvg from '../icons/edit.svg';

export const page = () => {
    const state = {
        sideBar: null,
        main: null,
        header: null,
        content: null,
        footer: null,
    };

    const render = () => {
        clear();
        state.sideBar = renderSideBar();
        state.main = createElement('div', document.body, 'main');
        state.header = renderHeader();
        state.content = renderContent();
        state.footer = renderFooter();

        setCurrentProject();
        update();
    };

    const setCurrentProject = () => {
        const projects = state.sideBar.querySelectorAll('button.project');
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].querySelector('p').textContent.toLowerCase() == directory.currentProject.name) {
                projects[i].classList.add('current-project') ;
            }
        }
    }

    const clear = () => {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    };

    const update = () => {
        const menuBtn = state.header.querySelector('button');
        const projects = state.sideBar.querySelectorAll('button.project');
        const addProject = state.sideBar.querySelector('.add-project');
        const addProjectBtn = state.sideBar.querySelector('.add-project button');
        const addTaskContainer = state.content.querySelector('.add-task-container');
        const addTaskBtn = state.content.querySelector('.add-task-btn');

        addTaskBtn.addEventListener('click', () => {
            console.log('hello');
            // If div.add-project has active class
            if(addTaskBtn.classList.contains('active')) {
                // delete inputAddProject
                addTaskContainer.removeChild(state.content.querySelector('.input-container'));
                // remove active class
                addTaskBtn.classList.remove('active');
            }
            else {
                // render input
                renderAddTaskInput(state.content.querySelector('.add-task-container'));
                // add active class
                addTaskBtn.classList.add('active');
            }    
        });
        
        projects.forEach((projectElement, index) => {
            projectElement.addEventListener('click', () => {
                let projectState;
                for(let i = 0; i < directory.defaultProjects.length; i++) {
                    if(directory.defaultProjects[i].name == projectElement.querySelector('p').textContent.toLowerCase()) {
                        projectState = directory.defaultProjects[i];
                    }
                }
                for(let i = 0; i < directory.createdProjects.length; i++) {
                    if(directory.createdProjects[i].name == projectElement.querySelector('p').textContent.toLowerCase()) {
                        projectState = directory.createdProjects[i];
                    }
                }
                directory.currentProject = projectState;
                render();
            });
        });

        menuBtn.addEventListener('click', () => {
            const aside = document.body.querySelector('aside');
            if(aside === null) {
                render();

            } else {
                document.body.removeChild(aside);
            }
        });

        addProjectBtn.addEventListener('click', () => {
            // If div.add-project has active class
            if(addProjectBtn.classList.contains('active')) {
                // delete inputAddProject
                addProject.removeChild(document.querySelector('.input-container'));
                // remove active class
                addProjectBtn.classList.remove('active');
            }
            else {
                // render inputAddProject
                const inputAddProject = renderInputAddProject(addProject);
                // add active class
                addProjectBtn.classList.add('active');

                // AddBtn Event Listner
                const addBtn = inputAddProject.querySelector('.add');
                addBtn.addEventListener('click', () => {
                    const input = inputAddProject.querySelector('input');
                    
                    if(input.value !== "") {
                       directory.createProject(input.value);
                       // delete inputAddProject
                        addProject.removeChild(document.querySelector('.input-container'));
                        // remove active class
                        addProjectBtn.classList.remove('active');
                        // render page
                        render();
                    }
                    
                });

                // CancelBtn Event Listner
                const cancelBtn = inputAddProject.querySelector('.cancel');
                cancelBtn.addEventListener('click', () => {
                    // delete inputAddProject
                    addProject.removeChild(document.querySelector('.input-container'));
                    // remove active class
                    addProjectBtn.classList.remove('active');
                });
            }  
                
        });
    }

    // In > Out: String, Object, String, String
    // In > Out: child, parent, class, id
    const createElement = (child, parent, clss=null, id=null) => {
        const element = document.createElement(child);
        parent.appendChild(element);
        if(clss !== null) {
            if(Array.isArray(clss)) {
                for(let i = 0; i < clss.length; i++) {
                    element.classList.add(clss[i]);
                }
            } 
            else {
                element.classList.add(clss);
            }
        }
        if(id !== null) {
            element.setAttribute('id', id);
        } 
        return element;
    };

    // Add elements that go into the header
    const renderHeader = () => {
        const header = createElement('header', state.main);
        // sidebar menu, if side bar is not displayed
        // site name title : ToDolist
            const menuBtn = createElement('button', header, 'menu');
                const btnImg = createElement('img', menuBtn);
                btnImg.setAttribute('src', menuSvg);
            const title = createElement('h1', header, 'title');
            title.textContent = "Todo List";
        return header;
    };

    // Render Elements of sidebar
    const renderSideBar = () => {
        const sideBar = createElement('aside', document.body);

            // Div HomeContainer
            const homeContainer = createElement('div', sideBar, 'home-container');
                // Btn : ^ Home
                const homeBtn = createElement('button', homeContainer, 'title');
                    // Img
                    const homeArrow = createElement('img', homeBtn, 'arrow');
                    homeArrow.setAttribute('src', arrowSvg);
                    // Para
                    const homeText = createElement('p', homeBtn, 'text');
                    homeText.textContent = "Home";
                // Div : Default Projects
                const defaultProjects = createElement('div', homeContainer, 'default-projects');
                    // Loop throw directory.createProjects 
                    // Render each Project as a btn
                    for(let i = 0; i < directory.defaultProjects.length; i++) {
                        let projectName = directory.defaultProjects[i].name;
                        // Btn
                        const projectBtn = createElement('button', defaultProjects, ["project", projectName]);
                            // Img
                            const img = createElement('img', projectBtn);
                            if(projectName === 'inbox') {
                                img.setAttribute('src', inboxSvg);
                            }
                            else if(projectName === 'today') {
                                img.setAttribute('src', todaySvg);
                            }
                            else if(projectName === 'upcoming') {
                                img.setAttribute('src', upcomingSvg);
                            }
                            // Para
                            const text = createElement('p', projectBtn);
                            text.textContent = projectName.slice(0,1).toUpperCase() + projectName.slice(1);
                    }
            // Div Projects
                // Divs : List-of-Projects
                // Div : Add Project
                    // Input
                    // Div
                        // Btn : Add
                        // Btn : Cancel
            // Div Projects
            const projectsContainer = createElement('div', sideBar, 'project-container');
                // Btn : ^ project
                const projectBtn = createElement('button', projectsContainer, 'title');
                    // Img
                    const projectArrow = createElement('img', projectBtn, 'arrow');
                    projectArrow.setAttribute('src', arrowSvg);
                    // Para
                    const projectText = createElement('p', projectBtn, 'text');
                    projectText.textContent = "Project";
                // Div : Created Projects
                const createdProjects = createElement('div', projectsContainer, 'created-projects')

                    // render created projects in directory
                    for(let i = 0; i < directory.createdProjects.length; i++) {
                        let projectName = directory.createdProjects[i].name;
                        // Div : divProject
                        const divProject = createElement('div', createdProjects, 'project-div')
                            // Btn : Project
                            const projectBtn = createElement('button', divProject, ["project", projectName]);
                                //Img
                                // Para
                                const projText = createElement('p', projectBtn);
                                projText.textContent = projectName.slice(0,1).toUpperCase() + projectName.slice(1);
                            // Btn : Edit
                            const editBtn = createElement('button', divProject, 'edit');
                                //Img
                                const editImg = createElement('img', editBtn);
                                editImg.setAttribute('src', editSvg);
                            // Btn : Delete
                            const deleteBtn = createElement('button', divProject, 'delete');
                                // Img
                                const deleteImg = createElement('img', deleteBtn);
                                deleteImg.setAttribute('src', deleteSvg);
                    }
                // Render Create New Project Form
                const addProjectsContainer = addProjectElement(projectsContainer);
        return sideBar;
    };

    const addProjectElement = (project) => {
        // Div : createProjectContainer
        const addProjectsContainer = createElement('div', project, 'add-project-container');
            // Div : Title-Container
            const titleContainer = createElement('div', addProjectsContainer, 'add-project');
                // Btn : addProjectBtn
                const addProjectBtn = createElement('button', titleContainer);
                    // Img : Plus in Circle
                    const img = createElement('img', addProjectBtn);
                    img.setAttribute('src', cirlcePlusSvg);
                    // Para : Add Project
                    const title = createElement('p', addProjectBtn);
                    title.textContent = 'Add Project';
        return addProjectsContainer;        
    };

    const renderInputAddProject = (parent) => {
         // Div : Input Container
        const inputContainer = createElement('div', parent, 'input-container');
            // Input 
            const input = createElement('input', inputContainer);
            // Div : Btn Container
            const btnContainer = createElement('div', inputContainer, 'buttons');
                // Btn : Add
                const addBtn = createElement('button', btnContainer, 'add');
                addBtn.textContent = "Add";
                // Btn : Cancel 
                const cancleBtn = createElement('button', btnContainer, 'cancel');
                cancleBtn.textContent = "Cancel";
        return inputContainer;
    };

    const renderContent = () => {
        const content = createElement('div', state.main, 'content');
        // task
        renderTasks(content);
        
        //Add Task
        renderAddTask(content);
        return content;
    };

    const renderTasks = (content) => {
        console.log(directory.currentProject.name);
        // Div Task Container
        const taskContainer = createElement('div', content, 'task-container');
        // // List of Tasks
        for(let i = 0; i < directory.currentProject.tasks.length; i++) {
            console.log(directory.currentProject.name);
            // renderTask(project.tasks[i]);
        }
    }

    const renderTask = (t) => {
        const task = createElement('div', state.content, 'content');

        return task;
    };

    const renderAddTask = (content) => {
        // Div 
        const div = createElement('div', content, 'add-task-container');
            // Div : Add Task
            const addTaskDiv = createElement('div', div, 'add-task-btn');
                // Img : circlePlus
                const circlePlusImg = createElement('img', addTaskDiv);
                circlePlusImg.setAttribute('src', cirlcePlusSvg);
                // P : Add Task
                const text = createElement('p', addTaskDiv, 'text');
                text.textContent = "Add Task";
    };

    const renderAddTaskInput = (parent) => {
        // Div 
        const container = createElement('div', parent, 'input-container');
            // Input : Title
            const titleInput = createElement('input', container);
            // Input : Details
            const detailInput = createElement('input', container);
            // Div : Date-Project
                // Div : Due Date
                    // P
                    // Input Type Date
                // Div : Project
                    // P : Project
                    // Selector : Work
            // Div : Priority-Add-Cancel
                // Div : Priority
                    // Div : Low
                        // P : Low
                    // Div : Medium
                        // P : Medium
                    // Div : High
                        // P : High
                // Div : Add-Cancel
                    // Div : Add
                        // P : Add
                    // Div : Cancel
                        // P : Cancel
    };

    // Render Element of Footer
    const renderFooter = () => {
        const footer = createElement('footer', state.main);
            // Para : Copy Right
            const copyRightText = createElement('p', footer, 'text');
            copyRightText.innerHTML = "&#169; Jar'Zeno Jarrett";
            // A : Github link
                const githubLink = createElement('a', footer, 'github-link');
                githubLink.setAttribute('href', 'https://github.com/Bantchee');
                githubLink.setAttribute('target', '_blank');
                // Img : Github
                const githubImg = createElement('img', githubLink);
                githubImg.setAttribute('src', githubSvg);
        return footer;
    }

    return Object.assign(
        state, 
        {render},
        {update},
    );
};