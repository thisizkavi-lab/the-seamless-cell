const assetBase = `${import.meta.env.BASE_URL}visual-review/`;
const concepts = [
  { id: 'cell', title: 'Cell interior', file: `${assetBase}01-cell-interior.png` },
  { id: 'mitochondrion', title: 'Inside the mitochondrion', file: `${assetBase}02-mitochondrion.png` },
  { id: 'atp', title: 'ATP synthesis', file: `${assetBase}03-atp-synthesis.png` },
];

function showConcept() {
  const concept = concepts.find(item => `#${item.id}` === location.hash) || concepts[0];
  for (const item of concepts) {
    document.getElementById(item.id).hidden = item.id !== concept.id;
    const link = document.querySelector(`nav a[href="#${item.id}"]`);
    if (item.id === concept.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  document.querySelector('.resolution-link').href = concept.file;
  document.title = `${concept.title} — The Seamless Cell concepts`;
}

addEventListener('hashchange', showConcept);
showConcept();

const notesToggle = document.querySelector('.notes-toggle');
const notes = document.getElementById('design-notes');
notesToggle.addEventListener('click', () => {
  notes.hidden = !notes.hidden;
  notesToggle.setAttribute('aria-expanded', String(!notes.hidden));
  if (!notes.hidden) notes.scrollIntoView({ behavior: 'instant', block: 'start' });
});

addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  const current = Math.max(0, concepts.findIndex(item => `#${item.id}` === location.hash));
  const offset = event.key === 'ArrowRight' ? 1 : -1;
  location.hash = concepts[(current + offset + concepts.length) % concepts.length].id;
  event.preventDefault();
});
