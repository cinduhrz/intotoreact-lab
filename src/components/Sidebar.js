// import dependencies
import Link from "./Link"

function Sidebar(props){
    return (<>
        <div className="sidebar" >
            <Link sidebarLink="Dashboard"/>
            <Link sidebarLink="Widget"/>
            <Link sidebarLink="Reviews"/>
            <Link sidebarLink="Customers"/>
            <Link sidebarLink="Online Analysis"/>
            <Link sidebarLink="Settings"/>
        </div>
    </>)
}

// export component
export default Sidebar