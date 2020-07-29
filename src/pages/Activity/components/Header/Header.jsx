import React,{useState} from "react";
import { Button,Dropdown,DropdownButton,ButtonGroup} from "react-bootstrap";
import { PlusOutlined,MoreOutlined  } from "@ant-design/icons"
import CreateActivityModal from "../CreateActivityModal/CreateActivityModal";

export const options = [
    "Search By Name",
    "Filter by Category"
];
const optionsDropDown=options.map((item,i)=>
        <Dropdown.Item onClick={() => {}} key={i}>
            {item}
        </Dropdown.Item>
    )
export const Header= (props) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleCreate=()=>{
        setShow(true);
    }
    return(
        <div className="d-flex justify-content-between  shadow-sm">
            <CreateActivityModal show={show} getActivities={props.getActivities}  handleClose={handleClose}/>
            <div>
            </div>
            <div></div>
            <div>
                <ButtonGroup>
                    {localStorage.getItem("authority") === "ADMIN"?
                    <Button variant="outline-black" className =" " onClick={handleCreate}>
                        <PlusOutlined className="m-1"/>
                    </Button>:""}
                    <DropdownButton title={<MoreOutlined/>} variant="outline-black" className ="  ">
                        {optionsDropDown}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default Header;