const $ = require('jquery');

$(document).ready(function(){
  
  // Toggle expand and collapsed states
  
  $(".figure-list__btn").click(function(e){
    
    e.preventDefault();
    
    $(this).parent(".figure-list").toggleClass("is-collapsed");
    $(this).parent(".figure-list").toggleClass("is-expanded");
    
    var btnLabel = $(this).text();
    
    if (btnLabel == "Shrink images") {
      var newLabel = "Expand images";
    } else if (btnLabel == "Expand images") {
      var newLabel = "Shrink images";
    }
    
    $(this).text(newLabel);
    
  });
  
  // Count and add numeric classes to each figure list and child figures

  $(".figure-list").each(function(i) {

    // This needs to run before the class is changed in the second part of this function 
    
    var figureLength = $(this).find(".figure-list__figure").length;
    var figureListClass = "has-" + (figureLength - 1);
    
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
    
    console.log("Figure list " + (i+1) + " has " + figureLength + " images");
    
    console.log(captionList);

  });

});

// Add leading zero to numbers > 10

function addZero(i) {

  if (i >= 9 ) {
    var n = (i+1);
  } else {
    var n = "0" + (i+1);
  }

  return(n);

}

