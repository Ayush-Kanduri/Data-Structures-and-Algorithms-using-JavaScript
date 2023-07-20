class Product {
	constructor(...params) {
		this.name = params[0];
		this.qty = params[1];
		this.Price = params[2];
		console.log("Product Price:", this.Price);
	}
	getName() {
		console.log("Product Name:", this.name);
		return this;
	}
	getQty() {
		console.log("Product Quantity:", this.qty);
		return this;
	}
	get Price() {
		return this.price;
	}
	set Price(price) {
		this.price = price;
	}
}

const mobile = new Product("Mobile", 4, 10000);

console.log("Product Class Instance/Mobile Object:", mobile);
mobile.getName().getQty(); // Function Chaining
