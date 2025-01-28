export enum InfoTheme {
    GOOD = "good",
    NORMAL = "normal",
    BAD = "bad",
}

export interface InfoProps {
    theme?: InfoTheme;
    text: string;
    className?: string;
    error?: boolean;
}