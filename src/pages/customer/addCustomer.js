
import React from'react';

const AddCustomer = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="col-md-6">
                            <form role="form" method="post" encType="multipart/form-data">
                                <div className="form-group">
                                    <label>Tên khách hàng</label>
                                    <input required name="customer_name" className="form-control" placeholder />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input required name="phone_number" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input required name="address" type="text" className="form-control" />
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
                        <button name="sbm" type="submit" className="btn btn-success">Thêm mới</button>
                        <button type="reset" className="btn btn-default">Làm mới</button>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default AddCustomer;