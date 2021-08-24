$( ".button" ).click(function() {
    $('h2').html(function(i, val) { return +val+1 })
  });