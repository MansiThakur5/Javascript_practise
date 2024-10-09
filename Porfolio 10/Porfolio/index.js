function openLink(event) {
    event.preventDefault();
    const url = event.target.href;
    window.open(url, '_blank');
}