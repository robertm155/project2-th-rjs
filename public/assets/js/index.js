var start = $("#startGame")
var titleScreen = $("#title-link")
var createChara = $("#chara")
var charaClass = $(".charaClass")

start.on("click", () => {window.location.replace("/game");})

titleScreen.on("click", () => {window.location.replace("/home");})

createChara.on("click", () => {window.location.replace("/create");})

//$(".custom-select").click( () => console.log($(".custom-select").val()))

$(".custom-select").click( () => {
    if($(".custom-select").val() === "mercenary"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/mercenary.png")
    } else if ($(".custom-select").val() === "knight"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/knight.png")
    } else if ($(".custom-select").val() === "mage"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/mage.png")
    } else if ($(".custom-select").val() === "assassin"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/assassin.png")
    } else {
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/default.png")
    }
})
