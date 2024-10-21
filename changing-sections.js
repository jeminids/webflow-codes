var sectionIndex = localStorage.getItem('sectionIndex');
if (sectionIndex) {
    sectionIndex++;
} else {
    sectionIndex = 1;
}
var totalHeroes = $('[changing]').length;
if (sectionIndex > totalHeroes) {
    sectionIndex = 1;
}
$('[changing]').hide();
$('[changing="' + sectionIndex + '"]').show();
localStorage.setItem('sectionIndex', sectionIndex);