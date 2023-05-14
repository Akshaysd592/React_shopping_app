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
    <div className="flex items-center justify-center  h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-x-hidden ">
  {
    cart.length > 0  ? 
    (
      
    <div className="flex   gap-5 justify-center items-center ">


      <div className="grid grid-cols-3 grid-row-5 max-w-xl  snap-y snap-mandatory snap-x-none rounded-md  gap-6 px-4 py-6">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>








      <div className="flex flex-col gap-10 snap-none  ">

        <div className=" flex flex-col justify-center items-center mx-8 gap-8 ">
          <div className="text-black-700 font-semibold text-lg   w-40 mt-1">Your Cart</div>
          <div className="text-black-700 font-semibold text-lg   w-40 mt-1">Summary</div>
          <p className="text-black-700 font-semibold text-lg   w-40 mt-1">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-5  text-black-700 font-semibold text-lg max-w-4 w-40 mt-1 mx-8 my-4 ">
          <p >Total Amount: ${totalAmount}</p>
          <button className="border-2 border-sky-500 bg-white rounded px-4 flex align-middle py-4 text-sm uppercase ">
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
