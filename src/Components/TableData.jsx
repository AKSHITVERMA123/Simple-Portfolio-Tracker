import { Button, Table } from "react-bootstrap";
import "./style1.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const TableData = () => {

    const navigate = useNavigate('');
    const onEdit = () => {
        navigate("/Edit");
    }

    const [stock] = useState({
        stockid: '',
        stockname: '',
        ticker: '',
        quantity: '',
        buyprice: ''
    });

    let c = 7;
    const onDelete = (id) => {
        let res = confirm(`Are you surely want to Delete this stock with Stock Id ${id} ?`);
        if (res === true) {
            try {
                const response = axios.delete(`http://localhost:5052/${id}`, stock);
                console.log(response.data);
                alert("Stocks deleted successfully");
                document.getElementById("Btn4").style.visibility = "hidden";
            } catch (error) {
                console.error('Error Deletion stocks:', error);
            }
            c--;
            if (c === 0) {
                alert("No Stocks are remaining ie. Stocks are Empty");
            }
            document.getElementById(id).remove();
        }
    }

    const btns = () => {
        let b4 = document.getElementById("Btn6");
        if (b4)
            b4.style.visibility = "hidden";
        let tr = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), document.getElementById("5"), document.getElementById("6")];
        if (tr[0]) {
            tr[0].style.visibility = "hidden";
            if (tr[0].firstChild.innerHTML === "1") {
                tr[0].style.visibility = "visible";
            }
        }
        if (tr[1]) {
            tr[1].style.visibility = "hidden";
            if (tr[1].firstChild.innerHTML === "2") {
                tr[1].style.visibility = "visible";
            }
        }
        if (tr[2]) {
            if (tr[2].firstChild.innerHTML === "3") {
                document.getElementById("Btn2").style.visibility = "visible";
            }
        }
        if (tr[3]) {
            if (tr[3].firstChild.innerHTML === "4") {
                tr[3].style.visibility = "visible";
                document.getElementsByClassName("rows")[0].style.visibility = "visible";
            }
        }
        if (tr[4]) {
            if (tr[4].firstChild.innerHTML === "5") {
                tr[4].style.visibility = "visible";
                document.getElementsByClassName("rows")[0].style.visibility = "visible";
            }
            else {
                tr[4].style.visibility = "hidden";
                document.getElementsByClassName("rows")[0].style.visibility = "hidden";
            }
        }
        if (tr[5]) {
            if (tr[5].firstChild.innerHTML === "6") {
                tr[5].style.visibility = "visible";
                document.getElementsByClassName("rows")[0].style.visibility = "visible";
            }
        }
    }

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5052/${stock.stockid}`);
            document.getElementsByClassName("a1")[id].innerHTML = response.data[id].stockid;
            document.getElementsByClassName("a2")[id].innerHTML = response.data[id].stockname;
            document.getElementsByClassName("a3")[id].innerHTML = response.data[id].ticker;
            document.getElementsByClassName("a4")[id].innerHTML = response.data[id].quantity;
            document.getElementsByClassName("a5")[id].innerHTML = response.data[id].buyprice;
        } catch (error) {
            console.error('Error fetching stock details:', error);
        }
    };
    setTimeout(() => {

        let extra = document.getElementsByClassName("rows")[0];
        let Extra = document.getElementById("5");
        let x = document.getElementById("6");
        let X = x;
        let x1 = document.getElementById("7");
        let X1 = x1;
        let e = extra;
        if (e)
            e.style.visibility = "visible";
        if (Extra != null) {
            Extra.style.visibility = "visible";
            document.getElementById("Btn4").style.visibility = "visible";
        }
        if (X != null) {
            X.style.visibility = "visible";
            document.getElementById("Btn5").style.visibility = "visible";
        }
        if (X1 != null) {
            X1.style.visibility = "visible";
            document.getElementById("Btns").style.visibility = "visible";
        }
    }, 1);

    return (
        <div className="table">
            <h2>Current Stock Holding</h2>
            <Table border={2}>
                <tbody>
                    <tr id="data">
                        <th>Stock ID</th>
                        <th>Stock Name</th>
                        <th>Stock Ticker</th>
                        <th>Stock Quantity</th>
                        <th>Stock BuyPrice</th>
                        <th>Action</th>
                    </tr>
                    <span onClick={btns()} style={{ paddingRight: "926%", paddingTop: "2px" }}></span>
                    <tr id="1">
                        <td className="a1" onClick={fetchData(0)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn" className="d-flex column-gap-5">
                            <Button variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button variant="success" className="bg-danger" onClick={() => onDelete(1)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                    <tr id="2">
                        <td className="a1" onClick={fetchData(1)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn1" className="d-flex column-gap-5">
                            <Button variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button variant="success" className="bg-danger" onClick={() => onDelete(document.getElementById("2").id)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                    <tr id="3">
                        <td className="a1" onClick={fetchData(2)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn2" className="d-flex column-gap-5">
                            <Button name="b2" variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button name="b2" variant="success" className="bg-danger" onClick={() => onDelete(3)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                    <tr id="4" className="rows">
                        <td className="a1" onClick={fetchData(3)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn3" className="d-flex column-gap-5">
                            <Button variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button variant="success" className="bg-danger" onClick={() => onDelete(4)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                    <tr id="5" className="rows">
                        <td className="a1" onClick={fetchData(4)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn4" className="d-flex column-gap-5">
                            <Button variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button variant="success" className="bg-danger" onClick={() => onDelete(5)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                    <tr id="6" className="rows">
                        <td className="a1" onClick={fetchData(5)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn5" className="d-flex column-gap-5">
                            <Button variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button variant="success" className="bg-danger" onClick={() => onDelete(6)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                    <tr id="7" className="rows">
                        <td className="a1" onClick={fetchData(6)}></td>
                        <td className="a2"></td>
                        <td className="a3"></td>
                        <td className="a4"></td>
                        <td className="a5"></td>
                        <div id="Btn6" className="d-flex column-gap-5">
                            <Button variant="danger" className="bg-success" onClick={onEdit}>
                                Edit
                            </Button>
                            <Button variant="success" className="bg-danger" onClick={() => onDelete(7)}>
                                Delete
                            </Button>
                        </div>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableData;