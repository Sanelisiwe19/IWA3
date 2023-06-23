import company from 'configuration'; 
import year from 'configuration';

const company = 'ACME Inc.';
const year = 2022;

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

// nwabisa.js

const firstname = "Nwabisa";
const surname = "Gabe";
const role = "CEO";

const display = `${firstname} ${surname} (${role})`;
document.querySelector('#nwabisa').innerText = display;

// johannes.js

const firstname = "Johannes";
const surname = "Potgieter";
const role = "Intern";

const display = `${firstname} ${surname} (${role})`;
document.querySelector('#johannes').innerText = display;

// alex.js

const firstname = "Alex";
const surname = "Naidoo";
const role = "Head of Marketing";

const display = `${firstname} ${surname} (${role})`;
document.querySelector('#alex').innerText = display;

// scripts.js

import { role as nwabisaRole } from './nwabisa.js';
import { role as johannesRole } from './johannes.js';
import { role as alexRole } from './alex.js';

console.log('Roles:', nwabisaRole, johannesRole, alexRole);