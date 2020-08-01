import React, {useEffect} from "react";
import {Button, Pagination} from "react-bootstrap";
import {RightOutlined,LeftOutlined} from "@ant-design/icons";

const PaginationForActivities = (props) =>{
    return(
        <div  className= "d-flex justify-content-between m-1">
            { props.currentPage+1===props.numberOfPages && props.numberOfPages !==1?
            <div>
                <Button variant="outline-black" className ="d-flex" onClick={()=>{props.prevPage()}}>
                    <LeftOutlined className="m-1"/>
                </Button>
            </div>:<div/>}
            <div></div>
            <div>
                { props.currentPage+1<props.numberOfPages?
                <Button variant="outline-black" className ="d-flex" onClick={()=>{props.nextPage()}}>
                    <RightOutlined className="m-1"/>
                </Button>:<div/>}
            </div>
        </div>
    )
}
export default PaginationForActivities;
/*
 <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        {pages}

                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                </Pagination>
 */