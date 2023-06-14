import React from 'react'
import resume from '../assets/SebZhaoResume.pdf'
import sebastianzhao_compressed from '../assets/sebastianzhao_compressed.jpg'
import '../styles/About.css'

const About = () => {
  return (

    <div class='flex flex-col items-center text-center min-h-screen bg-gradient-to-b from-gray-500 to-white'>
        <h1 class='text-4xl pt-20 pb-10'>Hi I'm Sebastian Zhao!</h1>
        <h2 class='text-2xl pb-20 w-3/5'>
            Software engineer interested in machine learning, distributed systems, and full stack web development. Feel free to reach out or check out my <a href={resume} class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">resume!</a>
        </h2>

        <div class='w-64 h-64'>
            <img src={sebastianzhao_compressed} className='logo-image'  alt='Sebastian Zhao'></img>
        </div>
        
        

    </div>
  )
}

export default About