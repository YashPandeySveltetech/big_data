import React from 'react';
import {  BarChart2, Activity, Layout, Bell, Grid } from 'lucide-react';
import Card from '@/components/card';
import Search from '@/components/search';
import MidBanner from '@/components/midBanner';
import NetworkChart from '@/components/networkChart';
// import {Product} from '@/utils/constants';
const Dashboard = () => {
  const Product = [
    { title: 'Social Media', icon: <Grid />, description: 'Get instant social intelligence tailored to your specific business needs and spread it throughout the enterprise.' },
    { title: 'IPDR Analytics', icon: <BarChart2 />, description: 'Listen to conversations about brands, products, industries and campaigns.' },
    { title: 'CDR Analytics', icon: <Activity />, description: 'Channels enable the monitoring of activity on specific pages of social media networks.' },
    { title: 'TDR Analytics', icon: <Layout />, description: 'Build custom dashboards with the KPIs of your choice. Dashboards are comprised of a selection of custom chosen widgets which have been selected from your Analytics screen.' },
    { title: 'SDR', icon: <Bell />, description: 'Set up both reports and alerts which can be immediately dispatched or set to be scheduled on an automatic basis or when given thresholds are met.' },
    { title: 'Osint', icon: <Grid />, description: 'Design, schedule and publish content for all your networks from one single tool.' },
  ];
  return (
    <div className="bg-blue-100 min-h-screen p-44 py-6 ">
      
      <header className="bg-white rounded-lg shadow-md p-4 mb-6">
        {/* <h1 className="text-2xl font-bold text-blue-900">Hello Achen</h1> */}
        <p className="text-blue-700 font-bold">Welcome to ZEUS</p>
       <Search/>
      </header>

      <MidBanner/>

      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="flex items-center">
          {/* <span className="mr-2">Show products for all projects</span> */}
          {/* <div className="w-12 h-6 bg-gray-300 rounded-full p-1 duration-300 ease-in-out">
            <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></div>
          </div> */}
        </div>
      </div>
<NetworkChart/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Product.map((product, index) => (
         <Card product={product} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;