import React from 'react'

function Footer() {
    return (
        <section className='fheaderContainer absolute flex items-center justify-between px-5 w-full'>
            <h2 className='mb-5 font-bold text-3xl'>SpaceX</h2>
            <div>
                <ul className='flex flex-row items-center justify-evenly gap-5'>
                    <li className="cursor-pointer"><a href="#Homepage">Homepage</a></li>
                    <li className="cursor-pointer"><a href="#Search">Search</a></li>
                    <li className="cursor-pointer"><a href="#capsules">Capsules</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
