const $ = require('jquery');


$(document).ready(function(){
  
  // Toggle expand and collapsed states
  
  $(".figure-list__btn").click(function(e){
    
    e.preventDefault();
    
    $(this).parent(".figure-list").toggleClass("is-collapsed");
    $(this).siblings(".figure-list__body").toggleClass("figure-list--preview");
    $(this).siblings(".tabs").find(".figure-list__body").toggleClass("figure-list--preview");
    
    // Change button label on toggle
    
    var btnLabel = $(this).text();
    
    if ( btnLabel == "Shrink images" ) {
      var newLabel = "Expand images";
    } else if ( btnLabel == "Expand images" ) {
      var newLabel = "Shrink images";
    }
    
    $(this).text(newLabel);
    
    // Update layout class
    
    var getLayout = $(this).parent(".figure-list")
    
    //if ( getLayout.hasClass("is-grid") == true ) {
      //$(this).siblings(".figure-list__body").toggleClass("figure-list--preview");
      //$(this).siblings(".figure-list__body").toggleClass("figure-list--grid");
      //console.log("grid");
    //} else if ( getLayout.hasClass("is-full-width") == true ) {
     // $(this).siblings(".figure-list__body").toggleClass("figure-list--preview");
     // console.log("full width");
    //}
      
  });
  
  // Count and add numeric classes to each figure list and child figures

  $(".figure-list").each(function(i) {
    
    var figureLength = $(this).find("figure").length; 
    var figureListClass = "has-" + (figureLength);
    
    // Add .has-n to .figure-list
    
    $(this).addClass(figureListClass);
    
    // Find children and replace .figure-list__figure with .figure-list__figure-n
    
    $(this).find(".figure-list__figure").each(function(i) {

      $(this).toggleClass("figure-list__figure");
      $(this).toggleClass("figure-list__figure-" + (i+1));
      
    });
    
    // Get caption text
    
    var getCaptions = $(this).find(".figure-list__caption");

    // Make captions into list items

    var captionListItems = $(getCaptions).map(function(i) {

      var captionListItem = $("<li>").text($(this).text()).get();

      return captionListItem;

    });

    // Insert list before button

    var captionList = $("<ul>").html(captionListItems).addClass("figure-list__captions");

    $(this).find(".figure-list__btn").before(captionList);
    
    // Test
    
//    console.log("Figure list " + (i+1) + " has " + figureLength + " images");
    
//    console.log(rcaptionList);

  });
  
  // Fancy table shizzle
  
  //$(".table--acne th, .table--acne td").hover(function(){
    
    //var getClass = $(this).attr('class');
    
    //$(this).parents(".table--acne").find("." + getClass).addClass("has-hover");
    
    //console.log(getClass);

    
  //}, function() {
    
    //var getCol = $(this).parents(".table--acne").find("[class~=col-]");
    
    //console.log(getCol);
  
  //});
  
  

});

