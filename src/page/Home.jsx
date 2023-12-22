


import { useLoaderData } from 'react-router-dom'
import Banner from './Banner'


const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className=' '>
     
     <Banner></Banner>
     <p className='text-3xl text-center my-10'> Who can use this Website and Who Can Benefit from this website?</p>
     <div className='flex flex-col lg:flex-row justify-center gap-5 items-center min-h-96 my-8 lg:my-1'>
      {
        data?.map(card=><div key={card?.id} className="card shadow-2xl  w-96 bg-blue-400 ">
        <div className="card-body text-slate-300">
          <h2 className="card-title">{card?.name}</h2>
          <p>{card?.description}</p>
          
        </div>
      </div>)
      }
     </div>
     
    </div>
  )
}

export default Home
