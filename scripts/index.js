function hideShorts() {
    let videos = document.getElementsByTagName('ytd-grid-video-renderer');

    for (let i = 0; i < videos.length; i += 1) {
        if (videos[i].getElementsByTagName('a').namedItem('thumbnail').href.includes('short')) {
            videos[i].style.display = 'none';
        }
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        hideShorts();
    }
})

// console.log('Extension : ' + window.location.href);
// window.location.
