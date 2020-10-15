import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;
var index = 0;
var i = 1;
var total = 0;
var list_Product = [];
@Component({
	selector: 'app-makesale',
	templateUrl: './makesale.component.html',
	styleUrls: ['./makesale.component.css']
})
export class MakesaleComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}




	/**
	 * remove
	 */
	public remove(row, price) {

		$('#row' + row).remove();
		total -= price;
		list_Product.splice(row);
		$('#total').html(total);
		index--;
		i--;


	}



	/**
	 * click
	 */



	public click() {


		$('#total').html(total);
		let product = $('#products').val().split('_');
		let quantity = $('#quantity').val();
		var validar = true;
		if (quantity <= parseInt(product[3])) {
			if (quantity != 0) {
				for (let count = 0; count < list_Product.length; count++) {
					const element = list_Product[count];
					if (element == parseInt(product[0])) {
						$('#error-exists').addClass('d-block');
						validar = false;
					}
				}

				if (validar) {
					let row = '<tr id="row' + index + '"><td><input type="hidden" name="list_products[]" value="' + product[0] + '"><input type="hidden" name="list_quantity[]" value="' + quantity + '">' + i++ + '</td><td>' + product[1] + '</td><td>' + quantity + '</td><td>' + product[2] + '</td><td>' + (product[2] * quantity) + '</td></tr>';
					$('#error').removeClass('d-block');
					$('#detalle').append(row);
					total += (parseFloat(product[2]) * quantity);
					list_Product[index] = [parseInt(product[0])];
					$('#total').html(total);
					index++;
					$('#quantity').val(0);
					$('#error-exists').removeClass('d-block');
					$('#error-stock').removeClass('d-block');

				}

			} else {
				$('#error').addClass('d-block');
			}
		} else {

			$('#error-stock').addClass('d-block');
		}
		

	}

}
