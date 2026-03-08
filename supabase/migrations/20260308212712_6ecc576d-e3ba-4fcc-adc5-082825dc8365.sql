
-- Create a public storage bucket for project screenshots
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-screenshots', 'project-screenshots', true);

-- Allow anyone to read files
CREATE POLICY "Public read access for project screenshots"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-screenshots');

-- Allow admins to upload files
CREATE POLICY "Admins can upload project screenshots"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'project-screenshots'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);

-- Allow admins to delete files
CREATE POLICY "Admins can delete project screenshots"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'project-screenshots'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);
