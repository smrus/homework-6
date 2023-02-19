let url = 'https://reqres.in/api/users?per_page=12';
fetch(url)
.then((Responsebody)=>{
	console.log(Responsebody);
	return Responsebody.json();
});
.then ((data)=>{
	console.log(data);
	data.data.array.forEach(element => {
		console.log(element.last_name);
	});
});