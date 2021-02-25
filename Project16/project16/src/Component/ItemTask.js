
const ItemTask = (props) => {
	
	return (
            
                <tr>
		            <td>{props.index}</td>
		            <td className={props.status === true ? "Finish" : ""} >{props.name}</td>
		            <td className="text-center">
		               <span onClick={() => props.onUpdateStatus(props.index -1) } className={props.status === true ? "label label-warning" : "label label-success"}> {props.status === true ? "Đã Làm" : "Chưa Làm"} </span>                        
		            </td>
		            <td className="text-center">
		               <button type="button" className="btn btn-danger" onClick={() => props.onDeleteTasks(props.index - 1)} > 
		                 <span className="fa fa-trash" > </span> Xóa 
		               </button>
		            </td>
			    </tr>
            
		) ; 
} ; 

export default ItemTask ; 	