import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/NavBar"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { Search } from "../pages/SearchPage"
import { Hero } from "../pages/HeroPage"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dcpage" element={<DcPage />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero/:id" element={<Hero />} />


                    <Route path="/" element={<Navigate to="marvel" />} />
                </Routes>
            </div>

        </>
    )
}

