import {task} from './scripts/task';
import {page} from './scripts/renderPage';
import './styles/index.css';
import { directory } from './scripts/directory';

// Temp
const lowTask = task("Low Task Title", "Cool Stuff to do", "low", '2022-10-14', 'temp1');
const mediuemTask = task("Medium Task Title", "Cool Stuff to do", "medium", '2022-11-4', 'temp1');
const highTask = task("High Task Title", "Cool Stuff to do", "high", '2022-6-27', 'temp1');
const todayTask = task("Task Due tooday", "Cool Stuff to do", "high", '2022-10-14-2002', 'temp2');
const sevenDayTask = task("Task do on seventh day", "Cool Stuff to do", "low", '2022-10-20', 'temp2');
const nineDayTask = task("Task do on Ninth day", "Cool Stuff to do", "low", '2022-10-22', 'temp2');

directory.getProject('temp1').addTask([lowTask, mediuemTask, highTask]);
directory.getProject('temp2').addTask([todayTask, sevenDayTask, nineDayTask]);

const p = page();
p.render();