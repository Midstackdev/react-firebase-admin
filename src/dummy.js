export const types = [
    {
        id: 1,
        key: "user",
        title: "USERS",
        isMoney: false,
        link: "See all users",
        style: {
            color: "crimson",
            backgroundColor: "rgba(225, 0, 0, 0.2)"
        }
    },
    {
        id: 2,
        key: "order",
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        style: {
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)"
        }
    },
    {
        id: 3,
        key: "earning",
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        style: {
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)"
        }
    },
    {
        id: 4,
        key: "balance",
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        style: {
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)"
        }
    },
]

export const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  export const chartData = [
    {
      name: "Jan",
      Total: 4000,
    },
    {
      name: "Feb",
      Total: 3000,
    },
    {
      name: "Mar",
      Total: 5000,
    },
    {
      name: "Apr",
      Total: 4000,
    },
    {
      name: "May",
      Total: 3000,
    },
    {
      name: "Jun",
      Total: 2000,
    },
  ];

  export const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "Approved",
      price: "$120.00",
      method: "Cash on Delivery",
    },
    {
      id: 2,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "Pending",
      price: "$120.00",
      method: "Online",
    },
    {
      id: 3,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "Pending",
      price: "$120.00",
      method: "Cash on Delivery",
    },
    {
      id: 4,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "Approved",
      price: "$120.00",
      method: "Cash on Delivery",
    },
    {
      id: 5,
      name: "Play station 5",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "Pending",
      price: "$120.00",
      method: "Online Payment",
    },
  ];

  export const userRows = [
    { 
        id: 1, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'pending', 
        transaction: '$120.00', 
    },
    { 
        id: 2, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'active', 
        transaction: '$120.00', 
    },
    { 
        id: 3, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'passive', 
        transaction: '$120.00', 
    },
    { 
        id: 4, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'pending', 
        transaction: '$120.00', 
    },
    { 
        id: 5, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'passive', 
        transaction: '$120.00', 
    },
    { 
        id: 6, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'active', 
        transaction: '$120.00', 
    },
    { 
        id: 7, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'active', 
        transaction: '$120.00', 
    },
    { 
        id: 8, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'active', 
        transaction: '$120.00', 
    },
    { 
        id: 9, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'passive', 
        transaction: '$120.00', 
    },
    { 
        id: 10, 
        username: 'Jon Snow', 
        avatar: 'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80', 
        email: 'snow@gm.com', 
        status: 'active', 
        transaction: '$120.00', 
    },
    
  ];

  export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'transaction', headerName: 'Transaction', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}  alt="avatar">{params.row.status}</div>
        )
      }
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];