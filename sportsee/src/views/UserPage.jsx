import NavBarH from "../components/NavBarH";
import NavBarV from "../components/NavBarV";
import Dashboard from "../components/Dashboard"

/**
 * Get the user's id from the url to call the data from the server and construct the dashboard
 */

function UserPage() {
    return (
        <div className="main-content h-100 w-100">
            <NavBarH />
            <section className="user-page-container d-flex h-100">
                <NavBarV />
                <Dashboard />
            </section>
        </div>
    )
}

export default UserPage