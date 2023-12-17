$(document).ready(function() {
    var content = $('[read-time="content"]').text();
    var wordCount = content.trim().split(/\s+/).length;
    var readingTime = Math.ceil(wordCount / 200);    
    var minuteText = 'minute';
    if (readingTime > 1) {
        minuteText = 'minutes';
    }    
    $('[read-time="target"]').text(readingTime + ' ' + minuteText + ' read');
});
