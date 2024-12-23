import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { getVehicleTypes } from "../../../services/Api";

const Sidebar = () => {
    const pathname = useLocation().pathname;
    const [showVehiclesSubmenu, setShowVehiclesSubmenu] = useState(false);
    const [types, setTypes] = useState([]);

    const toggleVehiclesSubmenu = () => {
        setShowVehiclesSubmenu(!showVehiclesSubmenu);
    };


    React.useEffect(() => {
        getVehicleTypes().then(({ data }) => {setTypes(data.data);
        })
    },[]);

    return (
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
            <ul className="nav menu">
                <li className={pathname === "/" ? "active" : ""}><a href="/"><svg className="glyph stroked dashboard-dial"><use xlinkHref="#stroked-dashboard-dial" /></svg>Dashboard</a></li>
                <li className={pathname.startsWith("/customers") ? "active" : ""}><Link to="/customers"><svg className="glyph stroked bag"><use xlinkHref="#stroked-bag" /></svg>Quản lý khách hàng</Link></li>
                <li className={pathname === "/vehicles"&&showVehiclesSubmenu === false ? "active" : ""  }>
                    <a><Link to="/vehicles"><svg className="glyph stroked bag"><use xlinkHref="#stroked-bag" /></svg>Quản lý xe<span onClick={toggleVehiclesSubmenu} className={showVehiclesSubmenu === true? "open-arrow" : "arrow"}></span></Link></a>
                    {showVehiclesSubmenu && (
                        <ul className="nav submenu">
                            {types.map((t) => <li className={pathname === `/vehicles?type_id=${t.id}` ? "active" : ""}><Link to={`/vehicles?type_id=${t.id}`}>{t.title}</Link></li>)}
                        </ul>
                    )}
                </li>

                <li className={pathname.startsWith("/vehicle_types") ? "active" : ""}><Link to="/vehicle_types"><svg className="glyph stroked two messages"><use xlinkHref="#stroked-two-messages" /></svg>Quản lý loại xe</Link></li>
                <li className={pathname === "" ? "active" : ""}><a href="ads.html"><svg className="glyph stroked chain"><use xlinkHref="#stroked-chain" /></svg>Quản lý quảng cáo</a></li>
                <li className={pathname === "" ? "active" : ""}><a href="setting.html"><svg className="glyph stroked gear"><use xlinkHref="#stroked-gear" /></svg>Cấu hình</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;

// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//     const pathname = useLocation().pathname;

//     return (
//         <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
//             <ul className="nav menu">
//                 <li className={pathname === "/" ? "active" : ""}><a href="/"><svg className="glyph stroked dashboard-dial"><use xlinkHref="#stroked-dashboard-dial" /></svg>Dashboard</a></li>
//                 <li className={pathname === "" ? "active" : ""}><a href="user.html"><svg className="glyph stroked male user "><use xlinkHref="#stroked-male-user" /></svg>Quản lý thành viên</a></li>
//                 <li className={pathname === "" ? "active" : ""}><a href="category.html"><svg className="glyph stroked open folder"><use xlinkHref="#stroked-open-folder" /></svg>Quản lý danh mục</a></li>
//                 <li className={pathname === "/customers" ? "active" : ""}><Link to="/customers"><svg className="glyph stroked bag"><use xlinkHref="#stroked-bag" /></svg>Quản lý khách hàng</Link></li>
//                 <li className={pathname === "/vehicles" ? "active" : ""}><Link to="/vehicles"><svg className="glyph stroked bag"><use xlinkHref="#stroked-bag" /></svg>Quản lý xe</Link></li>
//                 <li className={pathname === "" ? "active" : ""}><a href="comment.html"><svg className="glyph stroked two messages"><use xlinkHref="#stroked-two-messages" /></svg>Quản lý bình luận</a></li>
//                 <li className={pathname === "" ? "active" : ""}><a href="ads.html"><svg className="glyph stroked chain"><use xlinkHref="#stroked-chain" /></svg>Quản lý quảng cáo</a></li>
//                 <li className={pathname === "" ? "active" : ""}><a href="setting.html"><svg className="glyph stroked gear"><use xlinkHref="#stroked-gear" /></svg>Cấu hình</a></li>
//             </ul>
//         </div>
//     )
// }

// export default Sidebar;
