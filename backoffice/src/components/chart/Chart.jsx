import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name:"January", Total:1200},
  { name:"Febuary", Total:3200},
  { name:"March", Total:2100},
  { name:"April", Total:1600},
  { name:"May", Total:3600},
  { name:"June", Total:4200},
];

const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
     <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#40C4FF" stopOpacity={1}/>
          <stop offset="95%" stopColor="#26C6DA" stopOpacity={0}/>
          </linearGradient>
         
          </defs>
          <XAxis dataKey="name" stroke="gray" />
           {/* This will display the amount for the price on the y axix  <YAxis />  */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#26C6DA" fillOpacity={1} fill="url(#total)" />
    </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart