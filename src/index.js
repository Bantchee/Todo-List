import {task} from './scripts/task';
import {page} from './scripts/renderPage';
import './styles/index.css';

const t = task('Wash Clothes', 'Put clothes in the washing machine', 'high', 'now', 'Chours');

const p = page();
p.render();

// State
    // directory.js module
        // project.js factory
            // task.js factory
// DOM Rendering
    // Render Static page, Including Sidebar menu
        // Div#Content Dynamicly rendered, changes when clicking on project in sidebar menu