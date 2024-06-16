async function main() {

	// Load FONTS
	async function loadFonts() {
		await Promise.all([
			figma.loadFontAsync({
				family: "Inter",
				style: "Semi Bold"
				}),figma.loadFontAsync({
				family: "Inter",
				style: "Regular"
				}),figma.loadFontAsync({
				family: "Inter",
				style: "Medium"
				})
		])
	}

	await loadFonts()

	// Create STYLE
	var gray_dark_mode_white_0993 = figma.createPaintStyle()
	gray_dark_mode_white_0993.name = "Gray dark mode/White"
	gray_dark_mode_white_0993.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	

	// Create STYLE
	var gray_dark_mode_950_dd7d = figma.createPaintStyle()
	gray_dark_mode_950_dd7d.name = "Gray dark mode/950"
	gray_dark_mode_950_dd7d.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13411764800548553,"g":0.1415686309337616,"b":0.14901961386203766},"boundVariables":{}}]
	

	// Create STYLE
	var gray_dark_mode_800_ad6b = figma.createPaintStyle()
	gray_dark_mode_800_ad6b.name = "Gray dark mode/800"
	gray_dark_mode_800_ad6b.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.2258823662996292,"g":0.23592157661914825,"b":0.250980406999588},"boundVariables":{}}]
	

	// Create STYLE
	var orange_50_ad62 = figma.createPaintStyle()
	orange_50_ad62.name = "orange/50"
	orange_50_ad62.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.929411768913269,"b":0.8980392217636108},"boundVariables":{}}]
	

	// Create STYLE
	var gray_dark_mode_50_a239 = figma.createPaintStyle()
	gray_dark_mode_50_a239.name = "Gray dark mode/50"
	gray_dark_mode_50_a239.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9404999613761902,"g":0.9444583058357239,"b":0.949999988079071},"boundVariables":{}}]
	

	// Create STYLE
	var gray_dark_mode_500_e40c = figma.createPaintStyle()
	gray_dark_mode_500_e40c.name = "Gray dark mode/500"
	gray_dark_mode_500_e40c.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44823530316352844,"g":0.469205379486084,"b":0.49803921580314636},"boundVariables":{}}]
	

	// Create STYLE
	var greem_g-01_e774 = figma.createPaintStyle()
	greem_g-01_e774.name = "Greem/g-01"
	greem_g-01_e774.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.4588235318660736,"g":0.8784313797950745,"b":0.6549019813537598},"boundVariables":{}}]
	

	// Create STYLE
	var greem_g-02_2c87 = figma.createPaintStyle()
	greem_g-02_2c87.name = "Greem/g-02"
	greem_g-02_2c87.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	

	// Create STYLE
	var greem_g-03_6b89 = figma.createPaintStyle()
	greem_g-03_6b89.name = "Greem/g-03"
	greem_g-03_6b89.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13333334028720856,"g":0.18039216101169586,"b":0.1764705926179886},"boundVariables":{}}]
	

	// Create STYLE
	var red_r-01_2c6f = figma.createPaintStyle()
	red_r-01_2c6f.name = "Red/r-01"
	red_r-01_2c6f.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8784313797950745,"g":0.493790864944458,"b":0.4588235318660736},"boundVariables":{}}]
	

	// Create STYLE
	var red_r-02_de34 = figma.createPaintStyle()
	red_r-02_de34.name = "Red/r-02"
	red_r-02_de34.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8627451062202454,"g":0.26274511218070984,"b":0.2078431397676468},"boundVariables":{}}]
	

	// Create STYLE
	var red_r-03_890d = figma.createPaintStyle()
	red_r-03_890d.name = "Red/r-03"
	red_r-03_890d.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13333334028720856,"g":0.18039216101169586,"b":0.1764705926179886},"boundVariables":{}}]
	

	// Create STYLE
	var yellow_y-01_1030 = figma.createPaintStyle()
	yellow_y-01_1030.name = "Yellow/y-01"
	yellow_y-01_1030.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8784313797950745,"g":0.7385621070861816,"b":0.4588235318660736},"boundVariables":{}}]
	

	// Create STYLE
	var yellow_y-02_21db = figma.createPaintStyle()
	yellow_y-02_21db.name = "Yellow/y-02"
	yellow_y-02_21db.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8627451062202454,"g":0.6400784254074097,"b":0.2078431397676468},"boundVariables":{}}]
	

	// Create STYLE
	var yellow_y-03_b8fa = figma.createPaintStyle()
	yellow_y-03_b8fa.name = "Yellow/y-03"
	yellow_y-03_b8fa.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.16470588743686676,"b":0.13333334028720856},"boundVariables":{}}]
	

	// Create STYLE
	var gray_dark_mode_white_0993 = figma.createPaintStyle()
	gray_dark_mode_white_0993.name = "Gray dark mode/White"
	gray_dark_mode_white_0993.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	

	// Create STYLE
	var orange_50_ad62 = figma.createPaintStyle()
	orange_50_ad62.name = "orange/50"
	orange_50_ad62.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.929411768913269,"b":0.8980392217636108},"boundVariables":{}}]
	

	// Create STYLE
	var gray_dark_mode_50_a239 = figma.createPaintStyle()
	gray_dark_mode_50_a239.name = "Gray dark mode/50"
	gray_dark_mode_50_a239.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9404999613761902,"g":0.9444583058357239,"b":0.949999988079071},"boundVariables":{}}]
	

	// Create STYLE
	var greem_g-01_e774 = figma.createPaintStyle()
	greem_g-01_e774.name = "Greem/g-01"
	greem_g-01_e774.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.4588235318660736,"g":0.8784313797950745,"b":0.6549019813537598},"boundVariables":{}}]
	

	// Create STYLE
	var greem_g-02_2c87 = figma.createPaintStyle()
	greem_g-02_2c87.name = "Greem/g-02"
	greem_g-02_2c87.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	

	// Create STYLE
	var greem_g-03_6b89 = figma.createPaintStyle()
	greem_g-03_6b89.name = "Greem/g-03"
	greem_g-03_6b89.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13333334028720856,"g":0.18039216101169586,"b":0.1764705926179886},"boundVariables":{}}]
	

	// Create STYLE
	var red_r-01_2c6f = figma.createPaintStyle()
	red_r-01_2c6f.name = "Red/r-01"
	red_r-01_2c6f.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8784313797950745,"g":0.493790864944458,"b":0.4588235318660736},"boundVariables":{}}]
	

	// Create STYLE
	var red_r-02_de34 = figma.createPaintStyle()
	red_r-02_de34.name = "Red/r-02"
	red_r-02_de34.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8627451062202454,"g":0.26274511218070984,"b":0.2078431397676468},"boundVariables":{}}]
	

	// Create STYLE
	var red_r-03_890d = figma.createPaintStyle()
	red_r-03_890d.name = "Red/r-03"
	red_r-03_890d.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13333334028720856,"g":0.18039216101169586,"b":0.1764705926179886},"boundVariables":{}}]
	

	// Create STYLE
	var yellow_y-01_1030 = figma.createPaintStyle()
	yellow_y-01_1030.name = "Yellow/y-01"
	yellow_y-01_1030.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8784313797950745,"g":0.7385621070861816,"b":0.4588235318660736},"boundVariables":{}}]
	

	// Create STYLE
	var yellow_y-02_21db = figma.createPaintStyle()
	yellow_y-02_21db.name = "Yellow/y-02"
	yellow_y-02_21db.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8627451062202454,"g":0.6400784254074097,"b":0.2078431397676468},"boundVariables":{}}]
	

	// Create STYLE
	var yellow_y-03_b8fa = figma.createPaintStyle()
	yellow_y-03_b8fa.name = "Yellow/y-03"
	yellow_y-03_b8fa.paints = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.16470588743686676,"b":0.13333334028720856},"boundVariables":{}}]
	

	// Create FRAME
	var frame_1_451 = figma.createFrame()
	figma.currentPage.appendChild(frame_1_451)
	frame_1_451.resize(2705.0000000000, 1796.0000000000)
	frame_1_451.primaryAxisSizingMode = "AUTO"
	frame_1_451.counterAxisSizingMode = "AUTO"
	frame_1_451.fillStyleId = gray_dark_mode_white_0993.id
	frame_1_451.backgroundStyleId = gray_dark_mode_white_0993.id
	frame_1_451.name = "Color system"
	frame_1_451.relativeTransform = [[1,0,-1353],[0,1,-898]]
	frame_1_451.x = -1353
	frame_1_451.y = -898
	frame_1_451.paddingLeft = 124
	frame_1_451.paddingRight = 124
	frame_1_451.paddingTop = 124
	frame_1_451.paddingBottom = 124
	frame_1_451.primaryAxisAlignItems = "CENTER"
	frame_1_451.strokeTopWeight = 1
	frame_1_451.strokeBottomWeight = 1
	frame_1_451.strokeLeftWeight = 1
	frame_1_451.strokeRightWeight = 1
	frame_1_451.constraints = {"horizontal":"CENTER","vertical":"CENTER"}
	frame_1_451.layoutMode = "VERTICAL"
	frame_1_451.counterAxisSizingMode = "AUTO"
	frame_1_451.itemSpacing = 78
	

	// Create FRAME
	var frame_1_452 = figma.createFrame()
	frame_1_451.appendChild(frame_1_452)
	frame_1_452.resize(1181.0000000000, 140.0000000000)
	frame_1_452.primaryAxisSizingMode = "AUTO"
	frame_1_452.counterAxisSizingMode = "AUTO"
	frame_1_452.name = "Frame 89"
	frame_1_452.relativeTransform = [[1,0,124],[0,1,124]]
	frame_1_452.x = 124
	frame_1_452.y = 124
	frame_1_452.fills = []
	frame_1_452.strokeTopWeight = 1
	frame_1_452.strokeBottomWeight = 1
	frame_1_452.strokeLeftWeight = 1
	frame_1_452.strokeRightWeight = 1
	frame_1_452.clipsContent = false
	frame_1_452.expanded = false
	frame_1_452.layoutMode = "VERTICAL"
	frame_1_452.counterAxisSizingMode = "AUTO"
	frame_1_452.itemSpacing = 53
	

	// Create FRAME
	var frame_1_453 = figma.createFrame()
	frame_1_452.appendChild(frame_1_453)
	frame_1_453.resize(1181.0000000000, 140.0000000000)
	frame_1_453.primaryAxisSizingMode = "AUTO"
	frame_1_453.counterAxisSizingMode = "AUTO"
	frame_1_453.name = "Frame 86"
	frame_1_453.fills = []
	frame_1_453.strokeTopWeight = 1
	frame_1_453.strokeBottomWeight = 1
	frame_1_453.strokeLeftWeight = 1
	frame_1_453.strokeRightWeight = 1
	frame_1_453.clipsContent = false
	frame_1_453.expanded = false
	frame_1_453.layoutMode = "VERTICAL"
	frame_1_453.counterAxisSizingMode = "AUTO"
	frame_1_453.itemSpacing = 24
	

	// Create TEXT
	var text_1_454 = figma.createText()
	frame_1_453.appendChild(text_1_454)
	text_1_454.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_454.resize(560.0000000000, 56.0000000000)
	text_1_454.name = "cyberpunk landing page"
	
	// Font properties
	text_1_454.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_454.characters = "cyberpunk landing page"
	text_1_454.fontSize = 46
	text_1_454.listSpacing = 0
	text_1_454.textCase = "TITLE"
	text_1_454.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_454.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_455 = figma.createText()
	frame_1_453.appendChild(text_1_455)
	text_1_455.fillStyleId = gray_dark_mode_800_ad6b.id
	text_1_455.resize(1181.0000000000, 60.0000000000)
	text_1_455.name = "In the color system used in Bitova, we tried to be able to use the rule of contrast (WCAG) 2.2. More items will be added in each version. Our color rules are numerous and examples will be seen in the components."
	text_1_455.relativeTransform = [[1,0,0],[0,1,80]]
	text_1_455.y = 80
	
	// Font properties
	text_1_455.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_455.characters = "In the color system used in Bitova, we tried to be able to use the rule of contrast (WCAG) 2.2. More items will be added in each version. Our color rules are numerous and examples will be seen in the components."
	text_1_455.fontSize = 20
	text_1_455.listSpacing = 0
	text_1_455.textCase = "TITLE"
	text_1_455.lineHeight = {"unit":"PIXELS","value":30}
	text_1_455.fontName = {"family":"Inter","style":"Regular"}
	text_1_455.textAutoResize = "HEIGHT"


	// Create LINE
	var line_1_456 = figma.createLine()
	frame_1_451.appendChild(line_1_456)
	line_1_456.resizeWithoutConstraints(2457.0000000000, 0)
	line_1_456.name = "Line 2"
	line_1_456.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7224999070167542,"g":0.7756250500679016,"b":0.8500000238418579},"boundVariables":{}}]
	line_1_456.dashPattern = [10,10]
	line_1_456.relativeTransform = [[1,0,124],[0,1,342]]
	line_1_456.x = 124
	line_1_456.y = 342
	line_1_456.layoutAlign = "STRETCH"
	line_1_456.constrainProportions = true
	

	// Create FRAME
	var frame_1_457 = figma.createFrame()
	frame_1_451.appendChild(frame_1_457)
	frame_1_457.resize(855.0000000000, 878.0000000000)
	frame_1_457.primaryAxisSizingMode = "AUTO"
	frame_1_457.counterAxisSizingMode = "AUTO"
	frame_1_457.name = "Frame 84"
	frame_1_457.relativeTransform = [[1,0,124],[0,1,420]]
	frame_1_457.x = 124
	frame_1_457.y = 420
	frame_1_457.fills = []
	frame_1_457.strokeTopWeight = 1
	frame_1_457.strokeBottomWeight = 1
	frame_1_457.strokeLeftWeight = 1
	frame_1_457.strokeRightWeight = 1
	frame_1_457.clipsContent = false
	frame_1_457.layoutMode = "VERTICAL"
	frame_1_457.counterAxisSizingMode = "AUTO"
	frame_1_457.itemSpacing = 64
	

	// Create FRAME
	var frame_1_458 = figma.createFrame()
	frame_1_457.appendChild(frame_1_458)
	frame_1_458.resize(855.0000000000, 250.0000000000)
	frame_1_458.primaryAxisSizingMode = "AUTO"
	frame_1_458.counterAxisSizingMode = "AUTO"
	frame_1_458.name = "Frame 74"
	frame_1_458.fills = []
	frame_1_458.strokeTopWeight = 1
	frame_1_458.strokeBottomWeight = 1
	frame_1_458.strokeLeftWeight = 1
	frame_1_458.strokeRightWeight = 1
	frame_1_458.clipsContent = false
	frame_1_458.layoutMode = "VERTICAL"
	frame_1_458.counterAxisSizingMode = "AUTO"
	frame_1_458.itemSpacing = 24
	

	// Create FRAME
	var frame_1_459 = figma.createFrame()
	frame_1_458.appendChild(frame_1_459)
	frame_1_459.resize(855.0000000000, 38.0000000000)
	frame_1_459.primaryAxisSizingMode = "AUTO"
	frame_1_459.name = "Frame 70"
	frame_1_459.fills = []
	frame_1_459.strokeTopWeight = 1
	frame_1_459.strokeBottomWeight = 1
	frame_1_459.strokeLeftWeight = 1
	frame_1_459.strokeRightWeight = 1
	frame_1_459.clipsContent = false
	frame_1_459.expanded = false
	frame_1_459.layoutMode = "VERTICAL"
	frame_1_459.itemSpacing = 16
	

	// Create FRAME
	var frame_1_460 = figma.createFrame()
	frame_1_459.appendChild(frame_1_460)
	frame_1_460.resize(185.0000000000, 38.0000000000)
	frame_1_460.primaryAxisSizingMode = "AUTO"
	frame_1_460.counterAxisSizingMode = "AUTO"
	frame_1_460.name = "Frame 68"
	frame_1_460.fills = []
	frame_1_460.counterAxisAlignItems = "CENTER"
	frame_1_460.strokeTopWeight = 1
	frame_1_460.strokeBottomWeight = 1
	frame_1_460.strokeLeftWeight = 1
	frame_1_460.strokeRightWeight = 1
	frame_1_460.clipsContent = false
	frame_1_460.expanded = false
	frame_1_460.layoutMode = "HORIZONTAL"
	frame_1_460.counterAxisSizingMode = "AUTO"
	frame_1_460.itemSpacing = 8
	

	// Create TEXT
	var text_1_461 = figma.createText()
	frame_1_460.appendChild(text_1_461)
	text_1_461.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_461.resize(86.0000000000, 29.0000000000)
	text_1_461.name = "orange"
	text_1_461.relativeTransform = [[1,0,0],[0,1,4.5]]
	text_1_461.y = 4.5
	
	// Font properties
	text_1_461.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_461.characters = "orange"
	text_1_461.fontSize = 24
	text_1_461.listSpacing = 0
	text_1_461.textCase = "TITLE"
	text_1_461.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_461.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_462 = figma.createFrame()
	frame_1_460.appendChild(frame_1_462)
	frame_1_462.resize(91.0000000000, 38.0000000000)
	frame_1_462.primaryAxisSizingMode = "AUTO"
	frame_1_462.counterAxisSizingMode = "AUTO"
	frame_1_462.name = "Frame 68"
	frame_1_462.relativeTransform = [[1,0,94],[0,1,0]]
	frame_1_462.x = 94
	frame_1_462.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_462.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_462.cornerRadius = 8
	frame_1_462.paddingLeft = 12
	frame_1_462.paddingRight = 12
	frame_1_462.paddingTop = 8
	frame_1_462.paddingBottom = 8
	frame_1_462.primaryAxisAlignItems = "CENTER"
	frame_1_462.counterAxisAlignItems = "CENTER"
	frame_1_462.strokeTopWeight = 1
	frame_1_462.strokeBottomWeight = 1
	frame_1_462.strokeLeftWeight = 1
	frame_1_462.strokeRightWeight = 1
	frame_1_462.clipsContent = false
	frame_1_462.expanded = false
	frame_1_462.layoutMode = "HORIZONTAL"
	frame_1_462.counterAxisSizingMode = "AUTO"
	frame_1_462.itemSpacing = 4
	

	// Create TEXT
	var text_1_463 = figma.createText()
	frame_1_462.appendChild(text_1_463)
	text_1_463.resize(67.0000000000, 22.0000000000)
	text_1_463.name = "primary"
	text_1_463.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_463.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_463.x = 12
	text_1_463.y = 8
	
	// Font properties
	text_1_463.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_463.characters = "primary"
	text_1_463.fontSize = 18
	text_1_463.listSpacing = 0
	text_1_463.textCase = "TITLE"
	text_1_463.fontName = {"family":"Inter","style":"Medium"}
	text_1_463.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_464 = figma.createFrame()
	frame_1_460.appendChild(frame_1_464)
	frame_1_464.resize(91.0000000000, 38.0000000000)
	frame_1_464.primaryAxisSizingMode = "AUTO"
	frame_1_464.counterAxisSizingMode = "AUTO"
	frame_1_464.name = "Frame 67"
	frame_1_464.visible = false
	frame_1_464.relativeTransform = [[1,0,94],[0,1,0]]
	frame_1_464.x = 94
	frame_1_464.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_464.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_464.cornerRadius = 8
	frame_1_464.paddingLeft = 12
	frame_1_464.paddingRight = 12
	frame_1_464.paddingTop = 8
	frame_1_464.paddingBottom = 8
	frame_1_464.primaryAxisAlignItems = "CENTER"
	frame_1_464.counterAxisAlignItems = "CENTER"
	frame_1_464.strokeTopWeight = 1
	frame_1_464.strokeBottomWeight = 1
	frame_1_464.strokeLeftWeight = 1
	frame_1_464.strokeRightWeight = 1
	frame_1_464.clipsContent = false
	frame_1_464.expanded = false
	frame_1_464.layoutMode = "HORIZONTAL"
	frame_1_464.counterAxisSizingMode = "AUTO"
	frame_1_464.itemSpacing = 4
	

	// Create TEXT
	var text_1_465 = figma.createText()
	frame_1_464.appendChild(text_1_465)
	text_1_465.resize(67.0000000000, 22.0000000000)
	text_1_465.name = "primary"
	text_1_465.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_465.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_465.x = 12
	text_1_465.y = 8
	
	// Font properties
	text_1_465.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_465.characters = "primary"
	text_1_465.fontSize = 18
	text_1_465.listSpacing = 0
	text_1_465.textCase = "TITLE"
	text_1_465.fontName = {"family":"Inter","style":"Medium"}
	text_1_465.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_466 = figma.createFrame()
	frame_1_458.appendChild(frame_1_466)
	frame_1_466.resize(197.0000000000, 188.0000000000)
	frame_1_466.primaryAxisSizingMode = "AUTO"
	frame_1_466.counterAxisSizingMode = "AUTO"
	frame_1_466.name = "Frame 73"
	frame_1_466.relativeTransform = [[1,0,0],[0,1,62]]
	frame_1_466.y = 62
	frame_1_466.fills = []
	frame_1_466.strokeTopWeight = 1
	frame_1_466.strokeBottomWeight = 1
	frame_1_466.strokeLeftWeight = 1
	frame_1_466.strokeRightWeight = 1
	frame_1_466.clipsContent = false
	frame_1_466.layoutMode = "HORIZONTAL"
	frame_1_466.counterAxisSizingMode = "AUTO"
	frame_1_466.itemSpacing = 29
	

	// Create FRAME
	var frame_1_467 = figma.createFrame()
	frame_1_466.appendChild(frame_1_467)
	frame_1_467.resize(197.0000000000, 188.0000000000)
	frame_1_467.primaryAxisSizingMode = "AUTO"
	frame_1_467.fillStyleId = gray_dark_mode_white_0993.id
	frame_1_467.backgroundStyleId = gray_dark_mode_white_0993.id
	frame_1_467.name = "Frame 47"
	frame_1_467.effects = [{"type":"DROP_SHADOW","radius":6,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.029999999329447746},"offset":{"x":0,"y":4},"spread":-2,"blendMode":"NORMAL","showShadowBehindNode":false},{"type":"DROP_SHADOW","radius":16,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.07999999821186066},"offset":{"x":0,"y":12},"spread":-4,"blendMode":"NORMAL","showShadowBehindNode":false}]
	frame_1_467.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8359999656677246,"g":0.8835000395774841,"b":0.949999988079071},"boundVariables":{}}]
	frame_1_467.cornerRadius = 12
	frame_1_467.cornerSmoothing = 0.6000000238418579
	frame_1_467.strokeTopWeight = 1
	frame_1_467.strokeBottomWeight = 1
	frame_1_467.strokeLeftWeight = 1
	frame_1_467.strokeRightWeight = 1
	frame_1_467.expanded = false
	frame_1_467.layoutMode = "VERTICAL"
	

	// Create FRAME
	var frame_1_468 = figma.createFrame()
	frame_1_467.appendChild(frame_1_468)
	frame_1_468.resize(197.0000000000, 110.0000000000)
	frame_1_468.primaryAxisSizingMode = "AUTO"
	frame_1_468.fillStyleId = orange_50_ad62.id
	frame_1_468.backgroundStyleId = orange_50_ad62.id
	frame_1_468.name = "orange/50"
	frame_1_468.layoutAlign = "STRETCH"
	frame_1_468.strokeTopWeight = 1
	frame_1_468.strokeBottomWeight = 1
	frame_1_468.strokeLeftWeight = 1
	frame_1_468.strokeRightWeight = 1
	frame_1_468.expanded = false
	

	// Create TEXT
	var text_1_469 = figma.createText()
	frame_1_468.appendChild(text_1_469)
	text_1_469.resize(87.0000000000, 24.0000000000)
	text_1_469.name = "AAA 7.1"
	text_1_469.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21176470816135406,"g":0.22745098173618317,"b":0.250980406999588},"boundVariables":{}}]
	text_1_469.relativeTransform = [[1,0,56],[0,1,43]]
	text_1_469.x = 56
	text_1_469.y = 43
	text_1_469.constraints = {"horizontal":"CENTER","vertical":"CENTER"}
	
	// Font properties
	text_1_469.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_469.characters = "AAA 10.7"
	text_1_469.fontSize = 20
	text_1_469.listSpacing = 0
	text_1_469.textCase = "TITLE"
	text_1_469.fontName = {"family":"Inter","style":"Medium"}
	text_1_469.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_470 = figma.createFrame()
	frame_1_467.appendChild(frame_1_470)
	frame_1_470.resize(197.0000000000, 78.0000000000)
	frame_1_470.primaryAxisSizingMode = "AUTO"
	frame_1_470.name = "Frame 40"
	frame_1_470.relativeTransform = [[1,0,0],[0,1,110]]
	frame_1_470.y = 110
	frame_1_470.layoutAlign = "STRETCH"
	frame_1_470.fills = []
	frame_1_470.paddingLeft = 16
	frame_1_470.paddingRight = 16
	frame_1_470.paddingTop = 16
	frame_1_470.paddingBottom = 16
	frame_1_470.strokeTopWeight = 1
	frame_1_470.strokeBottomWeight = 1
	frame_1_470.strokeLeftWeight = 1
	frame_1_470.strokeRightWeight = 1
	frame_1_470.clipsContent = false
	frame_1_470.expanded = false
	frame_1_470.layoutMode = "VERTICAL"
	frame_1_470.itemSpacing = 5
	

	// Create TEXT
	var text_1_471 = figma.createText()
	frame_1_470.appendChild(text_1_471)
	text_1_471.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_471.resize(24.0000000000, 22.0000000000)
	text_1_471.name = "25"
	text_1_471.relativeTransform = [[1,0,16],[0,1,16]]
	text_1_471.x = 16
	text_1_471.y = 16
	
	// Font properties
	text_1_471.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_471.characters = "50"
	text_1_471.fontSize = 18
	text_1_471.listSpacing = 0
	text_1_471.textCase = "TITLE"
	text_1_471.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_471.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_472 = figma.createFrame()
	frame_1_470.appendChild(frame_1_472)
	frame_1_472.resize(73.0000000000, 19.0000000000)
	frame_1_472.primaryAxisSizingMode = "AUTO"
	frame_1_472.counterAxisSizingMode = "AUTO"
	frame_1_472.name = "Frame 39"
	frame_1_472.relativeTransform = [[1,0,16],[0,1,43]]
	frame_1_472.x = 16
	frame_1_472.y = 43
	frame_1_472.fills = []
	frame_1_472.strokeTopWeight = 1
	frame_1_472.strokeBottomWeight = 1
	frame_1_472.strokeLeftWeight = 1
	frame_1_472.strokeRightWeight = 1
	frame_1_472.clipsContent = false
	frame_1_472.expanded = false
	frame_1_472.layoutMode = "HORIZONTAL"
	frame_1_472.counterAxisSizingMode = "AUTO"
	frame_1_472.itemSpacing = 2
	

	// Create TEXT
	var text_1_473 = figma.createText()
	frame_1_472.appendChild(text_1_473)
	text_1_473.resize(11.0000000000, 19.0000000000)
	text_1_473.name = "#"
	text_1_473.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	
	// Font properties
	text_1_473.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_473.characters = "#"
	text_1_473.fontSize = 16
	text_1_473.listSpacing = 0
	text_1_473.textCase = "TITLE"
	text_1_473.fontName = {"family":"Inter","style":"Regular"}
	text_1_473.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_474 = figma.createText()
	frame_1_472.appendChild(text_1_474)
	text_1_474.resize(60.0000000000, 19.0000000000)
	text_1_474.name = "F2F8FF"
	text_1_474.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	text_1_474.relativeTransform = [[1,0,13],[0,1,0]]
	text_1_474.x = 13
	
	// Font properties
	text_1_474.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_474.characters = "FFEDE5"
	text_1_474.fontSize = 16
	text_1_474.listSpacing = 0
	text_1_474.textCase = "TITLE"
	text_1_474.fontName = {"family":"Inter","style":"Regular"}
	text_1_474.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_555 = figma.createFrame()
	frame_1_457.appendChild(frame_1_555)
	frame_1_555.resize(855.0000000000, 250.0000000000)
	frame_1_555.primaryAxisSizingMode = "AUTO"
	frame_1_555.counterAxisSizingMode = "AUTO"
	frame_1_555.name = "Frame 72"
	frame_1_555.relativeTransform = [[1,0,0],[0,1,314]]
	frame_1_555.y = 314
	frame_1_555.fills = []
	frame_1_555.strokeTopWeight = 1
	frame_1_555.strokeBottomWeight = 1
	frame_1_555.strokeLeftWeight = 1
	frame_1_555.strokeRightWeight = 1
	frame_1_555.clipsContent = false
	frame_1_555.layoutMode = "VERTICAL"
	frame_1_555.counterAxisSizingMode = "AUTO"
	frame_1_555.itemSpacing = 24
	

	// Create FRAME
	var frame_1_556 = figma.createFrame()
	frame_1_555.appendChild(frame_1_556)
	frame_1_556.resize(855.0000000000, 38.0000000000)
	frame_1_556.primaryAxisSizingMode = "AUTO"
	frame_1_556.name = "Frame 69"
	frame_1_556.fills = []
	frame_1_556.strokeTopWeight = 1
	frame_1_556.strokeBottomWeight = 1
	frame_1_556.strokeLeftWeight = 1
	frame_1_556.strokeRightWeight = 1
	frame_1_556.clipsContent = false
	frame_1_556.expanded = false
	frame_1_556.layoutMode = "VERTICAL"
	frame_1_556.itemSpacing = 16
	

	// Create FRAME
	var frame_1_557 = figma.createFrame()
	frame_1_556.appendChild(frame_1_557)
	frame_1_557.resize(201.0000000000, 38.0000000000)
	frame_1_557.primaryAxisSizingMode = "AUTO"
	frame_1_557.counterAxisSizingMode = "AUTO"
	frame_1_557.name = "Frame 68"
	frame_1_557.fills = []
	frame_1_557.counterAxisAlignItems = "CENTER"
	frame_1_557.strokeTopWeight = 1
	frame_1_557.strokeBottomWeight = 1
	frame_1_557.strokeLeftWeight = 1
	frame_1_557.strokeRightWeight = 1
	frame_1_557.clipsContent = false
	frame_1_557.expanded = false
	frame_1_557.layoutMode = "HORIZONTAL"
	frame_1_557.counterAxisSizingMode = "AUTO"
	frame_1_557.itemSpacing = 8
	

	// Create TEXT
	var text_1_558 = figma.createText()
	frame_1_557.appendChild(text_1_558)
	text_1_558.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_558.resize(76.0000000000, 29.0000000000)
	text_1_558.name = "nutral"
	text_1_558.relativeTransform = [[1,0,0],[0,1,4.5]]
	text_1_558.y = 4.5
	
	// Font properties
	text_1_558.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_558.characters = "nutral"
	text_1_558.fontSize = 24
	text_1_558.listSpacing = 0
	text_1_558.textCase = "TITLE"
	text_1_558.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_558.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_1_559 = figma.createFrame()
	frame_1_557.appendChild(frame_1_559)
	frame_1_559.resize(117.0000000000, 38.0000000000)
	frame_1_559.primaryAxisSizingMode = "AUTO"
	frame_1_559.counterAxisSizingMode = "AUTO"
	frame_1_559.name = "Frame 67"
	frame_1_559.relativeTransform = [[1,0,84],[0,1,0]]
	frame_1_559.x = 84
	frame_1_559.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_559.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_559.cornerRadius = 8
	frame_1_559.paddingLeft = 12
	frame_1_559.paddingRight = 12
	frame_1_559.paddingTop = 8
	frame_1_559.paddingBottom = 8
	frame_1_559.primaryAxisAlignItems = "CENTER"
	frame_1_559.counterAxisAlignItems = "CENTER"
	frame_1_559.strokeTopWeight = 1
	frame_1_559.strokeBottomWeight = 1
	frame_1_559.strokeLeftWeight = 1
	frame_1_559.strokeRightWeight = 1
	frame_1_559.clipsContent = false
	frame_1_559.expanded = false
	frame_1_559.layoutMode = "HORIZONTAL"
	frame_1_559.counterAxisSizingMode = "AUTO"
	frame_1_559.itemSpacing = 4
	

	// Create TEXT
	var text_1_560 = figma.createText()
	frame_1_559.appendChild(text_1_560)
	text_1_560.resize(93.0000000000, 22.0000000000)
	text_1_560.name = "secondary"
	text_1_560.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_560.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_560.x = 12
	text_1_560.y = 8
	
	// Font properties
	text_1_560.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_560.characters = "secondary"
	text_1_560.fontSize = 18
	text_1_560.listSpacing = 0
	text_1_560.textCase = "TITLE"
	text_1_560.fontName = {"family":"Inter","style":"Medium"}
	text_1_560.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_561 = figma.createFrame()
	frame_1_555.appendChild(frame_1_561)
	frame_1_561.resize(197.0000000000, 188.0000000000)
	frame_1_561.primaryAxisSizingMode = "AUTO"
	frame_1_561.counterAxisSizingMode = "AUTO"
	frame_1_561.name = "Frame 71"
	frame_1_561.relativeTransform = [[1,0,0],[0,1,62]]
	frame_1_561.y = 62
	frame_1_561.fills = []
	frame_1_561.strokeTopWeight = 1
	frame_1_561.strokeBottomWeight = 1
	frame_1_561.strokeLeftWeight = 1
	frame_1_561.strokeRightWeight = 1
	frame_1_561.clipsContent = false
	frame_1_561.layoutMode = "HORIZONTAL"
	frame_1_561.counterAxisSizingMode = "AUTO"
	frame_1_561.itemSpacing = 29
	

	// Create FRAME
	var frame_1_562 = figma.createFrame()
	frame_1_561.appendChild(frame_1_562)
	frame_1_562.resize(197.0000000000, 188.0000000000)
	frame_1_562.primaryAxisSizingMode = "AUTO"
	frame_1_562.fillStyleId = gray_dark_mode_white_0993.id
	frame_1_562.backgroundStyleId = gray_dark_mode_white_0993.id
	frame_1_562.name = "components/color"
	frame_1_562.effects = [{"type":"DROP_SHADOW","radius":6,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.029999999329447746},"offset":{"x":0,"y":4},"spread":-2,"blendMode":"NORMAL","showShadowBehindNode":false},{"type":"DROP_SHADOW","radius":16,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.07999999821186066},"offset":{"x":0,"y":12},"spread":-4,"blendMode":"NORMAL","showShadowBehindNode":false}]
	frame_1_562.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8359999656677246,"g":0.8835000395774841,"b":0.949999988079071},"boundVariables":{}}]
	frame_1_562.cornerRadius = 12
	frame_1_562.cornerSmoothing = 0.6000000238418579
	frame_1_562.strokeTopWeight = 1
	frame_1_562.strokeBottomWeight = 1
	frame_1_562.strokeLeftWeight = 1
	frame_1_562.strokeRightWeight = 1
	frame_1_562.expanded = false
	frame_1_562.layoutMode = "VERTICAL"
	

	// Create FRAME
	var frame_1_563 = figma.createFrame()
	frame_1_562.appendChild(frame_1_563)
	frame_1_563.resize(197.0000000000, 110.0000000000)
	frame_1_563.primaryAxisSizingMode = "AUTO"
	frame_1_563.fillStyleId = gray_dark_mode_50_a239.id
	frame_1_563.backgroundStyleId = gray_dark_mode_50_a239.id
	frame_1_563.name = "Gray dark mode/50"
	frame_1_563.layoutAlign = "STRETCH"
	frame_1_563.strokeTopWeight = 1
	frame_1_563.strokeBottomWeight = 1
	frame_1_563.strokeLeftWeight = 1
	frame_1_563.strokeRightWeight = 1
	frame_1_563.expanded = false
	

	// Create TEXT
	var text_1_564 = figma.createText()
	frame_1_563.appendChild(text_1_564)
	text_1_564.resize(87.0000000000, 24.0000000000)
	text_1_564.name = "AAA 7.1"
	text_1_564.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21176470816135406,"g":0.22745098173618317,"b":0.250980406999588},"boundVariables":{}}]
	text_1_564.relativeTransform = [[1,0,56],[0,1,43]]
	text_1_564.x = 56
	text_1_564.y = 43
	text_1_564.constraints = {"horizontal":"CENTER","vertical":"CENTER"}
	
	// Font properties
	text_1_564.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_564.characters = "AAA 10.7"
	text_1_564.fontSize = 20
	text_1_564.listSpacing = 0
	text_1_564.textCase = "TITLE"
	text_1_564.fontName = {"family":"Inter","style":"Medium"}
	text_1_564.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_565 = figma.createFrame()
	frame_1_562.appendChild(frame_1_565)
	frame_1_565.resize(197.0000000000, 78.0000000000)
	frame_1_565.primaryAxisSizingMode = "AUTO"
	frame_1_565.name = "Frame 40"
	frame_1_565.relativeTransform = [[1,0,0],[0,1,110]]
	frame_1_565.y = 110
	frame_1_565.layoutAlign = "STRETCH"
	frame_1_565.fills = []
	frame_1_565.paddingLeft = 16
	frame_1_565.paddingRight = 16
	frame_1_565.paddingTop = 16
	frame_1_565.paddingBottom = 16
	frame_1_565.strokeTopWeight = 1
	frame_1_565.strokeBottomWeight = 1
	frame_1_565.strokeLeftWeight = 1
	frame_1_565.strokeRightWeight = 1
	frame_1_565.clipsContent = false
	frame_1_565.expanded = false
	frame_1_565.layoutMode = "VERTICAL"
	frame_1_565.itemSpacing = 5
	

	// Create TEXT
	var text_1_566 = figma.createText()
	frame_1_565.appendChild(text_1_566)
	text_1_566.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_566.resize(24.0000000000, 22.0000000000)
	text_1_566.name = "25"
	text_1_566.relativeTransform = [[1,0,16],[0,1,16]]
	text_1_566.x = 16
	text_1_566.y = 16
	
	// Font properties
	text_1_566.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_566.characters = "50"
	text_1_566.fontSize = 18
	text_1_566.listSpacing = 0
	text_1_566.textCase = "TITLE"
	text_1_566.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_566.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_567 = figma.createFrame()
	frame_1_565.appendChild(frame_1_567)
	frame_1_567.resize(69.0000000000, 19.0000000000)
	frame_1_567.primaryAxisSizingMode = "AUTO"
	frame_1_567.counterAxisSizingMode = "AUTO"
	frame_1_567.name = "Frame 39"
	frame_1_567.relativeTransform = [[1,0,16],[0,1,43]]
	frame_1_567.x = 16
	frame_1_567.y = 43
	frame_1_567.fills = []
	frame_1_567.strokeTopWeight = 1
	frame_1_567.strokeBottomWeight = 1
	frame_1_567.strokeLeftWeight = 1
	frame_1_567.strokeRightWeight = 1
	frame_1_567.clipsContent = false
	frame_1_567.expanded = false
	frame_1_567.layoutMode = "HORIZONTAL"
	frame_1_567.counterAxisSizingMode = "AUTO"
	frame_1_567.itemSpacing = 2
	

	// Create TEXT
	var text_1_568 = figma.createText()
	frame_1_567.appendChild(text_1_568)
	text_1_568.resize(11.0000000000, 19.0000000000)
	text_1_568.name = "#"
	text_1_568.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	
	// Font properties
	text_1_568.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_568.characters = "#"
	text_1_568.fontSize = 16
	text_1_568.listSpacing = 0
	text_1_568.textCase = "TITLE"
	text_1_568.fontName = {"family":"Inter","style":"Regular"}
	text_1_568.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_569 = figma.createText()
	frame_1_567.appendChild(text_1_569)
	text_1_569.resize(56.0000000000, 19.0000000000)
	text_1_569.name = "F2F8FF"
	text_1_569.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	text_1_569.relativeTransform = [[1,0,13],[0,1,0]]
	text_1_569.x = 13
	
	// Font properties
	text_1_569.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_569.characters = "F0F1F2"
	text_1_569.fontSize = 16
	text_1_569.listSpacing = 0
	text_1_569.textCase = "TITLE"
	text_1_569.fontName = {"family":"Inter","style":"Regular"}
	text_1_569.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_594 = figma.createFrame()
	frame_1_561.appendChild(frame_1_594)
	frame_1_594.resize(197.0000000000, 188.0000000000)
	frame_1_594.primaryAxisSizingMode = "AUTO"
	frame_1_594.fillStyleId = gray_dark_mode_white_0993.id
	frame_1_594.backgroundStyleId = gray_dark_mode_white_0993.id
	frame_1_594.name = "Frame 39"
	frame_1_594.visible = false
	frame_1_594.effects = [{"type":"DROP_SHADOW","radius":6,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.029999999329447746},"offset":{"x":0,"y":4},"spread":-2,"blendMode":"NORMAL","showShadowBehindNode":false},{"type":"DROP_SHADOW","radius":16,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.07999999821186066},"offset":{"x":0,"y":12},"spread":-4,"blendMode":"NORMAL","showShadowBehindNode":false}]
	frame_1_594.relativeTransform = [[1,0,678],[0,1,0]]
	frame_1_594.x = 678
	frame_1_594.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8359999656677246,"g":0.8835000395774841,"b":0.949999988079071},"boundVariables":{}}]
	frame_1_594.cornerRadius = 12
	frame_1_594.cornerSmoothing = 0.6000000238418579
	frame_1_594.strokeTopWeight = 1
	frame_1_594.strokeBottomWeight = 1
	frame_1_594.strokeLeftWeight = 1
	frame_1_594.strokeRightWeight = 1
	frame_1_594.expanded = false
	frame_1_594.layoutMode = "VERTICAL"
	

	// Create FRAME
	var frame_1_595 = figma.createFrame()
	frame_1_594.appendChild(frame_1_595)
	frame_1_595.resize(197.0000000000, 110.0000000000)
	frame_1_595.primaryAxisSizingMode = "AUTO"
	frame_1_595.name = "Frame 37"
	frame_1_595.layoutAlign = "STRETCH"
	frame_1_595.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7200000286102295,"g":0.7533333897590637,"b":0.800000011920929},"boundVariables":{}}]
	frame_1_595.strokeTopWeight = 1
	frame_1_595.strokeBottomWeight = 1
	frame_1_595.strokeLeftWeight = 1
	frame_1_595.strokeRightWeight = 1
	frame_1_595.expanded = false
	

	// Create TEXT
	var text_1_596 = figma.createText()
	frame_1_595.appendChild(text_1_596)
	text_1_596.resize(63.0000000000, 24.0000000000)
	text_1_596.name = "AAA 7.1"
	text_1_596.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21176470816135406,"g":0.22745098173618317,"b":0.250980406999588},"boundVariables":{}}]
	text_1_596.relativeTransform = [[1,0,68],[0,1,43]]
	text_1_596.x = 68
	text_1_596.y = 43
	text_1_596.constraints = {"horizontal":"CENTER","vertical":"CENTER"}
	
	// Font properties
	text_1_596.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_596.characters = "AA 5.8"
	text_1_596.fontSize = 20
	text_1_596.listSpacing = 0
	text_1_596.textCase = "TITLE"
	text_1_596.fontName = {"family":"Inter","style":"Medium"}
	text_1_596.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_597 = figma.createFrame()
	frame_1_594.appendChild(frame_1_597)
	frame_1_597.resize(197.0000000000, 78.0000000000)
	frame_1_597.primaryAxisSizingMode = "AUTO"
	frame_1_597.name = "Frame 40"
	frame_1_597.relativeTransform = [[1,0,0],[0,1,110]]
	frame_1_597.y = 110
	frame_1_597.layoutAlign = "STRETCH"
	frame_1_597.fills = []
	frame_1_597.paddingLeft = 16
	frame_1_597.paddingRight = 16
	frame_1_597.paddingTop = 16
	frame_1_597.paddingBottom = 16
	frame_1_597.strokeTopWeight = 1
	frame_1_597.strokeBottomWeight = 1
	frame_1_597.strokeLeftWeight = 1
	frame_1_597.strokeRightWeight = 1
	frame_1_597.clipsContent = false
	frame_1_597.expanded = false
	frame_1_597.layoutMode = "VERTICAL"
	frame_1_597.itemSpacing = 5
	

	// Create TEXT
	var text_1_598 = figma.createText()
	frame_1_597.appendChild(text_1_598)
	text_1_598.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_598.resize(36.0000000000, 22.0000000000)
	text_1_598.name = "25"
	text_1_598.relativeTransform = [[1,0,16],[0,1,16]]
	text_1_598.x = 16
	text_1_598.y = 16
	
	// Font properties
	text_1_598.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_598.characters = "300"
	text_1_598.fontSize = 18
	text_1_598.listSpacing = 0
	text_1_598.textCase = "TITLE"
	text_1_598.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_598.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_599 = figma.createFrame()
	frame_1_597.appendChild(frame_1_599)
	frame_1_599.resize(79.0000000000, 19.0000000000)
	frame_1_599.primaryAxisSizingMode = "AUTO"
	frame_1_599.counterAxisSizingMode = "AUTO"
	frame_1_599.name = "Frame 39"
	frame_1_599.relativeTransform = [[1,0,16],[0,1,43]]
	frame_1_599.x = 16
	frame_1_599.y = 43
	frame_1_599.fills = []
	frame_1_599.strokeTopWeight = 1
	frame_1_599.strokeBottomWeight = 1
	frame_1_599.strokeLeftWeight = 1
	frame_1_599.strokeRightWeight = 1
	frame_1_599.clipsContent = false
	frame_1_599.expanded = false
	frame_1_599.layoutMode = "HORIZONTAL"
	frame_1_599.counterAxisSizingMode = "AUTO"
	frame_1_599.itemSpacing = 2
	

	// Create TEXT
	var text_1_600 = figma.createText()
	frame_1_599.appendChild(text_1_600)
	text_1_600.resize(11.0000000000, 19.0000000000)
	text_1_600.name = "#"
	text_1_600.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	
	// Font properties
	text_1_600.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_600.characters = "#"
	text_1_600.fontSize = 16
	text_1_600.listSpacing = 0
	text_1_600.textCase = "TITLE"
	text_1_600.fontName = {"family":"Inter","style":"Regular"}
	text_1_600.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_601 = figma.createText()
	frame_1_599.appendChild(text_1_601)
	text_1_601.resize(66.0000000000, 19.0000000000)
	text_1_601.name = "F2F8FF"
	text_1_601.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	text_1_601.relativeTransform = [[1,0,13],[0,1,0]]
	text_1_601.x = 13
	
	// Font properties
	text_1_601.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_601.characters = "B8C0CC"
	text_1_601.fontSize = 16
	text_1_601.listSpacing = 0
	text_1_601.textCase = "TITLE"
	text_1_601.fontName = {"family":"Inter","style":"Regular"}
	text_1_601.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_658 = figma.createFrame()
	frame_1_457.appendChild(frame_1_658)
	frame_1_658.resize(855.0000000000, 250.0000000000)
	frame_1_658.primaryAxisSizingMode = "AUTO"
	frame_1_658.counterAxisSizingMode = "AUTO"
	frame_1_658.name = "Frame 84"
	frame_1_658.relativeTransform = [[1,0,0],[0,1,628]]
	frame_1_658.y = 628
	frame_1_658.fills = []
	frame_1_658.strokeTopWeight = 1
	frame_1_658.strokeBottomWeight = 1
	frame_1_658.strokeLeftWeight = 1
	frame_1_658.strokeRightWeight = 1
	frame_1_658.clipsContent = false
	frame_1_658.layoutMode = "VERTICAL"
	frame_1_658.counterAxisSizingMode = "AUTO"
	frame_1_658.itemSpacing = 24
	

	// Create FRAME
	var frame_1_659 = figma.createFrame()
	frame_1_658.appendChild(frame_1_659)
	frame_1_659.resize(855.0000000000, 38.0000000000)
	frame_1_659.primaryAxisSizingMode = "AUTO"
	frame_1_659.name = "Frame 69"
	frame_1_659.fills = []
	frame_1_659.strokeTopWeight = 1
	frame_1_659.strokeBottomWeight = 1
	frame_1_659.strokeLeftWeight = 1
	frame_1_659.strokeRightWeight = 1
	frame_1_659.clipsContent = false
	frame_1_659.expanded = false
	frame_1_659.layoutMode = "VERTICAL"
	frame_1_659.itemSpacing = 16
	

	// Create FRAME
	var frame_1_660 = figma.createFrame()
	frame_1_659.appendChild(frame_1_660)
	frame_1_660.resize(167.0000000000, 38.0000000000)
	frame_1_660.primaryAxisSizingMode = "AUTO"
	frame_1_660.counterAxisSizingMode = "AUTO"
	frame_1_660.name = "Frame 68"
	frame_1_660.fills = []
	frame_1_660.counterAxisAlignItems = "CENTER"
	frame_1_660.strokeTopWeight = 1
	frame_1_660.strokeBottomWeight = 1
	frame_1_660.strokeLeftWeight = 1
	frame_1_660.strokeRightWeight = 1
	frame_1_660.clipsContent = false
	frame_1_660.expanded = false
	frame_1_660.layoutMode = "HORIZONTAL"
	frame_1_660.counterAxisSizingMode = "AUTO"
	frame_1_660.itemSpacing = 8
	

	// Create TEXT
	var text_1_661 = figma.createText()
	frame_1_660.appendChild(text_1_661)
	text_1_661.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_661.resize(76.0000000000, 29.0000000000)
	text_1_661.name = "purple"
	text_1_661.relativeTransform = [[1,0,0],[0,1,4.5]]
	text_1_661.y = 4.5
	
	// Font properties
	text_1_661.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_661.characters = "purple"
	text_1_661.fontSize = 24
	text_1_661.listSpacing = 0
	text_1_661.textCase = "TITLE"
	text_1_661.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_661.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_662 = figma.createFrame()
	frame_1_660.appendChild(frame_1_662)
	frame_1_662.resize(83.0000000000, 38.0000000000)
	frame_1_662.primaryAxisSizingMode = "AUTO"
	frame_1_662.counterAxisSizingMode = "AUTO"
	frame_1_662.name = "Frame 67"
	frame_1_662.relativeTransform = [[1,0,84],[0,1,0]]
	frame_1_662.x = 84
	frame_1_662.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_662.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_662.cornerRadius = 8
	frame_1_662.paddingLeft = 12
	frame_1_662.paddingRight = 12
	frame_1_662.paddingTop = 8
	frame_1_662.paddingBottom = 8
	frame_1_662.primaryAxisAlignItems = "CENTER"
	frame_1_662.counterAxisAlignItems = "CENTER"
	frame_1_662.strokeTopWeight = 1
	frame_1_662.strokeBottomWeight = 1
	frame_1_662.strokeLeftWeight = 1
	frame_1_662.strokeRightWeight = 1
	frame_1_662.clipsContent = false
	frame_1_662.expanded = false
	frame_1_662.layoutMode = "HORIZONTAL"
	frame_1_662.counterAxisSizingMode = "AUTO"
	frame_1_662.itemSpacing = 4
	

	// Create TEXT
	var text_1_663 = figma.createText()
	frame_1_662.appendChild(text_1_663)
	text_1_663.resize(59.0000000000, 22.0000000000)
	text_1_663.name = "Triadic"
	text_1_663.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_663.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_663.x = 12
	text_1_663.y = 8
	
	// Font properties
	text_1_663.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_663.characters = "Triadic"
	text_1_663.fontSize = 18
	text_1_663.listSpacing = 0
	text_1_663.textCase = "TITLE"
	text_1_663.fontName = {"family":"Inter","style":"Medium"}
	text_1_663.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_664 = figma.createFrame()
	frame_1_658.appendChild(frame_1_664)
	frame_1_664.resize(197.0000000000, 188.0000000000)
	frame_1_664.primaryAxisSizingMode = "AUTO"
	frame_1_664.counterAxisSizingMode = "AUTO"
	frame_1_664.name = "Frame 71"
	frame_1_664.relativeTransform = [[1,0,0],[0,1,62]]
	frame_1_664.y = 62
	frame_1_664.fills = []
	frame_1_664.strokeTopWeight = 1
	frame_1_664.strokeBottomWeight = 1
	frame_1_664.strokeLeftWeight = 1
	frame_1_664.strokeRightWeight = 1
	frame_1_664.clipsContent = false
	frame_1_664.layoutMode = "HORIZONTAL"
	frame_1_664.counterAxisSizingMode = "AUTO"
	frame_1_664.itemSpacing = 29
	

	// Create FRAME
	var frame_1_665 = figma.createFrame()
	frame_1_664.appendChild(frame_1_665)
	frame_1_665.resize(197.0000000000, 188.0000000000)
	frame_1_665.primaryAxisSizingMode = "AUTO"
	frame_1_665.fillStyleId = gray_dark_mode_white_0993.id
	frame_1_665.backgroundStyleId = gray_dark_mode_white_0993.id
	frame_1_665.name = "components/color"
	frame_1_665.effects = [{"type":"DROP_SHADOW","radius":6,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.029999999329447746},"offset":{"x":0,"y":4},"spread":-2,"blendMode":"NORMAL","showShadowBehindNode":false},{"type":"DROP_SHADOW","radius":16,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.07999999821186066},"offset":{"x":0,"y":12},"spread":-4,"blendMode":"NORMAL","showShadowBehindNode":false}]
	frame_1_665.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8359999656677246,"g":0.8835000395774841,"b":0.949999988079071},"boundVariables":{}}]
	frame_1_665.cornerRadius = 12
	frame_1_665.cornerSmoothing = 0.6000000238418579
	frame_1_665.strokeTopWeight = 1
	frame_1_665.strokeBottomWeight = 1
	frame_1_665.strokeLeftWeight = 1
	frame_1_665.strokeRightWeight = 1
	frame_1_665.expanded = false
	frame_1_665.layoutMode = "VERTICAL"
	

	// Create FRAME
	var frame_1_666 = figma.createFrame()
	frame_1_665.appendChild(frame_1_666)
	frame_1_666.resize(197.0000000000, 110.0000000000)
	frame_1_666.primaryAxisSizingMode = "AUTO"
	frame_1_666.name = "Frame 37"
	frame_1_666.layoutAlign = "STRETCH"
	frame_1_666.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9147356748580933,"g":0.9015686511993408,"b":0.9490196108818054},"boundVariables":{}}]
	frame_1_666.strokeTopWeight = 1
	frame_1_666.strokeBottomWeight = 1
	frame_1_666.strokeLeftWeight = 1
	frame_1_666.strokeRightWeight = 1
	frame_1_666.expanded = false
	

	// Create TEXT
	var text_1_667 = figma.createText()
	frame_1_666.appendChild(text_1_667)
	text_1_667.resize(87.0000000000, 24.0000000000)
	text_1_667.name = "AAA 7.1"
	text_1_667.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21176470816135406,"g":0.22745098173618317,"b":0.250980406999588},"boundVariables":{}}]
	text_1_667.relativeTransform = [[1,0,56],[0,1,43]]
	text_1_667.x = 56
	text_1_667.y = 43
	text_1_667.constraints = {"horizontal":"CENTER","vertical":"CENTER"}
	
	// Font properties
	text_1_667.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_667.characters = "AAA 10.7"
	text_1_667.fontSize = 20
	text_1_667.listSpacing = 0
	text_1_667.textCase = "TITLE"
	text_1_667.fontName = {"family":"Inter","style":"Medium"}
	text_1_667.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_668 = figma.createFrame()
	frame_1_665.appendChild(frame_1_668)
	frame_1_668.resize(197.0000000000, 78.0000000000)
	frame_1_668.primaryAxisSizingMode = "AUTO"
	frame_1_668.name = "Frame 40"
	frame_1_668.relativeTransform = [[1,0,0],[0,1,110]]
	frame_1_668.y = 110
	frame_1_668.layoutAlign = "STRETCH"
	frame_1_668.fills = []
	frame_1_668.paddingLeft = 16
	frame_1_668.paddingRight = 16
	frame_1_668.paddingTop = 16
	frame_1_668.paddingBottom = 16
	frame_1_668.strokeTopWeight = 1
	frame_1_668.strokeBottomWeight = 1
	frame_1_668.strokeLeftWeight = 1
	frame_1_668.strokeRightWeight = 1
	frame_1_668.clipsContent = false
	frame_1_668.expanded = false
	frame_1_668.layoutMode = "VERTICAL"
	frame_1_668.itemSpacing = 5
	

	// Create TEXT
	var text_1_669 = figma.createText()
	frame_1_668.appendChild(text_1_669)
	text_1_669.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_669.resize(24.0000000000, 22.0000000000)
	text_1_669.name = "25"
	text_1_669.relativeTransform = [[1,0,16],[0,1,16]]
	text_1_669.x = 16
	text_1_669.y = 16
	
	// Font properties
	text_1_669.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_669.characters = "50"
	text_1_669.fontSize = 18
	text_1_669.listSpacing = 0
	text_1_669.textCase = "TITLE"
	text_1_669.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_669.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_670 = figma.createFrame()
	frame_1_668.appendChild(frame_1_670)
	frame_1_670.resize(72.0000000000, 19.0000000000)
	frame_1_670.primaryAxisSizingMode = "AUTO"
	frame_1_670.counterAxisSizingMode = "AUTO"
	frame_1_670.name = "Frame 39"
	frame_1_670.relativeTransform = [[1,0,16],[0,1,43]]
	frame_1_670.x = 16
	frame_1_670.y = 43
	frame_1_670.fills = []
	frame_1_670.strokeTopWeight = 1
	frame_1_670.strokeBottomWeight = 1
	frame_1_670.strokeLeftWeight = 1
	frame_1_670.strokeRightWeight = 1
	frame_1_670.clipsContent = false
	frame_1_670.expanded = false
	frame_1_670.layoutMode = "HORIZONTAL"
	frame_1_670.counterAxisSizingMode = "AUTO"
	frame_1_670.itemSpacing = 2
	

	// Create TEXT
	var text_1_671 = figma.createText()
	frame_1_670.appendChild(text_1_671)
	text_1_671.resize(11.0000000000, 19.0000000000)
	text_1_671.name = "#"
	text_1_671.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	
	// Font properties
	text_1_671.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_671.characters = "#"
	text_1_671.fontSize = 16
	text_1_671.listSpacing = 0
	text_1_671.textCase = "TITLE"
	text_1_671.fontName = {"family":"Inter","style":"Regular"}
	text_1_671.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_672 = figma.createText()
	frame_1_670.appendChild(text_1_672)
	text_1_672.resize(59.0000000000, 19.0000000000)
	text_1_672.name = "F2F8FF"
	text_1_672.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	text_1_672.relativeTransform = [[1,0,13],[0,1,0]]
	text_1_672.x = 13
	
	// Font properties
	text_1_672.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_672.characters = "E9E6F2"
	text_1_672.fontSize = 16
	text_1_672.listSpacing = 0
	text_1_672.textCase = "TITLE"
	text_1_672.fontName = {"family":"Inter","style":"Regular"}
	text_1_672.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_753 = figma.createFrame()
	frame_1_451.appendChild(frame_1_753)
	frame_1_753.resize(2457.0000000000, 296.0000000000)
	frame_1_753.counterAxisSizingMode = "AUTO"
	frame_1_753.name = "Frame 83"
	frame_1_753.relativeTransform = [[1,0,124],[0,1,1376]]
	frame_1_753.x = 124
	frame_1_753.y = 1376
	frame_1_753.fills = []
	frame_1_753.primaryAxisAlignItems = "SPACE_BETWEEN"
	frame_1_753.primaryAxisSizingMode = "FIXED"
	frame_1_753.strokeTopWeight = 1
	frame_1_753.strokeBottomWeight = 1
	frame_1_753.strokeLeftWeight = 1
	frame_1_753.strokeRightWeight = 1
	frame_1_753.clipsContent = false
	frame_1_753.expanded = false
	frame_1_753.layoutMode = "HORIZONTAL"
	frame_1_753.counterAxisSizingMode = "AUTO"
	frame_1_753.itemSpacing = 253
	

	// Create FRAME
	var frame_1_754 = figma.createFrame()
	frame_1_753.appendChild(frame_1_754)
	frame_1_754.resize(649.0000000000, 296.0000000000)
	frame_1_754.primaryAxisSizingMode = "AUTO"
	frame_1_754.counterAxisSizingMode = "AUTO"
	frame_1_754.name = "Frame 80"
	frame_1_754.fills = []
	frame_1_754.strokeTopWeight = 1
	frame_1_754.strokeBottomWeight = 1
	frame_1_754.strokeLeftWeight = 1
	frame_1_754.strokeRightWeight = 1
	frame_1_754.clipsContent = false
	frame_1_754.expanded = false
	frame_1_754.layoutMode = "VERTICAL"
	frame_1_754.counterAxisSizingMode = "AUTO"
	frame_1_754.itemSpacing = 24
	

	// Create FRAME
	var frame_1_755 = figma.createFrame()
	frame_1_754.appendChild(frame_1_755)
	frame_1_755.resize(649.0000000000, 84.0000000000)
	frame_1_755.primaryAxisSizingMode = "AUTO"
	frame_1_755.name = "Frame 70"
	frame_1_755.fills = []
	frame_1_755.strokeTopWeight = 1
	frame_1_755.strokeBottomWeight = 1
	frame_1_755.strokeLeftWeight = 1
	frame_1_755.strokeRightWeight = 1
	frame_1_755.clipsContent = false
	frame_1_755.expanded = false
	frame_1_755.layoutMode = "VERTICAL"
	frame_1_755.itemSpacing = 16
	

	// Create FRAME
	var frame_1_756 = figma.createFrame()
	frame_1_755.appendChild(frame_1_756)
	frame_1_756.resize(176.0000000000, 38.0000000000)
	frame_1_756.primaryAxisSizingMode = "AUTO"
	frame_1_756.counterAxisSizingMode = "AUTO"
	frame_1_756.name = "Frame 68"
	frame_1_756.fills = []
	frame_1_756.counterAxisAlignItems = "CENTER"
	frame_1_756.strokeTopWeight = 1
	frame_1_756.strokeBottomWeight = 1
	frame_1_756.strokeLeftWeight = 1
	frame_1_756.strokeRightWeight = 1
	frame_1_756.clipsContent = false
	frame_1_756.expanded = false
	frame_1_756.layoutMode = "HORIZONTAL"
	frame_1_756.counterAxisSizingMode = "AUTO"
	frame_1_756.itemSpacing = 8
	

	// Create TEXT
	var text_1_757 = figma.createText()
	frame_1_756.appendChild(text_1_757)
	text_1_757.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_757.resize(71.0000000000, 29.0000000000)
	text_1_757.name = "Green"
	text_1_757.relativeTransform = [[1,0,0],[0,1,4.5]]
	text_1_757.y = 4.5
	
	// Font properties
	text_1_757.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_757.characters = "Green"
	text_1_757.fontSize = 24
	text_1_757.listSpacing = 0
	text_1_757.textCase = "TITLE"
	text_1_757.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_757.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_758 = figma.createFrame()
	frame_1_756.appendChild(frame_1_758)
	frame_1_758.resize(97.0000000000, 38.0000000000)
	frame_1_758.primaryAxisSizingMode = "AUTO"
	frame_1_758.counterAxisSizingMode = "AUTO"
	frame_1_758.name = "Frame 67"
	frame_1_758.relativeTransform = [[1,0,79],[0,1,0]]
	frame_1_758.x = 79
	frame_1_758.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_758.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_758.cornerRadius = 8
	frame_1_758.paddingLeft = 12
	frame_1_758.paddingRight = 12
	frame_1_758.paddingTop = 8
	frame_1_758.paddingBottom = 8
	frame_1_758.primaryAxisAlignItems = "CENTER"
	frame_1_758.counterAxisAlignItems = "CENTER"
	frame_1_758.strokeTopWeight = 1
	frame_1_758.strokeBottomWeight = 1
	frame_1_758.strokeLeftWeight = 1
	frame_1_758.strokeRightWeight = 1
	frame_1_758.clipsContent = false
	frame_1_758.expanded = false
	frame_1_758.layoutMode = "HORIZONTAL"
	frame_1_758.counterAxisSizingMode = "AUTO"
	frame_1_758.itemSpacing = 4
	

	// Create TEXT
	var text_1_759 = figma.createText()
	frame_1_758.appendChild(text_1_759)
	text_1_759.resize(73.0000000000, 22.0000000000)
	text_1_759.name = "success"
	text_1_759.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_759.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_759.x = 12
	text_1_759.y = 8
	
	// Font properties
	text_1_759.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_759.characters = "success"
	text_1_759.fontSize = 18
	text_1_759.listSpacing = 0
	text_1_759.textCase = "TITLE"
	text_1_759.fontName = {"family":"Inter","style":"Medium"}
	text_1_759.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_760 = figma.createText()
	frame_1_755.appendChild(text_1_760)
	text_1_760.fillStyleId = gray_dark_mode_500_e40c.id
	text_1_760.resize(649.0000000000, 30.0000000000)
	text_1_760.name = "We use green when we want to give successful messages."
	text_1_760.relativeTransform = [[1,0,0],[0,1,54]]
	text_1_760.y = 54
	text_1_760.layoutAlign = "STRETCH"
	
	// Font properties
	text_1_760.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_760.characters = "We use green when we want to give successful messages."
	text_1_760.fontSize = 20
	text_1_760.listSpacing = 0
	text_1_760.textCase = "TITLE"
	text_1_760.lineHeight = {"unit":"PIXELS","value":30}
	text_1_760.fontName = {"family":"Inter","style":"Regular"}
	text_1_760.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_1_761 = figma.createFrame()
	frame_1_754.appendChild(frame_1_761)
	frame_1_761.resize(649.0000000000, 188.0000000000)
	frame_1_761.primaryAxisSizingMode = "AUTO"
	frame_1_761.counterAxisSizingMode = "AUTO"
	frame_1_761.name = "Frame 79"
	frame_1_761.relativeTransform = [[1,0,0],[0,1,108]]
	frame_1_761.y = 108
	frame_1_761.fills = []
	frame_1_761.strokeTopWeight = 1
	frame_1_761.strokeBottomWeight = 1
	frame_1_761.strokeLeftWeight = 1
	frame_1_761.strokeRightWeight = 1
	frame_1_761.clipsContent = false
	frame_1_761.expanded = false
	frame_1_761.layoutMode = "HORIZONTAL"
	frame_1_761.counterAxisSizingMode = "AUTO"
	frame_1_761.itemSpacing = 29
	

	// Create COMPONENT
	var component_1_3 = figma.createComponent()
	component_1_3.resize(197.0000000000, 188.0000000000)
	component_1_3.primaryAxisSizingMode = "AUTO"
	component_1_3.fillStyleId = gray_dark_mode_white_0993.id
	component_1_3.backgroundStyleId = gray_dark_mode_white_0993.id
	component_1_3.name = "Dark Mode=off"
	component_1_3.effects = [{"type":"DROP_SHADOW","radius":6,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.029999999329447746},"offset":{"x":0,"y":4},"spread":-2,"blendMode":"NORMAL","showShadowBehindNode":false},{"type":"DROP_SHADOW","radius":16,"visible":true,"boundVariables":{},"color":{"r":0.062745101749897,"g":0.0941176488995552,"b":0.1568627506494522,"a":0.07999999821186066},"offset":{"x":0,"y":12},"spread":-4,"blendMode":"NORMAL","showShadowBehindNode":false}]
	component_1_3.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8359999656677246,"g":0.8835000395774841,"b":0.949999988079071},"boundVariables":{}}]
	component_1_3.cornerRadius = 12
	component_1_3.cornerSmoothing = 0.6000000238418579
	component_1_3.strokeTopWeight = 1
	component_1_3.strokeBottomWeight = 1
	component_1_3.strokeLeftWeight = 1
	component_1_3.strokeRightWeight = 1
	component_1_3.clipsContent = true
	component_1_3.expanded = false
	component_1_3.layoutMode = "VERTICAL"
	

	// Create FRAME
	var frame_1_4 = figma.createFrame()
	component_1_3.appendChild(frame_1_4)
	frame_1_4.resize(197.0000000000, 110.0000000000)
	frame_1_4.primaryAxisSizingMode = "AUTO"
	frame_1_4.name = "Frame 37"
	frame_1_4.layoutAlign = "STRETCH"
	frame_1_4.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9490196108818054,"g":0.9725490212440491,"b":1},"boundVariables":{}}]
	frame_1_4.strokeTopWeight = 1
	frame_1_4.strokeBottomWeight = 1
	frame_1_4.strokeLeftWeight = 1
	frame_1_4.strokeRightWeight = 1
	frame_1_4.expanded = false
	

	// Create TEXT
	var text_1_5 = figma.createText()
	frame_1_4.appendChild(text_1_5)
	text_1_5.resize(70.0000000000, 24.0000000000)
	text_1_5.name = "AAA 7.1"
	text_1_5.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21176470816135406,"g":0.22745098173618317,"b":0.250980406999588},"boundVariables":{}}]
	text_1_5.relativeTransform = [[1,0,64],[0,1,43]]
	text_1_5.x = 64
	text_1_5.y = 43
	text_1_5.constraints = {"horizontal":"CENTER","vertical":"CENTER"}
	
	// Font properties
	text_1_5.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_5.characters = "AAA 7.1"
	text_1_5.fontSize = 20
	text_1_5.listSpacing = 0
	text_1_5.textCase = "TITLE"
	text_1_5.fontName = {"family":"Inter","style":"Medium"}
	text_1_5.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_6 = figma.createFrame()
	component_1_3.appendChild(frame_1_6)
	frame_1_6.resize(197.0000000000, 78.0000000000)
	frame_1_6.primaryAxisSizingMode = "AUTO"
	frame_1_6.name = "Frame 40"
	frame_1_6.relativeTransform = [[1,0,0],[0,1,110]]
	frame_1_6.y = 110
	frame_1_6.layoutAlign = "STRETCH"
	frame_1_6.fills = []
	frame_1_6.paddingLeft = 16
	frame_1_6.paddingRight = 16
	frame_1_6.paddingTop = 16
	frame_1_6.paddingBottom = 16
	frame_1_6.strokeTopWeight = 1
	frame_1_6.strokeBottomWeight = 1
	frame_1_6.strokeLeftWeight = 1
	frame_1_6.strokeRightWeight = 1
	frame_1_6.clipsContent = false
	frame_1_6.expanded = false
	frame_1_6.layoutMode = "VERTICAL"
	frame_1_6.itemSpacing = 5
	

	// Create TEXT
	var text_1_7 = figma.createText()
	frame_1_6.appendChild(text_1_7)
	text_1_7.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_7.resize(23.0000000000, 22.0000000000)
	text_1_7.name = "25"
	text_1_7.relativeTransform = [[1,0,16],[0,1,16]]
	text_1_7.x = 16
	text_1_7.y = 16
	
	// Font properties
	text_1_7.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_7.characters = "25"
	text_1_7.fontSize = 18
	text_1_7.listSpacing = 0
	text_1_7.textCase = "TITLE"
	text_1_7.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_7.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_8 = figma.createFrame()
	frame_1_6.appendChild(frame_1_8)
	frame_1_8.resize(71.0000000000, 19.0000000000)
	frame_1_8.primaryAxisSizingMode = "AUTO"
	frame_1_8.counterAxisSizingMode = "AUTO"
	frame_1_8.name = "Frame 39"
	frame_1_8.relativeTransform = [[1,0,16],[0,1,43]]
	frame_1_8.x = 16
	frame_1_8.y = 43
	frame_1_8.fills = []
	frame_1_8.strokeTopWeight = 1
	frame_1_8.strokeBottomWeight = 1
	frame_1_8.strokeLeftWeight = 1
	frame_1_8.strokeRightWeight = 1
	frame_1_8.clipsContent = false
	frame_1_8.expanded = false
	frame_1_8.layoutMode = "HORIZONTAL"
	frame_1_8.counterAxisSizingMode = "AUTO"
	frame_1_8.itemSpacing = 2
	

	// Create TEXT
	var text_1_9 = figma.createText()
	frame_1_8.appendChild(text_1_9)
	text_1_9.resize(11.0000000000, 19.0000000000)
	text_1_9.name = "#"
	text_1_9.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	
	// Font properties
	text_1_9.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_9.characters = "#"
	text_1_9.fontSize = 16
	text_1_9.listSpacing = 0
	text_1_9.textCase = "TITLE"
	text_1_9.fontName = {"family":"Inter","style":"Regular"}
	text_1_9.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_10 = figma.createText()
	frame_1_8.appendChild(text_1_10)
	text_1_10.resize(58.0000000000, 19.0000000000)
	text_1_10.name = "F2F8FF"
	text_1_10.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.42352941632270813,"g":0.45490196347236633,"b":0.49803921580314636},"boundVariables":{}}]
	text_1_10.relativeTransform = [[1,0,13],[0,1,0]]
	text_1_10.x = 13
	
	// Font properties
	text_1_10.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_10.characters = "F2F8FF"
	text_1_10.fontSize = 16
	text_1_10.listSpacing = 0
	text_1_10.textCase = "TITLE"
	text_1_10.fontName = {"family":"Inter","style":"Regular"}
	text_1_10.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create INSTANCE
	var instance_1_762 = component_1_3.createInstance()
	frame_1_761.appendChild(instance_1_762)
	instance_1_762.name = "Frame 58"
	

				// Swap COMPONENT
				instance_1_762.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_762_130_72 = figma.getNodeById("I" + instance_1_762.id + ";" + frame_1_4.id)
	frame_I1_762_130_72.fillStyleId = greem_g-01_e774.id
	frame_I1_762_130_72.backgroundStyleId = greem_g-01_e774.id
	frame_I1_762_130_72.name = "Green/g-01"
	
	// Ref to SUB NODE
	var text_I1_762_130_83 = figma.getNodeById("I" + instance_1_762.id + ";" + text_1_5.id)
	text_I1_762_130_83.resize(88.0000000000, 24.0000000000)
	
	// Font properties
	text_I1_762_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_762_130_83.characters = "AAA 7.06"

	// Ref to SUB NODE
	var frame_I1_762_130_84 = figma.getNodeById("I" + instance_1_762.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_762_130_79 = figma.getNodeById("I" + instance_1_762.id + ";" + text_1_7.id)
	text_I1_762_130_79.resize(43.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_762_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_762_130_79.characters = "G-01"

	// Ref to SUB NODE
	var frame_I1_762_130_82 = figma.getNodeById("I" + instance_1_762.id + ";" + frame_1_8.id)
	frame_I1_762_130_82.resize(72.0000000000, 19.0000000000)
	frame_I1_762_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_762_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_762_130_80 = figma.getNodeById("I" + instance_1_762.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_762_130_81 = figma.getNodeById("I" + instance_1_762.id + ";" + text_1_10.id)
	text_I1_762_130_81.resize(59.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_762_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_762_130_81.characters = "75E0A7"


	// Create INSTANCE
	var instance_1_763 = component_1_3.createInstance()
	frame_1_761.appendChild(instance_1_763)
	instance_1_763.name = "Frame 59"
	instance_1_763.relativeTransform = [[1,0,226],[0,1,0]]
	instance_1_763.x = 226
	

				// Swap COMPONENT
				instance_1_763.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_763_130_72 = figma.getNodeById("I" + instance_1_763.id + ";" + frame_1_4.id)
	frame_I1_763_130_72.fillStyleId = greem_g-02_2c87.id
	frame_I1_763_130_72.backgroundStyleId = greem_g-02_2c87.id
	frame_I1_763_130_72.name = "Green/g-02"
	
	// Ref to SUB NODE
	var text_I1_763_130_83 = figma.getNodeById("I" + instance_1_763.id + ";" + text_1_5.id)
	text_I1_763_130_83.resize(42.0000000000, 24.0000000000)
	text_I1_763_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	
	// Font properties
	text_I1_763_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_763_130_83.characters = "2.75"

	// Ref to SUB NODE
	var frame_I1_763_130_84 = figma.getNodeById("I" + instance_1_763.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_763_130_79 = figma.getNodeById("I" + instance_1_763.id + ";" + text_1_7.id)
	text_I1_763_130_79.resize(46.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_763_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_763_130_79.characters = "G-02"

	// Ref to SUB NODE
	var frame_I1_763_130_82 = figma.getNodeById("I" + instance_1_763.id + ";" + frame_1_8.id)
	
	// Ref to SUB NODE
	var text_I1_763_130_80 = figma.getNodeById("I" + instance_1_763.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_763_130_81 = figma.getNodeById("I" + instance_1_763.id + ";" + text_1_10.id)
	
	// Font properties
	text_I1_763_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_763_130_81.characters = "17B26A"


	// Create INSTANCE
	var instance_1_764 = component_1_3.createInstance()
	frame_1_761.appendChild(instance_1_764)
	instance_1_764.name = "Frame 60"
	instance_1_764.relativeTransform = [[1,0,452],[0,1,0]]
	instance_1_764.x = 452
	

				// Swap COMPONENT
				instance_1_764.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_764_130_72 = figma.getNodeById("I" + instance_1_764.id + ";" + frame_1_4.id)
	frame_I1_764_130_72.fillStyleId = greem_g-03_6b89.id
	frame_I1_764_130_72.backgroundStyleId = greem_g-03_6b89.id
	frame_I1_764_130_72.name = "Green/g-03"
	
	// Ref to SUB NODE
	var text_I1_764_130_83 = figma.getNodeById("I" + instance_1_764.id + ";" + text_1_5.id)
	text_I1_764_130_83.resize(101.0000000000, 24.0000000000)
	text_I1_764_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	
	// Font properties
	text_I1_764_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_764_130_83.characters = "AAA 14.03"

	// Ref to SUB NODE
	var frame_I1_764_130_84 = figma.getNodeById("I" + instance_1_764.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_764_130_79 = figma.getNodeById("I" + instance_1_764.id + ";" + text_1_7.id)
	text_I1_764_130_79.resize(46.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_764_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_764_130_79.characters = "g-03"

	// Ref to SUB NODE
	var frame_I1_764_130_82 = figma.getNodeById("I" + instance_1_764.id + ";" + frame_1_8.id)
	frame_I1_764_130_82.resize(73.0000000000, 19.0000000000)
	frame_I1_764_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_764_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_764_130_80 = figma.getNodeById("I" + instance_1_764.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_764_130_81 = figma.getNodeById("I" + instance_1_764.id + ";" + text_1_10.id)
	text_I1_764_130_81.resize(60.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_764_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_764_130_81.characters = "222E2D"


	// Create FRAME
	var frame_1_765 = figma.createFrame()
	frame_1_753.appendChild(frame_1_765)
	frame_1_765.resize(649.0000000000, 296.0000000000)
	frame_1_765.primaryAxisSizingMode = "AUTO"
	frame_1_765.counterAxisSizingMode = "AUTO"
	frame_1_765.name = "Frame 81"
	frame_1_765.relativeTransform = [[1,0,904],[0,1,0]]
	frame_1_765.x = 904
	frame_1_765.fills = []
	frame_1_765.strokeTopWeight = 1
	frame_1_765.strokeBottomWeight = 1
	frame_1_765.strokeLeftWeight = 1
	frame_1_765.strokeRightWeight = 1
	frame_1_765.clipsContent = false
	frame_1_765.expanded = false
	frame_1_765.layoutMode = "VERTICAL"
	frame_1_765.counterAxisSizingMode = "AUTO"
	frame_1_765.itemSpacing = 24
	

	// Create FRAME
	var frame_1_766 = figma.createFrame()
	frame_1_765.appendChild(frame_1_766)
	frame_1_766.resize(649.0000000000, 84.0000000000)
	frame_1_766.primaryAxisSizingMode = "AUTO"
	frame_1_766.name = "Frame 75"
	frame_1_766.fills = []
	frame_1_766.strokeTopWeight = 1
	frame_1_766.strokeBottomWeight = 1
	frame_1_766.strokeLeftWeight = 1
	frame_1_766.strokeRightWeight = 1
	frame_1_766.clipsContent = false
	frame_1_766.expanded = false
	frame_1_766.layoutMode = "VERTICAL"
	frame_1_766.itemSpacing = 16
	

	// Create FRAME
	var frame_1_767 = figma.createFrame()
	frame_1_766.appendChild(frame_1_767)
	frame_1_767.resize(120.0000000000, 38.0000000000)
	frame_1_767.primaryAxisSizingMode = "AUTO"
	frame_1_767.counterAxisSizingMode = "AUTO"
	frame_1_767.name = "Frame 68"
	frame_1_767.fills = []
	frame_1_767.counterAxisAlignItems = "CENTER"
	frame_1_767.strokeTopWeight = 1
	frame_1_767.strokeBottomWeight = 1
	frame_1_767.strokeLeftWeight = 1
	frame_1_767.strokeRightWeight = 1
	frame_1_767.clipsContent = false
	frame_1_767.expanded = false
	frame_1_767.layoutMode = "HORIZONTAL"
	frame_1_767.counterAxisSizingMode = "AUTO"
	frame_1_767.itemSpacing = 8
	

	// Create TEXT
	var text_1_768 = figma.createText()
	frame_1_767.appendChild(text_1_768)
	text_1_768.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_768.resize(45.0000000000, 29.0000000000)
	text_1_768.name = "red"
	text_1_768.relativeTransform = [[1,0,0],[0,1,4.5]]
	text_1_768.y = 4.5
	
	// Font properties
	text_1_768.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_768.characters = "red"
	text_1_768.fontSize = 24
	text_1_768.listSpacing = 0
	text_1_768.textCase = "TITLE"
	text_1_768.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_768.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_769 = figma.createFrame()
	frame_1_767.appendChild(frame_1_769)
	frame_1_769.resize(67.0000000000, 38.0000000000)
	frame_1_769.primaryAxisSizingMode = "AUTO"
	frame_1_769.counterAxisSizingMode = "AUTO"
	frame_1_769.name = "Frame 67"
	frame_1_769.relativeTransform = [[1,0,53],[0,1,0]]
	frame_1_769.x = 53
	frame_1_769.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_769.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_769.cornerRadius = 8
	frame_1_769.paddingLeft = 12
	frame_1_769.paddingRight = 12
	frame_1_769.paddingTop = 8
	frame_1_769.paddingBottom = 8
	frame_1_769.primaryAxisAlignItems = "CENTER"
	frame_1_769.counterAxisAlignItems = "CENTER"
	frame_1_769.strokeTopWeight = 1
	frame_1_769.strokeBottomWeight = 1
	frame_1_769.strokeLeftWeight = 1
	frame_1_769.strokeRightWeight = 1
	frame_1_769.clipsContent = false
	frame_1_769.expanded = false
	frame_1_769.layoutMode = "HORIZONTAL"
	frame_1_769.counterAxisSizingMode = "AUTO"
	frame_1_769.itemSpacing = 4
	

	// Create TEXT
	var text_1_770 = figma.createText()
	frame_1_769.appendChild(text_1_770)
	text_1_770.resize(43.0000000000, 22.0000000000)
	text_1_770.name = "error"
	text_1_770.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_770.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_770.x = 12
	text_1_770.y = 8
	
	// Font properties
	text_1_770.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_770.characters = "error"
	text_1_770.fontSize = 18
	text_1_770.listSpacing = 0
	text_1_770.textCase = "TITLE"
	text_1_770.fontName = {"family":"Inter","style":"Medium"}
	text_1_770.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_771 = figma.createText()
	frame_1_766.appendChild(text_1_771)
	text_1_771.fillStyleId = gray_dark_mode_500_e40c.id
	text_1_771.resize(649.0000000000, 30.0000000000)
	text_1_771.name = "We use red color when we want to show errors."
	text_1_771.relativeTransform = [[1,0,0],[0,1,54]]
	text_1_771.y = 54
	text_1_771.layoutAlign = "STRETCH"
	
	// Font properties
	text_1_771.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_771.characters = "We use red color when we want to show errors."
	text_1_771.fontSize = 20
	text_1_771.listSpacing = 0
	text_1_771.textCase = "TITLE"
	text_1_771.lineHeight = {"unit":"PIXELS","value":30}
	text_1_771.fontName = {"family":"Inter","style":"Regular"}
	text_1_771.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_1_772 = figma.createFrame()
	frame_1_765.appendChild(frame_1_772)
	frame_1_772.resize(649.0000000000, 188.0000000000)
	frame_1_772.primaryAxisSizingMode = "AUTO"
	frame_1_772.counterAxisSizingMode = "AUTO"
	frame_1_772.name = "Frame 78"
	frame_1_772.relativeTransform = [[1,0,0],[0,1,108]]
	frame_1_772.y = 108
	frame_1_772.fills = []
	frame_1_772.strokeTopWeight = 1
	frame_1_772.strokeBottomWeight = 1
	frame_1_772.strokeLeftWeight = 1
	frame_1_772.strokeRightWeight = 1
	frame_1_772.clipsContent = false
	frame_1_772.expanded = false
	frame_1_772.layoutMode = "HORIZONTAL"
	frame_1_772.counterAxisSizingMode = "AUTO"
	frame_1_772.itemSpacing = 29
	

	// Create INSTANCE
	var instance_1_773 = component_1_3.createInstance()
	frame_1_772.appendChild(instance_1_773)
	instance_1_773.name = "Frame 61"
	

				// Swap COMPONENT
				instance_1_773.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_773_130_72 = figma.getNodeById("I" + instance_1_773.id + ";" + frame_1_4.id)
	frame_I1_773_130_72.fillStyleId = red_r-01_2c6f.id
	frame_I1_773_130_72.backgroundStyleId = red_r-01_2c6f.id
	frame_I1_773_130_72.name = "Red/r-01"
	
	// Ref to SUB NODE
	var text_I1_773_130_83 = figma.getNodeById("I" + instance_1_773.id + ";" + text_1_5.id)
	text_I1_773_130_83.resize(77.0000000000, 24.0000000000)
	text_I1_773_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11388880759477615,"g":0.11388880759477615,"b":0.11388880759477615},"boundVariables":{}}]
	
	// Font properties
	text_I1_773_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_773_130_83.characters = "AA 5.94"

	// Ref to SUB NODE
	var frame_I1_773_130_84 = figma.getNodeById("I" + instance_1_773.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_773_130_79 = figma.getNodeById("I" + instance_1_773.id + ";" + text_1_7.id)
	text_I1_773_130_79.resize(41.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_773_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_773_130_79.characters = "R-01"

	// Ref to SUB NODE
	var frame_I1_773_130_82 = figma.getNodeById("I" + instance_1_773.id + ";" + frame_1_8.id)
	frame_I1_773_130_82.resize(70.0000000000, 19.0000000000)
	frame_I1_773_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_773_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_773_130_80 = figma.getNodeById("I" + instance_1_773.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_773_130_81 = figma.getNodeById("I" + instance_1_773.id + ";" + text_1_10.id)
	text_I1_773_130_81.resize(57.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_773_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_773_130_81.characters = "E07E75"


	// Create INSTANCE
	var instance_1_774 = component_1_3.createInstance()
	frame_1_772.appendChild(instance_1_774)
	instance_1_774.name = "Frame 62"
	instance_1_774.relativeTransform = [[1,0,226],[0,1,0]]
	instance_1_774.x = 226
	

				// Swap COMPONENT
				instance_1_774.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_774_130_72 = figma.getNodeById("I" + instance_1_774.id + ";" + frame_1_4.id)
	frame_I1_774_130_72.fillStyleId = red_r-02_de34.id
	frame_I1_774_130_72.backgroundStyleId = red_r-02_de34.id
	frame_I1_774_130_72.name = "Red/r-02"
	
	// Ref to SUB NODE
	var text_I1_774_130_83 = figma.getNodeById("I" + instance_1_774.id + ";" + text_1_5.id)
	text_I1_774_130_83.resize(77.0000000000, 24.0000000000)
	text_I1_774_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	
	// Font properties
	text_I1_774_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_774_130_83.characters = "AAA 8.7"

	// Ref to SUB NODE
	var frame_I1_774_130_84 = figma.getNodeById("I" + instance_1_774.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_774_130_79 = figma.getNodeById("I" + instance_1_774.id + ";" + text_1_7.id)
	text_I1_774_130_79.resize(44.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_774_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_774_130_79.characters = "R-02"

	// Ref to SUB NODE
	var frame_I1_774_130_82 = figma.getNodeById("I" + instance_1_774.id + ";" + frame_1_8.id)
	frame_I1_774_130_82.resize(77.0000000000, 19.0000000000)
	frame_I1_774_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_774_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_774_130_80 = figma.getNodeById("I" + instance_1_774.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_774_130_81 = figma.getNodeById("I" + instance_1_774.id + ";" + text_1_10.id)
	text_I1_774_130_81.resize(64.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_774_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_774_130_81.characters = "DC4335"


	// Create INSTANCE
	var instance_1_775 = component_1_3.createInstance()
	frame_1_772.appendChild(instance_1_775)
	instance_1_775.name = "Frame 63"
	instance_1_775.relativeTransform = [[1,0,452],[0,1,0]]
	instance_1_775.x = 452
	

				// Swap COMPONENT
				instance_1_775.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_775_130_72 = figma.getNodeById("I" + instance_1_775.id + ";" + frame_1_4.id)
	frame_I1_775_130_72.fillStyleId = red_r-03_890d.id
	frame_I1_775_130_72.backgroundStyleId = red_r-03_890d.id
	frame_I1_775_130_72.name = "Red/r-03"
	
	// Ref to SUB NODE
	var text_I1_775_130_83 = figma.getNodeById("I" + instance_1_775.id + ";" + text_1_5.id)
	text_I1_775_130_83.resize(101.0000000000, 24.0000000000)
	text_I1_775_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	
	// Font properties
	text_I1_775_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_775_130_83.characters = "AAA 14.03"

	// Ref to SUB NODE
	var frame_I1_775_130_84 = figma.getNodeById("I" + instance_1_775.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_775_130_79 = figma.getNodeById("I" + instance_1_775.id + ";" + text_1_7.id)
	text_I1_775_130_79.resize(44.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_775_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_775_130_79.characters = "R-03"

	// Ref to SUB NODE
	var frame_I1_775_130_82 = figma.getNodeById("I" + instance_1_775.id + ";" + frame_1_8.id)
	frame_I1_775_130_82.resize(73.0000000000, 19.0000000000)
	frame_I1_775_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_775_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_775_130_80 = figma.getNodeById("I" + instance_1_775.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_775_130_81 = figma.getNodeById("I" + instance_1_775.id + ";" + text_1_10.id)
	text_I1_775_130_81.resize(60.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_775_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_775_130_81.characters = "222E2D"


	// Create FRAME
	var frame_1_776 = figma.createFrame()
	frame_1_753.appendChild(frame_1_776)
	frame_1_776.resize(649.0000000000, 296.0000000000)
	frame_1_776.primaryAxisSizingMode = "AUTO"
	frame_1_776.counterAxisSizingMode = "AUTO"
	frame_1_776.name = "Frame 82"
	frame_1_776.relativeTransform = [[1,0,1808],[0,1,0]]
	frame_1_776.x = 1808
	frame_1_776.fills = []
	frame_1_776.strokeTopWeight = 1
	frame_1_776.strokeBottomWeight = 1
	frame_1_776.strokeLeftWeight = 1
	frame_1_776.strokeRightWeight = 1
	frame_1_776.clipsContent = false
	frame_1_776.expanded = false
	frame_1_776.layoutMode = "VERTICAL"
	frame_1_776.counterAxisSizingMode = "AUTO"
	frame_1_776.itemSpacing = 24
	

	// Create FRAME
	var frame_1_777 = figma.createFrame()
	frame_1_776.appendChild(frame_1_777)
	frame_1_777.resize(649.0000000000, 84.0000000000)
	frame_1_777.primaryAxisSizingMode = "AUTO"
	frame_1_777.name = "Frame 76"
	frame_1_777.fills = []
	frame_1_777.strokeTopWeight = 1
	frame_1_777.strokeBottomWeight = 1
	frame_1_777.strokeLeftWeight = 1
	frame_1_777.strokeRightWeight = 1
	frame_1_777.clipsContent = false
	frame_1_777.expanded = false
	frame_1_777.layoutMode = "VERTICAL"
	frame_1_777.itemSpacing = 16
	

	// Create FRAME
	var frame_1_778 = figma.createFrame()
	frame_1_777.appendChild(frame_1_778)
	frame_1_778.resize(179.0000000000, 38.0000000000)
	frame_1_778.primaryAxisSizingMode = "AUTO"
	frame_1_778.counterAxisSizingMode = "AUTO"
	frame_1_778.name = "Frame 68"
	frame_1_778.fills = []
	frame_1_778.counterAxisAlignItems = "CENTER"
	frame_1_778.strokeTopWeight = 1
	frame_1_778.strokeBottomWeight = 1
	frame_1_778.strokeLeftWeight = 1
	frame_1_778.strokeRightWeight = 1
	frame_1_778.clipsContent = false
	frame_1_778.expanded = false
	frame_1_778.layoutMode = "HORIZONTAL"
	frame_1_778.counterAxisSizingMode = "AUTO"
	frame_1_778.itemSpacing = 8
	

	// Create TEXT
	var text_1_779 = figma.createText()
	frame_1_778.appendChild(text_1_779)
	text_1_779.fillStyleId = gray_dark_mode_950_dd7d.id
	text_1_779.resize(76.0000000000, 29.0000000000)
	text_1_779.name = "yellow"
	text_1_779.relativeTransform = [[1,0,0],[0,1,4.5]]
	text_1_779.y = 4.5
	
	// Font properties
	text_1_779.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_1_779.characters = "yellow"
	text_1_779.fontSize = 24
	text_1_779.listSpacing = 0
	text_1_779.textCase = "TITLE"
	text_1_779.fontName = {"family":"Inter","style":"Semi Bold"}
	text_1_779.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create FRAME
	var frame_1_780 = figma.createFrame()
	frame_1_778.appendChild(frame_1_780)
	frame_1_780.resize(95.0000000000, 38.0000000000)
	frame_1_780.primaryAxisSizingMode = "AUTO"
	frame_1_780.counterAxisSizingMode = "AUTO"
	frame_1_780.name = "Frame 67"
	frame_1_780.relativeTransform = [[1,0,84],[0,1,0]]
	frame_1_780.x = 84
	frame_1_780.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.925000011920929,"g":1,"b":0.960046648979187},"boundVariables":{}}]
	frame_1_780.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	frame_1_780.cornerRadius = 8
	frame_1_780.paddingLeft = 12
	frame_1_780.paddingRight = 12
	frame_1_780.paddingTop = 8
	frame_1_780.paddingBottom = 8
	frame_1_780.primaryAxisAlignItems = "CENTER"
	frame_1_780.counterAxisAlignItems = "CENTER"
	frame_1_780.strokeTopWeight = 1
	frame_1_780.strokeBottomWeight = 1
	frame_1_780.strokeLeftWeight = 1
	frame_1_780.strokeRightWeight = 1
	frame_1_780.clipsContent = false
	frame_1_780.expanded = false
	frame_1_780.layoutMode = "HORIZONTAL"
	frame_1_780.counterAxisSizingMode = "AUTO"
	frame_1_780.itemSpacing = 4
	

	// Create TEXT
	var text_1_781 = figma.createText()
	frame_1_780.appendChild(text_1_781)
	text_1_781.resize(71.0000000000, 22.0000000000)
	text_1_781.name = "warning"
	text_1_781.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09019608050584793,"g":0.6980392336845398,"b":0.4156862795352936},"boundVariables":{}}]
	text_1_781.relativeTransform = [[1,0,12],[0,1,8]]
	text_1_781.x = 12
	text_1_781.y = 8
	
	// Font properties
	text_1_781.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_1_781.characters = "warning"
	text_1_781.fontSize = 18
	text_1_781.listSpacing = 0
	text_1_781.textCase = "TITLE"
	text_1_781.fontName = {"family":"Inter","style":"Medium"}
	text_1_781.textAutoResize = "WIDTH_AND_HEIGHT"


	// Create TEXT
	var text_1_782 = figma.createText()
	frame_1_777.appendChild(text_1_782)
	text_1_782.fillStyleId = gray_dark_mode_500_e40c.id
	text_1_782.resize(649.0000000000, 30.0000000000)
	text_1_782.name = "We use orange color for warning."
	text_1_782.relativeTransform = [[1,0,0],[0,1,54]]
	text_1_782.y = 54
	text_1_782.layoutAlign = "STRETCH"
	
	// Font properties
	text_1_782.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_1_782.characters = "We use orange color for warning."
	text_1_782.fontSize = 20
	text_1_782.listSpacing = 0
	text_1_782.textCase = "TITLE"
	text_1_782.lineHeight = {"unit":"PIXELS","value":30}
	text_1_782.fontName = {"family":"Inter","style":"Regular"}
	text_1_782.textAutoResize = "HEIGHT"


	// Create FRAME
	var frame_1_783 = figma.createFrame()
	frame_1_776.appendChild(frame_1_783)
	frame_1_783.resize(649.0000000000, 188.0000000000)
	frame_1_783.primaryAxisSizingMode = "AUTO"
	frame_1_783.counterAxisSizingMode = "AUTO"
	frame_1_783.name = "Frame 77"
	frame_1_783.relativeTransform = [[1,0,0],[0,1,108]]
	frame_1_783.y = 108
	frame_1_783.fills = []
	frame_1_783.strokeTopWeight = 1
	frame_1_783.strokeBottomWeight = 1
	frame_1_783.strokeLeftWeight = 1
	frame_1_783.strokeRightWeight = 1
	frame_1_783.clipsContent = false
	frame_1_783.expanded = false
	frame_1_783.layoutMode = "HORIZONTAL"
	frame_1_783.counterAxisSizingMode = "AUTO"
	frame_1_783.itemSpacing = 29
	

	// Create INSTANCE
	var instance_1_784 = component_1_3.createInstance()
	frame_1_783.appendChild(instance_1_784)
	instance_1_784.name = "Frame 64"
	

				// Swap COMPONENT
				instance_1_784.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_784_130_72 = figma.getNodeById("I" + instance_1_784.id + ";" + frame_1_4.id)
	frame_I1_784_130_72.fillStyleId = yellow_y-01_1030.id
	frame_I1_784_130_72.backgroundStyleId = yellow_y-01_1030.id
	frame_I1_784_130_72.name = "Yellow/y-01"
	
	// Ref to SUB NODE
	var text_I1_784_130_83 = figma.getNodeById("I" + instance_1_784.id + ";" + text_1_5.id)
	text_I1_784_130_83.resize(76.0000000000, 24.0000000000)
	
	// Font properties
	text_I1_784_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_784_130_83.characters = "AA 6.32"

	// Ref to SUB NODE
	var frame_I1_784_130_84 = figma.getNodeById("I" + instance_1_784.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_784_130_79 = figma.getNodeById("I" + instance_1_784.id + ";" + text_1_7.id)
	text_I1_784_130_79.resize(41.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_784_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_784_130_79.characters = "y-01"

	// Ref to SUB NODE
	var frame_I1_784_130_82 = figma.getNodeById("I" + instance_1_784.id + ";" + frame_1_8.id)
	frame_I1_784_130_82.resize(74.0000000000, 19.0000000000)
	frame_I1_784_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_784_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_784_130_80 = figma.getNodeById("I" + instance_1_784.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_784_130_81 = figma.getNodeById("I" + instance_1_784.id + ";" + text_1_10.id)
	text_I1_784_130_81.resize(61.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_784_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_784_130_81.characters = "E0BC75"


	// Create INSTANCE
	var instance_1_785 = component_1_3.createInstance()
	frame_1_783.appendChild(instance_1_785)
	instance_1_785.name = "Frame 65"
	instance_1_785.relativeTransform = [[1,0,226],[0,1,0]]
	instance_1_785.x = 226
	

				// Swap COMPONENT
				instance_1_785.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_785_130_72 = figma.getNodeById("I" + instance_1_785.id + ";" + frame_1_4.id)
	frame_I1_785_130_72.fillStyleId = yellow_y-02_21db.id
	frame_I1_785_130_72.backgroundStyleId = yellow_y-02_21db.id
	frame_I1_785_130_72.name = "Yellow/y-02"
	
	// Ref to SUB NODE
	var text_I1_785_130_83 = figma.getNodeById("I" + instance_1_785.id + ";" + text_1_5.id)
	text_I1_785_130_83.resize(77.0000000000, 24.0000000000)
	text_I1_785_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.16470588743686676,"b":0.13333334028720856},"boundVariables":{}}]
	
	// Font properties
	text_I1_785_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_785_130_83.characters = "AA 6.34"

	// Ref to SUB NODE
	var frame_I1_785_130_84 = figma.getNodeById("I" + instance_1_785.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_785_130_79 = figma.getNodeById("I" + instance_1_785.id + ";" + text_1_7.id)
	text_I1_785_130_79.resize(44.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_785_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_785_130_79.characters = "y-02"

	// Ref to SUB NODE
	var frame_I1_785_130_82 = figma.getNodeById("I" + instance_1_785.id + ";" + frame_1_8.id)
	frame_I1_785_130_82.resize(78.0000000000, 19.0000000000)
	frame_I1_785_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_785_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_785_130_80 = figma.getNodeById("I" + instance_1_785.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_785_130_81 = figma.getNodeById("I" + instance_1_785.id + ";" + text_1_10.id)
	text_I1_785_130_81.resize(65.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_785_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_785_130_81.characters = "DCA335"


	// Create INSTANCE
	var instance_1_786 = component_1_3.createInstance()
	frame_1_783.appendChild(instance_1_786)
	instance_1_786.name = "Frame 66"
	instance_1_786.relativeTransform = [[1,0,452],[0,1,0]]
	instance_1_786.x = 452
	

				// Swap COMPONENT
				instance_1_786.swapComponent(component_1_3)

	// Ref to SUB NODE
	var frame_I1_786_130_72 = figma.getNodeById("I" + instance_1_786.id + ";" + frame_1_4.id)
	frame_I1_786_130_72.fillStyleId = yellow_y-03_b8fa.id
	frame_I1_786_130_72.backgroundStyleId = yellow_y-03_b8fa.id
	frame_I1_786_130_72.name = "Yellow/y-03"
	
	// Ref to SUB NODE
	var text_I1_786_130_83 = figma.getNodeById("I" + instance_1_786.id + ";" + text_1_5.id)
	text_I1_786_130_83.resize(101.0000000000, 24.0000000000)
	text_I1_786_130_83.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
	
	// Font properties
	text_I1_786_130_83.fontName = {
		family: "Inter",
		style: "Medium"
	}
		text_I1_786_130_83.characters = "AAA 14.03"

	// Ref to SUB NODE
	var frame_I1_786_130_84 = figma.getNodeById("I" + instance_1_786.id + ";" + frame_1_6.id)
	
	// Ref to SUB NODE
	var text_I1_786_130_79 = figma.getNodeById("I" + instance_1_786.id + ";" + text_1_7.id)
	text_I1_786_130_79.resize(44.0000000000, 22.0000000000)
	
	// Font properties
	text_I1_786_130_79.fontName = {
		family: "Inter",
		style: "Semi Bold"
	}
		text_I1_786_130_79.characters = "y-03"

	// Ref to SUB NODE
	var frame_I1_786_130_82 = figma.getNodeById("I" + instance_1_786.id + ";" + frame_1_8.id)
	frame_I1_786_130_82.resize(73.0000000000, 19.0000000000)
	frame_I1_786_130_82.primaryAxisSizingMode = "AUTO"
	frame_I1_786_130_82.counterAxisSizingMode = "AUTO"
	
	// Ref to SUB NODE
	var text_I1_786_130_80 = figma.getNodeById("I" + instance_1_786.id + ";" + text_1_9.id)
	
	// Ref to SUB NODE
	var text_I1_786_130_81 = figma.getNodeById("I" + instance_1_786.id + ";" + text_1_10.id)
	text_I1_786_130_81.resize(60.0000000000, 19.0000000000)
	
	// Font properties
	text_I1_786_130_81.fontName = {
		family: "Inter",
		style: "Regular"
	}
		text_I1_786_130_81.characters = "2E2A22"
}

main()