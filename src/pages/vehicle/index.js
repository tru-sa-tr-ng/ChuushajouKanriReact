import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {  getVehicles } from "../../services/Api";
import Searchbar from "../../shares/components/Layout/Searchbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";


const Vehicles = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    let id = 0;
    const [hasMore, setHasMore] = React.useState(true);
    const [vehicles, setVehicles] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        getVehicles({
            params: {
                page: currentPage,
                limit: 12,
            }
        }).then(({ data }) => {
            if (currentPage == 1) setVehicles(data.data);
            else setVehicles((prevVehicles) => [...prevVehicles, ...data.data]);
            setHasMore(data.pages.hasNext)
        }).catch(() => {
            setLoading(false);
        });;
    }, [currentPage])

    const fetchMoreData = () => {
        setCurrentPage(currentPage + 1);
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
                    <h1 className="page-header">Danh sách xe gửi</h1>
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
                                                <i className="glyphicon glyphicon-plus" /> Thêm xe
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed-table-container">
                                    <div className="fixed-table-header">
                                        <table />
                                    </div>
                                    <div className="fixed-table-body">
                                        <InfiniteScroll
                                            dataLength={vehicles.length}
                                            next={fetchMoreData}
                                            hasMore={hasMore}
                                            loader={
                                                <div style={{ textAlign: "center", padding: "20px" }}>
                                                    <ClipLoader color="#00BFFF" loading={loading} size={50} />
                                                </div>
                                            }>
                                            <table data-toolbar="#toolbar" data-toggle="table" className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th ><div className="th-inner sortable">ID</div></th>
                                                        <th ><div className="th-inner sortable">Biển số xe</div></th>
                                                        <th ><div className="th-inner sortable">Loại xe</div></th>
                                                        <th ><div className="th-inner ">Ảnh </div></th>
                                                        <th ><div className="th-inner "> màu xe </div></th>
                                                        <th ><div className="th-inner sortable">Tình trạng đỗ</div></th>
                                                        <th ><div className="th-inner ">Hành động</div></th>
                                                    </tr>
                                                </thead>
                                                {<tbody>
                                                    {
                                                        vehicles.map((v) => {
                                                            id++;
                                                            return (
                                                                <tr index={v.id}>
                                                                    <td >{id}</td>
                                                                    <td >{v.license}</td>
                                                                    <td >{v.vehicle_type}</td>
                                                                    <td style={{ textAlign: "center" }} ><img width={150} height={225} src={`https://raw.githubusercontent.com/Dng2511/AnilistImage/refs/heads/main/characters/10/330816.jpg`} /></td>
                                                                    <td >{v.color}</td>
                                                                    <td>{v.parking_status==null? "Xe không đỗ" : v.parking_status}</td>
                                                                    <td className="form-group" >
                                                                        <a href="product-edit.html" className="btn btn-primary"><i className="glyphicon glyphicon-pencil" /></a>
                                                                        <a href="product-edit.html" className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>}
                                            </table>
                                        </InfiniteScroll>
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

export default Vehicles;