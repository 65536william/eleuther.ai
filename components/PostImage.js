import Image from "next/image";

export default function PostImage({ source, alt, width, height }) {
  return (
    <Image
      src={source}
      alt={alt || "no alt"}
      layout="responsive"
      width={width}
      height={height}
    />
  );
}
