import Marquee from "react-fast-marquee";
export const MarqueeDesign = () => {
  return (
    <section className=" flex gap-2 bg-gray-100 p-3 text-xl mt-5">
        <p className="text-white bg-pink-700 px-3 py-1">Latest</p>
        <Marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, atque sed perspiciatis magnam neque itaque impedit
          dolores quas quam consectetur porro deleniti modi architecto
          doloremque repellat earum fugiat, temporibus dicta.
        </Marquee>
      </section>
  )
}
