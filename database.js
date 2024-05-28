// app.get('/admin-stats',async(req,res)=>{
//     const result = await userCollection.estimatedDocumentCount()
//     const menuItems = await menuCollection.estimatedDocumentCount()
//     const orders = await paymentCollection.estimatedDocumentCount()

//     const result1 = await menuCollection.aggregate([
//       {
//           $group: {
//               _id: null,
//               totalRevenue: {
//                   $sum: '$price'
//               }
//           }
//       }
//   ]);
  
//   const revenue = result1.length > 0 ? result1[0].totalRevenue : 0;

//     res.send({result,menuItems,orders,revenue})
     
// })