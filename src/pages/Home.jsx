
import { Hero } from "../components/Hero"
import { Popular } from "../components/popular"
import { NewsLetter } from "./NewsLetter"
import { NewCollections } from "./NewCollections"
import { Offer } from "./Offer"

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections/>
      <NewsLetter />
    </>
  );
}
