import { useState, useEffect } from 'react'
// import './App.css';
import PackingList from './Packing/PackingList/PackingList';
import PackingDetails from './Packing/PackingDetails/PackingDetails'
import PackingItem from './Packing/PackingItem/PackingItem'
import axios from 'axios';


const PackingPage = () => {


    const [userInfo, setUserInfo] = useState({
        packingName: '',
        packingPhone: '',
        packingNumber: '',
        packingDate: '',
        packingMoveFrom: '',
        packingMoveTo: '',
        packingVehicle: '',
        packingItem: '',
        packingBoxNumber: '',
        packingQuantity: '',
        packingValue: '',
        packingRemark: ''


    })

    const [steps, setSteps] = useState(1)

    const nextStep = () => {
        setSteps(steps + 1)
    }

    const prevStep = () => {
        setSteps(steps - 1)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handleSubmit = () => {
        // console.log(userInfo)
        // // setSteps(steps + 1)
        // setUserInfo(userInfo)
        // alert("quotationformsubmitted")

        axios.post('http://localhost:6005/packing', {
            packingName: userInfo.packingName,
            packingDate: userInfo.packingDate,
            packingMoveFrom: userInfo.packingMoveFrom,
            packingMoveTo: userInfo.packingMoveTo,
            packingVehicle: userInfo.packingVehicle,
            packingItem: userInfo.packingItem,
            packingBoxNumber: userInfo.packingBoxNumber,
            packingQuantity: userInfo.packingQuantity,
            packingValue: userInfo.packingValue,
            packingRemark: userInfo.packingRemark,

        }).then((response) => {
            console.log(response)
            // navigate("/Attendence")
        })

        // setFormErrors(validate(register));
        // let newFormValue = {
        //     id: register.length + 1,
        //     name: name,
        //     mobile: mobile,
        //     email: email,
        //     city: city,
        //     collegeName: collegeName,
        //     attendence: attendence,


        // };
        // setRegister([...register, newFormValue])
        // setName("")
        // setMobile("")
        // setEmail("")
        // setCity("")
        // setCollegeName("")
        // setAttendence("")
        setUserInfo("")
    }

    const getAllPacking = () => {
        axios.get('http://localhost:6005/packing').then((response) => {
            console.log(response.data);
        });
    };

    useEffect(() => {
        getAllPacking();
    }, []);


    return (

        <div>
            <PackingList />
            <PackingDetails userInfo={userInfo} handleOnChange={handleOnChange} />
            <PackingItem userInfo={userInfo} handleOnChange={handleOnChange} />
            <button type="submit" onClick={() => handleSubmit()}>Sign In</button>
        </div >
    )
}


export default PackingPage