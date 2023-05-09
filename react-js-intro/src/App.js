import Video from './component/Video'
import videos from './data/data'
import './App.css'
function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(x=><Video
          title={x.title}
          views={x.views}
          time={x.time}
          channel={x.channel}
          verify={x.verify}
          prize={x.prize}

        ></Video>)
      }
    </div>

  )
}

export default App;