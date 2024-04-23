import Quill from 'quill';
export function Editor() {
    const quill = new Quill('#editor');
    return (
        <div id="editor">This is quill Editor </div>
    )
}
