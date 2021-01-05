/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import * as auth from "../Auth";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { Switch, Select, TextField } from "@material-ui/core";
const trackingList = [
  {
    storeName: "DS Ninja",
    trackingSelect: "trackdog",
    trackingField: "https://www.trackdog.com/trackdog.htm?tranckNum=",
    status: true,
  },
  {
    storeName: "DS Ninja",
    trackingSelect: "trackdog",
    trackingField: "https://www.trackdog.com/trackdog.htm?tranckNum=",
    status: false,
  },
  {
    storeName: "DS Ninja",
    trackingSelect: "trackdog",
    trackingField: "https://www.trackdog.com/trackdog.htm?tranckNum=",
    status: true,
  },
]
function Tracking(props) {
  // Fields
  const [loading, setloading] = useState(false);
  // const [isError, setisError] = useState(false);
  const dispatch = useDispatch();
  // Methods

  return (
    <form className="card card-custom">
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Tranking
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Manage your Shopify Settings
          </span>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        <div className="card-body">
          <span className="svg-icon svg-icon-success font-size-h3">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/shopping/cart1.svg")}
            />
            {" Shopify"}
          </span>
          <h5 className="font-weight-bolder mt-6">Activate fulfillment notification email sent by Shopify</h5>
          <span className="form-text font-size-sm mute-text">
            Activate this to send the Shopify Shipping confirmation mail automatically to your customer once the tracking number has been generated. You can edit the email template here.
          </span>
          <div className="table-responsive mt-6">
            <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
              <thead>
                  <tr className="text-left">
                  <th style={{ minWidth: "120px" }}>Store</th>
                  <th style={{ minWidth: "100px" }}>Tracking URL</th>
                  <th style={{ minWidth: "100px" }}></th>
                  <th style={{ minWidth: "100px" }} />
                  </tr>
              </thead>
              <tbody>
                  {trackingList.map((item, index) => {
                      return(<tr key={index} >
                          <td>
                              <span className="text-dark-75 font-weight-bold d-block font-size-lg">
                                  {item.storeName}
                              </span>
                          </td>
                          <td>
                            <Select
                              native
                              className="mx-3"
                              // style={{position:"absolute", bottom:0}}
                              value={item.trackingSelect}
                              // onChange={(e) => }
                              inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                              }}
                            >
                              <option value={"trackdog"}>Trackdog</option>
                              <option value={"trackdog1"}>Trackdog1</option>
                              <option value={"trackdog2"}>Trackdog2</option>
                            </Select>
                          </td>
                          <td>
                            <TextField
                              fullWidth
                              type="text"
                              className="mr-12"
                              value={item.trackingField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </td>
                          <td className="pr-0 text-right">
                            <Switch checked={item.status} color="secondary" />
                          </td>
                      </tr>)
                  })}
              </tbody>
              </table>
          </div>
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(Tracking);
