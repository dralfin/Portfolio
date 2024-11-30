import React from 'react'
import "./App.css"
 
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
 
import Menu from '../src/components/layout/Menu'
import Content from '../src/components/layout/Content'
import SocialMedia from '../src/components/layout/SocialMedia'
 
const App = props => (
    <div className="App">
        <BrowserRouter> 
        <Menu></Menu>
        <Content></Content>
        <SocialMedia></SocialMedia>   
        </BrowserRouter>
    </div>
)
 
export default App