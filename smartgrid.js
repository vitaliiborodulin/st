module.exports = {
	columns: 12,
	offset: "20px",
	container: {
		maxWidth: "1400px",
		fields: "20px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		xl: {
			width: "1200px",
		},
		lg: {
			width: "992px",
		},
		md: {
			width: "768px"
		},
		xs: {
			width: "576px",
			// fields: "10px"
		},
	}
}