import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Bar from '../Bar/Bar';

const AddBook = () => {

    const [book, setBook] = useState({});
    const history = useHistory();

    const handleOnBlur = (e) => {
        const newEvent = book;
        newEvent[e.target.name] = e.target.value;
        setBook(newEvent);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/addBook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                setBook(data);
                alert('New Book is added successfully');
                history.replace('/');
            });
    }

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Bar />
                <div className="col py-3">
                    <div className="container">
                        <div className="d-flex justify-content-center shadow m-5">
                            <div className="text-center mb-5">
                                <h3 className="mt-5 mb-5" style={{ color: '#1d5ca0' }}>Add a new Book</h3>

                                <form onSubmit={handleSubmit} className="form-inline">

                                    <div className="form-group m-3" style={{ width: '30rem' }}>
                                        <input onBlur={handleOnBlur} className="form-control" type="text" name="name" placeholder="Book Name" required />

                                    </div>

                                    <div className="form-group m-3" style={{ width: '30rem' }}>
                                        <input onBlur={handleOnBlur} className="form-control" type="text" name="writer" placeholder="Author Name" required />
                                    </div>

                                    <div className="form-group m-3" style={{ width: '30rem' }}>
                                        <input onBlur={handleOnBlur} className="form-control" type="text" name="quantity" placeholder="Add Quantity" required />
                                    </div>

                                    <div className="form-group m-3" style={{ width: '30rem' }}>
                                        <input onBlur={handleOnBlur} className="form-control" type="text" name="price" placeholder="Add Price" required />
                                    </div>

                                    <div className="form-group m-3" style={{ width: '30rem' }}>
                                        <input onBlur={handleOnBlur} className="form-control" type="text" name="image" placeholder="Add Book Cover URL" required />
                                    </div>

                                    <button className="btn form-control mt-5" style={{ width: '30rem', backgroundColor: '#1d5ca0', color: 'white' }}>Add Book</button>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;