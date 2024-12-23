
import React from 'react';
import { getVehicleTypes, getCustomerByPhone, createVehicle } from '../../services/Api';
import PageTitle from "../../shares/components/Layout/PageTitle";
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
    const navigate = useNavigate();
    const [types, setTypes] = React.useState([]);
    const [phone, setPhone] = React.useState("");
    const [customer, setCustomer] = React.useState({});
    const [info, setInfo] = React.useState({type_id: 1});

    React.useEffect(() => {
        getVehicleTypes().then(({ data }) => {
            setTypes(data.data);
        })
    }, []);

    const onChangePhone = (e) => {
        setPhone(e.target.value);
        
    }

    React.useEffect(() => {
            getCustomerByPhone(phone).then(({ data }) => {
                setCustomer(data.data.customer);
                setInfo({ ...info, customer_id: data.data.customer.id});
            }).catch((error) => {
                setCustomer({ customer_name: " không tìm thấy!" });
            });
    }, [phone]);

    const onChangeInfo = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
        
        
    }

    const onSubmit = async () => {
        console.log(info);
        await createVehicle(info).then(({ data }) => {
            
            if (data.status === "success") {
                console.log("OK");
                return navigate("/vehicles");
            }
        })
    };
    const onClearInfo = () => {
        setInfo({});
        setPhone("");
    };









    return (
        <>
            <PageTitle title="Chỉnh sửa phươn tiện" />
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-md-6 ">
                                <form role="form" method="post" encType="multipart/form-data">
                                    <div className="form-group">
                                        <label>Biển số xe</label>
                                        <input required onChange={onChangeInfo} name="license" className="form-control" placeholder value={info.license || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Chủ xe (Điền số điện thoại)</label>
                                        <input required onChange={onChangePhone} name="phone_number" type="text" className="form-control" value={phone} />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Tên chủ xe</label>
                                        <input disabled required name="customer_name" type="text" className="form-control" value={customer.customer_name} />

                                    </div>
                                    <div className="col-md-6">
                                        <label>Ảnh khách hàng</label>
                                        <br />
                                        <div>
                                            <img src={`https://raw.githubusercontent.com/Dng2511/AnilistImage/refs/heads/main/characters/10/330816.jpg`} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Loại xe</label>
                                        <select onChange={onChangeInfo} name="type_id" type="number" className="form-control">
                                            {types.map((type) => (
                                                <option value={type.id}>{type.title}</option>
                                            )
                                            )}
                                        </select>
                                    </div>
                                    <a onClick={onSubmit} className="btn btn-success">Thêm mới</a>
                                    <a className="btn btn-default" onClick={onClearInfo}>Làm mới</a>



                                </form></div>
                            <div className="col-md-1"> </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Ảnh xe</label>
                                    <input required name="prd_image" type="file" />
                                    <br />
                                    <div>
                                        <img src={`https://raw.githubusercontent.com/Dng2511/AnilistImage/refs/heads/main/characters/10/330816.jpg`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default AddVehicle;