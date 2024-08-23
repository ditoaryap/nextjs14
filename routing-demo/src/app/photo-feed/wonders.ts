import { StaticImageData } from "next/image";
import photo1 from "./photos/Image1.jpg";
import photo2 from "./photos/Image2.jpg";
import photo3 from "./photos/Image3.jpg";
import photo4 from "./photos/Image4.jpg";
import photo5 from "./photos/Image5.jpg";
import photo6 from "./photos/Image6.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

 const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "test1",
        src: photo1,
        photographer: "test1",
        location: "test1"
    },
    {
        id: "2",
        name: "test2",
        src: photo2,
        photographer: "test2",
        location: "test2"
    },
    {
        id: "3",
        name: "test3",
        src: photo3,
        photographer: "test3",
        location: "test3"
    },
    {
        id: "4",
        name: "test4",
        src: photo4,
        photographer: "test4",
        location: "test4"
    },
    {
        id: "5",
        name: "test5",
        src: photo5,
        photographer: "test5",
        location: "test5"
    },
    {
        id: "6",
        name: "test6",
        src: photo6,
        photographer: "test6",
        location: "test6"
    }
];


export default wondersImages