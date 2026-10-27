const emphasisPattern = /(\*\*.+?\*\*|_.+?_)/;

type FormattedTextProps = {
  text: string;
};

export function FormattedText({ text }: FormattedTextProps) {
  return text.split(emphasisPattern).map((part, index) => {
    if (part.startsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("_")) {
      return (
        <em key={index} className="text-white/85">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}
