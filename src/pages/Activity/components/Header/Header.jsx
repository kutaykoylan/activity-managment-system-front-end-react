import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { PlusOutlined, MoreOutlined, BarChartOutlined } from "@ant-design/icons"
import CreateActivityModal from "../CreateActivityModal/CreateActivityModal";
import BarChartActivitiesModal from "../BarChartOfActivitiesModal/BarChartActivitiesModal";

export const options = [
    "Search By Name",
    "Filter by Category"
];
const optionsDropDown = options.map((item, i) =>
    <Dropdown.Item onClick={() => { }} key={i}>
        {item}
    </Dropdown.Item>
)
export const Header = (props) => {
    const [show, setShow] = useState(false);
    const [showForCharts, setShowForCharts] = useState(false);


    const handleCloseForCharts = () => setShowForCharts(false);
    const handleCreateForCharts = () => setShowForCharts(true);

    const handleClose = () => setShow(false);
    const handleCreate = () => setShow(true);

    return (
        <div className="d-flex justify-content-between  shadow-sm">
            <CreateActivityModal show={show} getActivities={props.getActivities} handleClose={handleClose} />
            <BarChartActivitiesModal show={showForCharts} handleClose={handleCloseForCharts}/>
            <div>
            </div>
            <div></div>
            <div>
                <ButtonGroup>
                    {localStorage.getItem("authority") === "ADMIN" ?
                        <div>
                            <Button variant="outline-black" className=" " onClick={handleCreateForCharts}>
                                <BarChartOutlined className="m-1" />
                            </Button>
                            <Button variant="outline-black" className=" " onClick={handleCreate}>
                                <PlusOutlined className="m-1" />
                            </Button>
                        </div>
                        : ""}
                    <DropdownButton title={<MoreOutlined />} variant="outline-black" className="  ">
                        {optionsDropDown}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        </div>
    )
}
export default Header;