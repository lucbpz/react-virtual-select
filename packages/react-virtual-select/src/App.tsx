import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import VSelect from './selects/VSelect'
import VAsyncSelect from './selects/VAsyncSelect'
import VAsyncCreatableSelect from './selects/VAsyncCreatable'
import VCreatableSelect from './selects/VCreatable'
import { ColourOption, colourOptions, stateOptions } from './data'

const fetchColours = (inputValue: string): Promise<typeof colourOptions> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(colourOptions)
    }, 1000)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Virtual Select Component</h2>
      </header>
      <div className="App-content">
        <div>
          <p>React Virtual Select</p>
          <VSelect
            isClearable
            placeholder="Pick an option"
            options={stateOptions}
          />
        </div>
        <div>
          <p>React Virtual Async Select</p>
          <VAsyncSelect
            isClearable
            defaultOptions
            loadOptions={fetchColours}
            placeholder="Pick an option"
          />
        </div>
        <div>
          <p>React Virtual Creatable Select</p>
          <VCreatableSelect
            isClearable
            placeholder="Pick an option"
            options={stateOptions}
          />
        </div>
        <div>
          <p>React Virtual Async Creatable Select</p>
          <VAsyncCreatableSelect
            isClearable
            defaultOptions
            placeholder="Pick an option"
            loadOptions={fetchColours}
          />
        </div>
      </div>
      <footer>
        <p>
          This library is a virtualized version of{' '}
          <a href="https://github.com/jedwatson/react-select">react-select</a>{' '}
          component
        </p>
        <p>Handcrafted by Lucas Bernalte and Adrián Serrano</p>
      </footer>
    </div>
  )
}

export default App
