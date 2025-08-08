import { useState } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const InvoiceAddEdit = ({ mode }) => {
  const initialState = {
    clientName: "",
    amount: 0,
    service: "",
    paymentMethod: "",
    invoiceDate: "",
    isPaid: false,
  };

  const [invoice, setInvoice] = useState(initialState);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`INVOICE DATA: ${invoice}`);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoice({ ...invoice, [name]: value });
  };

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Invoice AddEdit
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Client Name</Typography>
            <input
              type="text"
              name="clientName"
              value={invoice.clientName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Amount</Typography>
            <input
              type="number"
              name="amount"
              value={invoice.amount}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Service</Typography>
            <input
              type="text"
              name="service"
              value={invoice.service}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Payment Method</Typography>
            <input
              type="text"
              name="paymentMethod"
              value={invoice.paymentMethod}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Invoice Date</Typography>
            <input
              type="date"
              name="invoiceDate"
              value={invoice.invoiceDate}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <label>
              Paid:
              <input
                type="checkbox"
                name="isPaid"
                checked={invoice.isPaid}
                onChange={(e) =>
                  setInvoice({ ...invoice, isPaid: e.target.checked })
                }
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            <button type="submit">Submit Invoice</button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default InvoiceAddEdit;
