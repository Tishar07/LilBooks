function CarouselImage({ text, image }) {
  return (
    <img
      className="d-block w-100"
      src={image}
      alt={text}
      style={{
        height: "550px",
        objectFit: "cover"
      }}
    />
  );
}

export default CarouselImage;