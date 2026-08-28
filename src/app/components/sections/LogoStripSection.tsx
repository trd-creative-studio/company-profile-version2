import svgPaths from "@/imports/LandingPage/svg-v9p06c6ec9";
import imgImage69 from "@/imports/LandingPage/73badb023b5f7f2892c73f039b10d841ee60c5dc.png";
import { Marquee } from "../Marquee";

function GreenflagsLogo() {
  return (
    <div className="flex gap-[3.548px] h-[35.477px] items-center justify-center py-[2.371px]">
      <div className="h-[18.966px] relative w-[29.042px] shrink-0">
        <div className="absolute inset-[4.28%_6.87%_2.04%_0.35%]">
          <svg className="block size-full" fill="none" viewBox="0 0 26.9433 17.7662" preserveAspectRatio="none">
            <path d={svgPaths.p10973940} fill="#027967" />
          </svg>
        </div>
      </div>
      <span className="font-sans font-bold leading-[23.06px] text-[#027967] text-[17.738px] tracking-[0.0887px] whitespace-nowrap">Greenflags</span>
    </div>
  );
}

export function LogoSlot({ useImg }: { useImg: boolean }) {
  return (
    <div className="h-[56.814px] w-[149.248px] overflow-clip relative shrink-0 flex items-center justify-center">
      {useImg ? (
        <div className="absolute h-[32.916px] w-[113.6px]">
          <img alt="client logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage69} />
        </div>
      ) : (
        <GreenflagsLogo />
      )}
    </div>
  );
}

export function LogoStripSection() {
  const pattern = [true, false, true, false, true, false, true, false];
  return (
    <section className="bg-white w-full py-8 overflow-hidden flex" data-name="CTA Section">
      <Marquee speed={0.2} gap="gap-6">
        {pattern.map((useImg, i) => <LogoSlot key={`logo-${i}`} useImg={useImg} />)}
      </Marquee>
    </section>
  );
}
