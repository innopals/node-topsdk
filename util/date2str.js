module.exports = function(d, options) {
    d = d || new Date();
    if (!(d instanceof Date)) {
        d = new Date(d);
    }

    var dateSep = '-';
    var timeSep = ':';
    if (options) {
        if (options.dateSep) {
            dateSep = options.dateSep;
        }
        if (options.timeSep) {
            timeSep = options.timeSep;
        }
    }
    var date = d.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    var month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var hours = d.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    var mintues = d.getMinutes();
    if (mintues < 10) {
        mintues = '0' + mintues;
    }
    var seconds = d.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return d.getFullYear() + dateSep + month + dateSep + date + ' ' +
        hours + timeSep + mintues + timeSep + seconds;
}
