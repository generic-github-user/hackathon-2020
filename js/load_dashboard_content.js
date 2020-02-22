tab = new URL(window.location.href).searchParams.get('tab');
if (tab == undefined) {
  tab = 'main';
}
console.log('Loading tab: ' + tab);
$('#main-content').load('/' + tab + '.html');
