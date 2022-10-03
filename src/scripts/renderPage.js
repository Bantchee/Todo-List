import menuSvg from '../icons/menu.svg';
import githubSvg from '../icons/github.svg';
import {directory} from './directory';
import arrowSvg from '../icons/arrow.svg';
import inboxSvg from '../icons/inbox.svg';
import todaySvg from '../icons/star.svg';
import upcomingSvg from '../icons/calendar.svg';

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
        state.content = createElement('div', state.main, 'content');
        state.footer = renderFooter();
        update();
    };

    const clear = () => {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    };

    const update = () => {
        const menuBtn = state.header.querySelector('button');
        menuBtn.addEventListener('click', () => {
            const aside = document.body.querySelector('aside');
            if(aside === null) {
                render();

            } else {
                document.body.removeChild(aside);
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
                    for(let project in directory.defaultProjects) {
                        // Btn
                        const projectBtn = createElement('button', defaultProjects, project);
                            // Img
                            const img = createElement('img', projectBtn);
                            if(project === 'inbox') {
                                img.setAttribute('src', inboxSvg);
                            }
                            else if(project === 'today') {
                                img.setAttribute('src', todaySvg);
                            }
                            else if(project === 'upcoming') {
                                img.setAttribute('src', upcomingSvg);
                            }
                            // Para
                            const text = createElement('p', projectBtn);
                            text.textContent = project.slice(0,1).toUpperCase() + project.slice(1);
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
                    for(let project in directory.createdProjects) {
                        // Btn
                        const projectBtn = createElement('button', createdProjects, project);
                            //Img
                            // Para
                            const text = createElement('p', projectBtn);
                            text.textContent = project.slice(0,1).toUpperCase() + project.slice(1);
                            // Btn : Edit
                            // Btn : Delete
                    }
                    // Render Create New Project Form

        return sideBar;
    };

    const createProjectElement = () => {

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