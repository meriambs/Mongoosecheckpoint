import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {CSSTransition,TransitionGroup}from 'react-transition-group';
import { useDispatch } from "react-redux";
import { addItem,deleteItem,getItem } from "../redux/action";

const ShoppingList = ({ite}) => {
let [name,setName]= useState();
// const [items, setItems] = useState();
let dispatch=useDispatch();


// 	[
// 	{ name: 'item 1',id:uuidv4()},
// 	{ name: 'item 2',id:uuidv4()},
//     { name: 'item 3',id:uuidv4()},
//     //  isSelected: false },
// ]);


/**partie input  */
// const [inputValue, setInputValue] = useState('');
// const handleAddButtonClick = () => {
// 	const newItem = {
// 		name: inputValue,
//     };
//     const newItems = [...items, newItem];

// 	setItems(newItems);
// 	setInputValue('');
// };
// partie remove item :
//  function handleRemove(id) {
//     const newList = items.filter((item) => item.id !== id);
//  console.log(id);
//     setItems(newList);
//   }

 return (
   <div className='item-list'>
   <div className='add-item-box'>
   {/* ici on a mit function input  */}
	{/* <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' /> */}
	 <input 
            onChange={(e)=>setName(e.target.value)} 
            value={name}
            type="text"  
            className="col form-control" 
            placeholder="type something"/>
	{/* <button  onClick={() => dispatch(addItem({id:uuidv4(),name:name}))} >ADD ME</button> */}
 <button 
            onClick ={()=>{
              dispatch ( addItem(
                        { id:uuidv4(),
                          name:name,
                        }
                         ));
            setName('');
        }}
            className="btn btn-primary m-2" >Add</button>
</div>
	{ite.map((item, index) => (
		<div className='item-container'>
			<div className='item-name'>
				{ite.isSelected ? (
					<>
						<button>check</button>
						<span className='completed'>{item.name}</span>
					</>
				) : (
					<>
						 {/* <button type="button" onClick={() => handleRemove(item.index)}>
            Remove
          </button> */}
		   <button 
                 className="btn btn-danger m-2"
                 onClick={()=>dispatch(deleteItem(ite.id))}
                 >Delete</button>
          
						<span key={ite.id}>{ite.name}</span>
					</>
				)}
			</div>
           </div>
	))}
</div>
  );

}

export default ShoppingList;