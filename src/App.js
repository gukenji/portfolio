import CanvasComponent from './components/SphereCanvas'
import Frame from './components/Frame'
import BoxCanvas from './components/BoxCanvas'
function App() {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <Frame />
      <BoxCanvas />
    </div>
  )
}

export default App
