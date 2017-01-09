/**
 * Created by glenn on 1/8/2017.
 */

var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        {title: 'Blue', duration: '4:26'},
        {title: 'Green', duration: '3:14'},
        {title: 'Red', duration: '5:01'},
        {title: 'Pink', duration: '3:21'},
        {title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        {title: 'Hello, Operator?', duration: '1:01'},
        {title: 'Ring, ring, ring', duration: '5:01'},
        {title: 'Fits in your pocket', duration: '3:21'},
        {title: 'Can you hear me now?', duration: '3:14'},
        {title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumThree = {
    title: 'The Number Three',
    artist: 'Three Amigos',
    label: '3',
    year: '2003',
    albumArtUrl: 'data:image/jpeg;base64,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',
    songs: [
        {title: 'One, Two, Three', duration: '1:01'},
        {title: 'Three Little Pigs', duration: '5:01'},
        {title: "Three Time's the Charm", duration: '3:21'},
        {title: 'Three, Two, One, Liftoff', duration: '3:14'},
        {title: "Tres Leche'", duration: '2:15'}
    ]
};

var createSongRow = function (songNumber, songName, songLength) {
    var template =
            '<tr class="album-view-song-item">'
            + '  <td class="song-item-number">' + songNumber + '</td>'
            + '  <td class="song-item-title">' + songName + '</td>'
            + '  <td class="song-item-duration">' + songLength + '</td>'
            + '</tr>'
        ;

    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function (album) {


    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function () {

    var albums = [albumPicasso, albumMarconi, albumThree];
    var selected = 1; // starting index of the albums
    albumImage.addEventListener('click', function (e) {
        setCurrentAlbum(albums[selected]);
        selected++;
        if (selected == albums.length) {
            selected = 0;
        }
    });

};