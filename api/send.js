export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, firstName, lastName, email, companyName, productLink, helpServices, budget, findUs, projectDetails } = req.body;
  const fullName = name || `${firstName || ""}`.trim() || "Anonymous";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Resend API key is missing on the server' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TRD Creative Studio <hi@trdcreativestudio.com>', // Replace with your verified Resend domain once added
        to: 'trdcreativestudio@gmail.com',
        cc: 'daryramadhan23@gmail.com',
        reply_to: email,
        subject: `New Project Inquiry from ${fullName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #1e1e1e;">
            <div style="margin-bottom: 24px;">
              <img src="https://trdcreativestudio.com/bimi-logo.svg" alt="TRD Creative Studio" style="width: 48px; height: 48px; border-radius: 8px;" />
            </div>
            <h2 style="margin-top: 0; font-weight: 600;">New Project Inquiry</h2>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company/Brand:</strong> ${companyName}</p>
            <p><strong>Website/Link:</strong> ${productLink || 'N/A'}</p>
            <p><strong>Services Needed:</strong> ${helpServices.join(', ')}</p>
            <p><strong>Expected Budget:</strong> ${budget}</p>
            <p><strong>How they found us:</strong> ${findUs}</p>
            <p><strong>Project Details:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #eb5503; margin: 0;">
              ${projectDetails ? projectDetails.replace(/\n/g, '<br />') : ''}
            </blockquote>
          </div>
        `,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(response.status).json({ error: data.message || 'Resend API returned an error' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}
