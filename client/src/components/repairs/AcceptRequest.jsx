// MECHANIC
// ACCEPT CLIENT REQUESTS

import react from "react"
import Axios from "axios";
import "./repairs.css";

const AcceptRequest = ({ showData, setUpdateToggler, thisOne }) => {

    const [mname, setMechName] = react.useState(thisOne.mname)
    const [mobile, setMechMobileNo] = react.useState(thisOne.mobile)
    const [time, setTime] = react.useState(thisOne.time)


    const updateReqData = (event) => {
        event.preventDefault()
        Axios.patch('http://localhost:3001/repair/id/' + thisOne._id, {
            "Name": mname,
            "MobileNo": mobile,
            "Time": time
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
        setMechName("")
        setMechMobileNo("")
        setTime("")
    }

    return (
        <div className="content">
            <div>
                <h3 className="header">Accepting repair requests</h3>
            </div><br/>
            <div className="mb-2">
                <label className="form-label">Mechanic's Name</label><br/>
                <input type="text" className="form-control" placeholder="Ex: Sugath Kumara" onChange={(dynamic) => { setMechName(dynamic.target.value) }} value={mname} />
            </div>
            <div className="mb-2">
                <label className="form-label">Mobile number</label><br/>
                <input type="text" className="form-control" placeholder="Ex: 0766877988" onChange={(dynamic) => { setMechMobileNo(dynamic.target.value) }} value={mobile} />
            </div>
            <div className="mb-2">
                <label className="form-label">Set Date</label><br/>
                <input type="text" className="form-control" placeholder="Ex: 2022/10/30" onChange={(dynamic) => { setTime(dynamic.target.value) }} value={time} />
            </div><br/>

            <button type="submit" className="sbtn" onClick={updateReqData}>Confirm Accept</button><br/>
            <button type="button" className="cbtn" onClick={clearInputs}>Clear</button>

        </div>
    )
}

export default AcceptRequest;