/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, InputAdornment, IconButton, Switch, FormControlLabel, TextField } from "@material-ui/core";

export function SupplierSettings() {
    const [state, setState] = React.useState({
        phone: "store",
        note: "www.store.com",
        enableSupplier: true,
    })
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        })
    }
    return (
    <>
        {/* begin::Table */}
        <div className="row d-flex flex-column">
            <h5 className="font-weight-boldest">Aliexpress</h5>
            <FormControlLabel
                control={<Switch name="enableSupplier" checked={state.enableSupplier} onChange={handleChange} />}
                label="Enable Supplier"
            />
            <span className="font-weight-bolder">Override phone number</span>
            <FormControl className="col-xl-6">
                <Input
                name="phone"
                value={state.phone}
                onChange={handleChange}
                />
            </FormControl>
            <span className="font-weight-bolder mt-6">Leave a message to Aliexpress seller</span>
            <FormControl className="col-xl-6 mt-4">
                <TextField
                    label="Custom note"
                    type="text"
                    name="note"
                    multiline
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={state.note}
                    onChange={handleChange}
                />
            </FormControl>
            <h5 className="font-weight-bolder mt-10">CJ Dropshipping</h5>
            <FormControlLabel
                control={<Switch name="enableSupplier" checked={state.enableSupplier} onChange={handleChange} />}
                label="Enable Supplier"
            />
            <span className="font-weight-bolder">API Key</span>
            <FormControl className="col-xl-6">
                <Input
                name="apiKey"
                value={state.apiKey}
                onChange={handleChange}
                />
            </FormControl>
        </div>
        {/* end::Table */}
    </>
  );
}
