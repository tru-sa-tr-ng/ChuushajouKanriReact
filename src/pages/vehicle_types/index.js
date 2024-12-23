import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {  deleteVehicleType, getVehicleTypes } from "../../services/Api";
import Searchbar from "../../shares/components/Layout/Searchbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";


const VehicleTypes = () => {
    let id = 0;
    const [types, setTypes] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        getVehicleTypes().then(({ data }) => {setTypes(data.data);
        }).catch(() => {
            setLoading(false);
        });
    },[]);

    const onDelete = (id) => {
        deleteVehicleType(id);
        setTypes((prevTypes) => prevTypes.filter((type) => type.id !== id));
    };




    return (
        <>
            <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home" /></svg></a></li>
                    <li className="active">Danh sách xe gửi</li>
                </ol>
            </div>
            <Searchbar />

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Danh sách các loại xe</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="bootstrap-table">
                                <div className="fixed-table-toolbar">
                                    <div className="bars pull-left">
                                        <div id="toolbar" className="btn-group">
                                            <Link to="create" className="btn btn-success">
                                                <i className="glyphicon glyphicon-plus" /> Thêm loại xe
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed-table-container">
                                    <div className="fixed-table-header">
                                        <table />
                                    </div>
                                    <div className="fixed-table-body">
                                            <table data-toolbar="#toolbar" data-toggle="table" className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th ><div className="th-inner sortable">ID</div></th>
                                                        <th ><div className="th-inner sortable">Tên loại xe</div></th>
                                                        <th ><div className="th-inner sortable">Giá</div></th>
                                                        <th ><div className="th-inner ">Hành động</div></th>
                                                    </tr>
                                                </thead>
                                                {<tbody>
                                                    {
                                                        types.map((t) => {
                                                            id++;
                                                            return (
                                                                <tr index={t.id}>
                                                                    <td >{id}</td>
                                                                    <td >{t.title}</td>
                                                                    <td >{t.cost}</td>
                                                                    <td className="form-group" >
                                                                        <Link to= {`edit/${t.id}`} className="btn btn-primary"><i className="glyphicon glyphicon-pencil" /></Link>
                                                                        <a onClick={() => onDelete(t.id)} className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>}
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default VehicleTypes;