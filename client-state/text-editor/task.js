const editor = document.getElementById('editor');
const reset = document.getElementById('reset');

editor.addEventListener('change', () => {
    localStorage.setItem('editor', editor.value);
});

editor.value = localStorage.getItem('editor');

reset.addEventListener('click', () => {
    localStorage.removeItem('editor');
    editor.value = '';
});