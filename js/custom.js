/*!
 * Custom
 */
// Placeholder
jQuery(function(){
     jQuery("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      });

      jQuery("a[rel=tooltip]").tooltip();

      jQuery('.carousel').carousel({interval: 3500});
      jQuery(".carousel-indicators li:first").addClass("active");
      jQuery(".carousel-inner .item:first").addClass("active");

});



