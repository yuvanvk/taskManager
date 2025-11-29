import { createContext } from "react";

export type Analyze = boolean

export type AnalyzeContextType = {
    analyzed: boolean,
    setAnalyzed: React.Dispatch<React.SetStateAction<Analyze>>;
}

export const AnalyzedContext = createContext<AnalyzeContextType>({
    analyzed: false,
    setAnalyzed: () => {}
});
