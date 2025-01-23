import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import AddForm from "./AddForm.jsx";
const DashBoard = () => {

    return (
        <div className="Form">
            <h3>This is Dashboard Component</h3>
            <h4>Displaying Portfolio metrices</h4>
            <AddForm />
        </div>
    )
}

export default DashBoard;