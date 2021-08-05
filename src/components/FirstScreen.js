import React from 'react';
import Banner from './Banner';
import ReactPlayer from 'react-player'
function FirstScreen({ showSecondScreen }) {
    const [timerEnd, setTimerEnd] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setTimerEnd(true);
        }, 5000);
    })

    return (
        <div className="first-screen">
            <ReactPlayer width="1280px" height="720px" url="https://www.youtube.com/embed/dbvi_S3fy2M" playing={true} muted={true} controls={true} />
            {timerEnd ? <Banner clickBanner={showSecondScreen} /> : ""}
        </div>
    )
}
export default FirstScreen;