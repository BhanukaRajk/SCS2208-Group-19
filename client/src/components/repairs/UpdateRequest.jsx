// CLIENT
// UPDATE MY REQUESTS

import react from "react"
import Axios from "axios";
import "./repairs.css";

const clientUpdateReqs = ({ showData, setUpdateToggler, thisOne }) => {

    const [cname, setClientName] = react.useState(thisOne.cname)
    const [vlocation, setVehicleLocation] = react.useState(thisOne.vlocation)
    const [mobile, setClientMobileNo] = react.useState(thisOne.mobile)
    const [model, setVehicleModel] = react.useState(thisOne.model)


    const updateReqData = (event) => {
        event.preventDefault()
        Axios.patch('http://localhost:3001/repair/id/' + thisOne._id, {
            "Name": cname,
            "Location": vlocation,
            "MobileNo": mobile,
            "Model": model
        })
            .then((res) => {
                console.log(res.data)
                clearInputs()
                showData()
                setUpdateToggler(0)
            })
            .catch((err) => {
                console.log("AN ERROR OCCURRED! \n" + err)
            });

    }

    const clearInputs = () => {
        setClientName("")
        setVehicleLocation("")
        setClientMobileNo("")
        setVehicleModel("")
    }

    return (
        <div className="content">
            <div>
                <h3 className="header">Update repairing requests</h3>
            </div><br/>
            <div className="mb-2">
                <label className="form-label">Client Name</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Nuwan Fernando" onChange={(dynamic) => { setClientName(dynamic.target.value) }} value={cname} />
            </div>
            <div className="mb-2">
                <label className="form-label">Vehicle location</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Piliyandala" onChange={(dynamic) => { setVehicleLocation(dynamic.target.value) }} value={vlocation} />
            </div>
            <div className="mb-2">
                <label className="form-label">Mobile number</label><br/>
                <input type="text" className="form-control" placeholder="Ex: 0766877988" onChange={(dynamic) => { setClientMobileNo(dynamic.target.value) }} value={mobile} />
            </div>
            <div className="mb-2">
                <label className="form-label">Vehicle model</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Honda vezal" onChange={(dynamic) => { setVehicleModel(dynamic.target.value) }} value={model} />
            </div><br/>

            <button type="submit" className="sbtn" onClick={updateReqData}>Update</button><br/>
            <button type="button" className="cbtn" onClick={clearInputs}>Cancel</button>

        </div>
    )
}

export default clientUpdateReqs;