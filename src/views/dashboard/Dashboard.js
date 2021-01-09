import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: "Client Name",
    selector: "clientName",
    sortable: true
  },
  {
    name: "Booked Date",
    selector: "bookedDate",
    sortable: true,
    cell: (row) => <span>{row.bookedDate.split('T')[0]}</span>
  },
  {
    name: "Session Type",
    selector: "type",
    sortable: true,
    cell: (row) => <span>{row.type ? 'Video' : 'Audio'}</span>
  },
];

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    
    fetch('https://mockend.com/ahmediftikharr/myreacttask/session')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))

  }, [])

  return (
    <>
      <DataTable   
          title="Sessions"
          columns={columns}
          data={data}
          defaultSortField="clientName"
          pagination
        />
    </>
  )
}

export default Dashboard
