import React from 'react'
import bairLogo from '../assets/BAIR_Logo_BlueType_Tag.png'
import launchpadLogo from '../assets/launchpad_logo.png'
import csmLogo from '../assets/CSM_logo.png'
import cwruLogo from '../assets/CWRU_logo.png'

const Experience = () => {
  return (
    <div class='mx-10 mb-10 p-10 bg-gray-200 rounded-2xl'>
        <h1 class='text-5xl pb-10'>Experience</h1>


        <div class='flex flex-col justify-evenly'>
            <div class='pb-10'>

                <div class='flex flex-row items-center justify-between'>
                    <div class='flex flex-row items-center pb-3'>
                        <h2 class='text-3xl'>Berkeley Artificial Intelligence Research</h2>
                        <img src={bairLogo} class='ml-5 h-12' alt='bair logo'></img>
                    </div>
                    <h3 class='text-2xl'>
                        September 2022 - Present
                    </h3>
                </div>
                <h3 class='text-xl pb-1' >Machine Learning Researcher</h3>

                <div class='text-lg'>
                    <ul class='list-disc pl-5'>
                        <li>Building package and pipeline to replicate and simulate human studies using large language models.</li>
                        <li>Investigating strategies to provide a prior on target user demography through conditioning and fine-tuning.</li>
                        <li>Creating the first comprehensive human studies benchmark with LLM performance on replication.</li>
                        <li>Proved optimizing for proxy objectives is functionally equivalent to a hidden true objective in recommender systems.</li>
                        <li>Building upon bridging recommender systems like Community Notes.</li>
                    </ul>
                </div>
                

            </div>
            <div class='pb-10'>
                <div class='flex flex-row items-center justify-between'>
                    <div class='flex flex-row items-center pb-3'>
                        <h2 class='text-3xl'>Launchpad</h2>
                        <img src={launchpadLogo} class='ml-5 h-12' alt='launchpad logo'></img>
                    </div>
                    <h3 class='text-2xl'>
                        January 2023 - May 2023
                    </h3>
                </div>
                
                <h3 class='text-xl pb-1'>Project Leader and Software/ML Engineer</h3>
                
                <div class='text-lg'>
                    <ul class='list-disc pl-5'>
                        <li> Led a project integrating a novel transformer architecture with latent diffusion models for culinary uses. </li>
                        <li> Built and deployed website hosting model inference using our custom model with React and FastAPI with Ray Serve integration for model serving. </li>
                        <li> Previously trained generative adversarial networks to image-to-image style transfer pets into a data-augmented Pokemon domain 50% faster and 50% more memory efficient than the previous state-of-the-art. </li>
                    </ul>
                </div>
                
            </div>

            <div class='pb-10'>
                <div class='flex flex-row items-center  justify-between'>
                    <div class='flex flex-row items-center pb-3'>
                        <h2 class='text-3xl'>Computer Science Mentors Tech</h2>
                        <img src={csmLogo} class='ml-5 h-12' alt='csm logo'></img>
                    </div>
                    <h3 class='text-2xl'>
                        November 2021 - Present
                    </h3>
                </div>
                
                <h3 class='text-xl pb-1'>Software Engineer</h3>

                <div class='text-lg'>
                    <ul class='list-disc pl-5'>
                        <li>Implemented back-end in Django for word-of-the-day feature, decreasing time to take attendance by up to 5000%, enabling ability to track section attendance for 2000+ students.</li>
                        <li>Analyzed 4 semesters’ worth of student and mentor data using pandas to evaluate diversity and efficacy of DE&I efforts.</li>
                    </ul>
                </div>

            </div>




            <div>
                <div class='flex flex-row items-center justify-between'>
                    <div class='flex flex-row items-center pb-3'>
                        <h2 class='text-3xl'>Case Western Reserve University</h2>
                        <img src={cwruLogo} class='ml-5 h-12' alt='cwru logo'></img>

                    </div>
                    <h3 class='text-2xl'>
                        April 2022 - Present
                    </h3>

                </div>
                <h3 class='text-xl pb-1'>Machine Learning Researcher</h3>

                <div class='text-lg'>
                    <ul class='list-disc pl-5'>
                        <li>Publishing a convolutional neural network pruning paper building upon a previous ICLR submission, beating previous state-of-the-art pruning method’s adversarial robustness and benign accuracy by up to 6% accuracy.</li>
                        <li>Updated 5 previous high-impact structured pruning methods and developed an adversarial attack pipeline for benchmarking 10+ pruning methods against our state-of-the-art grouped kernel pruning method.</li>
                    </ul>
                </div>
                
            </div>

        </div>


        
    </div>
    
  )
}

export default Experience
