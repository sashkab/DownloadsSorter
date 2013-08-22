// this function returns today's date in foratm %Y-%m%-%d (ie 2013-08-22). 
function datestamp() {
    var today = new Date()    
    var day = today.getDate()
    day = day.toString()
    if (day.length == 1) {
        day = "0" + day;
    }
    var month = today.getMonth() + 1
    month = month.toString()
    if (month.length == 1) {
        month = "0" + month;
    }
    var year = today.getFullYear()
    return year + "-" + month + "-" + day 
}


// Add date folder to the filename
chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {suggest({filename: datestamp() + "/" + item.filename, conflict_action: 'uniquify'});});
