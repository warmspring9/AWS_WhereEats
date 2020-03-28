var http = require("https");

var options = {
	"method": "GET",
	"hostname": "tripadvisor1.p.rapidapi.com",
	"port": null,
	"path": "/restaurants/list-in-boundary?min_rating=3&lunit=km&restaurant_tagcategory=10591&limit=100&currency=USD&prices_restaurants=10953%252C10955&restaurant_tagcategory_standalone=10591&restaurant_mealtype=10598%252C10599&lang=en_US&open_now=false&bl_latitude=9.869559&bl_longitude=-84.540579&tr_latitude=10.204707&tr_longitude=-83.944227",
	"headers": { 
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "1f46c51fc1mshfc16f9194d41587p1e0fe9jsn8dd339bd2c62"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
        var body = Buffer.concat(chunks);
        var restaurants = JSON.parse(body).data;
        var choice =  Math.trunc(Math.random() * restaurants.length-1);
        console.log(choice);
		console.log(restaurants[choice].name + " " + restaurants[choice].location_id);
	});
});

req.end();
