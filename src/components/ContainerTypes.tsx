import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContainerCard {
  size: string;
  baseImage: string;
  hoverImage: string;
}

const containers: ContainerCard[] = [
  {
    size: "Контейнер ~5 м²",
    baseImage: "", // Здесь подставить ссылку на baseImage
    hoverImage: "", // Здесь подставить ссылку на hoverImage
  },
  {
    size: "Контейнер ~15 м²",
    baseImage: "", // Здесь подставить ссылку на baseImage
    hoverImage: "", // Здесь подставить ссылку на hoverImage
  },
  {
    size: "Контейнер ~30 м²",
    baseImage: "", // Здесь подставить ссылку на baseImage
    hoverImage: "", // Здесь подставить ссылку на hoverImage
  },
];

export const ContainerTypes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {containers.map((container, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md overflow-hidden group transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Base Image */}
                <img
                  src={container.baseImage}
                  alt={container.size}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={container.hoverImage}
                  alt={`${container.size} hover`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-center text-foreground">
                  {container.size}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
