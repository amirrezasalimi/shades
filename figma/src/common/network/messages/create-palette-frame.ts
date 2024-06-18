import createPaletteFrame from "../../../ui/shared/utils/palette-frame";
import * as Networker from "monorepo-networker";
import { NetworkSide } from "../sides";
import { Palette } from "@common/models/palette";

interface Payload {
    palette?: object
}

export class CreatePalette extends Networker.MessageType<Payload> {

    receivingSide(): Networker.Side {
        return NetworkSide.PLUGIN;
    }

    handle(payload: Payload, from: Networker.Side) {
        const colors = {
            "primary": {
                "50": "#F5FDFF",
                "100": "#EDFBFF",
                "200": "#CFF0FC",
                "300": "#B1E3FA",
                "400": "#79C7F7",
                "500": "#42a5f5",
                "600": "#358BDB",
                "700": "#256CB8",
                "800": "#184D94",
                "900": "#0D346E",
                "950": "#061D47"
            },
            "secondary": {
                "50": "#F5FCFF",
                "100": "#E6F7FC",
                "200": "#C3E9FA",
                "300": "#9FD8F5",
                "400": "#5CB3ED",
                "500": "#1e88e5",
                "600": "#1974CF",
                "700": "#1159AB",
                "800": "#0B428A",
                "900": "#062B66",
                "950": "#031942"
            },
            "neutral": {
                "50": "#F7F9FA",
                "100": "#F2F6F7",
                "200": "#E1E9EB",
                "300": "#CEDADE",
                "400": "#AFC0C7",
                "500": "#90a4ae",
                "600": "#758D9C",
                "700": "#516D82",
                "800": "#345069",
                "900": "#1D354F",
                "950": "#0C1D33"
            },
            "background": {
                "50": "#FFFFFF",
                "100": "#FCFEFF",
                "200": "#FAFEFF",
                "300": "#F5FCFF",
                "400": "#EBF6FC",
                "500": "#e3f2fd",
                "600": "#B8D0E3",
                "700": "#7E9FBD",
                "800": "#517296",
                "900": "#2E4B73",
                "950": "#13284A"
            },
            "text": {
                "50": "#F5F7F7",
                "100": "#E6ECED",
                "200": "#C5D0D4",
                "300": "#A2B2B8",
                "400": "#697D85",
                "500": "#37474f",
                "600": "#2D3E47",
                "700": "#1E2F3B",
                "800": "#142330",
                "900": "#0B1724",
                "950": "#050D17"
            }
        };
        const mockPalette: Palette = {
            primary: {
                name: "dark blue",
                hex: "#42a5f5",
                shades: {
                    50: "#F5FDFF",
                    100: "#EDFBFF",
                    200: "#CFF0FC",
                    300: "#B1E3FA",
                    400: "#79C7F7",
                    500: "#42a5f5",
                    600: "#358BDB",
                    700: "#256CB8",
                    800: "#184D94",
                    900: "#0D346E",
                    950: "#061D47"
                }
            },
            secondary: {
                name: "blue",
                hex: "#1e88e5",
                shades: {
                    50: "#F5FCFF",
                    100: "#E6F7FC",
                    200: "#C3E9FA",
                    300: "#9FD8F5",
                    400: "#5CB3ED",
                    500: "#1e88e5",
                    600: "#1974CF",
                    700: "#1159AB",
                    800: "#0B428A",
                    900: "#062B66",
                    950: "#031942"
                }
            },
            neutral: {
                name: "grey",
                hex: "#90a4ae",
                shades: {
                    50: "#F7F9FA",
                    100: "#F2F6F7",
                    200: "#E1E9EB",
                    300: "#CEDADE",
                    400: "#AFC0C7",
                    500: "#90a4ae",
                    600: "#758D9C",
                    700: "#516D82",
                    800: "#345069",
                    900: "#1D354F",
                    950: "#0C1D33"
                }
            },
            background: {
                name: "light blue",
                hex: "#e3f2fd",
                shades: {
                    50: "#FFFFFF",
                    100: "#FCFEFF",
                    200: "#FAFEFF",
                    300: "#F5FCFF",
                    400: "#EBF6FC",
                    500: "#e3f2fd",
                    600: "#B8D0E3",
                    700: "#7E9FBD",
                    800: "#517296",
                    900: "#2E4B73",
                    950: "#13284A"
                }
            },
            text: {
                name: "dark grey",
                hex: "#37474f",
                shades: {
                    50: "#F5F7F7",
                    100: "#E6ECED",
                    200: "#C5D0D4",
                    300: "#A2B2B8",
                    400: "#697D85",
                    500: "#37474f",
                    600: "#2D3E47",
                    700: "#1E2F3B",
                    800: "#142330",
                    900: "#0B1724",
                    950: "#050D17"
                }
            },
        };
        createPaletteFrame({
            id: "nvhuc746fb",
            palette: mockPalette,
            title: "Amazon Tree",
            description: "This color palette for 'Amazon Tree' is inspired by the lush greenery of the rainforest. The primary and secondary shades represent the vibrant foliage, while the neutral tone mimics the earthy tones of the tree bark. The success color symbolizes growth, while the error color signifies danger. The warning color represents caution, and the info color reflects the tranquility of nature. The white background highlights the colors, and the black text ensures readability."
        });
    }
}
