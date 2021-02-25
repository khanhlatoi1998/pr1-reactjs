
const ButtonJob = (props) => {
	return (
         
            <button type="button" 
			        className="btn btn-primary"
			        onClick={props.ClickButton}
					style={{marginLeft : '15px'}}
			> 
                <span className="fa fa-plus "  > </span> {props.name}
            </button>
      
		) ; 
} ; 

export default ButtonJob ; 