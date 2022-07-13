const OrdersList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full max-w-3xl mx-auto my-8">
        <thead>
          <tr className="hover">
            <th></th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th>1</th>
            <td>Nantes</td>
            <td>Vannes</td>
            <td>10pa</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Paris</td>
            <td>Lyon</td>
            <td>30pa</td>
          </tr>
          <tr className="hover">
            <th>3</th>
            <td>Tours</td>
            <td>Bordeau</td>
            <td>15pa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
