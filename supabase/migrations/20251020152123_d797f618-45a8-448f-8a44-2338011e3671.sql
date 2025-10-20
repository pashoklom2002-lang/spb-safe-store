-- Create table for container rental requests
CREATE TABLE public.rental_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  container_type TEXT NOT NULL CHECK (container_type IN ('20ft', '40ft')),
  rental_period TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rental_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submissions)
CREATE POLICY "Anyone can submit rental requests"
ON public.rental_requests
FOR INSERT
WITH CHECK (true);

-- Only allow reading for authenticated admin users (if needed later)
CREATE POLICY "Only admins can view requests"
ON public.rental_requests
FOR SELECT
USING (false);

-- Create index for faster queries
CREATE INDEX idx_rental_requests_created_at ON public.rental_requests(created_at DESC);