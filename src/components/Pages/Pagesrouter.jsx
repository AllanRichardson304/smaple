import { Routes, Route } from 'react-router-dom' 
import Home from './Home/Home'

export const Pagesrouter = () => {
  return (
    <>
       <Routes>
        <Route >
          <Route path="" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          </Route>
      </Routes>
    </>
  )
}


