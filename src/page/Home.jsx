


import { useLoaderData } from 'react-router-dom'
import Banner from './Banner'
import Animations from '../shaire/lotti/Animations'
import '../shaire/cards/card.css'
import Circle from '../shaire/circle/Circle'


const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className=' '>
     
     <Banner></Banner>
    
     <p className='text-3xl text-center font-bold my-10'> Users Benefit</p>
     <div className='lg:grid flex flex-col lg:grid-cols-3    my-8 lg:mb-20 h-auto max-w-[1100px] lg:mx-auto justify-evenly items-center gap-10    '>
      {
        data?.map(card=><div key={card?.id} className="card cards shadow-2xl ml-5 w-96 bg-blue-400 ">
        <div className="card-body text-white">
          <h2 className="card-title text-2xl text-white">{card?.name}</h2>
          <p className='text-base'>{card?.description}</p>
         
          
        </div>
      </div>)
      }
     </div>
     <div className='max-w-[1080px] h-auto mx-auto mb-10 '>
     <p className='text-3xl text-center font-bold mb-8'>Explore Apps </p>
     <div className='flex'>
     <Animations></Animations>
     
     </div>
     </div>
     <p className='text-center hidden lg:block text-3xl font-bold my-5'>Clients Reviews</p>
     <div style={{backgroundImage: 'url(https://i.ibb.co/Tm6MNK8/images.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}
    
    } className=' w-auto  lg:max-w-[1080px] mx-auto relative h-[650px] lg:h-[500px] rounded-md  mb-10' >
     <Circle></Circle> 
     </div>
    </div>
  )
}

export default Home
