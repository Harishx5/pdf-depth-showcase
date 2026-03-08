CREATE POLICY "Admins can delete site content"
ON public.site_content
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));