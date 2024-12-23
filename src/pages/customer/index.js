import React from "react";
import { Link, useParams } from "react-router-dom";
import { deleteCustomer, getCustomers } from "../../services/Api";
import Searchbar from "../../shares/components/Layout/Searchbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import highlightText from "../../shares/constants/highlightSearch"
import PageTitle from "../../shares/components/Layout/PageTitle";


const Customers = () => {
    const params = useParams();
    const [search, setSearch] = React.useState('');

    const onSeacrh = (value) => setSearch(value);
    let id = 0;
    const [hasMore, setHasMore] = React.useState(true);
    const [customers, setCustomers] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        getCustomers({
            params: {
                page: currentPage,
                limit: 12,
                search: search,
            }
        }).then(({ data }) => {
            if (customers.length == 0) setCustomers(data.data);
            else setCustomers((prevCustomers) => [...prevCustomers, ...data.data]);
            setHasMore(data.pages.hasNext)
        }).catch(() => {
            setLoading(false);
        });;
    }, [currentPage]);

    React.useEffect(() => {
        setCurrentPage(1);
        setLoading(true);
        getCustomers({
            params: {
                page: currentPage,
                limit: 12,
                search: search,
            }
        }).then(({ data }) => {
            setCustomers(data.data)
        }).catch(() => {
            setLoading(false);
        });
    }, [search]);

    const fetchMoreData = () => {
        setCurrentPage(currentPage + 1);
    };

    const onDelete = (id) => {
        deleteCustomer(id);
        setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
    };


    return (
        <>
            <PageTitle title={"Danh sách khách hàng"}/>

            <Searchbar onSearch={onSeacrh} />

            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="bootstrap-table">
                                <div className="fixed-table-toolbar">
                                    <div className="bars pull-left">
                                        <div id="toolbar" className="btn-group">
                                            <Link to="create" className="btn btn-success">
                                                <i className="glyphicon glyphicon-plus" /> Thêm khách hàng
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
                                            dataLength={customers.length}
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
                                                        <th ><div className="th-inner sortable">Tên khách hàng</div></th>
                                                        <th ><div className="th-inner sortable">Số điện thoại</div></th>
                                                        <th ><div className="th-inner sortable">Địa chỉ</div></th>
                                                        <th ><div className="th-inner">Tiền tk</div></th>
                                                        <th ><div className="th-inner ">Ảnh </div></th>
                                                        <th ><div className="th-inner ">Hành động</div></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        customers.map((customer) => {
                                                            id++;
                                                            return (
                                                                <tr>
                                                                    <td >{id}</td>
                                                                    <td
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: highlightText(customer.customer_name, search)
                                                                        }}
                                                                    />
                                                                    <td
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: highlightText(customer.phone_number, search)
                                                                        }}
                                                                    />
                                                                    <td >{customer.address}</td>
                                                                    <td>{customer.remain}</td>
                                                                    <td style={{ textAlign: "center" }} ><img width={150} height={225} src={`https://raw.githubusercontent.com/Dng2511/AnilistImage/refs/heads/main/characters/10/330816.jpg`} /></td>
                                                                    <td className="form-group" >
                                                                        <div>
                                                                            <Link to={`edit/${customer.id}`} className="btn btn-primary"><i className="glyphicon glyphicon-pencil" /></Link>
                                                                            <a onClick={() => onDelete(customer.id)} className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                                                                        </div>
                                                                        <div>
                                                                            <Link to={`/vehicles?customer_id=${customer.id}`} className="btn btn-success">Xem danh sách xe</Link>
                                                                        </div>
                                                                        <div>
                                                                            <Link to={`/tickets?customer_id=${customer.id}`} className="btn btn-info">Xem danh sách vé</Link>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
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

export default Customers;