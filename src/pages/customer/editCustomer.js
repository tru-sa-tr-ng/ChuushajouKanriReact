import React from 'react';
import { getCustomerById, updateCustomer } from '../../services/Api';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../shares/components/Layout/PageTitle';

const EditCustomer = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [info, setInfo] = React.useState({});
    const onChangeInfo = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    React.useEffect(() => {
        getCustomerById(id).then(({data}) => {
            setInfo(data.data.customer)
        });
},[id]);

    const onSubmit = () => {
        updateCustomer(id, info).then(({ data }) => {
            if (data.status === "success") {
                console.log("OK");
                return navigate("/customers")
            }
        })
    };
    const onClearInfo = () => {
        setInfo({});
    };

    return (
        <>
            <PageTitle title={"Chỉnh sửa khách hàng"}/>
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-md-6">
                                <form role="form" method="post" encType="multipart/form-data">
                                    <div className="form-group">
                                        <label>Tên khách hàng</label>
                                        <input required name="customer_name" className="form-control" onChange={onChangeInfo} placeholder value={info.customer_name || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <input required name="phone_number" type="text" className="form-control" onChange={onChangeInfo} value={info.phone_number || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Địa chỉ</label>
                                        <input required name="address" type="text" className="form-control" onChange={onChangeInfo} value={info.address || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tiền trong tài khoản</label>
                                        <input required name="remain" type="number" className="form-control" onChange={onChangeInfo} value={info.remain || ""} />
                                    </div>

                                </form></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Ảnh khách hàng</label>
                                    <input required name="prd_image" type="file" />
                                    <br />
                                    <div>
                                        <img src={`https://raw.githubusercontent.com/Dng2511/AnilistImage/refs/heads/main/characters/10/330816.jpg`} />
                                    </div>
                                </div>
                            </div>
                            <button name="sbm" type="submit" onClick={onSubmit} className="btn btn-success">Sửa</button>
                            <button type="reset" className="btn btn-default" onClick={onClearInfo}>Làm mới</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default EditCustomer;