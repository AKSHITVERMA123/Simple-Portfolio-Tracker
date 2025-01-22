import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddForm = () => {

    const NAV = useNavigate();
    const showRef = useRef();
    const editRef = useRef();
    const showDetRef = useRef();
    const [add, setAdd] = useState(true);

    const showDetails = () => {
        setAdd(true);
        showRef.current.style.visibility = "visible";
        showDetRef.current.style.visibility = "hidden";
    }

    const handleEditDetails = () => {
        setAdd(false);
        showDetRef.current.style.visibility = "visible";
        showRef.current.style.visibility = "hidden";
    }

    const [stock, setStock] = useState({
        stockid: '',
        stockname: '',
        ticker: '',
        quantity: '',
        buyprice: ''
    });

    const handleChange = (e) => {
        setStock({ ...stock, [e.target.name]: e.target.value });

    };

    const addStock = async (e) => {
        let c = 0;
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5052', stock);
            alert(response.data); // Display success message
            alert("Stocks saved successfully");
            setStock({ stockname: '', ticker: '', quantity: '', buyprice: '' }); // Reset form
            c = c + 1;
            return c;
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form');
        }
    };

    const editStock = async () => {
        editRef.current.style.visibility = "visible";
        try {
            await axios.put(`http://localhost:5052/${stock.stockid}`, stock); // Replace with your API endpoint
            alert("Stocks updated successfully");
        } catch (error) {
            console.error('Error updating stock:', error);
        }
    }

    const edit = () => {
        try {
            editRef.current.style.visibility = "visible";
        } catch (error) {
            console.error('Error updating Stock:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5052/${stock.stockid}`);
                setStock(response.data);
            } catch (error) {
                console.error('Error fetching stock details:', error);
            }
        };
        fetchData();
    }, [stock.stockid]);

    const redirectTable = () => {
        NAV("/Table");
    }

    let table = document.getElementById("table");
    if (table)
        table.onclick = redirectTable;

    return (
        <div id="form1" className="border border-2 border-primary d-flex flex-column row-gap-4 justify-content-center align-items-center pt-2 pb-5 px-4">
            Add Form
            <span id="Det" className="d-flex flex-column row-gap-2 align-items-center">
                <span>Do you want to add / edit Stock Details</span>
                <span className="d-flex column-gap-4">
                    <Button variant="outlined" color="primary" className="addStock bg-success rounded-3" onClick={showDetails}>
                        ADD
                    </Button>
                    <Button variant="outlined" color="primary" className="addStock bg-warning rounded-3" onClick={handleEditDetails}>
                        EDIT
                    </Button>
                </span>
                <div id="btnClick" className="ElementSelect">
                    {add ? (
                        <div id="details" className="d-flex flex-column gap-2" ref={showRef}>
                            <span className="fw-bold fs-5 d-flex gap-5">
                                <label htmlFor="details" id="name">
                                    Enter Stock Name:
                                </label>
                                <input type="text" name="stockname" placeholder="Enter stockname" value={stock.stockname} onChange={handleChange} required></input>
                            </span>
                            <span className="fw-bold fs-5 d-flex gap-5">
                                <label htmlFor="details" id="ticker">
                                    Enter Stock Ticker:
                                </label>
                                <input type="text" name="ticker" placeholder="Enter ticker" value={stock.ticker} onChange={handleChange} required></input>
                            </span>
                            <span className="fw-bold fs-5 d-flex gap-4">
                                <label htmlFor="details" id="quan">
                                    Enter Stock Quantity:
                                </label>
                                <input type="number" name="quantity" placeholder="Enter quantity" value={stock.quantity} onChange={handleChange} required></input>
                            </span>
                            <span className="fw-bold fs-5 d-flex gap-4">
                                <label htmlFor="details" id="price">
                                    Enter Stock BuyPrice:
                                </label>
                                <input type="number" name="buyprice" placeholder="Enter BuyPrice" value={stock.buyprice} onChange={handleChange} required></input>
                            </span>
                            <Button variant="outlined" className="bg-primary" onClick={addStock}>
                                ADD Stock
                            </Button>
                        </div>
                    ) : (
                        <div id="Details" className="d-flex flex-column gap-2" ref={showDetRef}>
                            <span className="fw-bold fs-5 d-flex gap-5">
                                <label htmlFor="Details" id="name">
                                    Enter Stock Id:
                                </label>
                                <input id="stockid" type="number" name="stockid" placeholder="Enter Stock Id" onChange={handleChange} required></input>
                            </span>
                            <Button variant="outlined" color="secondary" className="addStock bg-warning rounded-3" onClick={edit}>
                                EDIT STOCK
                            </Button>
                            <div id="Details" ref={editRef}>
                                <span className="fw-bold fs-5 d-flex gap-5">
                                    <label htmlFor="Details" id="ticker">
                                        Enter New Stock Name:
                                    </label>
                                    <input type="text" name="stockname" placeholder="Enter stockname" value={stock.stockname} onChange={handleChange} required></input>
                                </span>
                                <span className="fw-bold fs-5 d-flex gap-5">
                                    <label htmlFor="Details" id="ticker">
                                        Enter New Stock Ticker:
                                    </label>
                                    <input type="text" name="ticker" placeholder="Enter ticker" value={stock.ticker} onChange={handleChange} required></input>
                                </span>
                                <span className="fw-bold fs-5 d-flex gap-4">
                                    <label htmlFor="Details" id="quan">
                                        Enter New Stock Quantity:
                                    </label>
                                    <input type="number" name="quantity" placeholder="Enter quantity" value={stock.quantity} onChange={handleChange} required></input>
                                </span>
                                <span className="fw-bold fs-5 d-flex gap-4">
                                    <label htmlFor="Details" id="price">
                                        Enter New Stock BuyPrice:
                                    </label>
                                    <input type="number" name="buyprice" placeholder="Enter BuyPrice" value={stock.buyprice} onChange={handleChange} required></input>
                                </span>
                                <Button id="Editing" className="bg-warning d-flex px-4" onClick={editStock}>
                                    Edit
                                </Button>
                            </div>
                        </div>
                    )
                    }
                </div>
            </span>
            <Button id="table" className="bg-danger d-flex px-4">
                See Table
            </Button>
        </div>
    );
}
export default AddForm;