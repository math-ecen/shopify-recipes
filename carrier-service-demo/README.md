## Shopify CarrierService Demo

The CarrierService API is a subset of the Shopify Admin API which allows an app developer to register their app as a Carrier. In order for a store to use your app's shipping rates in a real store, a merchant will need to have third party calculated shipping rates in their plan. This feature is included in the Shopify Advanced plan, and can be added in for free to any annually billed Shopify plan, or added for $20/month to any monthly Shopify plan by contacting Shopify support. 

## tl;dr
When your app is first installed your will want to register your Carrier Service. This essentially just means telling Shopify what the public URL is that Shopify will send a POST request to with the details of a customer's cart like the specific line items, prices, and shipping address. Then your server needs to reply with a JSON object which has an array of your shipping options. 

### Register your carrier service

To create the carrier service in a store, your app will need to POST the following endpoint:

POST /admin/api/2020-04/carrier_services.json  
X-Shopify-Access-Token: **your OAuth access token**   
```	
{
	"carrier_service": {
		"name": "Kevin's Mail Service",
		"callback_url": "https://3fb1cd249035.ngrok.io/shipping",
		"service_discovery": true
	}
}
```

Also ensure that your app appears in your Shipping rates and that the service is selected: **[Video demo](https://bit.ly/3dQJywI)**. Then you'll see your rates at the checkout: **[Screenshot](https://bit.ly/37hJT9p)**.
