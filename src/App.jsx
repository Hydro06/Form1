import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import AddStudents from './component/AddStudent'
import ListStudents from './component/StudentList'
import UpdateStudents from './component/UpdateStudents'
// import '/index.css'

const myRouter = createBrowserRouter([
  {
    path: '', Component: Dashboard, children: [
      { path: '', Component: ListStudents },
      { path: 'addStudent', Component: AddStudents },
      { path: 'studentlist', Component: ListStudents },
      { path: 'updateStudent', Component: UpdateStudents },
      
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App