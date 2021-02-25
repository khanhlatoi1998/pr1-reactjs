import './App.css' ;
import Menu from './Component/Menu.js' ; 
import TaskList from './Component/TaskList.js' ;
import Search from './Component/Search.js' ;
import Sort from './Component/Sort.js' ;
import ButtonJob from './Component/Button-Job.js' ;    
import {useState ,  useEffect} from 'react' ;
import ItemTask from './Component/ItemTask.js' ;
import { v4 as  uuidv4 } from 'uuid' ; /*thu vien tao Id khac nhau*/
function App() {
	
  const Style = {	  
	 marginRight : "3px" , 
  } ;
  const forEach = (index) => {
	   /* forEach co 3 tham so : tra ve  gia tri element , index cua element , mang dang duoc duyet */   
      /* tasks.forEach((tasks ,index ,array) => {	  
	  }) ; */	  
  } ;
  const eventKeyUpHaveIf = (event , index) => {
	   if(event.code ==="Enter"){ /*event.code dung de chi phim da duoc press*/
		    tasks[index].name = event.target.value ;      
	   } ; 
  } ; 
     
  const [ ButtonClick , setButtonClick ] = useState(false) ; 
  const ClickButton = () => {
	  setButtonClick(true) ; 
  } ;       
  
  const onClick = () => {
	  setButtonClick(false) ;   
  } ; 
  
  const s4 = () => {
	  return Math.floor(1 + Math.random() * 1000).toString(16).substring(0) ; 
  } ;  
  const generate = () => {
	  return s4() + s4() + "-" + s4() + "+" +s4() ; 
  } ; 
  
  var [ tasks , onGenerateData ] = useState([ 
          {
		    id : uuidv4() ,
			name : "Hoc" , 
			status : true , 
		  } , 
		  {
		    id :uuidv4() , 
			name : "Choi" , 
			status : true , 
		  } , 
		  {
			id : uuidv4() , 
			name : "Lam" , 
			status : false , 
		  }  , 	   
	]) ;   

  const dataLocalStorage = () => { /*khi truyền tasks vào local lúc này mảng sẽ chuyển thành đối tượng cần JSON.stringify nó thành mảng lại */
	     localStorage.setItem("Ten" , JSON.stringify(tasks)) ; /*JSON.stringify(objeck) chuyển objeck tasks thành dạng string , ngược lại với JSON.parse*/ 
		 onGenerateData(tasks) ; 
  } ; 

  useEffect(() => { /* useEffect dc goi khi components thay doi , lấy giá trị từ localStorage ra để setState */ 
	  if(localStorage && localStorage.getItem("Ten")){
		 var newtasks = JSON.parse(localStorage.getItem("Ten")) ;
		 onGenerateData(newtasks) ;		 
	  } ;  
  } , []) ; 
 
  var addTasks = (data) => { 	  
		   data.id = uuidv4() ; /* tao id vao trong data */  
		   tasks.push(data) ;		   
		   onGenerateData([...tasks]) ;
		   localStorage.setItem("Ten" , JSON.stringify(tasks)) ;	    	   	   	   
	} ;  
 
  const onDeleteTasks = (index) => {
	    tasks.splice( index , 1) ; /* xoa mang tu vi tri index den cuoi mang la 1 phan tu */ 
		onGenerateData([...tasks]) ;
		localStorage.setItem("Ten" , JSON.stringify(tasks)) ;	
  } ; 
  
  const onUpdateStatus = (index) => {
	  if(index != -1){
		  tasks[index].status = !tasks[index].status ;
		  onGenerateData([...tasks]) ;
		  localStorage.setItem("Ten" , JSON.stringify(tasks)) ;
	  } ;    
  } ;   


  
  const elementItemList = tasks.map((item , index) => {
	return ( 
             <ItemTask key={item.id}
			  id={item.id}
			  index={index + 1}
			  name={item.name}
			  status={item.status}
			  onDeleteTasks={onDeleteTasks}
			  onUpdateStatus={onUpdateStatus}
		     
			 /> 
	  ) ; 
    }) ; 

  return (
	 <div className="container">
	         
		<div className="text-center" > 
		  <h1> Quản Lý Công Việc </h1> <hr />        
		</div>

		<div className="row">
		  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		  { ButtonClick === true 
		   ? <Menu style={Style}
		           onClick={onClick} 
				   onSubmit={addTasks}  
				   /> 
		   : <div> </div>
		  } 
		  </div>
		  <div className={ButtonClick===false ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"} >
		  
		    <div className="row" >
		        <ButtonJob ClickButton={ClickButton}
			           Style={Style}
					   name="Thêm Công Việc"
			    /> 	
			</div >
			
		
			
			<div className="row" style={{marginTop : "15px"}} >
			    <TaskList 
				     element={elementItemList}
                  
					 />
			</div>	
				
		  </div>
		</div>
	 </div>
  );
}

export default App;
