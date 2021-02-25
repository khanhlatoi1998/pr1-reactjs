import {useState ,  useEffect} from 'react' ;
const Menu = (props) => {   
	
	var [saveValue , setsaveValue] = useState({
		name : "" ,
		status : false , 
		id : "" , 
	}) ; 
	
	const onChangeInput = (event) => {
		var target = event.target ; 
		var name = target.name ; 
		var value = target.value ; 
        if(name==="status"){
			value = target.value === "true" ? true : false ; 
		} ; 		
        setsaveValue({
			...saveValue ,
			[name] : value ,
		}) ; 
   	} ; 
   

	
	const onSubmit = (event) => {
		event.preventDefault() ; 
		props.onSubmit(saveValue) ; 
	} ; /*truyen du lieu qua trong data ben app.js*/
	
	return (	
      <div > 
         <div className="panel panel-warning">

            <div className="panel-heading">
               <h3 className="panel-title"> 
                    Thêm Công Việc  
				    <span className="fa fa-times-circle text-center" style={{marginLeft : "30px"}} onClick={props.onClick}></span> 
			   </h3>
            </div>

            <div className="panel-body">
			 <form onSubmit={onSubmit}>
               <div className="form-group" > 
                  <label > Tên : </label> 
                  <input className="form-control" 
				         name="name"
						 onChange={onChangeInput}
						 
				  />

                  <label > Trạng Thái : </label>
                  <select value={saveValue.status}
                        name="status" 
                        className="form-control" 
				        onChange={onChangeInput} 
				  >
                     <option value="true"> Hoạt Động </option>
                     <option value="false"> Ẩn </option>
                  </select>

               <br />
               <div className=" text-center" > 
                  <button type="submit" className="btn btn-warning" > 
                     <span className="fa fa-plus "style={props.Style} > </span> Lưu Lại 
                  </button>
                  <button type="reset" className="btn btn-danger" >
                     <span className="fa fa-plus " style={props.Style} > </span> Hủy Bỏ 
                  </button>
               </div> 
               </div>
			  </form > 
            </div>

         </div>
      </div>
		) ; 
} 

export default Menu ; 