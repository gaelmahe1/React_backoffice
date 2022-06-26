
export const userColums = [
    { field: 'id', headerName: 'ID', width: 70},{field: "User", width: 230, renderCell: (params) => { return (
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="profile picture"/>
            {params.row.username}
        </div>
    )}
    },
    {field:"email", headerName:"Email", width:230,},
    
    {field:"adress", headerName:"Adress", width:100,},
    
    {field:"status", headerName:"Status", width:160, renderCell: (params) => { return (
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
    )}},
];

// Temporary Data Source

export const productColums = [
    { field: 'id', headerName: 'ID', width: 70},{field: "User", width: 230, renderCell: (params) => { return (
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="profile picture"/>
            {params.row.username}
        </div>
    )}
    },
    {field:"price", headerName:"Price", width:230,},
    
    {field:"description", headerName:"Description", width:100,},
    
    {field:"status", headerName:"Status", width:160, renderCell: (params) => { return (
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
    )}},
];