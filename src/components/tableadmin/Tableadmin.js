import "./tableadmin.css"
import Table from 'react-bootstrap/Table';

function Tableadmin() {
    return ( 
        <div className="tableadmin">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>order ID</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái</th>
                  <th>Payment</th>
                  <th>Ngày đặt hàng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
              
                  <td>Table cell </td>
                
                </tr>
              
                
              </tbody>
            </Table>
        </div>
     );
}

export default Tableadmin;