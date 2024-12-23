const PageTitle = ({title}) => {

    return (
        <>
            <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home" /></svg></a></li>
                    <li className="active">{title}</li>
                </ol>
            </div>
            

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">{title}</h1>
                </div>
            </div>

        </>
    )

}

export default PageTitle;