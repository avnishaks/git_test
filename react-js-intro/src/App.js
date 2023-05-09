import Video from './component/Video'
function App() {
  return (
    <div className="App">
      <div>Videos</div>
      <Video title="Node JS tutorial" channel="Avnish" views="100K" time="1 month ago"></Video>
      <Video
        title="Mongo DB tutorial"
        channel="AKS"
        views="1M"
        time="1 month ago"
      ></Video>
    </div>

  )
}

export default App;