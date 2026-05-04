import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-cs.vercel.app/data.json");
  const photos = await res.json();
  // console.log(photos, 'photos');
  const topPhotos = photos.slice(0, 8);
  // console.log(topPhotos, "topPhotos");
  return (
    <div>
      <h1 className="text-2xl font-bold my-7">Top Generations</h1>
      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
