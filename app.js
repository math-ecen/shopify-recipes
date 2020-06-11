const express = require('express');
const app = express();

app.post('/shipping', function(req, res){
	res.json({
		"rates": [{
			"service_name": "Kevin's awesome service",
			"description": "Let's make it free",
			"service_code": "kevin_rate",
			"currency": "NZD",
			"total_price": "0000"
		}]	
	});
});

let port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on Port: ${port}`));
