// import dependencies
import Link from "./Link"

function Sidebar(props){
    return (<>
        <div className="sidebar" >
            <div className="sidebar-links-container">
                <Link sidebarLink="Dashboard"/>
                <Link sidebarLink="Widget"/>
                <Link sidebarLink="Reviews"/>
                <Link sidebarLink="Customers"/>
                <Link sidebarLink="Online Analysis"/>
                <Link sidebarLink="Settings"/>
            </div>
        </div>
    </>)
}

// export component
export default Sidebar