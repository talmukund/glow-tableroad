import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './App.css';

class App extends Component {
  state = {
    table_data: [{
      id: 1,
      name: "Mukund",
      position: "Engineer",
      office: "India",
      age: 25,
      startdate: "2018/11/22",
      salary: 70000
    }, {
      id: 2,
      name: "John",
      position: "Soft Engineer",
      office: "UK",
      age: 26,
      startdate: "2018/11/22",
      salary: 80000
    }, {
      id: 3,
      name: "Michael",
      position: "Depty Engineer",
      office: "US",
      age: 21,
      startdate: "2018/11/22",
      salary: 90000
    }, {
      id: 4,
      name: "Polak",
      position: "HardcEngineer",
      office: "Canada",
      age: 22,
      startdate: "2018/11/22",
      salary: 74000
    }, {
      id: 5,
      name: "Jastin",
      position: "Hardsh Engineer",
      office: "France",
      age: 23,
      startdate: "2018/11/22",
      salary: 120000
    }, {
      id: 6,
      name: "Lin",
      position: "Hop Engineer",
      office: "China",
      age: 25,
      startdate: "2018/11/22",
      salary: 60000
    }, {
      id: 7,
      name: "Makad",
      position: "Assistant",
      office: "India",
      age: 25,
      startdate: "2018/11/22",
      salary: 90000
    }, {
      id: 8,
      name: "Chandan",
      position: "Hert Engineer",
      office: "India",
      age: 21,
      startdate: "2018/11/22",
      salary: 80000
    }, {
      id: 9,
      name: "Ramsey",
      position: "Manager",
      office: "Scotland",
      age: 25,
      startdate: "2018/11/22",
      salary: 70000
    }, {
      id: 10,
      name: "Ahsley",
      position: "Doctor",
      office: "Cananda",
      age: 27,
      startdate: "2018/11/22",
      salary: 30000
    }, {
      id: 11,
      name: "Ashwini",
      position: "Soft Engineer",
      office: "India",
      age: 25,
      startdate: "2018/11/22",
      salary: 110000
    }]
  }
  render() {
    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
</span>
    );

    const options = {
      paginationSize: 6,
      pageStartIndex: 0,
      hideSizePerPage: true, // Hide the sizePerPage dropdown always
      hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      paginationTotalRenderer: customTotal,
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      },
      {
        text: 'All', value: this.state.table_data.length
      }] // A numeric array is also available. the purpose of above example is custom the text
    };

    const columns = [{
      dataField: 'id',
      text: 'ID'
    }, {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'position',
      text: 'Position'
    }, {
      dataField: 'office',
      text: 'Office'
    }, {
      dataField: 'age',
      text: 'Age'
    }, {
      dataField: 'startdate',
      text: 'Start Date'
    }, {
      dataField: 'salary',
      text: 'Salary'
    }];
    return (
      <div>
        <BootstrapTable bootstrap4 keyField='id' data={this.state.table_data} columns={columns} pagination={paginationFactory(options)} />
      </div>
    )
  }
}

export default App;
