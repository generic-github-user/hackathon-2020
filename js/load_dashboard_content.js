tab = new URL(window.location.href).searchParams.get('tab');
if (tab == undefined) {
      tab = 'main';
}
console.log('Loading tab: ' + tab);
$('#main-content').load('/' + tab + '.html');

$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/css/' + tab + '.css'));
$.getScript('/js/' + tab + '.js');
$.getScript('https://code.getmdl.io/1.3.0/material.min.js');