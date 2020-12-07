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
  
  // ------------------------------------------------------
  // @Update photos
  // ------------------------------------------------------
  $("#inputPhotoLeft").change(function() {
    readURL(this,'photoLeft','assets/static/images/placeholders/mugshot-left.png');
  });
  $("#inputPhotoFront").change(function() {
    readURL(this,'photoFront','assets/static/images/placeholders/mugshot-center.png');
  });
  $("#inputPhotoRight").change(function() {
    readURL(this,'photoRight','assets/static/images/placeholders/mugshot-right.png');
  });

  // ------------------------------------------------------
  // @Update left fingerprints
  // ------------------------------------------------------
  $("#inputThumbLeft").change(function() {
    readURL(this,'thumbLeft','assets/static/images/placeholders/fingerprint-01.png');
  });
  $("#inputIndexLeft").change(function() {
    readURL(this,'indexLeft','assets/static/images/placeholders/fingerprint-02.png');
  });
  $("#inputMiddleLeft").change(function() {
    readURL(this,'middleLeft','assets/static/images/placeholders/fingerprint-03.png');
  });
  $("#inputRingLeft").change(function() {
    readURL(this,'ringLeft','assets/static/images/placeholders/fingerprint-04.png');
  });
  $("#inputLittleLeft").change(function() {
    readURL(this,'littleLeft','assets/static/images/placeholders/fingerprint-05.png');
  });
  // ------------------------------------------------------
  // @Update right fingerprints
  // ------------------------------------------------------
  $("#inputThumbRight").change(function() {
    readURL(this,'thumbRight','assets/static/images/placeholders/fingerprint-01.png');
  });
  $("#inputIndexRight").change(function() {
    readURL(this,'indexRight','assets/static/images/placeholders/fingerprint-02.png');
  });
  $("#inputMiddleRight").change(function() {
    readURL(this,'middleRight','assets/static/images/placeholders/fingerprint-03.png');
  });
  $("#inputRingRight").change(function() {
    readURL(this,'ringRight','assets/static/images/placeholders/fingerprint-04.png');
  });
  $("#inputLittleRight").change(function() {
    readURL(this,'littleRight','assets/static/images/placeholders/fingerprint-05.png');
  });



  // ------------------------------------------------------
  // @Resize Trigger
  // ------------------------------------------------------

  // Trigger resize on any element click
  document.addEventListener('click', () => {
    window.dispatchEvent(window.EVENT);
  });
}());
