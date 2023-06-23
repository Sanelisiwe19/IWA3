// configuration.js
export const company = 'ACME Inc.';
export const year = 2022;

// scripts.js
import { company, year } from './configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

import('./nwabisa.js').then((module) => {
    const nwabisa = module.default;
    import('./johannes.js').then((module) => {
      const johannes = module.default;
      import('./alex.js').then((module) => {
        const alex = module.default;
        console.log('Roles:', nwabisa.role, johannes.role, alex.role);
      });
    });
  });
  
