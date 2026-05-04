import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  const res = await fetch("https://pixgen-cs.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find(p => p.id == id)



  return <div>
  <div className="my-8">
   <h1 className="text-3xl font-bold">{photo.title}</h1>
   <p>Created: {photo.createdAt}</p>
   <p>Resolution: {photo.resolution}</p>
   <p>Model:  {photo.model}</p>
   <p>Photo Category: {photo.category}</p>
   <p>Generated Prompt: {photo.prompt}</p>
  </div>
  </div>;
};

export default PhotoDetailsPage;
