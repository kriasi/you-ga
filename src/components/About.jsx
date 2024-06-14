import React from 'react';
import net from "../assets/net.jpg";

const About = () =>{
    return(
        <div>
            {
                <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                    <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                        <div>
                            <img src={net} alt=""/>
                        </div>
                        <div className='md:3/5 mx-auto'>
                            <h2 className='text-4xl text-orange font-semibold mb-4/5'>
                                The unseen of spending three years at You-ga</h2><br></br>
                                <p className='md:w-3/4 text-sm text-neutralBlue mb-8'>Apps can
                                 allow users to log their moods, emotions, and symptoms over time 
                                 to identify patterns and potential triggers.
                                 This self-monitoring can increase self-awareness and provide 
                                 insights to discuss with a therapist.</p>
                                 <button className='btn-primary'>About Us</button>
                        </div>
                    </div>
                </div>    
            }
        </div>
    )
}
export default About;