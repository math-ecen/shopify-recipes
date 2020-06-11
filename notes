To create the carrier service in a store, you will need to POST the following endpoint:

POST /admin/api/2020-04/carrier_services.json
Headers:
	X-Shopify-Access-Token: <your OAuth access token>
Body:
	{
		"carrier_service": {
			"name": "Kevin's Mail Service",
			"callback_url": "https://3fb1cd249035.ngrok.io/shipping",
			"service_discovery": true
		}
	}


Also ensure that your app appears in your Shipping rates and that the service is selected: **[Video demo](https://bit.ly/3dQJywI)**. 

Then you'll see your rates at the checkout: 
![](https://bit.ly/37hJT9p)
