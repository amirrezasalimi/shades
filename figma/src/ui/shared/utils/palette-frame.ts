import { LOGO_BASE64 } from "../constants/logo-base64";
import { base64ToUint8Array } from "./base64";

type Palette = {
    title: string;
    colors: {
        [key: string]: {
            name: string;
            shades: {
                [key: string]: string;
            }
        }
    }
}
const createPaletteFrame = async () => {
    // Load FONTS
    async function loadFonts() {
        await Promise.all([
            figma.loadFontAsync({
                family: "Inter",
                style: "Semi Bold"
            }), figma.loadFontAsync({
                family: "Inter",
                style: "Regular"
            }), figma.loadFontAsync({
                family: "Inter",
                style: "Medium"
            })
        ])
    }

    // load fonts
    await loadFonts();

    const framePadding = 124;
    const width = 2710;
    const height = 1800;

    const title = "Cyberpunk landing page";
    const name = "Color Palette";
    // remove if already exists
    const existingFrame = figma.currentPage.findChild((child) => child.name === name);
    if (existingFrame) {
        existingFrame.remove();
    }

    // get latest frame 
    const latestFrame = figma.currentPage.children[figma.currentPage.children.length - 1];
    const x = latestFrame.x + latestFrame.width + 100;
    const y = latestFrame.y;
    const frame = figma.createFrame();
    frame.name = name
    frame.x = x;
    frame.y = y;
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.resize(width, height);
    frame.paddingLeft = framePadding;
    frame.paddingRight = framePadding;
    frame.paddingTop = framePadding;
    frame.paddingBottom = framePadding;
    frame.itemSpacing = 78

    // head
    const head = figma.createFrame();
    head.name = "Head";
    head.layoutMode = "HORIZONTAL";
    // jsutify  between
    head.primaryAxisAlignItems = "SPACE_BETWEEN";
    head.primaryAxisSizingMode = "AUTO";
    head.counterAxisSizingMode = "AUTO";
    // auto constrain
    head.layoutAlign = "STRETCH";
    head.resize(width - (framePadding * 2), 128);

    // left
    const headLeft = figma.createFrame();
    headLeft.name = "Head Left";
    headLeft.layoutMode = "VERTICAL";
    headLeft.primaryAxisSizingMode = "AUTO";
    headLeft.counterAxisSizingMode = "AUTO";
    headLeft.itemSpacing = 24;

    // create title
    const titleText = figma.createText();
    titleText.name = "Title";
    titleText.characters = title;
    titleText.fontSize = 48;
    titleText.fontName = { family: "Inter", style: "Semi Bold" };
    // set parent
    headLeft.appendChild(titleText);

    // sub title
    const subTitleText = figma.createText();
    subTitleText.name = "Sub Title";
    subTitleText.characters = "Color Palette";
    subTitleText.fontSize = 20;
    subTitleText.fontName = { family: "Inter", style: "Regular" };
    // set parent
    headLeft.appendChild(subTitleText);

    head.appendChild(headLeft);

    // right
    const headRight = figma.createFrame();
    headRight.name = "Head Right";
    headRight.layoutMode = "VERTICAL";
    headRight.primaryAxisSizingMode = "AUTO";
    headRight.counterAxisSizingMode = "AUTO";
    headRight.resize(250, 128);
    // items center
    headRight.primaryAxisAlignItems = "CENTER";


    // copyright
    const copyrightFrame = figma.createFrame();
    copyrightFrame.name = "Copyright";
    copyrightFrame.layoutMode = "HORIZONTAL";
    copyrightFrame.itemSpacing = 8;
    // min height
    copyrightFrame.resize(250, 32);
    // items end


    // text
    const copyRightText = figma.createText();
    copyRightText.name = "Copy Right";
    copyRightText.characters = "Made With";
    copyRightText.fontSize = 24;


    // image
    const logo = await figma.createImageAsync(LOGO_BASE64);
    const logoSize = await logo.getSizeAsync();
    const logoParent = figma.createFrame();
    logoParent.resize(logoSize.width, logoSize.height);
    logoParent.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash: logo.hash }];
    logoParent.name = "Logo";

    // add link text
    const linkText = figma.createText();
    linkText.name = "Link";
    linkText.characters = "Toolstack.run";
    linkText.fontSize = 24;
    linkText.fills = [{
        type: "SOLID", color: {
            r: 0.13, g: 0.4, b: 0.92
        }
    }];
    linkText.fontName = { family: "Inter", style: "Semi Bold" };
    // hyperlink
    const hyperlink: HyperlinkTarget = {
        type: "URL",
        value: "https://toolstack.run"
    }
    // underline
    linkText.textDecoration = "UNDERLINE";
    linkText.hyperlink = hyperlink;


    copyrightFrame.appendChild(copyRightText);
    copyrightFrame.appendChild(logoParent);

    headRight.appendChild(copyrightFrame);
    headRight.appendChild(linkText);


    head.appendChild(headRight);
    frame.appendChild(head);

    // dash line
    const dashLine = figma.createLine();
    frame.appendChild(dashLine);
    dashLine.name = "Dash Line";
    dashLine.strokeWeight = 1;
    dashLine.dashPattern = [10, 10];
    dashLine.strokes = [{
        type: "SOLID", color: {
            r: 0.72, g: 0.77, b: 0.85
        }
    }];

    dashLine.resize(
        width - (framePadding * 2), 0);

    // focus on frame
    figma.viewport.scrollAndZoomIntoView([frame]);

    const createColorBox = (color: string, shade_code: string) => {
        const box = figma.createFrame();
        box.name = `${color} ${shade_code}`;
        box.resize(200, 190);
        box.layoutMode = "VERTICAL";
        box.primaryAxisSizingMode = "AUTO";
        box.counterAxisSizingMode = "AUTO";
        box.fills = [];
        // rounded
        box.cornerRadius = 12;
        // shadow
        box.effects = [{
            type: "DROP_SHADOW",
            color: { r: 0.06, g: 0.09, b: 0.15, a: 0.08 },
            offset: { x: 0, y: 12 },
            radius: 16,
            spread: -4,
            blendMode: "NORMAL",
            visible: true,
        }];
        // border
        box.strokes = [{
            type: "SOLID", color: {
                r: 0.83, g: 0.88, b: 0.94
            },
        }];

        // rect
        const rect = figma.createRectangle();
        box.appendChild(rect);
        rect.resize(200, 110);
        rect.name = "Color";
        rect.fills = [{
            type: "SOLID", color: {
                r: 0.5, g: 0.2, b: 0
            }
        }];
        // bottom frame
        const bottomFrame = figma.createFrame();
        box.appendChild(bottomFrame);
        // stretch
        bottomFrame.resize(200, 80);
        bottomFrame.layoutMode = "VERTICAL";
        bottomFrame.itemSpacing = 6;
        bottomFrame.paddingLeft = 16;
        bottomFrame.paddingRight = 16;
        bottomFrame.paddingTop = 16;
        bottomFrame.paddingBottom = 16;

        // shade name
        const shadeName = figma.createText();
        bottomFrame.appendChild(shadeName);
        shadeName.name = "Shade";
        shadeName.characters = shade_code;
        shadeName.fontSize = 16;
        shadeName.fontName = { family: "Inter", style: "Semi Bold" };
        // color name
        const colorCode = figma.createText();
        bottomFrame.appendChild(colorCode);
        colorCode.name = "Color Code";
        colorCode.characters = color;
        colorCode.fontSize = 18;
        colorCode.fontName = { family: "Inter", style: "Regular" };
        colorCode.fills = [{
            type: "SOLID", color: {
                r: 0.42, g: 0.45, b: 0.49
            }
        }];
        return box;
    }

    const createColorList = (name: string, type: string, colors: Record<string, string>) => {
        /* 
            frame - vertical(
                frame - head - horizontal (
                    text - name
                    text - type
                ),
                frame - colors - horizontal(
                  createColorBox(color, shade_code)
                )
            )
        */
        const colorList = figma.createFrame();
        colorList.name = name;
        colorList.layoutMode = "VERTICAL";
        colorList.primaryAxisSizingMode = "AUTO";
        colorList.counterAxisSizingMode = "AUTO";
        colorList.itemSpacing = 24;
        colorList.fills = [];
        colorList.clipsContent = false;

        // head
        const head = figma.createFrame();
        head.name = "Head";
        head.layoutMode = "HORIZONTAL";
        head.primaryAxisSizingMode = "AUTO";
        head.counterAxisSizingMode = "AUTO";
        head.itemSpacing = 16;
        // items center
        head.counterAxisAlignItems = "CENTER";
        // create name
        const nameText = figma.createText();
        nameText.name = "Name";
        nameText.characters = name;
        nameText.fontSize = 24;
        nameText.fontName = { family: "Inter", style: "Semi Bold" };
        // set parent
        head.appendChild(nameText);

        // create type - padding: 8 
        const typeText = figma.createFrame();
        typeText.name = "Type";
        typeText.fills = [{
            type: "SOLID", color: {
                r: 0.92, g: 1, b: 0.96
            }
        }];
        typeText.cornerRadius = 8;
        typeText.paddingBottom = 8;
        typeText.paddingTop = 8;
        typeText.paddingLeft = 12;
        typeText.paddingRight = 12;
        typeText.layoutMode = "VERTICAL";
        typeText.primaryAxisSizingMode = "AUTO";
        // center content
        typeText.counterAxisAlignItems = "CENTER";
        // border same as color
        typeText.strokes = [{
            type: "SOLID", color: {
                r: 0.09, g: 0.69, b: 0.41
            },
        }];

        // create type
        const _type = figma.createText();
        _type.name = "Type";
        _type.characters = type;
        _type.fontSize = 18;
        _type.fontName = { family: "Inter", style: "Medium" };
        _type.fills = [{
            type: "SOLID", color: {
                r: 0.09, g: 0.69, b: 0.41
            }
        }];


        typeText.appendChild(_type);


        // set parent
        head.appendChild(typeText);
        colorList.appendChild(head);

        // colors
        const colorFrame = figma.createFrame();
        colorFrame.name = "Colors";
        colorFrame.layoutMode = "HORIZONTAL";
        colorFrame.primaryAxisSizingMode = "AUTO";
        colorFrame.counterAxisSizingMode = "AUTO";
        colorFrame.itemSpacing = 32;
        colorFrame.fills = [];
        // clip content
        colorFrame.clipsContent = false;
        // create color boxes
        for (const [shade_code, color] of Object.entries(colors)) {
            const colorBox = createColorBox(color, shade_code);
            colorFrame.appendChild(colorBox);
        }
        colorList.appendChild(colorFrame);
        return colorList;
    }

    const colors = {
        "Primary": {
            "100": "#FFD700",
            "200": "#FFC400",
            "300": "#FFB200",
            "400": "#FFA000",
            "500": "#FF8C00",
            "600": "#FF7A00",
            "700": "#FF6A00",
            "800": "#FF5A00",
            "900": "#FF4A00"
        },
        "Secondary": {
            "100": "#FFD700",
            "200": "#FFC400",
            "300": "#FFB200",
            "400": "#FFA000",
            "500": "#FF8C00",
            "600": "#FF7A00",
            "700": "#FF6A00",
            "800": "#FF5A00",
            "900": "#FF4A00"
        }
    }
    // create color list
    const colorList = createColorList("Brown", "Primary", colors.Primary);
    frame.appendChild(colorList);
}

export default createPaletteFrame;