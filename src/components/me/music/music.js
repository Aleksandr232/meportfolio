import music from './music.mp3'


const Music = () => {
 

  return (
    <div className='music'>
      <audio controls="controls" >
          <source src={music}/>
      </audio>
    </div>
  )
}
export default Music