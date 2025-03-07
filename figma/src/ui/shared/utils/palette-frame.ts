import { ColorPalette } from "@common/models/palette";
import { LOGO_BASE64 } from "../constants/logo-base64";
import { convertHexToRgbRange } from "@common/utils/color";
import { PluginSettings } from "@common/models/settings";
import { FIGMA_PLUGIN_URL } from "../constants/constants";

const getLuminance = (r: number, g: number, b: number) => {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const getContrastRatio = (l1: number, l2: number) => {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};

const isBright = (r: number, g: number, b: number) => {
  return getLuminance(r, g, b) > 0.5;
};

interface Props {
  id: string;
  title: string;
  description: string;
  palette: ColorPalette;
  keyAsLabel?: boolean;
  addToStyles?: boolean;
}
const width = 2100;
const framePadding = 124; // Move this here

const createFooter = async () => {
  const footer = figma.createFrame();
  footer.name = "Footer";
  footer.layoutMode = "HORIZONTAL"; // Changed to HORIZONTAL
  footer.primaryAxisSizingMode = "FIXED"; // Changed to FIXED
  footer.counterAxisSizingMode = "AUTO";
  footer.layoutAlign = "STRETCH";
  footer.resize(width - framePadding * 2, footer.height); // Set width to match container
  footer.fills = [];
  footer.itemSpacing = 16;
  footer.primaryAxisAlignItems = "SPACE_BETWEEN";
  footer.counterAxisAlignItems = "CENTER";
  footer.paddingTop = 0;
  footer.paddingBottom = 0;

  // Left side with logo and text
  const leftSection = figma.createFrame();
  leftSection.name = "Left Section";
  leftSection.layoutMode = "HORIZONTAL";
  leftSection.primaryAxisSizingMode = "AUTO";
  leftSection.counterAxisSizingMode = "AUTO";
  leftSection.fills = [];
  leftSection.itemSpacing = 16;
  leftSection.counterAxisAlignItems = "CENTER";

  // Add logo
  const logo = await figma.createImageAsync(LOGO_BASE64);
  const logoSize = await logo.getSizeAsync();
  const logoParent = figma.createFrame();
  logoParent.resize(logoSize.width, logoSize.height);
  logoParent.fills = [
    { type: "IMAGE", scaleMode: "FILL", imageHash: logo.hash },
  ];
  logoParent.name = "Logo";

  const textContainer = figma.createFrame();
  textContainer.name = "Text Container";
  textContainer.layoutMode = "VERTICAL";
  textContainer.primaryAxisSizingMode = "AUTO";
  textContainer.counterAxisSizingMode = "AUTO";
  textContainer.fills = [];
  textContainer.itemSpacing = 4;

  const madeWithText = figma.createText();
  madeWithText.characters = "Made by Shades Plugin";
  madeWithText.fontSize = 18;
  madeWithText.fontName = { family: "Inter", style: "Regular" };

  const websiteText = figma.createText();
  websiteText.characters = "shades.toolstack.run";
  websiteText.fontSize = 18;
  websiteText.fills = [{ type: "SOLID", color: { r: 0.42, g: 0.45, b: 0.49 } }];
  websiteText.fontName = { family: "Inter", style: "Regular" };

  textContainer.appendChild(madeWithText);
  textContainer.appendChild(websiteText);

  leftSection.appendChild(logoParent);
  leftSection.appendChild(textContainer);

  // Right side with plugin link
  const pluginLink = figma.createFrame();
  pluginLink.name = "Plugin Link Container";
  pluginLink.layoutMode = "HORIZONTAL";
  pluginLink.primaryAxisSizingMode = "AUTO";
  pluginLink.counterAxisSizingMode = "AUTO";
  pluginLink.fills = [{ type: "SOLID", color: { r: 0.42, g: 0.45, b: 0.49 } }];
  pluginLink.cornerRadius = 8;
  pluginLink.paddingLeft = 24;
  pluginLink.paddingRight = 24;
  pluginLink.paddingTop = 12;
  pluginLink.paddingBottom = 12;

  const linkText = figma.createText();
  linkText.characters = "See Shades Plugin";
  linkText.fontSize = 18;
  linkText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  linkText.fontName = { family: "Inter", style: "Medium" };
  linkText.textDecoration = "NONE";
  linkText.hyperlink = {
    type: "URL",
    value: FIGMA_PLUGIN_URL,
  };

  pluginLink.appendChild(linkText);

  footer.appendChild(leftSection);
  footer.appendChild(pluginLink);

  return footer;
};

const createPaletteFrame = async (props: Props) => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
      figma.loadFontAsync({
        family: "Inter",
        style: "Semi Bold",
      }),
      figma.loadFontAsync({
        family: "Inter",
        style: "Regular",
      }),
      figma.loadFontAsync({
        family: "Inter",
        style: "Medium",
      }),
    ]);
  }

  // load fonts
  await loadFonts();

  const title = props.title;
  const name = `palette-${props.id}`;
  const description = props.description;
  // remove if already exists
  const existingFrame = figma.currentPage.findChild(
    (child) => child?.name === name
  );
  if (existingFrame) {
    existingFrame.remove();
  }

  // get latest frame
  let x, y;
  if (figma.currentPage.children.length > 0) {
    const latestFrame =
      figma.currentPage.children[figma.currentPage.children.length - 1];
    x = latestFrame.x + latestFrame.width + 100;
    y = latestFrame.y;
  } else {
    // Default values when there are no frames
    x = 0;
    y = 0;
  }

  const frame = figma.createFrame();
  frame.fills = [
    {
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
      },
    },
  ];
  frame.name = name;
  frame.x = x;
  frame.y = y;
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.resize(width, frame.height);
  frame.paddingLeft = framePadding;
  frame.paddingRight = framePadding;
  frame.paddingTop = framePadding;
  frame.paddingBottom = framePadding;
  frame.itemSpacing = 80; // Changed from 78 to 80
  // center items
  frame.primaryAxisAlignItems = "MIN";
  // center content
  frame.counterAxisAlignItems = "CENTER";

  // head
  const head = figma.createFrame();
  head.fills = [];
  head.name = "Head";
  head.layoutMode = "VERTICAL";
  head.primaryAxisSizingMode = "AUTO";
  head.counterAxisSizingMode = "FIXED";
  head.layoutAlign = "STRETCH";
  head.itemSpacing = 24;
  head.fills = [];
  head.clipsContent = false;

  // create title directly in head
  const titleText = figma.createText();
  titleText.name = "Title";
  titleText.characters = "Color Styles";
  titleText.fontSize = 48;
  titleText.fontName = { family: "Inter", style: "Semi Bold" };
  titleText.layoutAlign = "STRETCH"; // Make text fill container
  head.appendChild(titleText);

  // sub title directly in head
  const subTitleText = figma.createText();
  subTitleText.name = "Sub Title";
  subTitleText.characters = props.description || "Made With Shades Plugin.";
  subTitleText.fontSize = 20;
  subTitleText.layoutAlign = "STRETCH"; // Make text fill container
  subTitleText.fills = [
    {
      type: "SOLID",
      color: {
        r: 0.42,
        g: 0.45,
        b: 0.49,
      },
    },
  ];
  subTitleText.fontName = { family: "Inter", style: "Regular" };
  head.appendChild(subTitleText);

  // status section directly in head
  const statusFrame = figma.createFrame();
  statusFrame.name = "Status";
  statusFrame.layoutMode = "VERTICAL";
  statusFrame.primaryAxisSizingMode = "AUTO";
  statusFrame.counterAxisSizingMode = "FIXED";
  statusFrame.layoutAlign = "STRETCH"; // Make status frame fill container
  statusFrame.itemSpacing = 8;
  statusFrame.fills = [];
  statusFrame.visible = false;

  const createStatus = (text: string) => {
    const frame = figma.createFrame();
    statusFrame.visible = true;
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.itemSpacing = 8;
    frame.fills = [];
    frame.counterAxisAlignItems = "CENTER";
    frame.layoutAlign = "STRETCH"; // Make status items fill container

    const check = figma.createText();
    check.characters = "✅";
    check.fontSize = 20;

    const label = figma.createText();
    label.characters = text;
    label.fontSize = 20;
    label.fills = [{ type: "SOLID", color: { r: 0.42, g: 0.45, b: 0.49 } }];
    label.fontName = { family: "Inter", style: "Regular" };

    frame.appendChild(check);
    frame.appendChild(label);
    return frame;
  };

  if (props.addToStyles) {
    statusFrame.appendChild(createStatus("Added colors To styles"));
    statusFrame.appendChild(createStatus("Added color To Variable"));
  }

  head.appendChild(statusFrame);
  frame.appendChild(head);

  frame.appendChild(head);

  // dash line
  const dashLine = figma.createLine();
  frame.appendChild(dashLine);
  dashLine.name = "Dash Line";
  dashLine.strokeWeight = 1;
  dashLine.dashPattern = [10, 10];
  dashLine.strokes = [
    {
      type: "SOLID",
      color: {
        r: 0.72,
        g: 0.77,
        b: 0.85,
      },
    },
  ];
  dashLine.layoutAlign = "STRETCH";

  // focus on frame
  figma.viewport.scrollAndZoomIntoView([frame]);

  const createColorBox = (type: string, color: string, shade_code: string) => {
    const rgb_color = convertHexToRgbRange(color);
    const rgb_text = `${Math.round(rgb_color[0] * 255)}, ${Math.round(
      rgb_color[1] * 255
    )}, ${Math.round(rgb_color[2] * 255)}`;

    const box = figma.createFrame();
    box.name = `${type}/${shade_code} ${color}`;
    box.resize(280, 190);
    box.layoutMode = "VERTICAL";
    box.primaryAxisSizingMode = "AUTO";
    box.counterAxisSizingMode = "AUTO";
    box.fills = [];
    box.cornerRadius = 12;
    // Add border
    box.strokes = [
      {
        type: "SOLID",
        color: { r: 0.89, g: 0.89, b: 0.89 }, // #E3E3E3
      },
    ];
    box.strokeWeight = 1;

    box.fills = [
      {
        type: "SOLID",
        color: {
          r: rgb_color[0],
          g: rgb_color[1],
          b: rgb_color[2],
        },
      },
    ];

    // rect
    const rect = figma.createFrame();
    box.appendChild(rect);
    rect.resize(200, 110);
    rect.name = "Color";
    rect.layoutMode = "VERTICAL";
    rect.primaryAxisSizingMode = "FIXED";
    rect.counterAxisSizingMode = "FIXED";
    rect.primaryAxisAlignItems = "CENTER";
    rect.counterAxisAlignItems = "CENTER";
    rect.itemSpacing = 4;

    rect.fills = [
      {
        type: "SOLID",
        color: {
          r: rgb_color[0],
          g: rgb_color[1],
          b: rgb_color[2],
        },
      },
    ];

    const colorLuminance = getLuminance(
      Math.round(rgb_color[0] * 255),
      Math.round(rgb_color[1] * 255),
      Math.round(rgb_color[2] * 255)
    );
    const whiteLuminance = getLuminance(255, 255, 255);
    const contrastRatio = getContrastRatio(colorLuminance, whiteLuminance);

    const isBrightColor = isBright(
      Math.round(rgb_color[0] * 255),
      Math.round(rgb_color[1] * 255),
      Math.round(rgb_color[2] * 255)
    );

    const textColor = isBrightColor
      ? { r: 0, g: 0, b: 0 }
      : { r: 1, g: 1, b: 1 };

    const contrastNumber = figma.createText();
    contrastNumber.characters = contrastRatio.toFixed(2);
    contrastNumber.fontSize = 24;
    contrastNumber.fontName = { family: "Inter", style: "Semi Bold" };
    contrastNumber.fills = [{ type: "SOLID", color: textColor }];

    const contrastLabel = figma.createText();
    contrastLabel.characters = "Contrast ratio";
    contrastLabel.fontSize = 14;
    contrastLabel.fontName = { family: "Inter", style: "Regular" };
    contrastLabel.fills = [{ type: "SOLID", color: textColor, opacity: 0.5 }];

    rect.appendChild(contrastNumber);
    rect.appendChild(contrastLabel);

    // bottom frame
    const bottomFrame = figma.createFrame();
    box.appendChild(bottomFrame);
    // stretch
    bottomFrame.resize(200, 100); // Increased height to accommodate RGB value
    bottomFrame.layoutMode = "VERTICAL";
    bottomFrame.itemSpacing = 4; // Reduced spacing
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
    colorCode.fills = [
      {
        type: "SOLID",
        color: {
          r: 0.42,
          g: 0.45,
          b: 0.49,
        },
      },
    ];

    // Add RGB value
    const rgbText = figma.createText();
    bottomFrame.appendChild(rgbText);
    rgbText.name = "RGB Value";
    rgbText.characters = `rgb(${rgb_text})`;
    rgbText.fontSize = 14;
    rgbText.fontName = { family: "Inter", style: "Regular" };
    rgbText.fills = [
      {
        type: "SOLID",
        color: {
          r: 0.42,
          g: 0.45,
          b: 0.49,
        },
      },
    ];

    return box;
  };

  const createColorList = (
    name: string,
    type: string,
    colors: Record<string, string>
  ) => {
    const colorList = figma.createFrame();
    colorList.name = name;
    colorList.layoutMode = "VERTICAL";
    colorList.primaryAxisSizingMode = "AUTO";
    colorList.counterAxisSizingMode = "FIXED";
    colorList.layoutAlign = "STRETCH"; // Make it fill container width
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
    head.fills = [];
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
    typeText.fills = [
      {
        type: "SOLID",
        color: {
          r: 0.92,
          g: 1,
          b: 0.96,
        },
      },
    ];
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
    typeText.strokes = [
      {
        type: "SOLID",
        color: {
          r: 0.09,
          g: 0.69,
          b: 0.41,
        },
      },
    ];
    typeText.resize(120, 38);
    // center
    typeText.counterAxisAlignItems = "CENTER";

    // create type
    const _type = figma.createText();
    _type.name = "Type";
    _type.characters = type;
    _type.fontSize = 18;
    _type.fontName = { family: "Inter", style: "Medium" };
    _type.fills = [
      {
        type: "SOLID",
        color: {
          r: 0.09,
          g: 0.69,
          b: 0.41,
        },
      },
    ];

    typeText.appendChild(_type);

    // set parent
    head.appendChild(typeText);
    colorList.appendChild(head);

    // colors
    const colorFrame = figma.createFrame();
    colorFrame.name = "Colors";
    colorFrame.layoutMode = "HORIZONTAL";
    colorFrame.primaryAxisSizingMode = "FIXED";
    colorFrame.counterAxisSizingMode = "AUTO";
    colorFrame.layoutAlign = "STRETCH"; // Make it fill container width
    colorFrame.itemSpacing = 32;
    colorFrame.fills = [];
    colorFrame.clipsContent = false;
    colorFrame.layoutWrap = "WRAP";
    colorFrame.counterAxisSpacing = 32;

    // create color boxes
    // sort from 950 to 50
    const colorsEntries = Object.entries(colors).sort(
      (a, b) => parseInt(b[0]) - parseInt(a[0])
    );
    for (const [shade_code, color] of colorsEntries) {
      const colorBox = createColorBox(type, color, shade_code);
      colorFrame.appendChild(colorBox);
    }
    colorList.appendChild(colorFrame);
    return colorList;
  };

  const colorsFrame = figma.createFrame();
  frame.appendChild(colorsFrame);
  colorsFrame.name = "Base Colors";
  colorsFrame.layoutMode = "VERTICAL";
  colorsFrame.primaryAxisSizingMode = "AUTO";
  colorsFrame.counterAxisSizingMode = "AUTO";
  colorsFrame.layoutAlign = "STRETCH";
  colorsFrame.itemSpacing = 80; // Changed from 48 to 80
  colorsFrame.fills = [];
  colorsFrame.clipsContent = false;

  // Use keyAsLabel if true, otherwise use predefined order
  const allColorKeys = props.keyAsLabel
    ? Object.keys(props.palette)
    : [
        "primary",
        "secondary",
        "neutral",
        "success",
        "error",
        "warning",
        "info",
      ];

  // Create color lists for all colors that exist in the palette
  for (const key of allColorKeys) {
    const colorObj = props.palette?.[key];
    if (colorObj) {
      const colorList = createColorList(colorObj.name, key, colorObj.shades);
      colorsFrame.appendChild(colorList);
    }
  }

  const separator = figma.createLine();
  separator.name = "Separator";
  separator.strokeWeight = 1;
  separator.dashPattern = [10, 10];
  separator.strokes = [
    {
      type: "SOLID",
      color: {
        r: 0.72,
        g: 0.77,
        b: 0.85,
      },
    },
  ];
  separator.layoutAlign = "STRETCH";
  frame.appendChild(separator);

  const footer = await createFooter();
  frame.appendChild(footer);

  // focus on frame
  figma.viewport.scrollAndZoomIntoView([frame]);

  const allColorsKeys = props.keyAsLabel
    ? Object.values(props.palette).map((color) =>
        color.name.toLowerCase().replaceAll(" ", "-")
      )
    : [
        "primary",
        "secondary",
        "neutral",
        "success",
        "error",
        "warning",
        "info",
      ];
  const findColorRealKeyByName = (_name: string) => {
    return Object.values(props.palette).find(
      (color) => color.name.toLowerCase().replaceAll(" ", "-") === _name
    )?.hex;
  };
  // generate styles
  const generateStyles = async () => {
    // name format: type/shade_code color
    for (const colorKey of allColorsKeys) {
      const key = findColorRealKeyByName(colorKey);
      if (!key) {
        console.error(`Color key not found for ${colorKey}`);
        continue;
      }

      const colorObj = props.palette[key];
      for (const [shade_code, color] of Object.entries(colorObj.shades)) {
        const styleName = `${colorKey}/${shade_code} ${color}`;
        const style = figma.createPaintStyle();
        style.name = styleName;
        const rgb_color = convertHexToRgbRange(color);
        style.paints = [
          {
            type: "SOLID",
            color: {
              r: rgb_color[0],
              g: rgb_color[1],
              b: rgb_color[2],
            },
          },
        ];
      }
    }
  };
  const generateVariables = async () => {
    const collectionId = `${props.id}-palette`;
    const collections =
      await figma.variables.getLocalVariableCollectionsAsync();
    const collection =
      collections.find((collection) => collection.name === collectionId) ??
      figma.variables.createVariableCollection(collectionId);
    for (const colorKey of allColorsKeys) {
      const key = findColorRealKeyByName(colorKey);
      if (!key) {
        console.error(`Color key not found for ${colorKey}`);
        continue;
      }

      const colorObj = props.palette[key];
      for (const [shade_code, color] of Object.entries(colorObj.shades)) {
        // check exists
        const exists = await figma.variables.getVariableByIdAsync(
          `${colorKey}/${shade_code}`
        );
        if (exists) {
          continue;
        }
        try {
          const v = figma.variables.createVariable(
            `${colorKey}/${shade_code}`,
            collection,
            "COLOR"
          );
          const rgb = convertHexToRgbRange(color);
          v.setValueForMode(collection.modes[0].modeId, {
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
  };
  const settings = (await figma.clientStorage.getAsync(
    "settings"
  )) as PluginSettings | null;
  const addToStyle = settings?.addToStyle ?? true;
  const addToVariables = !!settings?.addToVariables;
  if (addToStyle && props.addToStyles) {
    await generateStyles();
    figma.notify("Palette Styles Created 🎉");
    if (addToVariables) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
  if (addToVariables && props.addToStyles) {
    await generateVariables();
    figma.notify("Palette Variables Created 🎉");
  }
};

export default createPaletteFrame;
