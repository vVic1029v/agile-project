"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Jan',
      income: 4000,
      expense: 2400,
      
    },
    {
      name: 'Feb',
      income: 8000,
      expense: 2400,
    },
    {
      name: 'Mar',
      income: 4000,
      expense: 2400,
    },
    {
      name: 'Apr',
      income: 4000,
      expense: 2400,
    },
    {
      name: 'May',
      income: 4000,
      expense: 2400,
    },
    {
      name: 'June',
      income: 2000,
      expense: 1300,
    },
    {
      name: 'July',
      income: 5000,
      expense: 2400,
    },
    {
        name: 'Aug',
        income: 4000,
        expense: 2400,
      },
      {
        name: 'Sep',
        income: 5000,
        expense: 2600,
      },
      {
        name: 'Oct',
        income: 2400,
        expense: 2400,
      },
      {
        name: 'Nov',
        income: 4000,
        expense: 2400,
      },
      {
        name: 'Dec',
        income: 4000,
        expense: 2400,
      },
  ];
const FinanceChart = () => {
  return (
     <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}></Image>
            </div> 
            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" 
          axisLine={false}
          tick={{fill:"#d1d5db"}}
          tickLine={false}
          />
          <YAxis 
            axisLine={false}
            tick={{fill:"#d1d5db"} }
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#CFCEFF" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#C3EBFA" />
        </LineChart>
      </ResponsiveContainer>
            
            
    </div>
  )
}

export default FinanceChart