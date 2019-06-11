var playlist = {
  SIA: "chandelier",
  ColdPlay: "Yellow",
  Quen: "Radio Gaga"
};

function updatePlaylist (playlist, artist, song) {
  Object.assign({}, {playlist: [artist, song]}
)
}