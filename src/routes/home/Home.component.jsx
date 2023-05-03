import { Outlet } from "react-router-dom"
import { Fragment, useEffect } from "react"

import Directory from "../../component/directory/Directory.component"


const Home = () => {

    useEffect(() => {
        document.title = "Easy Clothing - Home"
    }, [])

    return (
        <Fragment>
            <Directory />
            <Outlet />
        </Fragment>
    )
}

export default Home