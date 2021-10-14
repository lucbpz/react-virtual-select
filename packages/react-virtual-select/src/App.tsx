import { useState } from 'react'
import logo from '../../../static/images/logo.png'
import './App.css'
import VSelect from './selects/VSelect'
import VAsyncSelect from './selects/VAsyncSelect'
import VAsyncCreatableSelect from './selects/VAsyncCreatable'
import VCreatableSelect from './selects/VCreatable'
import { colourOptions, stateOptions } from './data'

const fetchColours = (inputValue: string): Promise<typeof colourOptions> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(colourOptions)
    }, 1000)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="500px" alt="logo" />
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
          <a href="https://github.com/jedwatson/react-select" target="_blank">
            react-select
          </a>{' '}
          component
        </p>
        <p>
          Handcrafted by{' '}
          <a href="https://github.com/lucbpz" target="_blank">
            Lucas Bernalte
          </a>{' '}
          and{' '}
          <a href="https://github.com/adrserr" target="_blank">
            Adrián Serrano
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
