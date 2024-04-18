const toggleFullScreen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLCanvasElement;

    if (!isFullscreen()) {
        requestFullscreen(target);
    } else {
        exitFullscreen();
    }
};
const isFullscreen = () => {
    return !!document.fullscreenElement;
};

const requestFullscreen = (element: HTMLCanvasElement) => {
    element.requestFullscreen();
};

const exitFullscreen = () => {
    document.exitFullscreen();
}
