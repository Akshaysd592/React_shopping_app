

import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" flex flex-col w-[100%]  bg-white mx-4 my-4 hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">

      <div  className=" bg-white-400  bottom-7 ">

        <div className="flex justify-center  w-[150px] items-center  py-4">
          <img src={item.image} className="w-[100px] h-[100px] " />
        </div>
        <div className="flex justify-center flex-col items-center  border-t-amber-700  ">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 px-1">{item.title}</h1>
          <h1 className="w-40 text-gray-600 font-normal text-[10px] text-left h-14 p-y-1 px-4 overflow-y-hidden">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="  w-[100%] flex flex-col items-center my-1 ">
            <p className=" border-y-2 py-2 border-y-black w-full  items-center mx-0 "><div className="mx-auto flex items-center justify-center ">
            {item.price}
            </div></p>

            <div className="py-2 cursor-pointer "
            onClick={removeFromCart}>
               <AiFillDelete/>
            </div>
          </div>

        </div>



      </div>

    </div>
  );
};

export default CartItem;
