db.getCollection("restaurants").find();
db.getCollection("restaurants").find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.getCollection("restaurants").find({}, {"_id":0,"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.getCollection("restaurants").find({}, {"_id":0,"restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1});
db.getCollection("restaurants").find({"borough": "Bronx"});
db.getCollection("restaurants").find({"borough": "Bronx"}).limit(5);
db.getCollection("restaurants").find({"borough": "Bronx"}).skip(5).limit(5);
db.getCollection("restaurants").find({"grades.score": {$gt: 90}});
db.getCollection("restaurants").find({"grades.score": {$gt: 80, $lt: 100}});
db.getCollection("restaurants").find({"address.coord.0": {$lt: -95.754168}});
db.getCollection("restaurants").find({$and: [{"cuisine": {$ne: "American "} },{"grades.score": {$gt: 70}}, {"address.coord.0": {$lt: -65.754168}}]});
db.getCollection("restaurants").find({"cuisine": {$ne: "American "}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}});
db.getCollection("restaurants").find({$and:[{"cuisine": {$ne: "American "} },{"grades.grade": {$eq: "A"}}, {"borough": {$ne: "Brooklyn"} }]},{_id:0, "cuisine": 1, "grades.grade": 1, "borough": 1}).sort( { "cuisine": 1 });
db.getCollection("restaurants").find({"name": {$regex: /^Wil/}},{_id:0, "restaurant_id":1, "name":1, "borough": 1, "cuisine":1});
db.getCollection("restaurants").find({"name": {$regex: /ces$/}},{_id:0, "restaurant_id":1, "name":1, "borough": 1, "cuisine":1});
db.getCollection("restaurants").find({"name": {$regex: /Reg/}},{_id:0, "restaurant_id":1, "name":1, "borough": 1, "cuisine":1});
db.getCollection("restaurants").find({"borough": "Bronx", $or: [{"cuisine": {$regex: /american/i}},{"cuisine": {$regex: /chinese/i}}]});
db.getCollection("restaurants").find({$or: [{"borough": "Staten Island"},{"borough": "Queens"},{"borough": "Bronx"},{"borough": "Brooklyn"}]},{"_id":0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.getCollection("restaurants").find({$nor: [{"borough": "Staten Island"},{"borough": "Queens"},{"borough": "Bronx"},{"borough": "Brooklyn"}]},{"_id":0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.getCollection("restaurants").find({"grades.score": {$not: {$gt: 10}}},{"_id":0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.getCollection("restaurants").find({$or: [ {$nor: [{"cuisine": {$regex: /american/i}},{"cuisine": {$regex: /chinese/i}}]},{"name": {$regex: /^Wil/}}] },{"_id":0, "restaurant_id": 1,  "name": 1, "borough": 1, "cuisine": 1});
db.getCollection("restaurants").find({"grades":{$elemMatch: {"date":{$eq:ISODate("2014-08-11T00:00:00Z")}, "grade": "A", "score": 11}}},{"_id":0, "restaurant_id":1, "name":1, "grades":1});
db.getCollection("restaurants").find({"grades.1.date": {$eq:ISODate("2014-08-11T00:00:00Z")}, "grades.1.grade": "A", "grades.1.score":{$gt:9}},{"_id":0, "restaurant_id":1, "name":1, "grades":1});
db.getCollection("restaurants").find({"address.coord.1": {$gt: 42, $lte: 52}},{"_id":0, "restaurant_id":1, "name":1, "address":1});
db.getCollection("restaurants").find({}).sort({"name": 1});
db.getCollection("restaurants").find({}).sort({"name": -1});
db.getCollection("restaurants").find({}).sort({"cuisine": 1, "borough": -1});
db.getCollection("restaurants").find({"address.street": {$exists: false}});
db.getCollection("restaurants").find({"address.coord": {$type: "double"}});
db.getCollection("restaurants").find( { "grades.score": { $mod: [ 7, 0 ] } },{"_id":0, "restaurant_id":1, "name":1, "grades.grade": 1} );
db.getCollection("restaurants").find({"name": {$regex: /mon/i}},{"_id":0, "name":1, "borough":1, "address.coord":1, "cuisine":1});
db.getCollection("restaurants").find({"name": {$regex: /^Mad/}},{"_id":0, "name":1, "borough":1, "address.coord":1, "cuisine":1})

