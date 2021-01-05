/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

export function AffiliateDashboard() {
    const schedules = [
        {
            payoutDate: "2 Apr 2020",
            paid: 120.00,
            status:"pending"
        },
        {
            payoutDate: "2 Nov 2020",
            paid: 120.00,
            status:"paid"
        },
        {
            payoutDate: "2 Mar 2020",
            paid: 120.50,
            status:"paid"
        },
    ]
  return (
    <>
        {/* begin::Table */}
        <div className="row">
            {/* <div className="row col-xl-12"> */}
            <div className="col-xl-3">
                <a href="#" className="card card-custom card-stretch gutter-b bg-primary">
                    <div className="card-body">
                        <div className="text-inverse-primary font-weight-bolder font-size-sm mb-2 mt-5"><center>EARNING FROM LAST 7 DAYS</center></div>
                        <div className="font-weight-bold text-inverse-primary"><center style={{fontSize:"36pt"}}>$25</center></div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3">
                <a href="#" className="card card-custom bg-white bg-hover-state-success card-stretch gutter-b">
                    <div className="card-body">
                        <div className="text-inverse-white font-weight-bolder font-size-sm mb-2 mt-5"><center>LAST 30 DAYS</center></div>
                        <div className="font-weight-bold text-primary font-size-sm"><center style={{fontSize:"36pt"}}>$310</center></div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3">
                <a href="#" className="card card-custom bg-white bg-hover-state-success card-stretch gutter-b">
                    <div className="card-body">
                        <div className="text-inverse-white font-weight-bolder font-size-sm mb-2 mt-5"><center>LAST 90 DAYS</center></div>
                        <div className="font-weight-bold text-primary font-size-sm"><center style={{fontSize:"36pt"}}>$905</center></div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3">
                <div className="card card-custom bg-white card-stretch gutter-b">
                    <div className="card-body">
                        <div className="text-inverse-white font-weight-bolder font-size-sm mb-2 mt-5"><center>CUSTOM TIME PERIOD</center></div>
                        <center><a href="#" className="btn btn-transparent-primary font-weight-bold mb-4" style={{fontSize:"16pt"}}>
                            <span className="svg-icon font-size-h1">
                                <SVG
                                    src={toAbsoluteUrl("/media/svg/icons/code/plus.svg")}
                                />
                            </span> Select
                        </a></center>
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card bg-white card-stretch">
                    <div className="card-body">
                        <div className="text-inverse-white font-weight-boldest font-size-sm mb-2 mt-5"><center>SINGLE PLAN REFERRALS</center></div>
                        <div className="d-flex flex-row">
                            <span className="col-xl-6 svg-icon svg-icon-2x svg-icon-primary text-primary" style={{fontSize:"20pt"}}>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                        <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                                {" 15"}
                            </span>
                            <div className="col-xl-6 d-flex flex-column text-right">
                                <span className="font-weight-bold font-size-xs mt-2">12MONTHLY</span>
                                <span className="font-weight-bold font-size-xs">3YEARLY</span>
                            </div>
                        </div>
                        <Divider variant="fullWidth" className="my-12" />
                        <div className="text-inverse-white font-weight-boldest font-size-sm mb-2 mt-5"><center>FAMILY PLAN REFERRALS</center></div>
                        <div className="d-flex flex-row">
                            <span className="col-xl-6 svg-icon svg-icon-2x svg-icon-primary text-primary" style={{fontSize:"20pt"}}>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                        <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                                {" 11"}
                            </span>
                            <div className="col-xl-6 d-flex flex-column text-right">
                                <span className="font-weight-bold font-size-xs mt-2">5MONTHLY</span>
                                <span className="font-weight-bold font-size-xs">6YEARLY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="card bg-white card-stretch">
                    <div className="card-body">
                        <div className="d-flex flex-row">
                            <div className="col-md-5 d-flex flex-column text-right table-responsive">
                                <div className="text-inverse-white font-weight-bolder font-size-sm mb-2 mt-5"><center>TOTAL PAID OUT TO DATE</center></div>
                                <div className="font-weight-bold text-success font-size-sm"><center style={{fontSize:"36pt"}}>$1225</center></div>
                                <Divider variant="fullWidth" className="my-12" />
                                <span className="text-dark-75 text-center font-weight-bolder d-block font-size-h6 mb-5">
                                    $120 PAID OUT TOMORROW
                                </span>
                            </div>
                            <div className="col-md-7 d-flex flex-column text-right table-responsive">
                                <span className="text-dark-75 text-center font-weight-bolder d-block font-size-h4 my-4">
                                    PAYOUT SCHEDULE
                                </span>
                                <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
                                    <thead>
                                        <tr className="text-left">
                                        <th style={{ minWidth: "100px" }}>PAYOUT DATE</th>
                                        <th style={{ minWidth: "50px" }}>STATUS</th>
                                        <th style={{ minWidth: "50" }}>PAID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schedules.map((schedule, index) => {
                                            return(<tr key={index} >
                                                <td>    
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                        {schedule.payoutDate}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                        {schedule.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                        {`${schedule.paid}$`}
                                                    </span>
                                                </td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
        {/* end::Table */}
    </>
  );
}
