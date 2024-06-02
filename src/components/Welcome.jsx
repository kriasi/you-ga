import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import moodtracker from "../assets/moodtracker.png";
import dashboard from "../assets/dashboard.png";
import recommended from "../assets/recommended.png";
import priority from "../assets/priority.png";

const Welcome =() => {
    const welcome = [
        {id: 1, title: "Mood tracking", description: "Track everthing here", image : moodtracker },
        { id: 2, title: "DashBoard", description: "Check Analysis", image: dashboard },
        { id: 3, title: "Recommendation", description: "Explore options", image: recommended },
]

    return(
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                
            
            <h2 className="text-4xl text-orange font-semibold mb-2">Welcome</h2>
            <p className="text-neutralblue">We welcome to nurture your mental wellbeing with You-Ga</p>

           {/* {cards} */}
           <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap 12'>
            {
                welcome.map(welcome => <div key={welcome.id} className='px-4 py-8 text-center md:w-[300px]
                mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 
                hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-6 h-45 w-65 mx-auto rounded-t1-3xl
                        rounded-br-3xl'><img src={welcome.image} alt="" className='w-full h-full object-cover'></img></div>
                        <h4 className='text-2xl font-bold text-orange mb-2 px-2'>{welcome.title}</h4>
                        <p className='text-sm text-orange'>{welcome.description}</p>
                    </div>
                 </div>)
            }
           </div>
            
        </div>
        </div>
    )
}
export default Welcome;

// import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import wwm from "../assets/wwm.jpg";

// const Welcome = () => {
//   return (
//     <div className="px-4 py-16 max-w-screen-2xl mx-auto">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-semibold mb-2">Welcome to You-Ga!</h1>
//         <p className="text-neutralblue">We're here to nurture your mental wellbeing.</p>
//       </div>

//       <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
//         <div className="w-full lg:w-1/2">
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="w-full h-full object-cover"
//                 src={wwm}
//                 alt="Welcome Image"
//               />
//             </Carousel.Item>
//           </Carousel>
//         </div>

//         <div className="w-full lg:w-1/2 text-neutralblue">
//           <p>
//             Welcome to You-Ga, where we transform the challenges of "adulting" into the joys of "fun-dulting"! 🎉
//           </p>
//           <p>
//             We understand that every 'you' has its mood, and we cater to every mood of 'you'! Choose an emoji that resonates with you: 😁😠😌
//           </p>
//           <p>
//             Here at You-Ga, goals are like our quirky, encouraging texts—they pop up just to brighten your day and motivate you. Set your goals, achieve them, and let's celebrate together with a virtual high-five party! 🎯🙌
//           </p>
//           <p>
//             Join us on this journey to better mental health and more fun in your daily life. Welcome aboard!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;