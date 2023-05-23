import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" items-center justify-center  h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-x-hidden  ">
  {
    cart.length > 0  ? 
    (
      
    <div className="flex  flex-col sm:flex-row  gap-5 justify-center items-center ">


      <div className="grid sm:grid-cols-2 content-center  lg:grid-row-3 md:grid-cols-3 xl:grid-cols-4 max-w-xl xl:max-w-4xl rounded-md  gap-4 px-4 py-2">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>








      <div className="flex flex-col gap-10 snap-none  ">

        <div className=" flex flex-col mx-8  gap-8 ">
          <div className="text-black-700 font-semibold text-lg   w-30 mt-1">Your Cart</div>
          <div className="text-black-700 font-semibold text-lg   w-30 mt-1">Summary</div>
          <p className="text-black-700 font-semibold text-lg   w-30 mt-1">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-8 content-center text-black-700 font-semibold text-lg  w-30 mt-1 px-8 my-4 ">
          <p  >Total Amount: ${totalAmount}</p>
          <button className="border-2 border-sky-500 bg-white rounded px-4 w-[70%] md:px-2 flex content-center py-4 text-sm uppercase ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>)
    
    
    
    
    
     : 
    (<div className="flex flex-col  justify-center items-center gap-6 my-[10%] ">
      <h1 className="  bottom-7 h-[50px]  px-2 bg-cyan-100 border-2 border-sky-500 grid place-items-center font-serif text-lg  uppercase  hover:scale-105 cursor-text ease-in-out duration-300 rounded  py-0 cursor  ">Cart Empty</h1>
      <Link to={"/"}>
        <button  className="  bottom-7 h-[70px]  w-[150px] bg-cyan-100  border-2 border-sky-500 grid place-items-center font-serif text-lg  uppercase  hover:scale-105 ease-in-out duration-300 rounded px-0 py-0 ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
