
$.get("/api/characters", function(data) {

    for (var i = 0; i < data.length; i++) {
      // create a parent div for the oncoming elements
      var wellSection = $("<div>");
      // add a class to this div: 'well'
      wellSection.addClass("well");
      // add an id to the well to mark which well it is
      wellSection.attr("id", "character-well-" + i);
      // append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now add all of our character data to the well we just placed on the page
  
     
      $("#character-well-" + i).append("<h2>" + data[i].Name + "</h2>");
      $("#character-well-" + i).append("<h3>class: " + data[i].Class + "</h4>");
      $("#character-well-" + i).append("<h3>Strength: " + data[i].Strength + "</h4>");
      $("#character-well-" + i).append("<h3>Defense: " + data[i].Defense + "</h4>");
      $("#character-well-" + i).append("<h3>HP: " + data[i].Magic + "</h4>");
      $("#character-well-" + i).append("<h3>Speed: " + data[i].Speed + "</h4>");
    }
  });
  