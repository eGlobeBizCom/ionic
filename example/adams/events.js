var logEvent = function(data) {
  var e = document.getElementById('event-log');
  var l = document.createElement('div');
  l.innerHTML = 'EVENT: ' + data.type;
  console.log(data.event);
  e.appendChild(l);
}
window.FM.on('tap', function(e) {
  console.log('GOT TAP', e);
  logEvent({
    type: 'tap',
    event: e
  });
});
window.FM.on('click', function(e) {
  console.log('GOT CLICK', e);
  logEvent({
    type: 'click',
    event: e
  });
});