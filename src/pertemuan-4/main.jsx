import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FrameworkList from './FrameworkList.jsx'
import FrameworkListSearchFilter from './FrameworkListSearchFilter.jsx'

createRoot(document.getElementById("root"))
  .render(
    <div>
     {/* <FrameworkList/> */}
     <FrameworkListSearchFilter/>
    </div>
  )