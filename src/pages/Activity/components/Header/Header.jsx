import React from "react";
import { Button,Dropdown,DropdownButton,ButtonGroup} from "react-bootstrap";
import { PlusOutlined,MoreOutlined  } from "@ant-design/icons"
import CreateActivityModal from "../CreateActivityModal/CreateActivityModal";
import PaginationForActivities from "./Pagination";
export const options = [
    "Search By Name",
    "Filter by Category"
];
const optionsDropDown=options.map((item,i)=>
        <Dropdown.Item onClick={() => {}} key={i}>
            {item}
        </Dropdown.Item>
    )
const handleCreate=()=>{
    return(
        <CreateActivityModal/>
    )
}
export const Header= () =>{
    return(
        <div className="d-flex justify-content-between  shadow-sm">
            <div></div>
            <PaginationForActivities className="  "/>
            <div className="  ">
                <ButtonGroup>
                    <Button variant="outline-black" className =" " onClick={()=>handleCreate}>
                        <PlusOutlined className="m-1"/>
                    </Button>
                    <DropdownButton title={<MoreOutlined/>} variant="outline-black" className ="  ">
                        {optionsDropDown}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default Header;