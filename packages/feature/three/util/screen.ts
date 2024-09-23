interface DocumentWithFullscreen extends Document {
    webkitFullscreenElement?: Element;
    webkitExitFullscreen?: () => void;
}

interface DocumentElementWithFullscreen extends HTMLCanvasElement {
    webkitRequestFullscreen?: () => void;
}
const isFullscreen = () => {
    const doc = document as DocumentWithFullscreen;
    return !!(doc.fullscreenElement || doc.webkitFullscreenElement);
};

const requestFullscreen = (element: DocumentElementWithFullscreen) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
};

const exitFullscreen = (doc: DocumentWithFullscreen) => {
    if (doc.exitFullscreen) {
        doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
    }
};

const ToggleFullScreen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLCanvasElement;

    if (!isFullscreen()) {
        requestFullscreen(target);
    } else {
        exitFullscreen(document);
    }
};
