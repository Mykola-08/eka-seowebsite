// Service Constants
import { ServiceItem, PersonalizedServiceItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'massatge',
    titleKey: 'services.massage.title',
    subtitleKey: 'services.massage.subtitle',
    descriptionKey: 'services.massage.description',
    iconName: 'Heart',
    color: 'orange',
    durations: [60, 90, 120],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9c3028eb2?auto=format&fit=crop&w=800',
    href: '/services/massage',
    benefitsKeys: ['services.benefits.reduces', 'services.benefits.stress', 'services.benefits.circulation', 'services.benefits.relaxation']
  },
  {
    id: 'kinesiologia',
    titleKey: 'services.kinesiology.title',
    subtitleKey: 'services.kinesiology.subtitle',
    descriptionKey: 'services.kinesiology.description',
    iconName: 'Brain',
    color: 'blue',
    durations: [60, 90],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
    href: '/services/kinesiology',
    benefitsKeys: ['services.benefits.blockages', 'services.benefits.posture', 'services.benefits.stress', 'services.benefits.energy']
  },
  {
    id: 'nutritio',
    titleKey: 'services.nutrition.title',
    subtitleKey: 'services.nutrition.subtitle', // Corrected key based on context
    descriptionKey: 'services.nutrition.description',
    iconName: 'Leaf',
    color: 'green',
    durations: [],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800',
    href: '/services/nutrition',
    benefitsKeys: ['services.benefits.habits', 'services.benefits.vitality', 'services.benefits.weight', 'services.benefits.longterm']
  },
  {
    id: 'revisio360',
    titleKey: 'services.revision360.title',
    subtitleKey: 'services.revision360.subtitle',
    descriptionKey: 'services.revision360.description',
    iconName: 'RotateCcw',
    color: 'purple',
    durations: [60, 90, 120],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800',
    href: '/360-revision',
    benefitsKeys: ['services.benefits.assessment', 'services.benefits.plan', 'services.benefits.recommendations', 'services.benefits.followup']
  },
  {
    id: 'suplements',
    titleKey: 'service.supplements.title',
    subtitleKey: 'nutrition.page.subtitle',
    descriptionKey: 'nutrition.page.description',
    iconName: 'Leaf',
    color: 'green',
    durations: [],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800',
    href: '/services/supplements',
    benefitsKeys: ['services.benefits.vitality', 'services.benefits.habits', 'services.benefits.energy', 'services.benefits.longterm']
  },
  {
    id: 'sistemica',
    titleKey: 'service.systemic.title',
    subtitleKey: 'kinesiology.page.subtitle',
    descriptionKey: 'kinesiology.page.description',
    iconName: 'Heart',
    color: 'pink',
    durations: [],
    image: 'https://images.unsplash.com/photo-1544367563-12123d8959d9?auto=format&fit=crop&w=800',
    href: '/services/systemic',
    benefitsKeys: ['services.benefits.blockages', 'services.benefits.stress', 'services.benefits.assessment', 'services.benefits.longterm']
  }
];

export const PERSONALIZED_SERVICES_DATA: PersonalizedServiceItem[] = [
  {
    id: 'office-workers',
    titleKey: 'personalizedServices.officeWorkers', // Офисные работники
    descriptionKey: 'personalizedServices.officeWorkers.desc',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800',
    color: 'blue',
    href: '/services/office-workers',
    benefitsKeys: [
      'personalizedServices.officeWorkers.benefit1', // Relieves neck and back pain
      'personalizedServices.officeWorkers.benefit2', // Improves computer posture
      'personalizedServices.officeWorkers.benefit3'  // Reduces work stress
    ],
    resultKey: 'personalizedServices.officeWorkers.result', // More energy, less pain...
    price: 70,
    duration: '1 h'
  },
  {
    id: 'athletes',
    titleKey: 'personalizedServices.athletes', // Спортсмены
    descriptionKey: 'personalizedServices.athletes.desc',
    image: 'https://images.unsplash.com/photo-1517836357463-c25dfe21529b?auto=format&fit=crop&w=800',
    color: 'orange',
    href: '/services/athletes',
    benefitsKeys: [
      'personalizedServices.athletes.benefit1', // Muscle recovery
      'personalizedServices.athletes.benefit2', // Injury prevention
      'personalizedServices.athletes.benefit3'  // Optimize performance
    ],
    resultKey: 'personalizedServices.athletes.result', // Faster recovery...
    price: 70,
    duration: '1 h'
  },
  {
    id: 'artists',
    titleKey: 'personalizedServices.artists',
    descriptionKey: 'personalizedServices.artists.desc',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800',
    color: 'purple',
    href: '/services/artists',
    benefitsKeys: [
        'personalizedServices.artists.benefit1',
        'personalizedServices.artists.benefit2',
        'personalizedServices.artists.benefit3'
    ],
    resultKey: 'personalizedServices.artists.result',
    price: 70,
    duration: '1 h'
  },
  {
    id: 'musicians',
    titleKey: 'personalizedServices.musicians',
    descriptionKey: 'personalizedServices.musicians.desc',
    image: 'https://images.unsplash.com/photo-1511379938549-c06b9bc91f98?auto=format&fit=crop&w=800',
    color: 'amber',
    href: '/services/musicians',
     benefitsKeys: [
        'personalizedServices.musicians.benefit1',
        'personalizedServices.musicians.benefit2',
        'personalizedServices.musicians.benefit3'
    ],
    resultKey: 'personalizedServices.musicians.result',
    price: 70,
    duration: '1 h'
  },
  {
    id: 'students',
    titleKey: 'personalizedServices.students',
    descriptionKey: 'personalizedServices.students.desc',
    color: 'green',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800',
    href: '/services/students',
    benefitsKeys: [
      'personalizedServices.students.benefit1',
      'personalizedServices.students.benefit2',
      'personalizedServices.students.benefit3'
    ],
    resultKey: 'personalizedServices.students.result',
    price: 60,
    duration: '1 h'
  },
  {
    id: 'parents',
    titleKey: 'personalizedServices.parents',
    descriptionKey: 'personalizedServices.parents.desc',
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&w=800',
    href: '/services/parents',
    benefitsKeys: [
      'personalizedServices.parents.benefit1',
      'personalizedServices.parents.benefit2',
      'personalizedServices.parents.benefit3'
    ],
    resultKey: 'personalizedServices.parents.result',
    price: 70,
    duration: '1 h'
  }
];
