interface TruncatedTitleProps {
    title: string;
    maxLength: number;
}

export default function TruncatedText({ title, maxLength }:TruncatedTitleProps) {
    const truncateString = (str: string, maxLen: number): string => {
        if (str.length > maxLen) {
            return str.slice(0, maxLen - 3) + '...';
        }
        return str;
    };

    return <>{truncateString(title, maxLength)}</>;
};
