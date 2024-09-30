function removeWidgetInfo() {
    const widget = document.querySelector('.elfsight-app-4eb86f4e-0804-4dc5-a400-27783487828b');

    if (!widget) return;

    const infoBox = widget.querySelector('.eapps-instagram-feed-container ~ a');
    infoBox.style.display = 'none';
}

addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        removeWidgetInfo();
    }, 1000);
});