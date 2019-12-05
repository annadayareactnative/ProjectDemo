

import _ from 'lodash';
import data from './db';

export const contains = ({ name, email }, query) => {
    //const { name } = name;
    if (data.name.includes(query) || data.email.includes(query)) {
        return true;
    }
    return false;
} 

