import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heders from '../components/Headers'
import Banner from '../components/Banner'
import Categorys from '../components/Categorys'
import FeatureProducts from '../components/products/FeatureProducts'
import Products from '../components/products/Products'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import { get_category, get_products, query_products } from '../store/reducers/homeReducer'
const Home = () => {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const { products, totalProduct, parPage, latest_product, topRated_product, discount_product } = useSelector(state => state.home)
    useEffect(() => {
        dispatch(get_products())
    }, [])

    useEffect(() => {
        dispatch(
            query_products({
                pageNumber
            })
        )
    }, [pageNumber])

    
    return (
        <div className='w-full'>
            <Heders />
            <Banner />
            <div className='flex item-center justify-center'>
                <Link className='px-5 w-[146px] py-2 bg-blue-500 rounded-sm text-white' to='/shops'> Now</Link>
            </div>
            <div className='my-4 max-w-[1440px] mx-auto px-16 sm:px-5 md-lg:px-12 md:px-10'>
                <Categorys />
            </div>
            <div className='py-[45px] max-w-[1440px] mx-auto px-16 sm:px-5 md-lg:px-12 md:px-10'>
                <FeatureProducts products={products} />
            </div>
            <div>
                {
                    totalProduct > parPage && <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalItem={totalProduct} parPage={parPage} showItem={Math.floor(totalProduct / parPage)} />
                }
            </div>
            <div className='py-10'>
                <div className='max-w-[1440px] mx-auto px-16 sm:px-5 md-lg:px-12 md:px-10 flex flex-wrap'>
                    <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                        <div className='overflow-hidden'>
                            <Products title='Latest Product' products={latest_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Top Rated Product' products={topRated_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Discount Product' products={discount_product} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home