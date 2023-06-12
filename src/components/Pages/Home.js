
import React, { useContext } from 'react'
import Intro from './../Intro/Intro';
import Contents from './../Contents/Contents';
import Menus from './../Menus/Menus';
import Loading from './../loading/Loading';
import { AppContext } from './../../context/AppProvider';
import Footer from '../Footer';


 function Home(props) {
  const { loading } = useContext(AppContext);

  return (
    <div>
      {loading && <Loading />}
      <Intro idSection='Intro'/>
      <Contents />
      <Menus />
      <Footer />
    </div>
  )
}

export default Home;