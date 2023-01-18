import './VehicleList.css'
import { useNavigate } from 'react-router-dom'

export default function VehicleList() {

    const navigate = useNavigate()

    function movetoNewVehicleList() {
        navigate("/NewVehicleList")
    }

    return (
        <div className='VehicleS'>
            <div className='VehicleList'>
                <p className='VehicleListMain'>Add Quotation</p>
                <p className='VehicleListMain'>Add Survey List</p>
                <p className='VehicleListMain'>Add Packing List</p>
                <p className='VehicleListMain'>Add Lorry Receipt (LR)</p>
                <p onClick={movetoNewVehicleList} className='VehicleListMain'>Add Vehicle Condition</p>
                <p className='VehicleListMain'>Add Bill</p>
                <p className='VehicleListMain'>Add Money Receipt</p>
                <p className='VehicleListMain'>Add Payment Voucher</p>
            </div>
            <div className='VehicleListHead'>
                <p className='VehicleListPara'>ADD NEW VEHICLE CONDITION</p>
                <p className='VehicleListParaP'>FILL THE FORM AND SUBMIT DETAILS</p>
            </div>
        </div>
    )
}
