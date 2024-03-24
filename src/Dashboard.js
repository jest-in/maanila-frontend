export default function Dashboard() {
  return (
    <main className="hero">
      <section className="hero__cards">
        <article className="hero__card">
          <p className="hero__p">20</p>
          <p className="hero__p">Groups</p>
        </article>
        <article className="hero__card">
          <p className="hero__p">1000</p>
          <p className="hero__p">Members</p>
        </article>
        <article className="hero__card">
          <p className="hero__p">200</p>
          <p className="hero__p">Pending Members</p>
        </article>
        <article className="hero__card">
          <p className="hero__p">105600$</p>
          <p className="hero__p">Pending Amount</p>
        </article>
      </section>

      <section className="hero__section2">
        <form className="hero__budget-card">
          <h2>Budget Issued</h2>
          <div>
            <label htmlFor="monthly_amount">Monthly</label>
            <input id="monthly_amount" type="text" />
          </div>
          <div>
            <label htmlFor="yearly_amount">Yearly</label>
            <input id="yearly_amount" type="text" />
          </div>
          <button>Update</button>
        </form>

        <section className="hero__user-sec">
          <table>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Group</th>
                <th>Mother</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sl.No</td>
                <td>Name</td>
                <td>Group</td>
                <td>Mother</td>
                <td>Mobile</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}
