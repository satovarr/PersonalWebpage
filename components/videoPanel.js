import VideoSlider from "./videoSlider";

const VideoPanel = () => (
    <>
        <div className='video-box'>
            <div className='container'>
                <div class="video">
                    <div class="video-shadow">
                        <h2 class="video-tittle">Watch my last video</h2>
                    </div>                    
                    <iframe src="https://www.youtube.com/embed/CSdpk6NzvhY"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        
                </div>
                <div className="video-slider">
                    <VideoSlider/>
                </div>
            </div>
        </div>
    </>
);

export default VideoPanel;