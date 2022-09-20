const exampleModalEl = document.getElementById('exampleModal');

exampleModalEl.addEventListener('show.bs.modal', function(event) {
  document.getElementById('modalImage').src = event.relatedTarget.src;
});
