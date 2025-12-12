const moment = require('moment');

const isDate = (value, {req, location, path}) => {
console.log(location, path, req, value)
    if(!value) {
        return false;
    }

    const fecha = moment(value);
    if (fecha.isValid()) {
        return true;
    } else {
        return false;
    }

}

module.exports = {isDate};