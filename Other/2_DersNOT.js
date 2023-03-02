// 1 once bir routes klasoru olusturuyorz ve bir sayfamizin get,post,put,patch,delete her seyini orda yapiyoruz
// 2 routes icinde workouts.js sayfamizin routelerini orda yazicaz
// 3 adim workouts.js icinde bizler expresi ve router yazmak icin router requieri yapiyoruz.
// 4 artik router.get yada router.post olarak metodlarimizi workouts.js de yaziyoruz ve export workouts.js deki routerlarimizi get,postlari ediyoruz 'module.exports = router' .
// 5 sonra server.js e bu klasorumuz workout.js import edip artik burda kullaniyoruz 'degisken =workoutRoutes'.
// 6 artik app.use(workoutRoutes)  cagiriyoruz.  app.use(workoutRoutes) fakat bunu kullanmak icin biz buraya bir tane route vermek zorundayiz yani adress ilk deger olarak o yuzden
// 7 diyoruzki app.use('/api/workouts', workoutRoutes) yani  localhost:4000/api/workouts oldugunda bu sayfayi ac diyoruz.
