import React from "react";
import { SymbolCardForFunctional } from "../src/component/SymbolCardForFunctional";

export default { title: "SymbolCardForFunctional" };

export const noText = () => <SymbolCardForFunctional></SymbolCardForFunctional>;

export const withMessage = () => <SymbolCardForFunctional message="ホゲホゲ"></SymbolCardForFunctional>;
