function makeVideo(vido){
    const video = document.createElement('video');
    video.setAttribute('src',vido);
    video.setAttribute('width', 480);
    video.setAttribute('autoplay', true);
    video.setAttribute('controls', true);
    video.setAttribute('class', 'm-10');
    document.body.append(video);
}

export default makeVideo;