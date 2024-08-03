/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //

        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        $('#section-bio').css('background-color', 'black').css('color', 'white').css('padding','10px');
        $('#section-quotes').css('background-color', 'black').css('color', 'white').css('padding','10px').attr('p', 'OwO');
        let $section = $('<section>').attr('id', 'section-rider');
$section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));






let topRated = data.discography.topRated;
_.forEach(topRated, function(recording) {
    console.log(recording);
});

var titles = _.map(topRated, 'title');
var artists = _.map(topRated, 'artist');
var releases = _.map(topRated, 'release');
var years = _.map(topRated, 'year');
for (var i = 0; i < titles.length; i++) {
$('#list-top-rated').append($('<li>').text(titles[i]).appendTo('#list-top-rated'));    
}


console.log(_.map((topRated), function(item){
//$('list-top-rated').append($('<li>').text(titles, 0).appendTo('#list-top-rated'));

    return item;
 
}));

//$('sidebar').append($('<section>').text("test").appendTo('#sidebar'));
$('#sidebar').append($('<section>').text("Top 5 Recordings").attr('id', 'section-recordings').appendTo('#sidebar'));

$('#section-recordings').append($('<ul>').attr('id', 'list-recordings').appendTo('#section-recordings'));

for (var i = 0; i < 5; i++) {
  
$('#list-recordings').append($('<li>').attr('id', 'recording' + i).appendTo('#list-recordings'));

$('#recording' + i).append($('<div>').text("Title: " + titles[i]).attr('id', 'title').appendTo('#recording' + i));
$('#recording' + i).append($('<div>').text("Artist: " + artists[i]).attr('id', 'artist').appendTo('#recording' + i));
$('#recording' + i).append($('<div>').text("Release: " + releases[i]).attr('id', 'release').appendTo('#recording' + i));
$('#recording' + i).append($('<div>').text("Year: " + years[i]).attr('id', 'year').appendTo('#recording' + i));

}

$('#list-recordings').append($('<div>').attr('id', 'image-container-recording').attr('class', 'image-container').appendTo('#list-recordings'));
//$('#list-recordings').append($('<div>').img('images/album/eastern-rebellion.jpg').attr('id', 'image-container-recording').attr('class', 'image-container').appendTo('#list-recordings'));


//$('#image-container-recording').prepend('<img id="recording-image" src=/>');
$('#image-container-recording').prepend($('<img>',{id:'recording-image',src:data.discography.topRated[0]["art"]}));



/*
<div id="image-container-recording" class="image-container">
    <img id="recording-image" src="images/album/eastern-rebellion.jpg" class="image">
</div>
*/


        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
