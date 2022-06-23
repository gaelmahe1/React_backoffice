import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

const rows = [
   
    { 
        id: 12342,
        product: "Acer Nitro 5",
        img:"https://imgs.search.brave.com/bO0Ormbq_91AWJ60DIcT6gY3b7lYS_gtWuw8dXohsgg/rs:fit:800:600:1/g:ce/aHR0cHM6Ly93d3cu/bm90ZWJvb2tjaGVj/ay1jbi5jb20vdXBs/b2Fkcy90eF9uYmMy/L0FjZXJBc3BpcmVO/aXRybzVBTjUxNS01/NF9fM19fMDIuSlBH",
        date: "1st March",
        customer: "John Smith",
        amount: 759,
        method: "Cash on Delivery",
        status: "Approved",
    },
   
    { 
        id: 123932,
        product: "Acer Moniter",
        img:"https://imgs.search.brave.com/_MiA2bfBrWApJevdFByU9kcU-Y2SPzRApiSTy6Z3Vb8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2FjZXJfdW1f/cXgyYWFfMDA4X2tn/MjQyeV8yM184X2lw/c19mcmVlc3luY18x/NjIxODgzLmpwZw",
        date: "21st March",
        customer: "Pascal Heart",
        amount: 249,
        method: "Online Payment",
        status: "Approved",
    },
   
    { 
        id: 1232142,
        product: "Play Staion 5",
        img:"https://imgs.search.brave.com/JRCzHeN7nUqSpEbW3DakcOK-DHeAZwJp6tDzdcWlV-k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/NTloYXJkd2FyZS5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYvcHM1Lmpw/Zw",
        date: "25th March",
        customer: "Roland Kosta",
        amount: 499,
        method: "Online Payment",
        status: "Pending",
    },
   
    { 
        id: 32342,
        product: "SanDisk Drive",
        img:"https://imgs.search.brave.com/VHYe5nrwXA5SbKtUV5cVmNQw8scoa0I5ySwKkEKjLks/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly85dG81/dG95cy5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzUv/MjAyMC8wNi9TYW5E/aXNrLUR1YWwtRHJp/dmUuanBnP3F1YWxp/dHk9ODImc3RyaXA9/YWxs",
        date: "27th March",
        customer: "Micheal Kors",
        amount: 59,
        method: "Online",
        status: "Pending",
    },
   
    { 
        id: 99342,
        product: "Acer Nitro 7",
        img:"https://imgs.search.brave.com/dr_Th6u8NSqVs8PgLIxMZESmqHbu6I9VqtjNIeAb3Xs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYW5hbmR0ZWNo/LmNvbS9kb2NpLzE0/MjA3L05pdHJvLTdf/QU43MTUtNTFfMDUu/cG5n",
        date: "29th March",
        customer: "Ray Brown",
        amount: 959,
        method: "Oline",
        status: "Approved",
    }
];

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking Id</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt={row.product} className="image" />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List