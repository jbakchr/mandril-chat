const images = [
  { url: "bianca_landsvig.png", altText: "Bianca Landsvig" },
  { url: "broder_salsa.png", altText: "Broder Salsa" },
  { url: "david_hasselhof.png", altText: "David Hasselhof" },
  { url: "kenneth.png", altText: "Kenneth" },
  { url: "laughing_eagle.png", altText: "Laughing Eagle" },
];

export const AvatarImageList = () => {
  return (
    <div>
      {images.map((img) => {
        return (
          <img
            src={`/images/${img.url}`}
            alt={img.altText}
            style={{ width: "50px", borderRadius: "50%", margin: "3px" }}
          />
        );
      })}
    </div>
  );
};
