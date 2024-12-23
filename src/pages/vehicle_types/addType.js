import React from 'react';
import { createVehicleType } from '../../services/Api';
import { useNavigate } from 'react-router-dom';

const AddType = () => {
    const navigate = useNavigate();
    const [info, setInfo] = React.useState({});
    const onChangeInfo = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createVehicleType(info).then(({ data }) => {
            if (data.status === "success") {
                console.log("OK");
                return navigate("/vehicle_types")
            }
        })
    };
    const onClearInfo = () => {
        setInfo({});
    };

    return (
        <>
            <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home" /></svg></a></li>
                    <li className="active">Thêm loại xe</li>
                </ol>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Thêm loại xe</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-md-6">
                                <form role="form" method="post" encType="multipart/form-data">
                                    <div className="form-group">
                                        <label>Tên loại xe</label>
                                        <input required name="title" className="form-control" onChange={onChangeInfo} placeholder value={info.title || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Giá vé</label>
                                        <input required name="cost" type="number" className="form-control" onChange={onChangeInfo} value={info.cost || ""} />
                                    </div>

                                </form>
                            <button name="sbm" type="submit" onClick={onSubmit} className="btn btn-success">Thêm mới</button>
                            <button type="reset" className="btn btn-default" onClick={onClearInfo}>Làm mới</button>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default AddType;