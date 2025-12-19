export default function MapSection() {
  return (
    <section className="mb-48 xl:mb-52 2xl:mb-56">
      <h2 className="text-2xl font-bold text-center mb-6 text-orange-900">Conference Location</h2>
      <div className="flex justify-center">
        <iframe
          src="https://maps.google.com/maps?q=Building+U%2C+8099+College+Parkway+Fort+Myers%2C+FL+33914&z=17&output=embed"
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
      <h3 className="text-lg font-bold text-center mt-6 text-orange-900">Parking Available at Lots 10, 11, 12</h3>
    </section>
  );
} 