import './Video.css'
import nature from  './nature.jpg'


export default function Video({title, channel, views, time}){

    return (
        <div className='component'>
        <div className='container'>
            <div className='pic'>
                <img src={nature} alt="mountains" height={160} width={160}/>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='channel'>
                {channel}
            </div>
            <div className='views'>
                {views} views <span>.</span> {time}
            </div>      
        </div>
        </div>
        
    )
}