import React from 'react';
import wd from "../assets/wd.jpg";

const Dashboard = () => {
    return (
        <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text 4xl text-Darkblue font-semibold md-2">DashBoard</h2>
                <p className="text-neutralblue"></p>
                
            
            <div className='my-12 f;ex f;ex-wrap justify-between items-center gap-8'>
            <img src={wd} alt=""  className='w-3/12'/>   
            </div>
            
            
        </div>
        </div>
        
    )
}
export default Dashboard;


