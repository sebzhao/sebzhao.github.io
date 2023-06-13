import React from 'react'
import berkeleyLogo from '../assets/berkeley_logo.png'

const Education = () => {
  return (
    <div class='mx-10 mb-10 p-10 bg-gray-200 rounded-2xl'>
        <h1 class='text-5xl pb-10'>Education</h1>

        <div class='flex flex-row items-center justify-between pb-3'>
            <div class='flex flex-row items-center'>
                <h2 class='text-3xl'>University of California, Berkeley</h2>
                <img class='h-12 w-12 ml-5' src={berkeleyLogo} alt='Berkeley logo' ></img>
            </div>
            <h2 class='text-2xl'>August 2021 - May 2025</h2>
        </div>
        <h2 class='text-xl pb-10'>Bachelor of Arts in Computer Science and Data Science</h2>

        <div>
            <h2 class='text-2xl font-bold'>Coursework: </h2>
            <p>Structure & Interpretation of Computer Programs, Data Structures, Discrete Math & Probability Theory,
                Designing Information Device & Systems I & II, Foundations of Data Science, Artificial Intelligence,
                Probability for Data Science, Machine Structures, Principles and Techniques of Data Science, Machine
                Learning, Optimization      
            </p>
        </div>
        
    </div>
  )
}

export default Education