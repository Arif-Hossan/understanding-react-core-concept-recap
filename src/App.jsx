import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'

function App() {

  return (
    <div>
      <Device name='Uphone' price='13000'></Device>
      <Device name="Samsing" price='15000'></Device>
      <Watch></Watch>

    </div>
  )
}

export default App
