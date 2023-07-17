import Image from "next/image";

export const Photo = ({ imagePath, city }: any): JSX.Element => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={imagePath}
        alt={city.label}
        fill={true}
        priority={true}
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
    </div>
  );
};
