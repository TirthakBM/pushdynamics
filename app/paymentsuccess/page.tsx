import React from 'react'

export default function PaySuccess() {
    return (
        <section className="s1_db_section">
            <div className="s1_pf">
                <div className="s1_db_inner">
                    <h1 className="heading_s1_pf">Payment Successful</h1>
                    <p className="para_s1_pf">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel morbi nunc velit.</p>
                </div>
            </div>
            <div className="green_div_for_pf">
                <div className="div_for_pf_inner">
                    <h3 className="heading_of_pf">Order Summary</h3>
                </div>
                <table className="table table-borderless ">
                    <thead>
                        <tr className="table_pf">
                            <th scope="col"><p className="head_pf">Product</p></th>
                            <th scope="col"><p className="head_pf">No.&nbsp;Months</p></th>
                            <th scope="col"><p className="head_pf for_center">Qty</p></th>
                            <th scope="col"><p className="head_pf for_total">Subtotal</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table_pf">
                            <td scope="row"><p className="data_pf">SEO - Platnium Package</p></td>
                            <td><p className="data_pf">1 Month</p></td>
                            <td><p className="data_pf for_center">1</p></td>
                            <td><p className="data_pf for_total">£1,839.00</p></td>
                        </tr>
                        <tr className="table_pf">
                            <td scope="row"><p className="data_pf">SEO - Platnium Package</p></td>
                            <td><p className="data_pf">1 Month</p></td>
                            <td><p className="data_pf for_center">1</p></td>
                            <td><p className="data_pf for_total">£1,839.00</p></td>
                        </tr>
                        <tr className="table_pf">
                            <td scope="row"><p className="data_pf">SEO - Platnium Package</p></td>
                            <td><p className="data_pf">1 Month</p></td>
                            <td><p className="data_pf for_center">1</p></td>
                            <td><p className="data_pf for_total">£1,839.00</p></td>
                        </tr>
                        <tr className="table_pf">
                            <td scope="row"><p className="data_pf">SEO - Platnium Package</p></td>
                            <td><p className="data_pf">1 Month</p></td>
                            <td><p className="data_pf for_center">1</p></td>
                            <td><p className="data_pf for_total">£1,839.00</p></td>
                        </tr>
                        <tr className="table_pf">
                            <td scope="row"></td>
                            <td></td>
                            <td><p className="data_pf for_subtotal for_center">Total</p></td>
                            <td><p className="data_pf for_total for_bottom">£7,356.00</p></td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn green_btn_pf">Back Home</button>
            </div>

        </section>
    )
}
