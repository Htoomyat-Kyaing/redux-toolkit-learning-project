import { useEffect } from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import { useDispatch } from "react-redux"
import { getProducts } from "./redux/features/products/productsSlice"
import { useSelector } from "react-redux"

function App() {
  const [products] = useSelector(store => store.products.products)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = () => {
      console.log("fetch started")
      dispatch(getProducts())
    }
    fetch()
  }, [])
  if(products) console.log(products)

  return (
    <div className="flex flex-col gap-5 ">
      <Navbar />
      <div className="grid auto-rows-fr sm:grid-cols-2 md:grid-cols-3 gap-5 px-6 sm:px-12">
        {products && products.map(product => (<Card key={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />))}
      </div>
    </div>
  )

}
export default App
