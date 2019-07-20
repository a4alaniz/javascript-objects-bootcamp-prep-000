var playlist = {name: "song"};
playlist['name']

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  playlist.artistName = ["My Bloddy Valentine", "Phil Ochs", "Slowdive", "name"]
  delete playlist.slowdive;
}
