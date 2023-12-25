import { useDispatch } from "react-redux"
import { addToCart } from "../redux/features/cart/cartSlice"

const Card = ({title,image,description,price}) => {
  const dispatch = useDispatch()
  console.log(price)
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-40 h-40 self-center rounded-xl"><img className="w-full h-full" src={image} alt="Item photo" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{description.substring(0,100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>dispatch(addToCart(price))}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
