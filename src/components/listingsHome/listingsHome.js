import React, { useEffect, useState } from "react";
import "./listingsHome.css";
import Cards from "../cards/cards";
import {
  InformationCircleIcon,
  FunnelIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { fetchData } from "../api/api";
import { useDispatch, useSelector } from "react-redux";

export default function ListingsHome() {
  const dispatch = useDispatch();
  const { productList, productsLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {productsLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "absolute",
              top: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              class="spinner-border text-primary"
              style={{ height: "5rem", width: "5rem" }}
              role="status"
            ></div>
          </div>
        </div>
      ) : (
        <div className="mainBody">
          <div>
            <div className="topContentDiv">
              <div className="electricityDiv">
                Electricity
                <span className="electricityCircle">
                  {productList.data.electricity.length}
                </span>
              </div>
              <div className="filterDiv">
                <div className="NSWDiv">
                  <MapPinIcon style={{ height: "1.5rem" }} />
                  2000, NSW
                </div>
                <button className="filterBtn">
                  <FunnelIcon style={{ height: "1rem" }} />
                  Filter
                </button>
              </div>
            </div>
            <div className="subHeadingDiv">
              <p>
                <InformationCircleIcon style={{ height: "1.3rem" }} /> Initial
                recommendations are based on average medium usage determined by
                relevant energy regulations, please view the information hover
                next to the estimated cost box for more information. For a more
                accurate comparison relevant to your circumstances, please use
                the Bill Details tab on the results page to enter your most
                recent energy bill details.
              </p>
            </div>
          </div>
          <Cards responseData={productList.data} />
        </div>
      )}
    </>
  );
}
