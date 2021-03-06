import React from 'react';
import { useParams } from 'react-router-dom';
// components
import Card from '../components/Card';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import AdsGif from '../components/AdsGif';
import ConditionSection from '../components/ConditionSection';
import CardSkeleton from '../components/CardSkeleton';
import Message from '../components/Message';

// hooks
import { useAllProducts } from '../hooks';

const Home = () => {
  const { term } = useParams();

  const { data: products, isLoading, error } = useAllProducts(term);
  const skeletonNum = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {!term && (
        <div className="h-full  w-full flex items-start flex-col md:flex-row sm:pt-20 p-2 sm:p-0 ">
          <div className="w-full md:w-2/3 p-0 md:p-2 mx-auto">
            <Carousel />
          </div>
          <ConditionSection numbers={3} />
          <div className="w-full md:w-1/3 p-0 md:p-2 mx-auto">
            <AdsGif />
          </div>
        </div>
      )}

      <Layout>
        <div className="flex  px-6 flex-col flex-wrap pt-6 justify-center ">
          <h1 className="text-black font-semibold text-sm sm:text-lg">
            {term ?? 'آخرین محصولات'}
          </h1>

          <div className="w-24 sm:w-32 h-little hidden sm:block bg-red-100 mt-2"></div>
        </div>

        {error ? (
          <Message variant="Error" timer={3000}>
            {error}
          </Message>
        ) : (
          <div className="flex flex-row flex-wrap  mt-4 sm:mt-8  bg-white pb-16  justify-center mx-3 sm:mx-4 rounded-md">
            {isLoading
              ? skeletonNum.map((item) => <CardSkeleton key={item} />)
              : products &&
                products.map((product) => (
                  <Card key={product._id} product={product} />
                ))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;
