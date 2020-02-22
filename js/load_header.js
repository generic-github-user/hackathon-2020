$(document).ready(() => {
  $.get('./header.html').then(
    (html) => {
      $('#main-header').replaceWith(html);
      $.getScript('https://code.getmdl.io/1.3.0/material.min.js');
    }
  )
})
