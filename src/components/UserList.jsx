import "./userList.css";
import * as classes from "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "./dummyData";
import { Link } from "react-router-dom";
import { RiHome2Line,RiAncientPavilionFill } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import miniFooter from "./minifooter";
import { IconName } from "react-icons/md";
export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };






  const options = [
    'one', 'two', 'three'
  ]
  const defaultOption = options[0];
  const columns = [
  
    { field: "date",
     headerName: "Date Updated",
      width: 120 ,
      headerClassName:'bg-headerbgc',
    },
    {
      field: "title",
      headerName: "Title",
      headerClassName:'bg-headerbgc',
      width: 200,
    },

    { field: "detail", headerName: "Details",
     width: 200 ,
       headerClassName:'bg-headerbgc'
      
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName:'bg-headerbgc',
      width: 120,
    },
    {
      field: "Quantity",
      headerName: "Quantity",
      headerClassName:'bg-headerbgc',
      width: 160,
    },
    {
      field: "unitPrice",
      headerName: "Unit Price",
      headerClassName:'bg-headerbgc',
      width: 150
    },
    {
      field: "amount",
      headerName: "Amount",
      headerClassName:'bg-headerbgc',
      width: 160,
    },
  ];






  const columnsmd = [
    { field: "date",
    headerName: "Date Updated",
     width: 120 ,
     headerClassName:'bg-headerbgc',
   },
   {
     field: "title",
     headerName: "Titles",
     headerClassName:'bg-headerbgc',
     width: 200,
   },

   {
     field: "status",
     headerName: "Status",
     headerClassName:'bg-headerbgc',
     width: 120,
   },
   {
     field: "Quantity",
     headerName: " ",
     headerClassName:'bg-headerbgc',
     width: 160,
   },
  
   {
     field: "amount",
     headerName: "Amount",
     headerClassName:'bg-headerbgc',
     width: 160,
   },
  ];




  const columnssm = [
 

    {
      field: "title",
      headerName: "Title",
      headerClassName:'bg-headerbgc',
      width: 110,
      
    },


  
    {
      field: "status",
      headerName: " ",
      headerClassName:'bg-headerbgc',
      width: 110,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
           
            <MdOnlinePrediction
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    {
      field: "Quantity",
      headerName: " ",
      headerClassName:'bg-headerbgc',
      width: 110,
    },
   
    {
      field: "amount",
      headerName: "Amount",
      headerClassName:'bg-headerbgc',
      width: 110,
    },
   
  ];




  return (
    
    <div className="">
     

     <div className="block sm:hidden">
        <div style={{ flexGrow: 1 }}>
          {data && <DataGrid
            rows={data}
            className={classes.root}
            disableSelectionOnClick
            headerHeight={44}
            columns={columnssm}
            pageSize={7}
            checkboxSelection
            autoHeight
            hideFooterPagination
            hideFooter
            headerClassName='bg-headerbgc'
          />}

          <div className=" flex justify-between ">
           
            <div className="flex flex-row justify-end ml-2 space-x-4  my-8 pb-2  mr-2">
              <Dropdown className="w-64   text-borderclr" options={options} onChange={() => { }} placeholder="Page  1 of 5" />

              <div className="border border-borderclr flex  items-center "  ><MdKeyboardArrowLeft  color="#E5E5E6" size={24} />  </div>     <div className="border border-borderclr  flex items-center" >  <MdKeyboardArrowRight color="#E5E5E6"  size={24} /> </div>

            </div>

          </div>



        </div>
      </div>
      <div className="hidden sm:block md:hidden">
        <div style={{ flexGrow: 1 }}>
          {data && <DataGrid
            rows={data}
            className={classes.root}
            disableSelectionOnClick
            headerHeight={44}
            columns={columnsmd}
            pageSize={7}
            checkboxSelection
            autoHeight
            hideFooterPagination
            hideFooter
            headerClassName='bg-headerbgc'
          />}

          <div className=" flex justify-between ">
            <div className="flex flex-row   space-x-4  my-8 pb-2">
              <Dropdown className="w-64" options={options} onChange={() => { }} placeholder="Page  1 of 5" />

            </div>
            <div className="flex flex-row justify-end  space-x-4  my-8 pb-2  mr-2">
              <Dropdown className="w-64   text-borderclr" options={options} onChange={() => { }} placeholder="Page  1 of 5" />

              <div className="border flex border-borderclr items-center "  ><MdKeyboardArrowLeft color="#E5E5E6"   size={24} />  </div>     <div className="border  border-borderclr flex items-center" >  <MdKeyboardArrowRight color="#E5E5E6"   size={24} /> </div>

            </div>

          </div>



        </div>
      </div>
      <div className="hidden  md:block">
        <div style={{ flexGrow: 1 }}>
          {data && <DataGrid
            rows={data}
            className={classes.root}
            disableSelectionOnClick
            headerHeight={44}
            columns={columns}
            pageSize={3}
            checkboxSelection
            rowsPerPageOptions={3}
            autoHeight
            hideFooterPagination
            hideFooter
            headerClassName='bg-headerbgc'
          />}

          <div className=" flex justify-between ">
            <div className="flex flex-row   space-x-4  my-8 pb-2 ml-2">
              <Dropdown className="w-64" options={options} onChange={() => { }} placeholder="Page  1 of 5" />

            </div>
            <div className="flex flex-row justify-end  space-x-4  my-8 pb-2  mr-2">
              <Dropdown className="w-64 text-borderclr " options={options} onChange={() => { }} placeholder="Page  1 of 5" />

              <div className="border border-borderclr flex  items-center "  ><MdKeyboardArrowLeft color="#E5E5E6" size={24} />  </div>     <div className="border border-borderclr  flex items-center" >  <MdKeyboardArrowRight color="#E5E5E6"   size={24} /> </div>

            </div>

          </div>



        </div>
      </div>

    
    </div>
  
  );
}
