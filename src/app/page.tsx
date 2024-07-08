import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-900 lg:pb-20 pb-16 lg:pt-2 overflow-hidden md:grid md:place-items-center">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:mt-0">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-48 lg:max-w-none lg:mx-0 lg:px-0">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="pb-3 block sm:pb-5">Quakemap</span>
            </h1>
            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Your free real-time global earthquake tracker and news source.
              Download now to explore the latest earthquakes and stay updated on
              earthquakes news worldwide, all on your smartphone.
            </p>
            <br />
            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Available for Android on the Google Play store.
            </p>
            <div className="mt-10 sm:mt-12">
              <div className="grid grid-cols-3">
                <Link target="_blank" rel="noopener noreferrer" href="#">
                  <Image
                    src="/badge_google_play.png"
                    alt="Get it on Google Play."
                    width={564}
                    height={168}
                    layout="responsive"
                    objectFit="cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-2 lg:mt-0">
            <div className="lg:px-0 lg:m-0 lg:relative lg:h-full pl-4 pr-4 sm:pl-6 sm:pr-6">
              <Image
                src="/app_cover.png"
                alt=""
                className="w-full xl:absolute xl:h-full xl:w-auto xl:max-w-none xl:left-0"
                width={2255}
                height={2979}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
