
export const userColums = [
    { field: 'id', headerName: 'ID', width: 70},{field: "User", width: 230, renderCell: (params) => { return (
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="profile picture"/>
            {params.row.username}
        </div>
    )}
    },
    {field:"email", headerName:"Email", width:230,},
    
    {field:"age", headerName:"Age", width:100,},
    
    {field:"status", headerName:"Status", width:160, renderCell: (params) => { return (
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
    )}},
];

// Temporary Data Source

export const userRows = [
    { 
        id: 1, 
        username: "Snow",
        img: "https://imgs.search.brave.com/CJPO2FBCosJcUQQKh3Ty-8VYwkKof0XUp7PFBVCP4-4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxNTE4/MDcuanBn",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    
    { 
        id: 2, 
        username: "Franc",
        img: "https://imgs.search.brave.com/dTJVT4p7y8ffBmFHTBDtIKVMDyGJ52lja_4CZE1qnYU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU3LzU5/L2E2LzU3NTlhNjY0/NWUxMjQwMGUxYjY4/M2UxODljZjQ1NmFl/LmpwZw",
        status: "passive",
        email: "franc@gmail.com",
        age: 25,
    },
    
    { 
        id: 3, 
        username: "John",
        img: "https://imgs.search.brave.com/cMYWrLffbOyZ8rwPfRcUdaoeOMnZLu9mHas1moSxS5c/rs:fit:1200:1187:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxNTE5/MDYuanBn",
        status: "pending",
        email: "john@gmail.com",
        age: 21,
    },
    
    { 
        id: 4, 
        username: "Karen",
        img: "https://imgs.search.brave.com/Sx24wLMGvtSAdMC3741U5EecirdHam_vMfW3HEEizvU/rs:fit:684:625:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9mYy8wMS9mZC9m/YzAxZmQ1Y2Y0NjE3/NTdjNWYxYjdiZDMz/NjViZDc0Ni5qcGc",
        status: "active",
        email: "karen@gmail.com",
        age: 29,
    },
    
    { 
        id: 5, 
        username: "Luca",
        img: "https://imgs.search.brave.com/R73AgAw-xzLa75TGD43AwlC5EnH-XIqDPhpNQkG0rCo/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjL2Fl/L2ZhLzJjYWVmYWEy/YjlhYjA3ZDdiZTlk/OWJmMDEyMzM3Njcy/LmpwZw",
        status: "pending",
        email: "luca@gmail.com",
        age: 19,
    },
    
    { 
        id: 6, 
        username: "Deroy",
        img: "https://imgs.search.brave.com/X0y_MwVmnxynf1vCT8uYUq-PzEd3rlwZ9x6zQX-EyIU/rs:fit:640:636:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81Mi8yZi8wYi81/MjJmMGJhZmRhOTgx/NDYyOTE2ZTBjOWU0/YmI3Y2M3ZS5qcGc",
        status: "passive",
        email: "deoroy@gmail.com",
        age: 20,
    },
    
    { 
        id: 7, 
        username: "Slamly",
        img: "https://imgs.search.brave.com/pjfDJZ0yR9e44U5g-1SIqPtrniQdkdn--wJN-oR37Qc/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9wcm9m/aWxlcGljdHVyZTcu/Y29tL2Jhby9iYW9f/bmFuc2hlbmdkb25n/bWFuLzEvMTcxMjcz/NjIxNC5qcGc",
        status: "active",
        email: "slayly@gmail.com",
        age: 22,
    },
    
    { 
        id: 8, 
        username: "Arthur",
        img: "https://imgs.search.brave.com/oBHtXWWWk-up0SZk5ojM6CewaZ3PXr1m_8EgKGn5nbk/rs:fit:720:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9jZi9mYy9jNi9j/ZmZjYzZlYWY2NTNi/YmM5MjkxMzdmNzk0/Y2IzMDAyNi5qcGc",
        status: "pending",
        email: "arthur@gmail.com",
        age: 23,
    },
    
    { 
        id: 9, 
        username: "Marc",
        img: "https://imgs.search.brave.com/3r5TlX9xlv-5xzWjkNVnkKN0321hUB4FIpjMRja1eao/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY2OTU4/MTQuanBn",
        status: "active",
        email: "marcs@gmail.com",
        age: 18,
    },
    
    { 
        id: 10, 
        username: "Tony",
        img: "https://imgs.search.brave.com/w53AZgnZiqx3c7NIgLLxoVejoAI-mYkDcwio9HLEThg/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC84MS82NS9iZi84/MTY1YmYxMTUxMmMz/OWQ3YjgzMmQ4MTM0/YTAyMTg5MC5qcGc",
        status: "passive",
        email: "tony@gmail.com",
        age: 17,
    },
    
    { 
        id: 11, 
        username: "Larque",
        img: "https://imgs.search.brave.com/QqT5CFb5U733ovCV7prHhOLdLe17VNjErNPiphnd1Io/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9jdXRl/d2FsbHBhcGVyLm9y/Zy8yMS9hbmltZS1w/cm9maWxlLXBpY3R1/cmVzLWJveS9jYXJ0/b29uLWFuZC1hbmlt/ZS1wcm9maWxlLXBp/Y3MtdG9vbi5wZnBz/LUluc3RhZ3JhbS1Q/cm9maWxlLS5qcGc",
        status: "active",
        email: "larques@gmail.com",
        age: 29,
    },
    
    { 
        id: 12, 
        username: "Angie",
        img: "https://imgs.search.brave.com/XYyjNQmt6-81S_YeKETzT2eeiCk0Cfgs3SQTZ8zYVZs/rs:fit:720:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJlLzMx/L2M2LzJlMzFjNjNk/ZWM1NWIwYjVlM2U0/YzJjMDkyYTA5ODVh/LmpwZw",
        status: "pending",
        email: "angie@gmail.com",
        age: 32,
    },
    
    { 
        id: 13, 
        username: "Laren",
        img: "https://imgs.search.brave.com/npdxwwzUFZRQUy6ALtGn8CD1FzjKNjMkc79s3CG7rr0/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJmLzRh/Lzg0LzJmNGE4NDlm/MDQ3ZWE1NDNmOGU1/MGY3YWFlODMxMDdl/LmpwZw",
        status: "passive",
        email: "laren@gmail.com",
        age: 40,
    },
];