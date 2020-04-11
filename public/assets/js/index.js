var start = $("#startGame")
var titleScreen = $("#title-link")
var createChara = $("#chara")

start.on("click", () => {window.location.replace("/game");})

titleScreen.on("click", () => {window.location.replace("/home");})

createChara.on("click", () => {window.location.replace("/create");})

