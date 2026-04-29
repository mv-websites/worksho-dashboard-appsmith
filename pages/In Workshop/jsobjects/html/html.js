export default {
  viewMoreHeading (data) {
    // Styles
    const container = "font-family: Inter, Arial, sans-serif; margin-top: -50px";
    const sectionTitle = "font-size: 20px; font-weight: 600; margin: 20px 0 10px;";
    const table = "width: 100%; border-collapse: collapse;";
    const th = "text-align: left; padding: 8px 6px; color: #555; width: 35%; vertical-align: top;";
    const td = "padding: 8px 6px; color: #111;";
    const divider = "border-top: 1px solid #e5e7eb; margin: 16px 0;";
    const problemBox = "padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px;";

    return `<div style="${container}">
        <div style="${sectionTitle}">Call Overview</div><table style="${table}">
          <tr><th style="${th}">Call Date</th><td style="${td}">${new Date(data.Date_Received).toLocaleDateString("GB")}</td></tr>
          <tr><th style="${th}">Status</th><td style="${td}">${data.Call_Status_Description}</td></tr>
          <tr><th style="${th}">Customer</th><td style="${td}">${data.Co_Name}</td></tr>
          <tr><th style="${th}">Order Number</th><td style="${td}">${data.Order_No}</td></tr>
          <tr><th style="${th}">Related Job</th><td style="${td}">${data.Related_Job}</td></tr>
        </table><div style="${divider}"></div><div style="${sectionTitle}">Financial Summary</div><table style="${table}">
				<tr><th style="${th}">Commercial Sales Value</th><td style="${td}">£${data.com_sales_val? data.com_sales_val.toFixed(2) : " N/A"}</td></tr>
          <tr><th style="${th}">Labour Cost</th><td style="${td}">£${data.Actual_Labour_Cost.toFixed(2)}</td></tr>
          <tr><th style="${th}">Parts Cost</th><td style="${td}">£${data.Actual_Parts_Cost.toFixed(2)}</td></tr>
        </table><div style="${divider}"></div><div style="${sectionTitle}">Scheduling</div><table style="${table}">
          <tr><th style="${th}">Workshop ETA</th><td style="${td}">${data.ksp_proposed_date? new Date(data.ksp_proposed_date).toLocaleDateString("GB") : "N/A"}</td></tr>
          <tr><th style="${th}">Scheduled Completion</th><td style="${td}">${data.Scheduled_Date_Time_End? new Date(data.Scheduled_Date_Time_End).toLocaleDateString("GB") : "N/A"}</td></tr>
        </table><div style="${divider}"></div><div style="${sectionTitle}">Problem</div><div style="${problemBox}">${data.Problem}</div></div>`;
  }
}