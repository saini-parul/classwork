// 1. Find all the information about each products


test> db.Products.find()


// 2. Find the product price which are between 400 to 800


db.Products.find({"product_price":{$lt:800,$gt:400}})


// 3. Find the product price which are not between 400 to 600


db.Products.find({"product_price":{$lt:600,$gt:400}})


// 4. List the four product which are grater than 500 in price 


db.Products.find({"product_price":{$gt:500}}).limit(4)


// 5. Find the product name and product material of each products


 db.Products.find({},{_id:0,product_name:1,product_material:1})

 
 // 6. Find the product with a row id of 10


db.Products.find({'id':'10'})


// 7. Find only the product name and product material


 db.Products.find({ id: '10' }, { _id: 0, product_name: 1, product_material: 1 })


// 8. Find all products which contain the value of soft in product material 


  db.Products.find({product_material:'Soft'})


// 9. Find products which contain product color indigo  and product price 492.00


   db.Products.find({ product_color: 'indigo', product_price: 492 })


// 10. Delete the products which product price value are same


db.Products
    .aggregate([
        { $group: { _id: "$product_price", count: { $sum: 1 } } },
        { $match: { count: { $gt: 1 } } },
    ])
    .forEach((doc) => {
        db.Products.remove({ product_price: doc._id });
    });
