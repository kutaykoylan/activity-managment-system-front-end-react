import React from "react";
import {Pagination} from "react-bootstrap";

const PaginationForActivities = (props) =>{
    const pages=()=>{
        for(let i=1;i<=props.getNumberOfPages(12);i++){
            return(
                <Pagination.Item>{i}</Pagination.Item>)
        }
    }
    return(
        <div  className= "m-1">
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
        </div>
    )
}
export default PaginationForActivities;