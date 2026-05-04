import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaHeart } from "react-icons/fa";

const photoCard = ({ photo }) => {
  // console.log(photo);
  return (
    <Card className="border hover:shadow-2xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl"
        />
        <Chip className="absolute right-2 top-2">{photo.category}</Chip>
      </div>
      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-1.5">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <p>
            <FaDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
   <Link href={`all-photos/${photo.id}`}>
       <Button variant="outline" className={"w-full"}>
        View Details
      </Button>
   </Link>
    </Card>
  );
};

export default photoCard;
