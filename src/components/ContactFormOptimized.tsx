'use client';

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'react-hot-toast';
import { Send, MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  service: string;
  time: string;
  message: string;
  source: string;
  privacy: boolean;
}

export default function ContactFormOptimized() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Captcha State
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 10));
    setCaptchaNum2(Math.floor(Math.random() * 10));
    setCaptchaAnswer('');
    setIsCaptchaVerified(false);
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCaptchaAnswer(val);
    if (parseInt(val) === captchaNum1 + captchaNum2) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    if (!isCaptchaVerified) {
      toast.error(t('common.captchaError') || 'Please complete the verification check correctly.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setIsSuccess(true);
      toast.success(t('contact.success.title'));
      reset();
      generateCaptcha(); // Reset captcha for next time
    } catch (error) {
      console.error(error);
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.success.title')}</h2>
        <p className="text-xl text-gray-600 mb-8">{t('contact.success.message')}</p>
        <Button onClick={() => setIsSuccess(false)} variant="primary" size="lg">
          {t('contact.success.button')}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
          {/* Quick Contact Card */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              {t('contact.info.title')}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">WhatsApp / Telegram</p>
                  <a href="https://wa.me/34658867133" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +34 658 867 133
                  </a>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Available now
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:contact@ekabalance.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    contact@ekabalance.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Carrer Pelai, 12</p>
                  <p className="text-gray-600">08001 Barcelona</p>
                  <p className="text-xs text-gray-500 mt-1">Metro: Universitat (L1, L2)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t('contact.hours.title')}</p>
                  <p className="text-gray-600 text-sm">{t('contact.hours.weekdays')}</p>
                  <p className="text-gray-600 text-sm">{t('contact.hours.saturday')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder or Image */}
          <div className="bg-gray-100 rounded-[2rem] h-64 w-full relative overflow-hidden group border border-gray-200">
             {/* Use an actual map embed or image here. Using a placeholder for now matching design system */}
             <div className="absolute inset-0 bg-secondary flex items-center justify-center text-gray-400">
                <span className="flex items-center gap-2">
                   <MapPin className="w-5 h-5" />
                   Map View
                </span>
             </div>
             {/* You would typically put an iframe here */}
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.639722363064!2d2.1648!3d41.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3e8c0b0b1%3A0x123456789!2sCarrer%20de%20Pelai%2C%2012%2C%2008001%20Barcelona!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-blue-900/5 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('contact.form.title')}</h2>
              <p className="text-gray-500">Fill out the form below and we will get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">
                    {t('contact.form.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none placeholder:text-gray-400"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                  {errors.name && <span className="text-red-500 text-xs ml-1">Required</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">
                    {t('contact.form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none placeholder:text-gray-400"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {errors.email && <span className="text-red-500 text-xs ml-1">Valid email required</span>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none placeholder:text-gray-400"
                    placeholder="+34..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-gray-700 ml-1">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none text-gray-700"
                  >
                    <option value="">{t('contact.form.service.placeholder')}</option>
                    <option value="massage">{t('contact.service.massageBasic')}</option>
                    <option value="kinesiology">{t('contact.service.kinesiology')}</option>
                    <option value="vip">{t('contact.service.vip')}</option>
                    <option value="other">{t('contact.service.other')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: true })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none placeholder:text-gray-400 resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs ml-1">Required</span>}
              </div>

              {/* Robot Verification / CAPTCHA */}
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-2 text-blue-700 font-medium">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="whitespace-nowrap">Verify you are human:</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-700 bg-white px-3 py-1 rounded-lg border border-gray-200">
                    {captchaNum1} + {captchaNum2} = ?
                  </span>
                  <input
                    type="number"
                    value={captchaAnswer}
                    onChange={handleCaptchaChange}
                    className="w-20 px-3 py-2 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-center font-bold text-gray-900"
                    placeholder="?"
                  />
                  {isCaptchaVerified && (
                    <CheckCircle className="w-6 h-6 text-green-500 animate-in zoom-in duration-300" />
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="privacy"
                  type="checkbox"
                  {...register('privacy', { required: true })}
                  className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-500">
                  {t('contact.form.privacy')}
                </label>
              </div>
              {errors.privacy && <span className="text-red-500 text-xs ml-1 block">You must accept the privacy policy</span>}

              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting || !isCaptchaVerified}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('contact.form.submitting')}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {t('contact.form.submit')}
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
