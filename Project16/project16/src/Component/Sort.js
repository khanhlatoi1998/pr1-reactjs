

const Sort = () => {
	return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div  className="dropdown" > 
              <button className="btn btn-primary" 
                       type="button"
                       id="dropdownMenu1"
                       data-toggle="dropdown" /*Thả Xuống 1 element*/
               > 
                Sắp xếp <span className="fa fa-search"> </span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" > {/*dropdown 1 thanh menu bao bọc các phần tử bên trong */}
                <li> 
                 <a role="button" > {/* khai báo công dụng của element : button ...*/}
                  Tên A-Z
                 </a>
                </li>
                <li> 
                 <a role="button" >
                  Tên Z-A
                 </a>
                </li>
                <li> 
                 <a role="button" >
                  Tên 
                 </a>
                </li>
                <li> 
                 <a role="button" >
                  Tên A-Z
                 </a>
                </li>
              </ul>
            </div> 
           </div>
		) ; 
} ; 

export default Sort ; 