import SEOHead from '@/react-app/components/SEOHead';
import { Clock } from 'lucide-react';
import { useBooking } from '@/react-app/hooks/useBooking';
import { useLanguage } from '@/react-app/hooks/useLanguage';

export default function MassatgePage() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const benefits = [
    t('massage.benefits.pain'),
    t('services.massage.subtitle'),
    t('massage.benefits.circulation'),
    t('massage.benefits.wellbeing')
  ];

  const testimonials = [
    {
      name: 'Maria S.',
      text: t('massage.testimonial.1.text'),
      rating: 5
    },
    {
      name: 'Jordi M.',
      text: t('massage.testimonial.2.text'),
      rating: 5
    }
  ];

  const durations = [60, 90, 120];

  return (
    <>
      <SEOHead
        title={t('seo.massage.title')}
        description={t('seo.massage.description')}
        keywords={t('seo.massage.keywords')}
      />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
                <span className="text-orange-700 font-medium text-sm">{t('massage.hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                {t('massage.page.title')}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('massage.page.subtitle')}
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('massage.page.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateToBooking()}
                  className="bg-[#FFB405] hover:bg-[#e8a204] text-[000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
                >
                  {t('common.bookNow')}
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sessió de massatge terapèutic professional en ambient relaxant"
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">{t('massage.page.availableToday')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('massage.page.bookSession')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('massage.page.fillForm')}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigateToBooking()}
              className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t('common.bookNow')}
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('massage.page.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('massage.page.benefitsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-orange-50 rounded-2xl">
                <div className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            {t('massage.page.durationsTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {t('massage.page.durationsSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {durations.map((duration) => (
              <div key={duration} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {duration} {t('common.minutes') || 'min'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {duration === 60 ? t('massage.page.duration60') :
                    duration === 90 ? t('massage.page.duration90') :
                      t('massage.page.duration120')}
                </p>
                <button
                  onClick={() => navigateToBooking()}
                  className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold py-3 rounded-full transition-colors duration-200"
                >
                  {t('common.bookNow')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('massage.page.testimonialsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-orange-50 rounded-3xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            {t('services.readyToStart')}
          </h2>
          <p className="text-xl mb-8">
            {t('services.contactUsToBook')}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigateToBooking()}
              className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              {t('common.bookNow')}
            </button>
          </div>
        </div>
      </section>


    </>
  );
}
