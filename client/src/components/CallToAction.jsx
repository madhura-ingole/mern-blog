import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Checkout my LinkedIn profile!
            </h2>
            <p className='text-gray-500 my-2'>
            Let's connect and discuss how we can collaborate to create something extraordinary!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.linkedin.com/in/madhura-ingole/" target='_blank' rel='noopener noreferrer'>
                    Madhura's LinkedIn
                </a>
            </Button>
        </div>
        
    </div>
  )
}