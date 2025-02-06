
"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'total',
        count:65,
        fill: '#FFFFFF',
      },
  {
    name: 'girls',
    count:50,
    fill: '#CFCEFF',
  },
  {
    name: 'boys',
    count:15,
    fill: '#C3EBFA',
  },
 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


const CountChart = () => {
    
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center' >
        {/* title */}
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt ='' width={20} height={20}/>
        </div> 
        
        {/* chart */}
        <div className='relative w-full h-[75%]' >
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
           
            dataKey="count"
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
      {/* <Image src="/maleFemale.png" alt='' height={50} width={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/> */}
            {/* chart */}
            </div>
            <div className='flex justify-center gap-16' >
            {/* bottom */}

            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaPurple rounded-full'></div>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
            </div>
            </div>


    </div>
  )
}

export default CountChart