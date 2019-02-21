import cyView from "cy-view";

const devices = [
	{
		model: "macbook-15",
		width: 1440,
		height: 900
	},
	{
		model: "ipad-2",
		width: 768,
		height: 1024
	},
	{
		model: "iphone-6+",
		width: 414,
		height: 736
	}
];

const urls = [
	"/en-gb",
	"/en-us"
];

const viewports = cyView(devices);

module.exports = { devices , urls, viewports }