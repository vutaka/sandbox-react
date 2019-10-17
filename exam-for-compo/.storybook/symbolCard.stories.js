import React from "react";
import { SymbolCard } from "../src/component/SymbolCard";

export default { title: "SymbolCard" };

export const noText = () => <SymbolCard></SymbolCard>;

export const withMessage = () => <SymbolCard message="ホゲホゲ"></SymbolCard>;
