import './Video.css'

function Video({title,channel,views,time}){
    return (
        <>
        <div>
            <div className="pic">
                <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel}</div>
            <div className="views">{views} view <span>.</span> {time}</div>
        </div>
       
        </>
    )

}



export default Video;