
$(".generateChara").on("click", function(event) {
    event.preventDefault();
    console.log("added");
  

    var newCharacter = {

      name: $(".name").val().trim(),
      class: $(".custom-select").val().trim(),
      strength: $(".strength").val().trim(),
      defense: $(".defense").val().trim(),
      magic: $(".magic").val().trim(),
      speed: $(".speed").val().trim()
    };

  });