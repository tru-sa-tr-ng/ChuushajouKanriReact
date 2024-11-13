const Sidebar = () => (
    <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
        <form role="search">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </form>
        <ul className="nav menu">
            <li className="active"><a href="admin.html"><svg className="glyph stroked dashboard-dial"><use xlinkHref="#stroked-dashboard-dial" /></svg> Dashboard</a></li>
            <li><a href="user.html"><svg className="glyph stroked male user "><use xlinkHref="#stroked-male-user" /></svg>Quản lý thành viên</a></li>
            <li><a href="category.html"><svg className="glyph stroked open folder"><use xlinkHref="#stroked-open-folder" /></svg>Quản lý danh mục</a></li>
            <li><a href="product.html"><svg className="glyph stroked bag"><use xlinkHref="#stroked-bag" /></svg>Quản lý sản phẩm</a></li>
            <li><a href="comment.html"><svg className="glyph stroked two messages"><use xlinkHref="#stroked-two-messages" /></svg> Quản lý bình luận</a></li>
            <li><a href="ads.html"><svg className="glyph stroked chain"><use xlinkHref="#stroked-chain" /></svg> Quản lý quảng cáo</a></li>
            <li><a href="setting.html"><svg className="glyph stroked gear"><use xlinkHref="#stroked-gear" /></svg> Cấu hình</a></li>
        </ul>
    </div>
)

export default Sidebar;