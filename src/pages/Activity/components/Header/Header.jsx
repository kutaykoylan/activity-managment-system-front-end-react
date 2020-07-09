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
        <div>
            <PaginationForActivities className="d-flex justify-content-sm-start"/>
            <div className=" d-flex justify-content-sm-end shadow-sm">
                <ButtonGroup>
                    <Button variant="outline-black" className =" m-1" onClick={()=>handleCreate}>
                        <PlusOutlined className="m-1"/>
                    </Button>
                    <DropdownButton variant="outline-black" className =" my-1 m-1">
                        {optionsDropDown}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default Header;