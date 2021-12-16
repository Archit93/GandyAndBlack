import React from 'react';
import AdminHeaderMenu from '../../common/AdminHeaderMenu';
const CPPList = (props) => {
return (
<div className="cpp__page">
<div>
    <AdminHeaderMenu />
</div>
<div className="container-fluid">
<div className="cpp_inner_div">
    <h2 className="main_title_name">CPP <span className="live_blink">LIVE</span></h2>
		<h3>Product Purchased</h3>
		<div className="table__div PPTable">
			<table>
				<tbody>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
					<tr>
						<td>Teosyal - Redensity 2 - 2 x 1ml</td>
						<td>80</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h3>Order Made</h3>
		<div className="table__div OMTable">
			<table>
				<tbody>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
					<tr>
						<td>#123456</td>
						<td>abc@gmail.com</td>
						<td>100 GBP</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div className="monthly_yearly_divs">
			<div class="content_div">
				<h3>Monthly Profit</h3>
				<div class="table__div MPTable">
					<table>
						<tbody>
							<tr>
								<td>Jan 2021</td>
								<td>500 GBP</td>
							</tr>
							<tr>
								<td>FEB 2021</td>
								<td>500 GBP</td>
							</tr>
							<tr>
								<td>March 2021</td>
								<td>500 GBP</td>
							</tr>
							<tr>
								<td>April 2021</td>
								<td>500 GBP</td>
							</tr>
							<tr>
								<td>May 2021</td>
								<td>500 GBP</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="content_div">
				<h3>Yearly Profit</h3>
				<div class="table__div YPTable">
					<table>
						<tbody>
							<tr>
								<td>2021</td>
								<td>55500 GBP</td>
							</tr>
							<tr>
								<td>2021</td>
								<td>55500 GBP</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
)
}
export default CPPList;