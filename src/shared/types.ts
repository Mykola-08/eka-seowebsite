import { z } from 'zod';

export const OnboardingDataSchema = z.object({
  userType: z.string(),
  goals: z.array(z.string()),
  preferredFeeling: z.string(),
});

export type OnboardingData = z.infer<typeof OnboardingDataSchema>;

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  link: string;
  personalizedLink: string;
  feeling: string;
}
