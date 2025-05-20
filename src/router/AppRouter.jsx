import {BrowserRouter, Navigate, Route, Routes} from 'react-router'
import Layout from '../component/Layout'
import Home from '../pages/Home'
import LifeStyle from '../pages/LifeStyle'
import Journey from '../pages/Journey'
import Inspiration from '../pages/Inspiration'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import ShopLayout from '../component/shop/ShopLayout'
import ShopHome from '../component/shop/ShopHome'
import CategoryPage from '../component/shop/CategoryPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en"/>} />
        <Route path=":lang/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lifestyle" element={<LifeStyle />} />
          <Route path="journey" element={<Journey />} />
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="shop" element={<ShopLayout />}>
            <Route index element={<ShopHome />}/>
            <Route path=":category"element={<CategoryPage />}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
