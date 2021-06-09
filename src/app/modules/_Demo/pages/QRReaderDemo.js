/* eslint-disable no-restricted-imports */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import QrReader from "react-qr-reader";
import {
  swalInfo,
} from "../../Common/components/SweetAlert";

function QRReaderDemo() {
  const [result, setResult] = React.useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data)
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  React.useEffect(() => {
    if (result !== '') {
      swalInfo('Result',result).then(() => {
        setResult('')
      })
    }
  }, [result])

  return (
    <>
      <div style={{width:300}}> 
        <QrReader
          delay={300}
          onError={handleError.bind(this)}
          onScan={handleScan.bind(this)}
          style={{ width: "100%" }}
        />
        <p>{result}</p>
      </div>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        <Link
          href="https://github.com/JodusNodus/react-qr-reader#readme"
          color="textSecondary"
          target="_blank"
          rel="noopener"
        >
          React QR Reader
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        <Link
          href="https://www.thomasbilliet.com/react-qr-reader/"
          color="textSecondary"
          target="_blank"
          rel="noopener"
        >
          Examples
        </Link>
      </Grid>
    </>
  );
}

export default QRReaderDemo;
