
// on(“click”, function() {…}) is an event handler that triggers the action inside the function when the user clicks the .inner-switch element,
// hasClass() checks if the .dark class is assigned to the .inner-switch element or not (this is based on the state of the toggle),
// removeClass() removes the .dark class from the HTML when the user switches to light mode,
// addClass() adds the .dark class to the HTML when the user switches to dark mode,
// text() sets the text of the label on the switch — it’s either “OFF” or “ON”.


$(".inner-switch" ).on("click", function(
){

  if( $("body").hasClass("dark")){
    $("body" ).removeClass( "dark ");
    $(".inner-switch").text("OFF");
  }else{
    $("body").addClass("dark");
    $(".inner-switch").text("ON");
  }
});
