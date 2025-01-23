import { Button } from "react-bootstrap";
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { useRef, useState } from "react";
import axios from "axios";
const EditForm = () => {

    const editRef = useRef();
    const edit = () => {
        editRef.current.style.visibility = "visible";
    }

    const [stock, setStock] = useState({
        stockname: '',
        ticker: '',
        quantity: '',
        buyprice: ''
    });

    const editStock = async (stockid) => {
        try {
            await axios.put(`http://localhost:5052`, stockid, {
                stockname: stock.stockname,
                ticker: stock.ticker,
                quantity: stock.quantity,
                buyprice: stock.buyprice
            });
            alert('User updated successfully!');
            // fetchUsers(); // Refresh user list
            setStock({ stockname: '', ticker: '', quantity: '', buyprice: '' }); // Reset form
        } catch (error) {
            console.error('Error updating Stock:', error);
        }
    };

    return (
        <div id="Edit" className="border border-2 border-primary p-4">
            <span className="fw-bold fs-5 d-flex gap-5">
                <label htmlFor="Details" id="name">
                    Enter Stock Id:
                </label>
                <input type="number" maxLength={4}></input>
            </span>
            <Button variant="outlined" color="secondary" className="addStock bg-warning rounded-3 m-4" onClick={edit}>
                EDIT STOCK
            </Button>
            <div id="Details" ref={editRef}>
                <div className="d-flex flex-column gap-3">
                    <span className="fw-bold fs-5 d-flex gap-5">
                        <label htmlFor="Details" id="ticker">
                            Enter New Stock Name:
                        </label>
                        <input type="text"></input>
                    </span>
                    <span className="fw-bold fs-5 d-flex gap-5">
                        <label htmlFor="Details" id="ticker">
                            Enter New Stock Ticker:
                        </label>
                        <input type="text"></input>
                    </span>
                    <span className="fw-bold fs-5 d-flex gap-4">
                        <label htmlFor="Details" id="quan">
                            Enter New Stock Quantity:
                        </label>
                        <input type="number"></input>
                    </span>
                    <span className="fw-bold fs-5 d-flex gap-4">
                        <label htmlFor="Details" id="price">
                            Enter New Stock BuyPrice:
                        </label>
                        <input type="number"></input>
                    </span>
                </div>
                <Button id="Editing" className="bg-warning d-flex px-4 text-dark" onClick={() => editStock(document.getElementById("stockid").innerHTML)}>
                    Edit
                </Button>
            </div>
        </div>
    )
}

export default EditForm;