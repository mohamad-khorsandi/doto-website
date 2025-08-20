import './TopBar.css'
import { ChevronDown, Search, Moon, SunDim } from 'lucide-react'
import { useState } from 'react';

function SearchBar() {
  return (
    <form id='serach-bar'>
      <input type='text' placeholder="Search note..."></input>
      <button type='submit'>
        <Search className='search-icon'/>
      </button>
    </form>
  )
}

const Options = {
  ALL: 'ALL',
  COMPLETE: 'COMPLETE',
  INCOMPLETE: 'INCOMPLETE'
};

function FilterButton() {
  const [option, setOption] = useState(Options.ALL);
  const [vis, setVis] = useState(false);
  return (
    <div className="dropdown-wrapper">
      <button id='dd-btn' onClick={() => setVis(!vis)}>
        <span>{option} </span>
        <ChevronDown size={12} id="dropdown-arrow" />
      </button>
      {vis ? 
        <div id='dd-list'>
          <p onClick={() => setOption(Options.ALL)}>All</p>
          <p onClick={() => setOption(Options.COMPLETE)}>Complete</p>
          <p onClick={() => setOption(Options.INCOMPLETE)}>Incomplete</p>
        </div>
      : null }
    </div>
  )
}


function ModeBtn({mode, setMode}) {
  return (
    <button className='mode-btn' onClick={() => setMode(!mode)}>
      {mode ? <Moon className='mode-icon' /> : <SunDim className='mode-icon' />}
    </button>
  )
}


function TopBar ({mode, setMode}) {
  return (
    <div className="top-bar">
      <SearchBar />
      <FilterButton />
      <ModeBtn mode={mode} setMode={setMode}/>
    </div>
  )
}

export { SearchBar, FilterButton, TopBar }