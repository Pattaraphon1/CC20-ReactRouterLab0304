import {NavLink, useParams} from 'react-router'

export default function Navbar() {
  const {lang} = useParams();
  const style = {
    liLink: "hover:font-medium hover:text-[#826047]"
  }
  return (
      <nav className='mb-10'>
        <ul className="flex justify-center gap-2 font-light">
          <li className={style.liLink}><NavLink to ="/">HOME</NavLink> / </li>
          <li className={style.liLink}><NavLink to ={`/${lang}/lifestyle`}>LIFESTYLE</NavLink> / </li>
          <li className={style.liLink}><NavLink to ={`/${lang}/journey`}>JOURNEY</NavLink> / </li>
          <li className={style.liLink}><NavLink to ={`/${lang}/inspiration`}>INSPIRATION</NavLink> / </li>
          <li className={style.liLink}><NavLink to ={`/${lang}/about`}>ABOUT</NavLink> / </li>
          <li className={style.liLink}><NavLink to ={`/${lang}/contact`}>CONTACT</NavLink> / </li>
          <li className={style.liLink}><NavLink to ={`/${lang}/shop`}>SHOP</NavLink></li>
        </ul>
      </nav>
  )
}
