import { CSSProperties, MutableRefObject } from "react";
type Height = CSSProperties["height"];
export declare function useViewportHeight<D extends Element>(ref: MutableRefObject<D>): Height;
export {};
