import react from "react"
import axios from "axios";
import "./AddRequest.css";

const repairReq = () => {


    const [cname, setName] = react.useState("")
    const [vlocation, setLocation] = react.useState("")
    const [mobile, setMobile] = react.useState("")
    const [model, setModel] = react.useState("")



    const addData = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/repair', {
            "Name": cname,
            "Location": vlocation,
            "MobileNo": mobile,
            "Model": model
        })
            .then((response) => {
                console.log(response.data)
                clearForm()
            })
            .catch((error) => {
                console.log("Error " + error)
            });

    }

    const clearForm = () => {
        setName("")
        setLocation("")
        setMobile("")
        setModel("")
    }

    return (
        <div className="content">

            <div>
                <h3 className="header">Add Emergency Repair Request</h3>
            </div><br/>
            <div className="mb-2">
                <label className="form-label">Client Name</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Nuwan Fernando" onChange={(dynamic) => { setName(dynamic.target.value) }} value={cname} />
            </div>
            <div className="mb-2">
                <label className="form-label">Vehicle location</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Piliyandala" onChange={(dynamic) => { setLocation(dynamic.target.value) }} value={vlocation} />
            </div>
            <div className="mb-2">
                <label className="form-label">Mobile number</label><br/>
                <input type="text" className="form-control" placeholder="Ex: 0766877988" onChange={(dynamic) => { setMobile(dynamic.target.value) }} value={mobile} />
            </div>
            <div className="mb-2">
                <label className="form-label">Vehicle model</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Honda vezal" onChange={(dynamic) => { setModel(dynamic.target.value) }} value={model} />
            </div><br/>

            <button type="submit" className="sbtn" onClick={addData}>Submit</button><br/>
            <button type="button" className="cbtn" onClick={clearForm}>Cancel</button>

        </div>
    )
}

export default repairReq;