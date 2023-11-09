import './App.css'
import Video from './Components/Video'

export default function App(){
  let obj = {
    title: 'React JS',
    channel: 'Animesh-CodeX',
    views: '110K',
    time: '1 year ago'
  }
  return (
    <div className='app'>
       <Video {...obj}/>
       <Video title='Node JS' channel='Animesh-CodeX' views='1M' time='2 years ago' />
    </div>
   
  )
}