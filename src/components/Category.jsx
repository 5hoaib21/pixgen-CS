import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const res = await fetch('https://pixgen-cs.vercel.app/category.json')
  const data = await res.json()
  // console.log(data);
  return (
    <div className="flex gap-3 mb-5">
      {
        data.map(category => <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}><Button variant="outline" >{category.name}</Button></Link>)
      }
    </div>
  );
};

export default Category;