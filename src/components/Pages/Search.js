
import React, { useContext } from 'react'
import FoodsDetail from '../FoodsDetail/FoodsDetail';
import SearchProduct from '../SearchProduct/SearchProduct'
import Loading from './../loading/Loading';
import { AppContext } from './../../context/AppProvider';

function Search(props) {
  const { loading } = useContext(AppContext);
  return (
    
    <div>
      {loading && <Loading />}
        <SearchProduct />
        
    </div>
  )
}

export default Search;

