const DIR = 'img/';
// create an array with nodes
const ajax = new XMLHttpRequest();
var color='rgba('+Math.round(Math.random()*250)+','+Math.round(Math.random()*250)+','+Math.round(Math.random()*250)+',1)';
console.log(color);
var arr = [{
	id: "7777777",
	image: "img/head.png",
	label: "总代理 color",
	shape: "circularImage",
	color: color
}];
var lineArr = new Array();
var line = {

}

function getData(id, api) {
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {

			let data = JSON.parse(ajax.responseText);
			for (var i = 0; i < data.data.data.length; i++) {
				arr.push(data.data.data[i]);

				let line = {
					from: id,
					to: data.data.data[i].id,
					arrows:'to'
				}

				lineArr.push(line);



			}
			var len = arr.length;

			draw(arr, len, lineArr);
			console.log(arr);

		}
	}
	ajax.open("post", api, true);
	ajax.send(id);
}

getData(7777777, "./api/getTeam.php");
console.log(arr);

function draw(arr, i, lineArr) {
	i = i - 1;
	var nodes = new vis.DataSet(arr);

	// create an array with edges
	var edges = new vis.DataSet(lineArr);

	// create a network
	var container = document.getElementById('warp');
	var data = {
		nodes: nodes,
		edges: edges
	};
	var options = {};
	var network = new vis.Network(container, data, options);

	network.on("click", function (params) {
		getData(params.nodes[0], "./api/getNew.php");
	});
}