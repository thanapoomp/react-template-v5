/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import * as demoAxios from "../_redux/demoAxios";
import { Chip, Icon } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { Paper, Grid } from "@material-ui/core";
import EditButton from "../../Common/components/Buttons/EditButton";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import StandardDataTable from "../../Common/components/DataTable/StandardDataTable";
import SearchBox from "../components/datatableDemo/SearchBox";
import ColumnDateTime from "../../Common/components/DataTable/ColumnDateTime";
import ColumnNumber from "../../Common/components/DataTable/ColumnNumber";

var flatten = require("flat");

require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    height: "auto",
  },
}));

function DatatableListDemo(props) {
  const classes = useStyles();

  const [paginated, setPaginated] = React.useState({
    page: 1,
    recordsPerPage: 10,
    orderingField: "",
    ascendingOrder: true,
    searchValues: {
      searchProductGroupStatus: 0,
      searchProductGroupName: "",
    },
  });

  const [totalRecords, setTotalRecords] = React.useState(0);
  const [data, setData] = React.useState([]);

  //load Data
  const loadData = () => {
    demoAxios
      .getProductGroupFilter(
        paginated.orderingField,
        paginated.ascendingOrder,
        paginated.page,
        paginated.recordsPerPage,
        paginated.searchValues.searchProductGroupName,
        paginated.searchValues.searchProductGroupStatus
      )
      .then((res) => {
        if (res.data.isSuccess) {
          let flatData = [];
          res.data.data.forEach((element) => {
            flatData.push(flatten(element));
          });
          setData(flatData);
          setTotalRecords(res.data.totalAmountRecords);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {})
      .finally(() => {});
  };

  const handleUpdateSearch = (values) => {
    setPaginated({
      ...paginated,
      searchValues: {
        searchProductGroupStatus: values.productGroupStatus,
        searchProductGroupName: values.productGroupName,
      },
    });
  };

  // column
  const columns = [
    {
      name: "id",
      label: "รหัสรายการ",
    },
    {
      name: "name",
      label: "รายการ",
      option: {
        sort: false,
      },
    },
    {
      name: "statusId",
      label: "สถานะ",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          if (data[dataIndex].statusId === 1) {
            return (
              <Grid
                style={{ padding: 0, margin: 0 }}
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Chip
                  color="primary"
                  icon={<DoneIcon style={{ color: "#fff" }} />}
                  style={{ color: "#fff" }}
                  label="ใช้งาน"
                />
              </Grid>
            );
          } else {
            return (
              <Grid
                style={{ padding: 0, margin: 0 }}
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Chip
                  color="primary"
                  icon={
                    <Icon
                      style={{ backgroundColor: "#e57373", color: "#fff" }}
                      className="far fa-times-circle"
                    ></Icon>
                  }
                  style={{ backgroundColor: "#e57373", color: "#fff" }}
                  label="ไม่ใช้งาน"
                />
              </Grid>
            );
          }
        },
      },
    },
    {
      name: "วันที่สร้าง",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnDateTime value={data[dataIndex].createdDate}></ColumnDateTime>
          );
        },
      },
    },

    {
      name: "จำนวน",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <ColumnNumber
              value={1000}
              thousandSeparator
              isNumericString
            ></ColumnNumber>
          );
        },
      },
    },

    {
      name: "",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Grid
              style={{ padding: 0, margin: 0 }}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <EditButton
                onClick={() => {
                  handleEdit(data[dataIndex].id);
                }}
              >
                Edit
              </EditButton>
            </Grid>
          );
        },
      },
    },
  ];

  const handleEdit = (id) => {
    alert(id);
  };

  React.useEffect(() => {
    loadData();
  }, [paginated]);

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SearchBox updateSearch={handleUpdateSearch.bind(this)}></SearchBox>
          </Grid>
          <Grid item xs={12} lg={12}>
            <StandardDataTable
              name="testTable"
              title="Test"
              columns={columns}
              data={data}
              paginated={paginated}
              setPaginated={setPaginated}
              totalRecords={totalRecords}
            ></StandardDataTable>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        <Link
          href="https://github.com/gregnb/mui-datatables"
          color="textSecondary"
          target="_blank"
          rel="noopener"
        >
          Datatable By MUI Datatable
        </Link>
      </Grid>
    </div>
  );
}

export default DatatableListDemo;
