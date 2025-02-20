import { Outlet,Link} from "react-router-dom"



function Dashboard() {
  return (
    <div style={{display: "flex",flexDirection: "row",justifyContent: "center", textAlign: "center",textDecoration: "none"}}>
      <div style={{width: "20%",backgroundColor: "lightblue",height: "100vh"}}>
        <Link to='/addstudent'style={{color:"black",display:"block",marginBottom:"10px"}}>Add Student</Link>
        <Link to='/studentlist'style={{color:"black",display:"block"}}>Student List</Link>
      </div>
      <div style={{width: "80%",backgroundColor: "white",height: "100vh",display: "flex",justifyContent: "center"}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
