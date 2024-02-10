import './home.css'
import Slider from './slider'
import Title from './title.png'

const home =() => {
    return(<div>
        <Slider/>
        <img src={Title} alt="" className='title-pic'></img>  
    </div>
    )
  }
  
  
  export default home