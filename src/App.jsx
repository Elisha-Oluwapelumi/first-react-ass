import imageone from '../src/assets/images/googleimg.png'
import imagetwo from '../src/assets/images/fineimage.jpeg'
import { FiMenu } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

const App = () => {
  return (
    <>
    <div>
      <div className='bar'>
        <span>Gmail </span>
        <span>Images</span>
        <span><FiMenu /></span>
        <span><img src={imagetwo} alt="" className='imagetwo' /></span>
      </div>
      <div className='generaldiv'>
        <img src={imageone} alt="" className='imageone'/>
        <input type="text"/><span className='search'>{<GoSearch />}</span><span className='mic'><FaMicrophone /></span><span className='cam'><FaCamera /></span>
      </div>
      <div className='buttondiv'>
        <button>Google Search</button>
        <button>I`m Feeling okay</button>
      </div>
      <div className='offer'>
        <p>Google offered in: <span>Hausa</span> <span>  Igbo   </span> <span>  Èdè Yorùbá   </span> <span>   Nigerian Pidgin</span> </p>
      </div>
    </div>
    </>
  )
}

export default App
