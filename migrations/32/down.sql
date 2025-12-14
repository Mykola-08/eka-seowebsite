-- Down migration for testimonials table
DROP POLICY IF EXISTS testimonials_authenticated_select ON public.testimonials;
DROP POLICY IF EXISTS testimonials_insert ON public.testimonials;
DROP POLICY IF EXISTS testimonials_update ON public.testimonials;
DROP POLICY IF EXISTS testimonials_delete ON public.testimonials;
DROP INDEX IF EXISTS idx_testimonials_status;
DROP INDEX IF EXISTS idx_testimonials_featured;
DROP INDEX IF EXISTS idx_testimonials_created_at;
DROP INDEX IF EXISTS idx_testimonials_user_id;
DROP TABLE IF EXISTS public.testimonials;
