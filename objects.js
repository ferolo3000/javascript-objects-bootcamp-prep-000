var playlist = {
  SIA: "chandelier",
  ColdPlay: "Yellow",
  Quen: "Radio Gaga"
};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, artistName, songTitle)
}