import * as $ from 'jquery';

export default (function () {
  // ------------------------------------------------------
  // @Window Resize
  // ------------------------------------------------------

  /**
   * NOTE: Register resize event for Masonry layout
   */
  const EVENT = document.createEvent('UIEvents');
  window.EVENT = EVENT;
  EVENT.initUIEvent('resize', true, false, window, 0);


  window.addEventListener('load', () => {
    /**
     * Trigger window resize event after page load
     * for recalculation of masonry layout.
     */
    window.dispatchEvent(EVENT);
  });

  // ------------------------------------------------------
  // @External Links
  // ------------------------------------------------------

  // Open external links in new window
  $('a')
    .filter('[href^="http"], [href^="//"]')
    .not(`[href*="${window.location.host}"]`)
    .attr('rel', 'noopener noreferrer')
    .attr('target', '_blank');

  // ------------------------------------------------------
  // @Hide unecessary fields
  // ------------------------------------------------------

  $("#newIndividual").change(function() {
    if ($(this).val() == "yes") {
      $('#individualRegistration').show();
      /*
      $('#individualRegistration').attr('required', '');
      $('#individualRegistration').attr('data-error', 'This field is required.');
      */
    } else {
      $('#individualRegistration').hide();
      /*
      $('#individualRegistration').removeAttr('required');
      $('#individualRegistration').removeAttr('data-error');
      */
    }
  });
  $("#newIndividual").trigger("change");
  // ------------------------------------------------------
  // @Update Image placeholder
  // ------------------------------------------------------
  function readURL(input, elementId, placeholderImage) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {

        //$('#blah').attr('src', e.target.result);
        document.getElementById(elementId).src = e.target.result;
      }
      
      reader.readAsDataURL(input.files[0]);
    }
    else {

      //$('#blah').attr('src', 'assets/static/images/mugshot-placeholder.jpg');
      document.getElementById(elementId).src = placeholderImage;
    }
  }
  
  $("#inputPhotoLeft").change(function() {
    readURL(this,'photoLeft','assets/static/images/mugshot-placeholder.jpg');
  });
  $("#inputPhotoFront").change(function() {
    readURL(this,'photoFront','assets/static/images/mugshot-placeholder.jpg');
  });
  $("#inputPhotoRight").change(function() {
    readURL(this,'photoRight','assets/static/images/mugshot-placeholder.jpg');
  });


  // ------------------------------------------------------
  // @Resize Trigger
  // ------------------------------------------------------

  // Trigger resize on any element click
  document.addEventListener('click', () => {
    window.dispatchEvent(window.EVENT);
  });
}());
