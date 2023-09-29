import { MDBBtn } from 'mdb-react-ui-kit'
import home from '../images/home.jpeg'
import './cartcard.css'
import { Link } from 'react-router-dom'
const CartCard = ({name,district,id}) => {
  const uri = `property:${id}`;
  return (
    <div className='cartcard'>
        <img src={home} alt="home" />
        <h3>{name}</h3>
        <h5>{district}</h5>
        <Link to = {uri}>
        <MDBBtn color='info' id='bt' rounded>See More</MDBBtn>
        </Link>

    </div>
  )
}

export default CartCard