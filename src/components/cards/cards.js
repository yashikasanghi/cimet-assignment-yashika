import "./cards.css";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  LightBulbIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";

export default function Cards({ responseData }) {
  const listingsData = responseData.electricity;
  return (
    <div>
      {listingsData.map((product) => (
        <div className="card card_body" key={product.id}>
          <div style={{ display: "flex", position: "absolute" }}>
            <div
              className="gray_box"
              style={{
                display: "flex",
                margin: "-1rem 0rem 0rem 2rem",
                padding: "0.5rem",
              }}
            >
              <LightBulbIcon className="borderIcon" />
              Electricity
            </div>
            <div
              className="gray_box"
              style={{
                display: "flex",
                margin: "-1rem 0rem 0rem 2rem",
                padding: "0.5rem",
              }}
            >
              <BuildingLibraryIcon className="borderIcon" />
              Solar
            </div>
          </div>
          <div style={{ padding: "1rem" }}>
            <div className="cardFlex">
              <div style={{ textAlign: "center" }}>
                <img
                  src={product.provider.logo}
                  alt="logo"
                  style={{ height: "5rem" }}
                />
                <div className="blue_h">View Details</div>
                <div className="blue_h" href={product.plan_document}>
                  Basic Plan Information Discount
                </div>
              </div>
              <div className="middle_top_box">
                <div className="gray_box">
                  <div>{product.dmo_percentage.Ausgrid}</div>
                  <div>the current reference price</div>
                </div>
                <div className="features">
                  <span style={{ display: "flex" }}>
                    <CheckIcon
                      className="checkIcon"
                      style={{ minHeight: "20px" }}
                    />
                    <p
                      style={{ lineHeight: "15px" }}
                      className="featuresPara"
                      dangerouslySetInnerHTML={{
                        __html: product.view_discount,
                      }}
                    ></p>
                  </span>
                  <span style={{ display: "flex" }}>
                    <CheckIcon className="checkIcon" />
                    <p
                      className="featuresPara"
                      dangerouslySetInnerHTML={{ __html: product.view_benefit }}
                    ></p>
                  </span>
                  <span style={{ display: "flex" }}>
                    <CheckIcon className="checkIcon" />
                    <p
                      className="featuresPara"
                      dangerouslySetInnerHTML={{ __html: product.view_bonus }}
                    ></p>
                  </span>
                  <span style={{ display: "flex" }}>
                    <CheckIcon className="checkIcon" />
                    <p
                      className="featuresPara"
                      dangerouslySetInnerHTML={{
                        __html: product.view_contract,
                      }}
                    ></p>
                  </span>
                  <span style={{ display: "flex" }}>
                    <CheckIcon className="checkIcon" />
                    <p
                      className="featuresPara"
                      dangerouslySetInnerHTML={{
                        __html: product.view_exit_fee,
                      }}
                    ></p>
                  </span>
                  <span style={{ display: "flex" }} className="feedInTarrifBox">
                    <ExclamationTriangleIcon className="checkIcon" />
                    <p className="featuresPara">Standard Feed in Tariff: 5c</p>
                  </span>
                </div>
              </div>

              <div class="card text-white bg-primary mb-3 estimatedCostBox">
                <div class="card-header estimatedCostHeader">
                  Estimated Cost
                  <InformationCircleIcon
                    style={{
                      height: "1rem",
                      marginLeft: "10px",
                      marginBottom: "5px",
                    }}
                  />
                </div>
                <div class="card-body" style={{ background: "#cfe7ea" }}>
                  <div style={{ color: "#1c2d76", display: "flex" }}>
                    <CurrencyDollarIcon style={{ height: "3rem" }} />
                    <h2>
                      {product.expected_annually_bill_amount}^
                      <span style={{ color: "#7a7a7b", fontSize: "1rem" }}>
                        /yr
                      </span>
                    </h2>
                  </div>

                  <div
                    class=""
                    style={{
                      color: "#5895bf",
                      display: "flex",
                      marginLeft: "5px",
                    }}
                  >
                    <CurrencyDollarIcon style={{ height: "2rem" }} />
                    <h3>
                      {product.expected_monthly_bill_amount_deferit}
                      <span style={{ color: "#7a7a7b", fontSize: "1rem" }}>
                        /mo
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1rem", marginLeft: "1rem" }}>
              <p
                dangerouslySetInnerHTML={{
                  __html: product.dmo_content.Ausgrid,
                }}
              ></p>
            </div>
          </div>

          <div className="cardFooter">
            <div>
              <div style={{ display: "flex" }}>
                <span style={{ display: "flex" }}>
                  {" "}
                  <CheckIcon className="checkIcon" />
                  <p>10 business days cooling off period</p>
                </span>
                <span style={{ display: "flex" }}>
                  {" "}
                  <CheckIcon className="checkIcon" />
                  <p>Secure signup in 5 min</p>
                </span>
                <span style={{ display: "flex" }}>
                  {" "}
                  <CheckIcon className="checkIcon" />
                  <p>Save time and effort</p>
                </span>
              </div>

              <p style={{ marginLeft: "10px" }}>
                ^ The estimated cost includes any applicable welcome credits,
                bonuses, and conditional discounts (if applicable) which apply
                within the first 12 months of plan.
              </p>
            </div>
            <div className="btnConnectDiv">
              <button className="btnConnect">Connect Online Today</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
