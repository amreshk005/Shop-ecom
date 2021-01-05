/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from "@material-ui/core";

export function AffiliateSettings() {
    const [state, setState] = React.useState({
        referral: "store",
        paypal: "www.store.com",
        aliexpress: "Shopify",
    })
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const copyToClipboard = (value) => {
        const el = document.createElement('input');
        el.value = value;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    return (
    <>
        {/* begin::Table */}
        <div className="row d-flex flex-column">
            <h5 className="font-weight-bolder">Your Referral Link</h5>
            <FormControl className="col-xl-6">
                <Input
                name="referral"
                value={state.referral}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton 
                        aria-label="Toggle password visibility" 
                        onClick={() => copyToClipboard(state.referral)}
                    >
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/general/clipboard.svg"
                          )}
                        ></SVG>{" "}
                    </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
            <h5 className="font-weight-bolder mt-16">Your Paypal Address</h5>
            <FormControl className="col-xl-6">
                <Input
                name="paypal"
                value={state.paypal}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton 
                        aria-label="Toggle password visibility" 
                        onClick={() => copyToClipboard(state.paypal)}
                    >
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/general/clipboard.svg"
                          )}
                        ></SVG>{" "}
                    </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
            <h5 className="font-weight-bolder mt-16">Aliexpress Affiliate Link</h5>
            <FormControl className="col-xl-6">
                <Input
               name="aliexpress"
               value={state.aliexpress}
               onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton 
                        aria-label="Toggle password visibility" 
                        onClick={() => copyToClipboard(state.aliexpress)}
                    >
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/general/clipboard.svg"
                          )}
                        ></SVG>{" "}
                    </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
        </div>
        {/* end::Table */}
    </>
  );
}
