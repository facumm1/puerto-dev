import {useState} from 'react';
import {ChevronLeft, ChevronRight, ExternalLink} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {useLanguage} from '@/hooks/use-language';
import {getTranslations} from '@/lib/i18n';
import {Modal} from './ui/modal';

export function PortfolioSection() {
  const {language} = useLanguage();
  const t = getTranslations(language);

  const [activeSlide, setActiveSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [activeProject, setActiveProject] = useState<any | null>(null);

  const projects = [
    {
      title: t.projects.dosArroyosMobile.title,
      description: t.projects.dosArroyosMobile.description,
      image: '/dos-arroyos-mobile.png',
      tags: ['React Native', 'Firebase'],
      styles: 'scale-100 bg-black/40',
      videoId: 'DFxRTq4r2M0',
    },
    {
      title: t.projects.dosArroyosWeb.title,
      description: t.projects.dosArroyosWeb.description,
      image: '/dos-arroyos-web.png',
      tags: ['React.js', 'Firebase'],
      styles: 'scale-120 bg-black/40',
      videoId: 'ohoPSuTOEdQ',
    },
    {
      title: t.projects.puertoRanaCatalogo.title,
      description: t.projects.puertoRanaCatalogo.description,
      image: '/puerto-rana-menu.png',
      tags: ['Next.js', 'Tailwind', 'Python', 'AWS', 'Firebase'],
      href: 'https://puerto-rana.vercel.app',
      styles: 'scale-100 bg-black/40',
    },
    {
      title: t.projects.puertoRanaGestion.title,
      description: t.projects.puertoRanaGestion.description,
      image: '/puerto-rana-admin.png',
      tags: ['React.js', 'Tailwind', 'Python', 'AWS', 'Firebase'],
      styles: 'scale-100 bg-black/40',
      slideshow: [
        '/rana-admin-1.png',
        '/rana-admin-2.png',
        '/rana-admin-3.png',
        '/rana-admin-4.png',
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <>
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/80 mt-4 cursor-pointer backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
                onClick={() => {
                  if (project.videoId || project.slideshow) {
                    setActiveProject(project);
                    setOpenModal(true);
                  } else if (project.href) {
                    window.open(project.href, '_blank', 'noopener,noreferrer');
                  }
                }}>
                <div className="relative overflow-hidden opacity-80">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className={`${project.styles} w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
              {activeProject?.videoId && (
                <div className="w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeProject.videoId}`}
                    title={activeProject.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {activeProject?.slideshow && (
                <div className="relative w-full max-h-[80vh] flex items-center justify-center group">
                  <img
                    src={activeProject.slideshow[activeSlide]}
                    alt={`Slide ${activeSlide}`}
                    className="rounded-lg max-w-full max-h-full object-contain"
                  />

                  <button
                    className="absolute cursor cursor-pointer left-2 sm:left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() =>
                      setActiveSlide(
                        (activeSlide - 1 + activeProject.slideshow!.length) %
                          activeProject.slideshow!.length,
                      )
                    }>
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    className="absolute cursor cursor-pointer right-2 sm:right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 "
                    onClick={() =>
                      setActiveSlide(
                        (activeSlide + 1) % activeProject.slideshow!.length,
                      )
                    }>
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {activeSlide + 1} / {activeProject.slideshow.length}
                  </div>
                </div>
              )}
            </Modal>
          </>
        </div>
      </div>
    </section>
  );
}
