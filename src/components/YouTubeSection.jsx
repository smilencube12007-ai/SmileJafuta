function YouTubeSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[629px]">
       
        <div className="relative aspect-video w-full overflow-hidden">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/KgB8FFUXh0U"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default YouTubeSection;