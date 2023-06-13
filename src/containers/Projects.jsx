import React from 'react'
import youtube_logo from '../assets/youtube_logo.jpg'
import open_ai_logo from '../assets/open_ai_logo.jpg'
import computer_vision from '../assets/computer_vision.jpg'
import ditto from '../assets/ditto.png'
import plated_dessert from '../assets/plated_dessert.jpg'

const Projects = () => {
  return (
    <div class='mx-10 p-10 pb-10 bg-gray-200 rounded-2xl'>
        <h1 class='text-5xl pb-10'>Projects</h1>

        {/* Use css grid instead */}
        <div class = 'grid grid-cols-3 gap-4'>
            <div class='flex flex-col items-center p-5 m-5 shadow-lg bg-gradient-to-br from-rose-200 to-white rounded-2xl'>
                <h2 class='text-2xl pb-5 text-center'><a href='https://github.com/sebzhao/yt-rec-sys' alt='github link' class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><b>YouTube Rec Sys Analysis</b></a></h2>
                <img src={youtube_logo} class='h-32 pb-5'></img>
                <div class='text-center'>
                    Scraped 10,000,000+ YouTube videos and recommendations over a distributed system and analyzed them. 
                </div>
            </div>

            <div class='flex flex-col items-center p-5 m-5 shadow-lg bg-gradient-to-br from-gray-200-200 to-white rounded-2xl'>
                <h2 class='text-2xl pb-5 text-center'><b>LLM Human Simulator</b></h2>
                <img src={open_ai_logo} class='h-32 pb-5'></img>
                <div class='text-center'>
                    Python repo to simulate and replicate human studies using steering and fine-tuned models.
                </div>
            </div>

            <div class='flex flex-col items-center  p-5 m-5 shadow-lg bg-gradient-to-br from-blue-200 to-white rounded-2xl'>
                <h2 class='text-2xl pb-5 text-center'><b>Adversarial Robustness Model Pruning Pipeline</b></h2>
                <img src={computer_vision} class='h-32 pb-5'></img>
                <div class='text-center'>
                    Pipeline to benchmark adversarial robustness and benign accuracy of structured pruning methods.
                </div>
            </div>


            <div class='flex flex-col items-center  p-5 m-5 shadow-lg bg-gradient-to-br from-purple-200 to-white rounded-2xl'>
                <h2 class='text-2xl pb-5 text-center'><a href='https://ditto-wheat.vercel.app/' alt='website link' class='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'><b>Ditto</b></a></h2>
                <img src={ditto} class='h-32 pb-5'></img>
                <div class='text-center'>
                    Trained model to style transfer pets to Pokemon using GANs 50% more memory efficient and 50% efficient than the previous state-of-the-art.
                </div>
            </div>

            <div class='flex flex-col items-center p-5 m-5 shadow-lg bg-gradient-to-br from-orange-200 to-white rounded-2xl'>
                <h2 class='text-2xl pb-5 text-center'><b>Lunchpad</b></h2>
                <img src={plated_dessert} class='h-32 pb-5'></img>
                <div class='text-center'>
                    Built custom model integrating novel transformer architecture with latent diffusion models for culinary uses.
                </div>
            </div>

        </div>
            

    </div>
  )
}

export default Projects