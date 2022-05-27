import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import { detailApi } from '../../api/Api';

const Detail = () => {

    const location = useLocation();
    const { id } = location.state;

    const [db, setData] = useState({})

    useEffect(() => {
        detailApi(id).then((data) => setData(data))
    }, [])
    return (
        <div>
            {db.store_idx}
        </div>
    )
}

export default Detail
