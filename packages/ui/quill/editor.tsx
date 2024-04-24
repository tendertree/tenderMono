import Quill from 'quill';

const options = {
    debug: 'info' as 'info',
    modules: {
        toolbar: true,
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
};

export function Editor() {
    const quill = new Quill('#editor', options);
    return (
        <div id="editor">This is quill Editor </div>
    )
}
