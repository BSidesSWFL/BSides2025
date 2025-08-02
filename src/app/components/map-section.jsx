export default function MapSection() {
  return (
    <section className="mb-36 xl:mb-40 2xl:mb-42">
      <h2 className="text-2xl font-bold text-center mb-6 text-orange-900">Conference Location</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.2674212044669!2d-81.8864846187229!3d26.55230718082615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db3fed6a955bfb%3A0x71f6c1303d5438f8!2sBuilding%20K%20(Hendry%20Hall)!5e0!3m2!1sen!2sus!4v1751758080377!5m2!1sen!2sus"
          width="100%"
          height="300"
          className="rounded-xl shadow-lg transition-transform duration-700 max-w-3xl"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Florida SouthWestern State College Map"
        ></iframe>
      </div>
    </section>
  );
} 