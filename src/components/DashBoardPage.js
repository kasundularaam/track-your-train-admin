import { colors } from "tabler-react";

const DashBoardPage = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-1">
        <div className="col-xs-10 col-sm-10 col-lg-10">
          <h3 className="text-primary">Track Your Train</h3>
        </div>
        <div className="col-xs-2 col-sm-2 col-lg-2">
          <button className="btn btn-danger">Sign Out</button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2">
          <div className="card ">Dashboard</div>
        </div>
        <div
          className="col-xs-10 col-sm-10 col-lg-10"
          style={{ backgroundColor: colors.cyan }}
        >
          .col-xs-6 .col-sm-4 .col-lg-2
        </div>
      </div>
    </div>
  );
};
export default DashBoardPage;
