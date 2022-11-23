import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./components/ThemeSwitcher";
import router from "./Routes/Routes";
import {Toaster} from 'react-hot-toast'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div  data-theme={theme} className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
