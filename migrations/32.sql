-- Create testimonials table for storing client reviews
CREATE TABLE IF NOT EXISTS public.testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  profile_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  image_url text,
  service_type text CHECK (service_type IN ('massage', 'consultation', 'therapy', 'general')),
  verified boolean DEFAULT false,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  metadata jsonb DEFAULT '{}',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS policy: authenticated users can view approved testimonials
CREATE POLICY testimonials_authenticated_select
  ON public.testimonials
  FOR SELECT
  TO authenticated
  USING (status = 'approved' OR auth.uid() = user_id OR auth.uid() IN (
    SELECT id FROM auth.users WHERE role = 'admin'
  ));

-- RLS policy: users can insert their own testimonials
CREATE POLICY testimonials_insert
  ON public.testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id OR auth.uid() IN (
    SELECT id FROM auth.users WHERE role = 'admin'
  ));

-- RLS policy: users can update their own testimonials
CREATE POLICY testimonials_update
  ON public.testimonials
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR auth.uid() IN (
    SELECT id FROM auth.users WHERE role = 'admin'
  ))
  WITH CHECK (auth.uid() = user_id OR auth.uid() IN (
    SELECT id FROM auth.users WHERE role = 'admin'
  ));

-- RLS policy: admins can delete any testimonial
CREATE POLICY testimonials_delete
  ON public.testimonials
  FOR DELETE
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE role = 'admin'
  ));

-- Create index for faster queries
CREATE INDEX idx_testimonials_status ON public.testimonials(status);
CREATE INDEX idx_testimonials_featured ON public.testimonials(featured);
CREATE INDEX idx_testimonials_created_at ON public.testimonials(created_at DESC);
CREATE INDEX idx_testimonials_user_id ON public.testimonials(user_id);
