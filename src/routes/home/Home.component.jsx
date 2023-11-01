import { Outlet } from "react-router-dom"
import { Fragment, useEffect } from "react"

import Directory from "../../component/directory/Directory.component"
import Banner from "../../component/banner/Banner.component"
import Footer from "../../component/footer/Footer.component"
import Features from "../../component/features/Features.component"
import NewArrivals from "../../component/new_arrivals/NewArrivals.component"


const Home = () => {

    useEffect(() => {
        document.title = "Easy Clothing - Home"
    }, [])

    return (
        <Fragment>
            <Banner />
            <Directory />
            <Outlet />
            <Features />
            <NewArrivals />
            <Footer />
        </Fragment>
    )
}

export default Home