// Handler/Logic File

//Trying to model after CatsApp to see if I can at least get functional

$(function() {
    $(".change-devoured").on("click", function(event) {
      
      
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("Devoured Updated");
          
          location.reload();
        }
      );
    });
  
    
    
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created New Burger");
          
          location.reload();
        }
      );
    });
  
    
    
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted Burger");
          
          location.reload();
        }
      );
    });
 


});
  