import React from 'react';
import _ from 'lodash';
import propType from 'prop-types';
import { paginate } from '../../utils/paginate';

const  Pagination=(props)=> {

    const {itemCount,pageSize,onPageChange,currentPage} = props;

    const pageCount = Math.ceil( itemCount/pageSize);
 if(pageCount===1) return null;
 const pages = _.range(1,pageCount+1);

 console.log(currentPage);

    return (
        <nav>
            <ul className="pagination">
                {
                    pages.map(page=>(
                        <li key={page} className={page===currentPage ? 'page-item active' : 'page-item'}>
                            <a  className="page-link" onClick={()=>onPageChange(page)}>
                                {page}
                                </a>
                            </li>
                    ))
                }
               
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemCount:propType.number.isRequired,
    pageSize:propType.number.isRequired,
    onPageChange:propType.number.isRequired,
    currentPage:propType.func.isRequired,
}

export default Pagination;