export const userColumns = [{ field: "id", headerName: "ID", width: 70 },
{
    field: "user", headerName: "USER", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        )
    }
},
{
    field: "email", headerName: "Email", width: 230
},
{
    field: "age", headerName: "Age", width: 100
},
{
    field: "status", headerName: "Status", width: 160,
    renderCell: (params) => {
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
}
]

export const userRows = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU",
        status: "active",
        email: "gourav@gmail.com",
        age: 35
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU",
        status: "passive",
        email: "gourav@gmail.com",
        age: 19
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU",
        status: "pending",
        email: "gourav@gmail.com",
        age: 19
    }
]