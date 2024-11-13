import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getCustomers } from "../../services/Api";


const Customers = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    let id = 0;
    const page = searchParams.get("page") || 1;
    const [pages, setPages] = React.useState({});
    const [customers, setCustomers] = React.useState([]);
    React.useEffect(() => {
        getCustomers({
            params: {
                limit: 12,
                page: page,
            }
        }).then(({ data }) => {
            console.log(data.data);
            setCustomers(data.data);
            setPages(data.pages);
        });
    }, [page])


    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="bootstrap-table">
                                <div className="fixed-table-toolbar">
                                    <div className="bars pull-left">
                                        <div id="toolbar" className="btn-group">
                                            <a href="product-add.html" className="btn btn-success">
                                                <i className="glyphicon glyphicon-plus" /> Thêm sản phẩm
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed-table-container">
                                    <div className="fixed-table-header">
                                        <table />
                                    </div>
                                    <div className="fixed-table-body">
                                        <div className="fixed-table-loading" style={{ top: 37 }}>Loading, please wait…
                                        </div>
                                        <table data-toolbar="#toolbar" data-toggle="table" className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th ><div className="th-inner sortable">ID</div></th>
                                                    <th ><div className="th-inner sortable">Tên khách hàng</div></th>
                                                    <th ><div className="th-inner sortable">Số điện thoại</div></th>
                                                    <th ><div className="th-inner sortable">Địa chỉ</div></th>
                                                    <th ><div className="th-inner ">Ảnh sản phẩm</div></th>
                                                    <th ><div className="th-inner ">Hành động</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    customers.map((customer) => {
                                                        id++;
                                                        return (
                                                            <tr index={customer.id}>
                                                                <td >{id}</td>
                                                                <td >{customer.customer_name}</td>
                                                                <td >{customer.phone_number}</td>
                                                                <td >{customer.address}</td>
                                                                <td ><img width={130} height={180} src={`https://raw.githubusercontent.com/Dng2511/AnilistImage/refs/heads/main/characters/10/330816.jpg`} /></td>
                                                                <td className="form-group" >
                                                                    <a href="product-edit.html" className="btn btn-primary"><i className="glyphicon glyphicon-pencil" /></a>
                                                                    <a href="product-edit.html" className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table></div><div className="fixed-table-pagination" /></div></div><div className="clearfix" />
                        </div>
                        <div className="panel-footer">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">»</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Customers;