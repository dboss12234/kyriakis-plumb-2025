import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const { name, email, phone, service, message } = await req.json()

    // Server-side validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, and message are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Sanitize inputs (basic HTML/script tag removal)
    const sanitize = (str: string) => str.replace(/<[^>]*>/g, '').trim()
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      service: sanitize(service || ''),
      message: sanitize(message)
    }

    // Get EmailJS credentials from Supabase secrets
    const serviceId = Deno.env.get('EMAILJS_SERVICE_ID')
    const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID')
    const publicKey = Deno.env.get('EMAILJS_PUBLIC_KEY')

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration')
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Send email using EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          phone: sanitizedData.phone,
          service: sanitizedData.service,
          message: sanitizedData.message,
          to_email: 'kyriakisplumber@gmail.com'
        }
      })
    })

    if (!emailResponse.ok) {
      console.error('EmailJS API error:', await emailResponse.text())
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})