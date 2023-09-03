import { Routes,Route} from 'react-router-dom';
import Login from './Login';

export default function Authrouter() {
  return (
    <>
         <Routes>
                <Route path="" element={<Login/>}></Route>
           </Routes>
    </>
  )
}
