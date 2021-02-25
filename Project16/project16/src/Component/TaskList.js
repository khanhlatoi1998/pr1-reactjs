import ItemTask from './ItemTask.js' ;
import {useState} from 'react' ;
function TaskList(props) {
	
	
	return (
	
      <div className="row">  
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
               <thead> 
                  <tr>
		               <th className="text-center" > {props.setTasks}STT </th>
		               <th className="text-center" > Tên </th>
		               <th className="text-center" > Trạng Thái</th>
		               <th className="text-center" > Hành Động </th>
                  </tr>
               </thead>
               <tbody>
                    
			        {props.element}
               </tbody>
            </table>        	
         </div>        
      </div> 
		) ; 
}  

export default TaskList ; 