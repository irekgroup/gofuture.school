import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">GO FUTURE SCHOOL</h1>
        <p class="text-xl max-w-lg text-blue-100">
          Domain for sale
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a 
          onclick="ym(96899435,'reachGoal','https://t.me/nizamov4')"
          href="https://t.me/nizamov4"
          class="block mt-4 text-blue-600 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Offer a price{" "}
        </a>
      </div>
    </div>
  );
}
