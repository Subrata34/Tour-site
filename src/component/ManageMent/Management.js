import React, { useEffect, useState } from 'react';

const Management = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch("https://warm-falls-91038.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    const handleDelete = id => {
        const url = `https://warm-falls-91038.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete')
                const reamaining = services.filter(service => service._id !== id);
            setServices(reamaining);
            
            }
            
        })
    }

    return (
        <div>
            <h2>Managesment your tripe</h2>
            <br />
            <br />
            <br />
            {
                services.map(service => <div className="d-flex justify-content-evenly my-3"
                
                key={service._id}>

                        <h3>location Name: {service.Name}</h3>
                        <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button>
                        <button className="btn btn-secondary">Update</button>
                </div>)
            }

        </div>
    );
};

export default Management;